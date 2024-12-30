
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SocialLinks.css'

const SocialLinks = () => {
    return (
        <div className='links-container z-50 p-4 rounded bg-black fixed bottom-5 right-5 hidden lg:flex flex-col justify-start items-center gap-3'>
            <Link target='_blank' to={'https://www.linkedin.com/in/jubayer-hossain-6b866723b/'}>
                <button className='text-base text-white border  rounded-full p-3 hover:bg-white hover:text-black duration-200'>
                    <FaLinkedinIn />
                </button>
            </Link>
            <Link target='_blank' to={'https://github.com/jubayerCodes'}>
                <button className='text-base text-white border rounded-full p-3 hover:bg-white hover:text-black duration-200'>
                    <FaGithub />
                </button>
            </Link>
            <Link target='_blank' to={'https://www.facebook.com/jhs.saif/'}>
                <button className='text-base text-white border rounded-full p-3 hover:bg-white hover:text-black duration-200'>
                    <FaFacebookF />
                </button>
            </Link>
        </div>
    );
};

export default SocialLinks;