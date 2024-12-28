

import myPic from '../../../assets/images/DP.jpg'
import { Divider } from '@mui/material';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const AboutSection = () => {
    return (
        <section className='section bg-[#f8f9fa]' id='aboutSection'>
            <div className="my-container flex justify-between items-stretch xl:items-center flex-col xl:flex-row gap-10 xl:gap-0">
                <div className='w-full xl:w-5/12'>
                    <img src={myPic} alt='' className='w-full rounded-full' />
                </div>
                <div className='w-full xl:w-7/12 xl:pl-12'>
                    <SectionTitle bgTitle={'about'} title={'jubayer hossain'} />
                    <p className='text-[var(--text-color)] mt-5 italic'>Creative Web Developer</p>
                    <Divider className='pt-8' />
                    <div className='pt-7'>
                        <p className='section-desc mb-4'>
                            Hello everybody! My name is Jubayer Hossain. I am a Web Developer, and I`&apos;`m very passionate and dedicated to my work.
                        </p>
                        <p className="section-desc">
                            With 2 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
                        </p>
                        <AnchorLink href='#portfolioSection'>
                            <button className="my-btn mt-5">My works</button>
                        </AnchorLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;