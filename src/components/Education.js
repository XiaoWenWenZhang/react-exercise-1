import React from 'react';
import EducationDetail from './EducationDetail'

const Education = () => (
    <div className="education">
        <h3>Education</h3>
        <EducationDetail
            time={1995}
            title="I was born in Katowice"
            detail="Lorem ipsum dolor sit amet, ..."
        />
        <EducationDetail
            time={2005}
            title="Secondary school specializing in artistic"
            detail="Lorem ipsum dolor sit amet, ..."
        />
        <EducationDetail
            time={2009}
            title="First level graduation in Graphic Design"
            detail="Lorem ipsum dolor sit amet, ..."
        />
        <EducationDetail
            time={2012}
            title="Second level graduation in Graphic Design"
            detail="Lorem ipsum dolor sit amet, ..."
        />
    </div>
)

export default Education;