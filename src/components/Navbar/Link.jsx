import React from 'react';

const Link = ({Route}) => {
    return (
        <li className='mx-5 hover:bg-gray-500 hover:p-1 hover:rounded-3xl'>
            <a href={Route.path}>{Route.name}</a>
        </li>
    );
};

export default Link;