import { PropsWithChildren } from 'react';
import App from '../../App';
import Footer from './Footer';
import ModernNavbar from './ModernNavbar';
const BlankLayout = ({ children }: PropsWithChildren) => {
    return (
        <App>
            <ModernNavbar />
            <div className="bg-black">{children}</div>
            <Footer />
        </App>
    );
};

export default BlankLayout;
