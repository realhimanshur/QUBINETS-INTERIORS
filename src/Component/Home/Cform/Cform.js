import React, { useState } from "react";
import "./Cform.css"; 

const Cform = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); 
    const formattedPhone = input
      .replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3") 
      .trim();
    setPhone(formattedPhone);
  };

  return (
    <div className="cform">
      <h3>Beautiful Designs for Every Budget</h3>
      <form action="index.html">
        *Name :<br />
        <input
          type="text"
          name="first_name"
          required
          placeholder="ENTER FULL NAME"
        />
        <br />
        *Email Id :<br />
        <input
          type="email"
          name="email"
          required
          placeholder="ex:- xyz@gmail.com"
        />
        <br />
        <label htmlFor="phone">*Phone No.:</label>
        <br />
        <input
          type="tel"
          name="Phone"
          required
          placeholder="000 000 0000"
          value={phone}
          onChange={handlePhoneChange}
          pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
        />
        <br />
        <div className="submit">
        <input type="checkbox" required />{" "}
        <span className="whatsaap">Receive updates on WhatsApp</span> <br />
        <input type="submit" /> <span className="required">* Required</span>
        <br />
        <p className="Conditions">
          By filling out this form, you accept the Privacy Policy and Terms &
          Conditions.
        </p>
        </div>
      </form>
    </div>
  );
};

export default Cform;
