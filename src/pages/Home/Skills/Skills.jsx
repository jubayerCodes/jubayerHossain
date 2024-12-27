
import React from 'react';
import SingleSkill from './SingleSkill/SingleSkill';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Skills = () => {
    return (
        <section className='section'>
            <div className="my-container">
                <SectionTitle bgTitle={'skills'} title={'skills'} />

                <div className='grid grid-cols-5 justify-between md:items-center mt-12 xl:mt-32 gap-5 xl:gap-10'>
                        <SingleSkill />
                        <SingleSkill />
                        <SingleSkill />
                        <SingleSkill />
                        <SingleSkill />
                        <SingleSkill />
                        <SingleSkill />
                        <SingleSkill />
                        <SingleSkill />
                        <SingleSkill />
                </div>
            </div>
        </section>
    );
};

export default Skills;