
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import { Drawer, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { FaBars, FaFacebookF, FaGithub, FaLinkedinIn, FaTimes } from "react-icons/fa";
import './Header.css'
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {

    const [scrolled, setScrolled] = useState(false)

    const [rightDrawer, setRightDrawer] = useState(false)

    const [mode, setMode] = useState(() => localStorage.getItem("theme") || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))


    const updateThemeMode = (theme) => {
        setMode(theme)
        localStorage.setItem("theme", theme)
    }


    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll);

        document.documentElement.classList.toggle(
            'dark',
            localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        )

        return () => window.removeEventListener('scroll', handleScroll)
    }, [mode])


    const toggleRightDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setRightDrawer(open);
    };


    const closeRightDrawer = (e) => {
        setRightDrawer(false)
    }

    return (
        <header className={`px-5 sticky top-0 left-0 mb-[-76px] bg-[var(--bg)] z-50 ${scrolled ? 'header-scrolled' : ''}`}>
            <div className="my-container py-5 flex justify-between items-center">
                <div>
                    <a href={'#'}>
                        <span className="text-3xl font-bold uppercase">Jubayer</span>
                    </a>
                </div>
                <div className="flex items-center gap-3">
                    <IconButton className="toggle" onClick={() => updateThemeMode(mode === 'light' ? 'dark' : 'light')}>
                        {mode === 'light' ? <MdLightMode /> : <MdDarkMode />}
                    </IconButton>
                    <FaBars onClick={toggleRightDrawer(true)} className="xl:hidden text-[26px]" />
                    <ul className="xl:flex justify-end gap-5 hidden">
                        <li>
                            <ActiveLink className="list-item" href={'#home'}>
                                Home
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink className="list-item" href={'#aboutSection'}>
                                About
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink className="list-item" href={'#portfolioSection'}>
                                Portfolio
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink className="list-item" href={'#contactSection'}>
                                Contact
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>

            <Drawer
                anchor={'right'}
                open={rightDrawer}
                onClose={toggleRightDrawer(false)}
            >
                <div className='menu-drawer h-full w-screen bg-black py-5 '>
                    <div className='w-full flex justify-end mb-5'>
                        <FaTimes onClick={toggleRightDrawer(false)} className='text-white mr-5 text-[20px]' />
                    </div>
                    <ul className='text-white flex justify-start items-stretch flex-col w-full gap-5'>
                        <li onClick={closeRightDrawer} className="header-li inline-block hover:bg-white hover:text-black">
                            <ActiveLink className="list-item" href={'#home'}>
                                Home
                            </ActiveLink>
                        </li>
                        <li onClick={closeRightDrawer} className="header-li inline-block hover:bg-white hover:text-black">
                            <ActiveLink className="list-item" href={'#aboutSection'}>
                                About
                            </ActiveLink>
                        </li>
                        <li onClick={closeRightDrawer} className="header-li inline-block hover:bg-white hover:text-black">
                            <ActiveLink className="list-item" href={'#portfolioSection'}>
                                Portfolio
                            </ActiveLink>
                        </li>
                        <li onClick={closeRightDrawer} className="header-li inline-block hover:bg-white hover:text-black">
                            <ActiveLink className="list-item" href={'#contactSection'}>
                                Contact
                            </ActiveLink>
                        </li>
                    </ul>
                    <div className='flex justify-start items-center gap-3 pl-5 pt-5'>
                        <Link target='_blank' to={'https://www.linkedin.com/in/jubayer-hossain-6b866723b/'}>
                            <button className='text-white border rounded-full p-2 hover:bg-white hover:text-black duration-200'>
                                <FaLinkedinIn />
                            </button>
                        </Link>
                        <Link target='_blank' to={'https://github.com/jubayerCodes'}>
                            <button className='text-white border rounded-full p-2 hover:bg-white hover:text-black duration-200'>
                                <FaGithub />
                            </button>
                        </Link>
                        <Link target='_blank' to={'https://www.facebook.com/jhs.saif/'}>
                            <button className='text-white border rounded-full p-2 hover:bg-white hover:text-black duration-200'>
                                <FaFacebookF />
                            </button>
                        </Link>
                    </div>
                </div>
            </Drawer>
        </header>
    );
}
export default Header;