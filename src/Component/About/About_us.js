import React from "react";
import "./About.css"; 
const About = () => {
  return (
    <div>
      <section className="about">
        {/* Banner Section */}
        <section className="about_banner">
          <img
            src="/img/about_us.jpg"
            alt="About Us"
          />
          <h1>Qubinets Interiors Is An Interior Designing Platform...</h1>
        </section>

        <div className="about-info">
          <div className="about-img">
            <img 
              src="https://images.pexels.com/photos/2067402/pexels-photo-2067402.jpeg" 
              alt="Interior Design Company Logo" 
              style={{ maxWidth: '200px', height: 'auto' }} 
            />
          </div>
          <div>
            <p>
              At Qubinets Interiors, we believe every space has the potential to
              inspire and delight. With a passion for design and a commitment to
              quality, our skilled team transforms homes and offices into
              beautiful, functional, and personalized environments. From initial
              consultation to final installation, we ensure every detail
              reflects your unique style and needs. Join our many satisfied
              clients and let us help you create a space that you'll love to
              live and work in.
            </p>
            <button>Read More...</button>
          </div>
        </div>
      </section>

      <section className="team">
        <h1>Meet Our Team</h1>
        <div className="team-cards">
          {/* Card 1 */}
          <div className="card">
            <div className="card-img">
              <img 
                src="https://randomuser.me/api/portraits/men/1.jpg" 
                alt="CEO and Founder" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Jane</h2>
              <p className="card-role">CEO and Founder</p>
              <p className="card-email">jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="card">
            <div className="card-img">
              <img 
                src="https://randomuser.me/api/portraits/women/1.jpg" 
                alt="Co-Founder" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Miller</h2>
              <p className="card-role">Co-Founder</p>
              <p className="card-email">Miller@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="card-img">
              <img 
                src="https://randomuser.me/api/portraits/men/2.jpg" 
                alt="Co-Founder" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Joe</h2>
              <p className="card-role">Co-Founder</p>
              <p className="card-email">joe@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


// import React from "react";

// class About_us extends React.Component {
//   render() {
//     return (
//       <div style={styles.container}>
//         <h1 style={styles.header}>About Us</h1>
//         <hr></hr>
//         <p style={styles.paragraph}>
//           Welcome to QUBINETS INTERIORS, your premier destination for exceptional interior design solutions. We specialize in creating inspiring and functional spaces that reflect your unique style and preferences.
//         </p>
//         <p style={styles.paragraph}>
//           With a team of talented designers and a commitment to excellence, we transform visions into reality, ensuring every project exceeds expectations.
//         </p>
//         <hr style={styles.hr} />
//         <h2 style={styles.subHeader}>Our Mission</h2>
//         <p style={styles.paragraph}>At QUBINETS INTERIORS, our mission is to...</p>
//         <ul style={styles.list}>
//           <li>Create beautiful and functional interiors.</li>
//           <li>Provide exceptional customer service.</li>
//           <li>Stay at the forefront of design trends.</li>
//           <li>Deliver projects on time and within budget.</li>
//         </ul>
//         <hr style={styles.hr} />
//         <h2 style={styles.subHeader}>Why Choose Us?</h2>
//         <p style={styles.paragraph}>Choose QUBINETS INTERIORS for your interior design needs because...</p>
//         <ul style={styles.list}>
//           <li>We have [X] years of experience.</li>
//           <li>Our team consists of highly skilled professionals.</li>
//           <li>We tailor our services to meet your specific requirements.</li>
//           <li>We prioritize client satisfaction.</li>
//         </ul>
//         <hr style={styles.hr} />
//         <h2 style={styles.subHeader}>Meet Our Team</h2>
//         <p style={styles.paragraph}>Get to know the creative minds behind QUBINETS INTERIORS...</p>
//         <ul style={styles.list}>
//           <li>[Name], Interior Designer - [Brief bio]</li>
//           <li>[Name], Project Manager - [Brief bio]</li>
//           <li>[Name], Design Consultant - [Brief bio]</li>
//         </ul>
//       </div>
//     );
//   }
// }

// const styles = {
//   container: {
//     maxWidth: '800px',
//     margin: 'auto',
//     padding: '20px',
//     fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
//     lineHeight: '1.6',
//   },
//   header: {
//     textAlign: 'center',
//     color: '#4CAF50',
//     fontSize: '2.5rem',
//     marginBottom: '20px',
//   },
//   subHeader: {
//     color: '#333',
//     fontSize: '2rem',
//     marginBottom: '10px',
//   },
//   paragraph: {
//     fontSize: '1.1rem',
//     color: '#555',
//     marginBottom: '20px',
//   },
//   list: {
//     paddingLeft: '20px',
//     marginBottom: '20px',
//   },
//   hr: {
//     border: '0',
//     height: '1px',
//     background: '#ccc',
//     marginBottom: '20px',
//   },
// };

// export default About_us;

// // import React from "react";
// // class About_us extends React.Component {
// //         render() {
// //             return (
// //                 <div style={styles.container}>

// //                     <h1>About Us</h1>
// //                     <hr></hr>
// //                     <p>Welcome to QUBINETS INTERIORS, your premier destination for exceptional interior design solutions. We specialize in creating inspiring and functional spaces that reflect your unique style and preferences.</p>
// //                     <p>With a team of talented designers and a commitment to excellence, we transform visions into reality, ensuring every project exceeds expectations.</p>
// //                     <hr />
// //                     <h2>Our Mission</h2>
// //                     <p>At QUBINETS INTERIORS, our mission is to...</p>
// //                     <ul>
// //                         <li>Create beautiful and functional interiors.</li>
// //                         <li>Provide exceptional customer service.</li>
// //                         <li>Stay at the forefront of design trends.</li>
// //                         <li>Deliver projects on time and within budget.</li>
// //                     </ul>
// //                     <hr />
// //                     <h2>Why Choose Us?</h2>
// //                     <p>Choose QUBINETS INTERIORS for your interior design needs because...</p>
// //                     <ul>
// //                         <li>We have [X] years of experience.</li>
// //                         <li>Our team consists of highly skilled professionals.</li>
// //                         <li>We tailor our services to meet your specific requirements.</li>
// //                         <li>We prioritize client satisfaction.</li>
// //                     </ul>
// //                     <hr />
// //                     <h2>Meet Our Team</h2>
// //                     <p>Get to know the creative minds behind QUBINETS INTERIORS...</p>
// //                     <ul>
// //                         <li>[Name], Interior Designer - [Brief bio]</li>
// //                         <li>[Name], Project Manager - [Brief bio]</li>
// //                         <li>[Name], Design Consultant - [Brief bio]</li>
// //                     </ul>
// //                 </div>
// //             );
// //         }
// //     }

// //     const styles = {
// //         container: {
// //             maxWidth: '800px',
// //             margin: 'auto',
// //             padding: '20px',
// //         },
// //     };
// //     export default About_us;
