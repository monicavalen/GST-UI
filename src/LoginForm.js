import React, { useState } from 'react';
import { FaCircle } from "react-icons/fa";
import './GST.css'; // Import CSS file for styling

const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const LoginForm = ({ highContrast }) => {
  const [captcha, setCaptcha] = useState(generateRandomString(6));
  const [inputValue, setInputValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const regenerateCaptcha = () => {
    setCaptcha(generateRandomString(6));
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true); // Set form submitted to true to trigger validation UI
  };

  const isError = (fieldValue) => formSubmitted && !fieldValue;

  return (
    <div className='login-container'>
      <div className='login-box'>
        <p className='login-text' style={{ borderBottom: "1px solid #eee" }}>Login</p>
        <div style={{ display: "flex", marginLeft: "520px", marginBottom: "0px" }}>
          <FaCircle className='required' style={{ marginRight: "3px" }} />
          <p style={{ fontSize: "13px", color: "#212121", marginBottom: "0px", marginTop: "3px" }}>indicates mandatory fields</p>
        </div>

        <form onSubmit={handleSubmit} style={{ width: "50%", marginLeft: "25%" }}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="label-style">Username</label>
            <FaCircle className='required' />
            <input type="name" className="form-control input-style" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" value={email} onChange={handleEmailChange} style={isError(email) ? { borderColor: '#a94442', boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)' } : null} />
            {isError(email) && <p style={{ fontSize: '12px', color: 'red' }}>Please enter the mandatory fields</p>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="label-style">Password</label>
            <FaCircle className='required' />
            <input type="password" className="form-control input-style" id="exampleInputPassword1" placeholder="Password" value={password} onChange={handlePasswordChange} style={isError(password) ? { borderColor: '#a94442', boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)' } : null} />
            {isError(password) && <p style={{ fontSize: '12px', color: 'red' }}>Please enter the mandatory fields</p>}
          </div>

          <div className='form-group'>
            {/* <label className='label-style'>Captcha Code</label><br />
            <img src={`https://dummyimage.com/120x40/000/fff&text=${captcha}`} alt="Captcha" /><br /> */}
            <label className='label-style'>Captcha</label><FaCircle className='required' /><br />
            <input type="text" value={inputValue} onChange={handleInputChange} className='input-style' placeholder='Enter captcha' style={isError(inputValue && inputValue !== captcha) ? { borderColor: '#a94442', boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)' } : null} />
            {isError(inputValue && inputValue !== captcha) && <p style={{ fontSize: '12px', color: 'red' }}>Please enter the mandatory fields</p>}
            <a href="#" onClick={regenerateCaptcha}>Regenerate</a>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputOtp" className="label-style">OTP</label>
            <FaCircle className='required' />
            <input type="text" className="form-control input-style" id="exampleInputOtp" placeholder="Enter OTP" value={otp} onChange={handleOtpChange} style={isError(otp) ? { borderColor: '#a94442', boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)' } : null} />
            {isError(otp) && <p style={{ fontSize: '12px', color: 'red', marginBottom: "-12px" }}>Please enter the mandatory fields</p>}
          </div>
          <button type="submit" className="btn btn-primary" style={{
            backgroundColor: highContrast ? '#000' : '#2c4e86',
            color: '#fff',
            border: highContrast ? '1px solid #fff' : '1px solid #264373'
          }}>Submit</button>

        </form>
      </div>
    </div>
  );
}

export default LoginForm;
