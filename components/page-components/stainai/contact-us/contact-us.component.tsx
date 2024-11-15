import React, { useState } from "react";
import classes from "./contact-us.module.sass";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('Sending...');

    const response = await fetch('/api/send-smail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      setStatus('Message sent successfully!');
    } else {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.info}>
        <div>
          <div className={classes.title}>CONTACT INFO</div>
          <div>tsangwei.tu@howard.edu</div>
          <div>+1(202)865-3742</div>
        </div>
        <div>
          <div className={classes.title}>ADDRESS</div>
          <div>
            <strong>Howard University</strong>
            <br />
            <strong>Molecular Imaging Laboratory</strong>
            <br />
            <span>2041 Georgia Ave., NW</span>
            <br />
            <span>Cancer Center B112</span>
            <br />
            <span>Washington, D.C. 20060</span>
          </div>
        </div>
      </div>

      {
        status
        ? <div className={classes.message}>{status}</div>
        : <form className={classes.message} onSubmit={handleSubmit}>
          <div className={classes.inputGroup}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.inputGroup}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.inputGroup}>
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.inputGroup}>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className={classes.submit} type="submit">SUBMIT</button>
        </form>
      }
    </div>
  );
};

export default ContactUs;