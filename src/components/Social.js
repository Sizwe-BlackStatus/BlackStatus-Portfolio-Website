import React from 'react';

function Social(props) {
    return (
        <li>
            <a href={props.link}>
                <i className={props.icon}/>
            </a>
        </li>
    );
}

export default Social;