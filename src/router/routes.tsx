import { lazy } from 'react';
import ExploreMyStory from '../components/Layouts/mystroy';
import ExperienceTimeline from '../components/Layouts/experince';
import Portfolio from '../components/Layouts/myPortfolio';
import ContactMe from '../components/Layouts/contact';
import AboutUs from '../components/Layouts/AboutUs';
const Index = lazy(() => import('../pages/Index'));

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
];

export { routes };
