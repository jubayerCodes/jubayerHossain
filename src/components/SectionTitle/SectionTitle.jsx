import React from 'react';

const SectionTitle = ({ bgTitle, title }) => {
    return (
        <div className='section-title'>
            <span className='uppercase text-[50px] sm:text-[60px] xl:text-[150px] font-bold text-transparent title-stroke' style={{lineHeight: '1'}}>{bgTitle}</span>
            <div className='-mt-[40px] xl:-mt-[80px] pl-2'>
                <h3 className='title text-2xl xl:text-4xl font-bold uppercase'>{title}</h3>
            </div>
        </div>
    );
};

export default SectionTitle;