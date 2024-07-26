
import React from 'react';
import SingleSkill from './SingleSkill/SingleSkill';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Skills = () => {
    return (
        <section className='section'>
            <div className="my-container">
                <SectionTitle bgTitle={'skills'} title={'skills'} />

                <div className='flex md:flex-row flex-col justify-between md:items-center mt-12 xl:mt-32 gap-5 xl:gap-20'>
                    <div className='flex flex-col gap-5 flex-1'>
                        <SingleSkill skill={'React Js'} percentage={85} />
                        <SingleSkill skill={'Javascript'} percentage={75} />
                        <SingleSkill skill={'Node Js'} percentage={70} />
                        <SingleSkill skill={'MongoDB'} percentage={73} />
                        <SingleSkill skill={'Express Js'} percentage={80} />
                    </div>
                    <div className='flex flex-col gap-5 flex-1'>
                        <SingleSkill skill={'Next Js'} percentage={75} />
                        <SingleSkill skill={'Firebase'} percentage={85} />
                        <SingleSkill skill={'Bootstrap'} percentage={85} />
                        <SingleSkill skill={'Tailwind CSS'} percentage={88} />
                        <SingleSkill skill={'Material UI'} percentage={73} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;