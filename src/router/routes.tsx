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
const SoftwareDevelopment = lazy(() => import('../pages/services/SoftwareDevelopment'));
const TechSupport = lazy(() => import('../pages/services/TechSupport'));
const AllProjects = lazy(() => import('../pages/AllProjects'));

// Footer Pages
const Team = lazy(() => import('../pages/Team'));
const Careers = lazy(() => import('../pages/Careers'));
const Press = lazy(() => import('../pages/Press'));
const Help = lazy(() => import('../pages/Help'));
const Contact = lazy(() => import('../pages/Contact'));
const Track = lazy(() => import('../pages/Track'));
const Warranty = lazy(() => import('../pages/Warranty'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Terms = lazy(() => import('../pages/Terms'));
const Cookies = lazy(() => import('../pages/Cookies'));
const Refunds = lazy(() => import('../pages/Refunds'));

// Admin Pages
const AdminProducts = lazy(() => import('../pages/admin/Products'));
const AdminProductView = lazy(() => import('../pages/admin/ProductView'));
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
        path: '/services/software-development',
        element: <SoftwareDevelopment />,
        layout: 'blank',
    },
    {
        path: '/services/tech-support',
        element: <TechSupport />,
        layout: 'blank',
    },
    {
        path: '/projects',
        element: <AllProjects />,
        layout: 'blank',
    },
    // Footer Pages
    {
        path: '/team',
        element: <Team />,
        layout: 'blank',
    },
    {
        path: '/careers',
        element: <Careers />,
        layout: 'blank',
    },
    {
        path: '/press',
        element: <Press />,
        layout: 'blank',
    },
    {
        path: '/help',
        element: <Help />,
        layout: 'blank',
    },
    {
        path: '/contact',
        element: <Contact />,
        layout: 'blank',
    },
    {
        path: '/track',
        element: <Track />,
        layout: 'blank',
    },
    {
        path: '/warranty',
        element: <Warranty />,
        layout: 'blank',
    },
    {
        path: '/privacy',
        element: <Privacy />,
        layout: 'blank',
    },
    {
        path: '/terms',
        element: <Terms />,
        layout: 'blank',
    },
    {
        path: '/cookies',
        element: <Cookies />,
        layout: 'blank',
    },
    {
        path: '/refunds',
        element: <Refunds />,
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
        path: '/admin/products/view/:id',
        element: <AdminProductView />,
        layout: 'blank',
    },
    {
        path: '/admin/products/edit/:id',
        element: <AdminProducts />, // You can create a separate EditProduct component later
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
        path: '/admin/repairs/view/:id',
        element: <AdminRepairs />, // You can create a separate RepairView component later
        layout: 'blank',
    },
    {
        path: '/admin/repairs/edit/:id',
        element: <AdminRepairs />, // You can create a separate EditRepair component later
        layout: 'blank',
    },
    {
        path: '/admin/orders',
        element: <AdminOrders />,
        layout: 'blank',
    },
    {
        path: '/admin/orders/view/:id',
        element: <AdminOrders />, // You can create a separate OrderView component later
        layout: 'blank',
    },
    {
        path: '/admin/users',
        element: <AdminUsers />,
        layout: 'blank',
    },
    {
        path: '/admin/users/view/:id',
        element: <AdminUsers />, // You can create a separate UserView component later
        layout: 'blank',
    },
    {
        path: '/admin/users/edit/:id',
        element: <AdminUsers />, // You can create a separate EditUser component later
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
