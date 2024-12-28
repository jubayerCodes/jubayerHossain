const SingleSkill = ({ skill }) => {

    const { name, logo } = skill

    return (
        <div className='cursor-pointer transition duration-300 bg-black hover:bg-[#000000ce] lg:py-2 lg:px-5 flex justify-center jg:justify-start items-center gap-3 rounded-lg h-16'>
            <img src={logo} className='max-w-[30px] max-h-[40px]' alt="" />
            <h3 className='hidden lg:block text-lg text-white capitalize'>{name}</h3>
        </div>
    );
};

export default SingleSkill;