import Hero from '../components/Layouts/Hero';
import FAQ from '../components/Layouts/FAQ';
import AboutUs from '../components/Layouts/AboutUs';
import Testimonials from '../components/Layouts/Testimonials';
import ToolsAndSoftware from '../components/Layouts/ToolsAndSoftware';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <AboutUs />
            <ToolsAndSoftware />
            <Testimonials />
            <FAQ />
            <ScrollToTop />
        </div>
    );
};

export default Index;
