import React from 'react';
import AboutMe from './AboutMe';
import Education from './Education';

class Body extends React.Component {
    render() {
        return (
            <div>
                <AboutMe />
                <Education />
            </div>
        )
    }
}

export default Body;