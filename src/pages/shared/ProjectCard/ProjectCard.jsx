import { Link } from "react-router-dom";
import React from 'react';

const ProjectCard = ({ project }) => {

    const { title, featuredImg, projectType, technologies, links } = project

    const { live, sourceCode } = links

    const modifiedTechnologies = technologies.reduce((previousValue, currentValue) => previousValue + currentValue + ' | ', '').slice(0, -2)

    return (
        <div className='project-card bg-white'>
            <Link to={live}>
                <div className='project-img w-full h-[350px] overflow-hidden bg-cover bg-top hover:bg-bottom duration-[4s]' style={{ backgroundImage: `url(${featuredImg})` }}>
                </div>
            </Link>
            <div className='p-5 bg-white border-t'>
                <Link to={live}>
                    <h3 className='text-lg mb-3 font-semibold'>{title} ({projectType})</h3>
                </Link>

                <p className='text-sm h-[60px]'>
                    Technologies: {modifiedTechnologies}
                </p>

                <div className='mt-3 flex justify-start items-center gap-2'>
                    <Link to={live} target='_blank'>
                        <button className="px-3 py-1 hover:bg-black bg-transparent duration-300 text-black hover:text-white border border-black text-base uppercase;">
                            Live Site
                        </button>
                    </Link>
                    <Link to={sourceCode} target='_blank'>
                        <button className="px-3 py-1 hover:bg-black bg-transparent duration-300 text-black hover:text-white border border-black text-base uppercase;">
                            Source Code
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;