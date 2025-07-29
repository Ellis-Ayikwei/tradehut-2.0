import { lazy } from 'react';
import ExploreMyStory from '../components/Layouts/mystroy';
import ExperienceTimeline from '../components/Layouts/experince';
import Portfolio from '../components/Layouts/myPortfolio';
import ContactMe from '../components/Layouts/contact';
import AboutUs from '../components/Layouts/AboutUs';
import AdminDashboard from '../components/Admin/AdminDashboard';
const Index = lazy(() => import('../pages/Index'));

// Service Pages
const DeviceRepair = lazy(() => import('../pages/services/DeviceRepair'));
const ITSolutions = lazy(() => import('../pages/services/ITSolutions'));
const WebDevelopment = lazy(() => import('../pages/services/WebDevelopment'));
const TechSupport = lazy(() => import('../pages/services/TechSupport'));

// Admin Pages
const AdminProducts = lazy(() => import('../pages/admin/Products'));
const AdminRepairs = lazy(() => import('../pages/admin/Repairs'));
const AdminOrders = lazy(() => import('../pages/admin/Orders'));
const AdminUsers = lazy(() => import('../pages/admin/Users'));
const AdminAnalytics = lazy(() => import('../pages/admin/Analytics'));
const AdminSettings = lazy(() => import('../pages/admin/Settings'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Index />,
        layout: 'blank',
    },
    {
        path: '/aboutUs',
        element: <AboutUs />,
        layout: 'blank',
    },
    {
        path: '/mystory',
        element: <ExploreMyStory />,
        layout: 'blank',
    },
    {
        path: '/myexperience',
        element: <ExperienceTimeline />,
        layout: 'blank',
    },
    {
        path: '/myportfolio',
        element: <Portfolio />,
        layout: 'blank',
    },
    {
        path: '/contactme',
        element: <ContactMe />,
        layout: 'blank',
    },
    {
        path: '/admin',
        element: <AdminDashboard />,
        layout: 'blank',
    },
    // Service Pages
    {
        path: '/services/device-repair',
        element: <DeviceRepair />,
        layout: 'blank',
    },
    {
        path: '/services/it-solutions',
        element: <ITSolutions />,
        layout: 'blank',
    },
    {
        path: '/services/web-development',
        element: <WebDevelopment />,
        layout: 'blank',
    },
    {
        path: '/services/tech-support',
        element: <TechSupport />,
        layout: 'blank',
    },
    // Admin Pages
    {
        path: '/admin/products',
        element: <AdminProducts />,
        layout: 'blank',
    },
    {
        path: '/admin/products/new',
        element: <AdminProducts />, // You can create a separate AddProduct component later
        layout: 'blank',
    },
    {
        path: '/admin/repairs',
        element: <AdminRepairs />,
        layout: 'blank',
    },
    {
        path: '/admin/repairs/new',
        element: <AdminRepairs />, // You can create a separate AddRepair component later
        layout: 'blank',
    },
    {
        path: '/admin/orders',
        element: <AdminOrders />,
        layout: 'blank',
    },
    {
        path: '/admin/users',
        element: <AdminUsers />,
        layout: 'blank',
    },
    {
        path: '/admin/analytics',
        element: <AdminAnalytics />,
        layout: 'blank',
    },
    {
        path: '/admin/settings',
        element: <AdminSettings />,
        layout: 'blank',
    },
];

export { routes };
