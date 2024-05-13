import React, { useState } from 'react';
import { FaCircle } from "react-icons/fa6";
import './GST.css'

const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const Captcha = () => {
  const [captcha, setCaptcha] = useState(generateRandomString(6));
  const [inputValue, setInputValue] = useState('');

  const regenerateCaptcha = () => {
    setCaptcha(generateRandomString(6));
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate user input
    if (inputValue === captcha) {
      alert('Captcha verified!');
      // Handle successful verification
    } else {
      alert('Incorrect Captcha. Please try again.');
      // Handle incorrect verification
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='label-style'>Captcha Code</label><br />
        <img src={`https://dummyimage.com/120x40/000/fff&text=${captcha}`} alt="Captcha" /><br/>

        <label className='label-style' style={{fontSize:"14px",color:" #555"}}>Captcha</label><FaCircle className='required'/><br />
        
        <input type="text" value={inputValue} onChange={handleInputChange} className='input-style' placeholder='Enter captcha'/>

      </form>

      <a href="#" onClick={regenerateCaptcha}>Regenerate</a>
    </div>
  );
};

export default Captcha;
