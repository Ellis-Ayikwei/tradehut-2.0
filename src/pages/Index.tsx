import Hero from '../components/Layouts/Hero';
import ModernProducts from '../components/Layouts/ModernProducts';
import Footer from '../components/Layouts/Footer';
import FAQ from '../components/Layouts/FAQ';
import AboutUs from '../components/Layouts/AboutUs';
import Testimonials from '../components/Layouts/Testimonials';
import ToolsAndSoftware from '../components/Layouts/ToolsAndSoftware';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            {/* <ModernProducts /> */}
            <Testimonials />
            <ToolsAndSoftware />
            <FAQ />
            <AboutUs />
            <ScrollToTop />
        </div>
    );
};

export default Index;
