import { PropsWithChildren } from 'react';
import App from '../../App';
import Header from './Header';
import Footer from './Footer';
const BlankLayout = ({ children }: PropsWithChildren) => {
    return (
        <App>
            <Header />
            <div className="text-black dark:text-white-dark h-full sm:p-2">{children} </div>
            <Footer />
        </App>
    );
};

export default BlankLayout;
