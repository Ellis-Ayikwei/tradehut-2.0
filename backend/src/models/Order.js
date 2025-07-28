import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        unique: true,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Customer is required']
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity must be at least 1']
        },
        price: {
            type: Number,
            required: true,
            min: [0, 'Price cannot be negative']
        },
        total: {
            type: Number,
            required: true,
            min: [0, 'Total cannot be negative']
        }
    }],
    billing: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: {
            street: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zipCode: String,
            country: { type: String, default: 'Ghana' }
        }
    },
    shipping: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        address: {
            street: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zipCode: String,
            country: { type: String, default: 'Ghana' }
        },
        method: {
            type: String,
            enum: ['pickup', 'delivery', 'courier'],
            default: 'pickup'
        },
        cost: {
            type: Number,
            default: 0,
            min: [0, 'Shipping cost cannot be negative']
        }
    },
    payment: {
        method: {
            type: String,
            enum: ['cash', 'card', 'mobile-money', 'bank-transfer'],
            required: true
        },
        status: {
            type: String,
            enum: ['pending', 'processing', 'completed', 'failed', 'refunded'],
            default: 'pending'
        },
        transactionId: String,
        paidAt: Date,
        refundedAt: Date,
        refundAmount: {
            type: Number,
            default: 0,
            min: [0, 'Refund amount cannot be negative']
        }
    },
    totals: {
        subtotal: {
            type: Number,
            required: true,
            min: [0, 'Subtotal cannot be negative']
        },
        shipping: {
            type: Number,
            default: 0,
            min: [0, 'Shipping cannot be negative']
        },
        tax: {
            type: Number,
            default: 0,
            min: [0, 'Tax cannot be negative']
        },
        discount: {
            type: Number,
            default: 0,
            min: [0, 'Discount cannot be negative']
        },
        total: {
            type: Number,
            required: true,
            min: [0, 'Total cannot be negative']
        }
    },
    status: {
        type: String,
        enum: [
            'pending',
            'confirmed',
            'processing',
            'shipped',
            'delivered',
            'cancelled',
            'refunded',
            'returned'
        ],
        default: 'pending'
    },
    notes: String,
    internalNotes: String,
    timeline: [{
        status: String,
        description: String,
        timestamp: {
            type: Date,
            default: Date.now
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    tracking: {
        carrier: String,
        trackingNumber: String,
        trackingUrl: String,
        shippedAt: Date,
        deliveredAt: Date,
        estimatedDelivery: Date
    },
    discount: {
        code: String,
        type: {
            type: String,
            enum: ['percentage', 'fixed'],
            default: 'fixed'
        },
        value: {
            type: Number,
            default: 0,
            min: [0, 'Discount value cannot be negative']
        },
        amount: {
            type: Number,
            default: 0,
            min: [0, 'Discount amount cannot be negative']
        }
    },
    refund: {
        reason: String,
        amount: {
            type: Number,
            default: 0,
            min: [0, 'Refund amount cannot be negative']
        },
        processedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        processedAt: Date
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Indexes for better performance
orderSchema.index({ orderNumber: 1 });
orderSchema.index({ customer: 1 });
orderSchema.index({ status: 1 });
orderSchema.index({ createdAt: -1 });
orderSchema.index({ 'payment.status': 1 });

// Virtual for customer full name
orderSchema.virtual('customerName').get(function() {
    return `${this.billing.firstName} ${this.billing.lastName}`;
});

// Virtual for order age
orderSchema.virtual('orderAge').get(function() {
    const diffTime = Math.abs(new Date() - this.createdAt);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
});

// Pre-save middleware to generate order number
orderSchema.pre('save', async function(next) {
    if (this.isNew) {
        const date = new Date();
        const year = date.getFullYear().toString().slice(-2);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        
        // Find the last order number for this month
        const lastOrder = await this.constructor.findOne({
            orderNumber: new RegExp(`^ORD${year}${month}`)
        }).sort({ orderNumber: -1 });
        
        let sequence = 1;
        if (lastOrder) {
            const lastSequence = parseInt(lastOrder.orderNumber.slice(-4));
            sequence = lastSequence + 1;
        }
        
        this.orderNumber = `ORD${year}${month}${sequence.toString().padStart(4, '0')}`;
    }
    next();
});

// Pre-save middleware to calculate totals
orderSchema.pre('save', function(next) {
    // Calculate item totals
    this.items.forEach(item => {
        item.total = item.quantity * item.price;
    });
    
    // Calculate subtotal
    this.totals.subtotal = this.items.reduce((sum, item) => sum + item.total, 0);
    
    // Calculate total
    this.totals.total = this.totals.subtotal + this.totals.shipping + this.totals.tax - this.totals.discount;
    
    next();
});

const Order = mongoose.model('Order', orderSchema);

export default Order;