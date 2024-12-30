import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks/SocialLinks';

const MainLayout = () => {
    return (
        <>
            <Header />
            <SocialLinks />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;