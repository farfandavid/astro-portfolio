import "./contact-form.css";
import { Email } from "../../utils/smtp";
import { useState } from "react";

export default function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmpty = (str) => !str || 0 === str.length;
  const handleSubmit = (e) => {
    if (isEmpty(name) || isEmpty(email) || isEmpty(message)) {
      alert("Please fill all fields");
      return;
    }
    e.preventDefault();
    Email.send({
      SecureToken: "d90905b4-e22e-48ef-bae3-c0decd73ec56",
      To: 'farfetchdev@hotmail.com',
      From: "farfandavid34@gmail.com",
      Subject: name + "<" + email + ">",
      Body: message
    }).then(
      message => alert(message)
    );
  };
  return (
    <form action="">
      <label htmlFor="name">Full Name:</label>
      <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        required
        onChange={(e) => setMessage(e.target.value)}></textarea>
      <button id="btn-form" type="submit" onClick={handleSubmit}>Send</button>
    </form>
  );
}