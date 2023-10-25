
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from 'axios';

const Message = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [emailContent, setEmailContent] = useState('');
  let formData ={
    "email":'',
    "message":'',};
  const handleEmailAddressChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleEmailContentChange = (e) => {
    setEmailContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formData = {
      "email": emailAddress,
      "message": emailContent,
    };

    if (formData.email.trim() === '' && formData.message.trim() === '') {
      alert('Email and message fields must not be empty.');
      return;
    }
    else if (formData.email.trim() === '') {
      alert('Email must not be empty.Please provide a valid email.');
      return;
    }

    else if (!validateEmail(emailAddress)) {
      alert('Please enter a valid email address.');
      return;
    }

    else if (formData.message.trim() === '') {
      alert('Message must not be empty.');
      return;
    }
    else {
      const response = axios.post('https://agrxhxvod2mnwchj2yyajylmsa0zsbaq.lambda-url.us-east-1.on.aws/portfolio/', formData);
      response.then((res)=>{
        console.log('API Response:', res.data);
      }).catch((error)=>{console.log(error.message)});

      alert('Message is sent.');
      setEmailAddress("");
      setEmailContent("");
    }
  };

  const validateEmail = (email) => {
    // Regular expression for a basic email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={handleSubmit}>
        <br /><h6> Connect with Yenealem</h6><br />
        <h6>Email address</h6>
        <TextField
          className="form-control resizable"
          type="text"
          value={emailAddress}
          onChange={handleEmailAddressChange}
          style={{
            width: "40%",
            margin: "0 auto",
            textAlign: "center",
          }}>email address</TextField><br /><br />
        <h6>Message</h6>
        <TextareaAutosize
          className="form-control resizable"
          type="text"
          value={emailContent}
          onChange={handleEmailContentChange}
          style={{
            width: "40%",
            height: "40%",
            margin: "0 auto",
            textAlign: "center",
          }}

          placeholder="Please type your comments and request..." /><br />

          <button className="btn btn-primary" type= "submit">Send</button>

      </form>
    </div>
  );
}

export default Message;
