import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <nav>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' /> Tennisfans
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/#' className='inline-block mr-6'>
            Link1
          </Link>
        </li>
        <li>
          <Link to='/#' className='inline-block mr-6'>
            Link2
          </Link>
        </li>
        <li>
          <Link to='/#' className='inline-block mr-6'>
            Link3
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
