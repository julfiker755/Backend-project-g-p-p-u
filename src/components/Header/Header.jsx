import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-[#1fc6af] py-3 text-white'>
           <ul className='container mx-auto flex space-x-3 justify-center'>
            <li><Link to="/">Add coffce</Link></li>
            <li><Link to="/all">All coffce</Link></li>
           </ul>
        </div>
    );
};

export default Header;