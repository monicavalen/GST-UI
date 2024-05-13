import React from 'react';
import './GST.css'; // Import CSS file for styling

const Navbar = ({ fontSize, highContrast }) => {
  return (
    <nav className="navbar navbar-default"style={{ backgroundColor: highContrast ? 'black' : '#2c4e86' }}>
      <div className="navbar-nav">
        <a href="#" className="navbar-link active" style={{color:"#0b1e59"}}>Login</a> {/* Added active class for demonstration */}
      </div>
    </nav>
  );
}

export default Navbar;

