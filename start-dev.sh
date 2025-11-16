#!/bin/bash

# TradeHut Development Startup Script
echo "🏪 Starting TradeHut Development Environment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if a port is in use
port_in_use() {
    lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null
}

# Function to wait for a service
wait_for_service() {
    local host=$1
    local port=$2
    local service=$3
    local max_attempts=30
    local attempt=1
    
    echo -e "${YELLOW}⏳ Waiting for $service to be ready...${NC}"
    
    while [ $attempt -le $max_attempts ]; do
        if nc -z $host $port 2>/dev/null; then
            echo -e "${GREEN}✅ $service is ready!${NC}"
            return 0
        fi
        
        echo -e "${YELLOW}⏳ Attempt $attempt/$max_attempts: $service not ready yet...${NC}"
        sleep 2
        ((attempt++))
    done
    
    echo -e "${RED}❌ $service failed to start after $max_attempts attempts${NC}"
    return 1
}

# Check prerequisites
echo -e "${BLUE}📋 Checking prerequisites...${NC}"

if ! command_exists node; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 16+${NC}"
    exit 1
fi

if ! command_exists npm; then
    echo -e "${RED}❌ npm is not installed. Please install npm${NC}"
    exit 1
fi

if ! command_exists docker; then
    echo -e "${YELLOW}⚠️  Docker is not installed. Some features may not work.${NC}"
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo -e "${RED}❌ Node.js version 16+ is required. Current version: $(node -v)${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Prerequisites check passed${NC}"

# Setup environment variables
if [ ! -f "backend/.env" ]; then
    echo -e "${YELLOW}⚠️  .env file not found in backend directory. Creating from template...${NC}"
    cp backend/.env.example backend/.env
    echo -e "${GREEN}✅ Created backend/.env file. Please update it with your configuration.${NC}"
fi

# Check if ports are available
if port_in_use 3000; then
    echo -e "${YELLOW}⚠️  Port 3000 is already in use. Frontend may not start.${NC}"
fi

if port_in_use 5000; then
    echo -e "${YELLOW}⚠️  Port 5000 is already in use. Backend may not start.${NC}"
fi

if port_in_use 27017; then
    echo -e "${GREEN}✅ MongoDB appears to be running on port 27017${NC}"
else
    echo -e "${YELLOW}⚠️  MongoDB is not running. Attempting to start with Docker...${NC}"
    
    if command_exists docker; then
        # Start MongoDB with Docker
        docker run -d \
            --name tradehut-mongodb \
            -p 27017:27017 \
            -e MONGO_INITDB_ROOT_USERNAME=admin \
            -e MONGO_INITDB_ROOT_PASSWORD=password123 \
            -e MONGO_INITDB_DATABASE=tradehut_db \
            mongo:7.0 2>/dev/null || echo -e "${YELLOW}ℹ️  MongoDB container may already exist${NC}"
        
        # Wait for MongoDB
        wait_for_service localhost 27017 "MongoDB"
        
        # Update connection string
        export MONGODB_URI="mongodb://admin:password123@localhost:27017/tradehut_db?authSource=admin"
        echo -e "${GREEN}✅ MongoDB started with Docker${NC}"
    else
        echo -e "${RED}❌ MongoDB is not running and Docker is not available.${NC}"
        echo -e "${YELLOW}💡 Please install and start MongoDB manually, or install Docker.${NC}"
        exit 1
    fi
fi

# Install dependencies
echo -e "${BLUE}📦 Installing dependencies...${NC}"

# Backend dependencies
echo -e "${YELLOW}📦 Installing backend dependencies...${NC}"
cd backend
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install backend dependencies${NC}"
    exit 1
fi
cd ..

# Frontend dependencies  
echo -e "${YELLOW}📦 Installing frontend dependencies...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install frontend dependencies${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Dependencies installed successfully${NC}"

# Start services
echo -e "${BLUE}🚀 Starting services...${NC}"

# Start backend
echo -e "${YELLOW}🔧 Starting backend server...${NC}"
cd backend
npm run dev &
BACKEND_PID=$!
cd ..

# Wait for backend to be ready
wait_for_service localhost 5000 "Backend API"

# Create admin user
echo -e "${YELLOW}👑 Creating admin user...${NC}"
curl -X POST http://localhost:5000/api/auth/create-admin \
    -H "Content-Type: application/json" \
    -d '{"email": "admin@tradehut.com", "password": "Admin123!"}' \
    -s > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Admin user created successfully${NC}"
else
    echo -e "${YELLOW}ℹ️  Admin user may already exist${NC}"
fi

# Start frontend
echo -e "${YELLOW}⚛️  Starting frontend development server...${NC}"
npm run dev &
FRONTEND_PID=$!

# Wait for frontend
wait_for_service localhost 3000 "Frontend"

# Display information
echo ""
echo -e "${GREEN}🎉 TradeHut Development Environment is ready!${NC}"
echo ""
echo -e "${BLUE}📍 Application URLs:${NC}"
echo -e "   🌐 Frontend:  ${GREEN}http://localhost:3000${NC}"
echo -e "   🔧 Backend:   ${GREEN}http://localhost:5000${NC}"
echo -e "   📚 API Docs:  ${GREEN}http://localhost:5000/api/docs${NC}"
echo -e "   ❤️  Health:   ${GREEN}http://localhost:5000/health${NC}"
echo -e "   👑 Admin:     ${GREEN}http://localhost:3000/admin${NC}"
echo ""
echo -e "${BLUE}🔐 Admin Credentials:${NC}"
echo -e "   📧 Email:     ${YELLOW}admin@tradehut.com${NC}"
echo -e "   🔑 Password:  ${YELLOW}Admin123!${NC}"
echo ""
echo -e "${BLUE}🗄️  Database:${NC}"
echo -e "   🍃 MongoDB:   ${GREEN}mongodb://localhost:27017${NC}"
echo ""
echo -e "${YELLOW}⚠️  Press Ctrl+C to stop all services${NC}"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo -e "${YELLOW}🛑 Stopping services...${NC}"
    
    # Kill background processes
    if [ ! -z "$BACKEND_PID" ]; then
        kill $BACKEND_PID 2>/dev/null
    fi
    
    if [ ! -z "$FRONTEND_PID" ]; then
        kill $FRONTEND_PID 2>/dev/null
    fi
    
    # Stop Docker containers if we started them
    if command_exists docker; then
        docker stop tradehut-mongodb 2>/dev/null || true
        docker rm tradehut-mongodb 2>/dev/null || true
    fi
    
    echo -e "${GREEN}✅ Cleanup completed${NC}"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Wait for user input
wait