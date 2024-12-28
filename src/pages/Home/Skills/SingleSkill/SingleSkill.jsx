
import './SingleSkill.css'

const SingleSkill = ({ skill }) => {

    const { name, logo } = skill

    return (
        <div className=' bg-[#000] py-2 px-5 flex justify-start items-center gap-3 rounded-lg h-16'>
            <img src={logo} className='max-w-[30px] max-h-[40px]' alt="" />
            <h3 className='text-lg text-white capitalize'>{name}</h3>
        </div>
    );
};

export default SingleSkill;