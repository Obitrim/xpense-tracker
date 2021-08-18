import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container = ({children, className, ...props}) => {
  return (
    <div className={`Container ${className}`} {...props}>
    	{children}
    </div>
  )
}

Container.propTypes = {
	children: PropTypes.node
}

export default Container;