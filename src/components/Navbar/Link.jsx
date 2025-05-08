import React from 'react';

const Link = ({Route}) => {
    return (
        <li className='mr-10'>
            <a href={Route.path}>{Route.name}</a>
        </li>
    );
};

export default Link;