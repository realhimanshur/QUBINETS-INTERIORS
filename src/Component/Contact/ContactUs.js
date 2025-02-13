import React from 'react';
import "./Contact.css";  
function ContactUs() {
  return (
    <div>
      {/* Banner Section */}
      <section className="contact_banner">
        <img
          src="/img/contact_us.jpg"
          alt="CONTCT US"
        />
        <h1>Get In Touch With Us</h1>
        <p>We're here to answer any questions you may have.</p>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <div className="form-container">
          <h2>Your Details</h2>
          <form action="#" method="POST">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone: </label>
            <input type="tel" id="phone" name="phone" />

            <label htmlFor="message">Message: </label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </section>

      {/* Company Contact Info */}
      <section className="contact-info">
        <h2>CONTACT INFORMATION</h2>
        
        <address>
          Qubinets Interiors<br />
          Address:- 123 Main Street<br />
          City, State Zip Code<br />
          Phone: <a href="tel:1234567890">123-456-7890</a><br />
          Email: <a href="mailto:info@example.com">info@example.com</a>
        </address>
      </section>
    </div>
  );
}

export default ContactUs;
















// import React from 'react';

// const ContactUs = () => {
//     return (
//         <div style={styles.container}>
//             <h1 style={styles.header}>Contact Us</h1>
//             <hr></hr>
//             <p style={styles.paragraph}>Have questions or ready to start your next project? Contact us today!</p>
//             <br />
//             <div style={styles.contactInfo}>
//                 <h2 style={styles.subHeader}>Contact Information</h2>
//                 <hr style={styles.hr} />
//                 <p style={styles.paragraph}><strong>Address:</strong> 123 Design Lane, Suite 456, City, State, Zip Code</p>
//                 <p style={styles.paragraph}><strong>Phone:</strong> (123) 456-7890</p>
//                 <p style={styles.paragraph}><strong>Email:</strong> info@yourcompany.com</p>
//             </div>
//             <div style={styles.contactForm}>
//                 <h2 style={styles.subHeader}>Send Us a Message</h2>
//                 <form>
//                     <label htmlFor="name" style={styles.label}>Name:</label>
//                     <input type="text" id="name" name="name" required style={styles.input} />
                    
//                     <label htmlFor="email" style={styles.label}>Email:</label>
//                     <input type="email" id="email" name="email" required style={styles.input} />
                    
//                     <label htmlFor="message" style={styles.label}>Message:</label>
//                     <textarea id="message" name="message" rows="4" required style={styles.textarea}></textarea>
                    
//                     <button type="submit" style={styles.button}>Send Message</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         maxWidth: '800px',
//         margin: 'auto',
//         padding: '20px',
//         fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
//         lineHeight: '1.6',
//     },
//     header: {
//         textAlign: 'center',
//         color: '#4CAF50',
//         fontSize: '2.5rem',
//         marginBottom: '20px',
//     },
//     subHeader: {
//         color: '#333',
//         fontSize: '2rem',
//         marginBottom: '10px',
//     },
//     paragraph: {
//         fontSize: '1.1rem',
//         color: '#555',
//         marginBottom: '20px',
//     },
//     contactInfo: {
//         marginBottom: '30px',
//     },
//     contactForm: {
//         backgroundColor: '#f5f5f5',
//         padding: '20px',
//         borderRadius: '5px',
//     },
//     label: {
//         display: 'block',
//         marginBottom: '5px',
//         fontWeight: 'bold',
//     },
//     input: {
//         width: '100%',
//         padding: '10px',
//         marginBottom: '20px',
//         borderRadius: '5px',
//         border: '1px solid #ccc',
//     },
//     textarea: {
//         width: '100%',
//         padding: '10px',
//         marginBottom: '20px',
//         borderRadius: '5px',
//         border: '1px solid #ccc',
//     },
//     button: {
//         padding: '10px 20px',
//         borderRadius: '5px',
//         border: 'none',
//         backgroundColor: '#4CAF50',
//         color: '#fff',
//         fontSize: '1rem',
//         cursor: 'pointer',
//     },
//     hr: {
//         border: '0',
//         height: '1px',
//         background: '#ccc',
//         marginBottom: '20px',
//     },
// };

// export default ContactUs;












