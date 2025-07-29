import Hero from '../components/Layouts/Hero';
import ModernServices from '../components/Layouts/ModernServices';
import ModernProducts from '../components/Layouts/ModernProducts';
import Footer from '../components/Layouts/Footer';
import FAQ from '../components/Layouts/FAQ';
import AboutUs from '../components/Layouts/AboutUs';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <ModernServices />
            <ModernProducts />
            <FAQ />
            <AboutUs />
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Index;
