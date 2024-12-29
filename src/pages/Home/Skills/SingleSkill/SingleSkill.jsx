const SingleSkill = ({ skill }) => {

    const { name, logo } = skill

    return (
        <div className='cursor-pointer transition duration-300 bg-black hover:bg-[#000000ce] py-2 px-5 flex justify-center sm:justify-start items-center gap-3 rounded-lg h-16'>
            <img src={logo} className='max-w-[30px] max-h-[40px]' alt="" />
            <h3 className='hidden sm:block text-sm md:text-base text-white capitalize'>{name}</h3>
        </div>
    );
};

export default SingleSkill;