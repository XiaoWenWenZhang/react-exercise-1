import React from 'react';

const EducationDetail = ({ time, title, detail }) => (
    <div className="education-detail">
        <h4 className="time">{time}</h4>
        <div className="title-and-detail">
            <h4 className="title">{title}</h4>
            <p className="detail">{detail}</p>
        </div>
    </div>
)

export default EducationDetail;