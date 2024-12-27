
import logo from '../../../../assets/images/skills/react.png'
import './SingleSkill.css'

const SingleSkill = () => {

    return (
        <div className=' bg-[#000] py-2 px-5 flex justify-start items-center gap-3 rounded-lg'>
            <img src={logo} className='w-[40px]' alt="" />
            <h3 className='text-lg text-white capitalize'>React js</h3>
        </div>
    );
};

export default SingleSkill;