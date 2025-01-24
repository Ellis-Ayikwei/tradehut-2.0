import Hero from '../components/Layouts/Hero';
import Services from '../components/Layouts/Services';
import Footer from '../components/Layouts/Footer';
import Products from '../components/Layouts/Products';
import FAQ from '../components/Layouts/FAQ';
import AboutUs from '../components/Layouts/AboutUs';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Products />
            <FAQ />
            <AboutUs />
            <ScrollToTop />
            {/* 
            <ExploreMyStory />
            <ExperienceTimeline />
            <Portfolio /> */}
        </div>
    );
};

export default Index;
