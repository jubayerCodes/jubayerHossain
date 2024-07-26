import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { CircularProgress } from '@mui/material';

const Projects = ({ className }) => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])



    return (
        <section className={`section ${className}`} id='portfolioSection'>
            <div className="my-container">
                <SectionTitle bgTitle={'portfolio'} title={'featured works'} />

                {
                    projects.length === 0 ?
                        <div className='flex justify-center items-center'>
                            <CircularProgress className='mt-12' />
                        </div>
                        :
                        <></>
                }

                <div className='mt-12 xl:mt-20 grid grid-cols-1 xl:grid-cols-3 justify-between items-start gap-10'>
                    {
                        projects?.map(project => <ProjectCard key={project.id} project={project} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;