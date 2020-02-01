import React from 'react';
import './title.component.css';

const Title = ({text}) => {
    return (
        <div className="page-title">
            <h1>{text}</h1>
        </div>
    );
}

export default Title;
