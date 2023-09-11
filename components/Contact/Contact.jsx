import React, { useState } from "react";
import styles from "./Contact.module.css";
const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.header}>Get In Touch</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.label}>Name</label>
          <input
            className={styles.inputcomponent}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className={styles.label}>Email</label>
          <input
            className={styles.inputcomponent}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className={styles.label}>Subject</label>
          <input
            className={styles.inputcomponent}
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className={styles.label}>Message</label>
          <textarea
            className={styles.inputcomponent}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <button className={styles.sendbutton} type="submit">
            Send
          </button>
        </div>
      </form>
      <div className={styles.row}>
        <div className={styles.container}>
          <h3>Address</h3>
          <p>Eldoret,Kenya</p>
        </div>
        <div className={styles.container}>
          <h3>Email</h3>
          <p>bill.malea@yahoo.com</p>
        </div>
        <div className={styles.container}>
          <h3>Phone Number</h3>
          <p>+254727800223</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
