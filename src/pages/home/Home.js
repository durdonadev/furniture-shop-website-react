import { AboutUs } from "./sections/about-us/AboutUs";
import { Designs } from "./sections/designs/Designs";
import { Features } from "./sections/features/Features";
import { Footer } from "./sections/footer/Footer";
import { Hero } from "./sections/hero/Hero";
import { Process } from "./sections/process/Process";
import { Subscribe } from "./sections/subscribe/Subscribe";
import { Testimonials } from "./sections/testimonials/Testimonials";
import { TopNavigation } from "./sections/top-navigation/TopNavigation";

const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Features />
            <Designs />
            <Process />
            <AboutUs />
            <Testimonials />
            <Subscribe />
            <Footer />
        </>
    );
};

export { Home };
