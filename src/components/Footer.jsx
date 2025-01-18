import React, {useState} from 'react';
// I want to utilize controlles form in this component
function Footer() { 
  const [message, setMessage] = useState('');

  function handleMessageChange(event){
    setMessage(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    console.log("Message submitted: ", message);
    setMessage('');
  }
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer">
      <p>Want to Talk to us?</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Leave a mesage:</label>
        <textarea id="message" value={message} onChange={handleMessageChange} placeholder="Enter your message" required />
        <button type="submit">SUBMIT</button>
      </form>
      <p className="copyright">
        &copy; {currentYear} Supreme Co. All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;