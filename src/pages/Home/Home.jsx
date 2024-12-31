import Hero from './Hero/Hero';
import AboutSection from './AboutSection/AboutSection';
import Skills from './Skills/Skills';
import ContactSection from '../shared/ContactSection/ContactSection';
import Projects from '../shared/Projects/Projects';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutSection />
            <Skills />
            <Projects className={'bg-[var(--bg-secondary)]'} />
            <ContactSection />
        </>
    );
};

export default Home;