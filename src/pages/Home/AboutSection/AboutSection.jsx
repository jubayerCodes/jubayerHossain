

import myPic from '../../../assets/images/DP.png'
import { Divider } from '@mui/material';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const AboutSection = () => {
    return (
        <section className='section bg-[var(--bg-secondary)]' id='aboutSection'>
            <div className="my-container flex justify-between items-stretch md:items-center flex-col md:flex-row gap-10 md:gap-0">
                <div className='w-full md:w-5/12'>
                    <img src={myPic} alt='' className='w-full rounded-full' />
                </div>
                <div className='w-full md:w-7/12 md:pl-12'>
                    <SectionTitle bgTitle={'about'} title={'jubayer hossain'} />
                    <p className='text-[var(--text-color)] mt-5 italic'>Front End Developer</p>
                    <Divider className='pt-8 divider' />
                    <div className='pt-7'>
                        <p className='section-desc mb-4'>
                            Hey! This is Jubayer Hossain, MERN Stack based Front End Developer. Aspired to be your best deal ever.
                        </p>
                        <p className="text-[var(--text-color)] text-[15px]">
                            I am a Front End Developer. Having a solid foundation on MERN Stack technologies like React, Next Js, as well as Mongo DB. Being a Next Gen Developer, I am motivated to get by with upcoming technologies. I love to learn things and implement them in real life problem solving projects. Having 2 years of experience in professional field, I love to work with different teams.
                        </p>
                        <div className='flex flex-col-reverse sm:flex-row justify-start gap-5 items-stretch mt-5'>
                            <AnchorLink href='#portfolioSection'>
                                <button className="my-btn">My works</button>
                            </AnchorLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;