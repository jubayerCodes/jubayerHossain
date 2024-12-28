import { FaGithub } from "react-icons/fa";
import { FiLink2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import './ProjectCard.css'

const ProjectCard = ({ project }) => {

    const { title, featuredImg, projectType, technologies, links } = project

    const { live, sourceCode } = links

    const modifiedTechnologies = technologies.reduce((previousValue, currentValue) => previousValue + currentValue + ' | ', '').slice(0, -2)

    return (
        <div className='project-card bg-white'>
            <div className='project-img w-full h-[350px] bg-cover' style={{ backgroundImage: `url(${featuredImg})` }}>

                <div className='project-info w-full h-full flex flex-col justify-center items-center gap-5 p-5 bg-[#000000d0] rounded'>
                    <Link to={live}>
                        <h3 className='text-white text-lg mb-3 font-semibold'>{title} ({projectType})</h3>
                    </Link>

                    <p className='text-sm text-white text-center'>
                        {modifiedTechnologies}
                    </p>

                    <div className='mt-3 flex justify-start items-center gap-2'>
                        <Link to={live} target='_blank'>
                            <button className=" px-3 py-1 hover:text-black bg-transparent hover:bg-white duration-300 text-white border border-white text-sm font-medium uppercase flex gap-2 items-center">
                            <FiLink2 /> Visit
                            </button>
                        </Link>
                        <Link to={sourceCode} target='_blank'>
                            <button className=" px-3 py-1 hover:text-black bg-transparent hover:bg-white duration-300 text-white border border-white text-sm font-medium uppercase flex gap-2 items-center">
                            <FaGithub />Source
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;