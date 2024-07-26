
import React from 'react';
import ProgressBar from 'react-animated-progress-bar';

const SingleSkill = ({ skill, percentage }) => {

    return (
        <div>
            <h3 className='font-semibold mb-0'>{skill}</h3>

            {/* TODO: Should update progressbar */}
            <ProgressBar
                width="100%"
                height="8px"
                rect
                fontColor="#767676"
                percentage={percentage + ''}
                rectPadding="0px"
                rectBorderRadius="0px"
                trackPathColor="transparent"
                bgColor="#767676"
                trackBorderColor="#767676"
            />

        </div>
    );
};

export default SingleSkill;