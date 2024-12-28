

import SingleSkill from './SingleSkill/SingleSkill';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import reactLogo from '../../../assets/images/skills/react.png'
import nextLogo from '../../../assets/images/skills/nextjs.png'
import jsLogo from '../../../assets/images/skills/js.png'
import nodeLogo from '../../../assets/images/skills/node-js.png'
import mongodbLogo from '../../../assets/images/skills/mongodb.png'
import expressLogo from '../../../assets/images/skills/express-js.png'
import firebaseLogo from '../../../assets/images/skills/firebase.png'
import tailwindLogo from '../../../assets/images/skills/tailwind-css.png'
import materialLogo from '../../../assets/images/skills/material-ui.png'
import bootstrapLogo from '../../../assets/images/skills/bootstrap.png'

const Skills = () => {

    const skills = [
        {
            name: 'React JS',
            logo: reactLogo
        },
        {
            name: 'Next JS',
            logo: nextLogo
        },
        {
            name: 'Javascript',
            logo: jsLogo
        },
        {
            name: 'Node JS',
            logo: nodeLogo
        },
        {
            name: 'Mongo DB',
            logo: mongodbLogo
        },
        {
            name: 'Express JS',
            logo: expressLogo
        },
        {
            name: 'Firebase',
            logo: firebaseLogo
        },
        {
            name: 'Tailwind CSS',
            logo: tailwindLogo
        },
        {
            name: 'Material UI',
            logo: materialLogo
        },
        {
            name: 'Bootstrap',
            logo: bootstrapLogo
        },
    ]


    return (
        <section className='section'>
            <div className="my-container">
                <SectionTitle bgTitle={'skills'} title={'skills'} />

                <div className='grid grid-cols-5 justify-between md:items-center mt-12 xl:mt-32 gap-5 xl:gap-10'>
                    {
                        skills?.map((skill, idx) => <SingleSkill skill={skill} key={idx} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;