import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
class Header extends React.Component {
  render() {
    return (
      <header>
        <img src="/img/BGI1.jpg" className="BGI1" alt="Background" />
        <div className="heading1">
          <h1>Home is where the <span>HEART</span> is..</h1>
          <h2>Transform your <span>space,</span><br /> Transform your <span>life.</span></h2>
        </div>

        {/* <div className="underheading">
          <h2>Experience unmatched quality & timely delivery with <span>QUBINETS INTERIORS</span></h2>
        </div> */}

        {/* <div className="chatbot">
          <button>
            <a href="#">CHAT - BOT</a>
          </button>
        </div> */}

        {/* <div className="costestimation">
          <button>
            <Link to="/costestimation" style={{ textDecoration: 'none', color: 'inherit' }}>
              Cost-Estimation
            </Link>
          </button>
        </div> */}
      </header>
    );
  }
}

export default Header;

















// import React from "react";
// import { Link } from "react-router-dom";
// class Header extends React.Component {
//     render() { 
//         return (
//             <header>
//                 <img
//             src="/img/BGI1.jpg"
//             className="BGI1"
//           />
//                 <div className="heading1">
//                     <h1>Home is where the <span> HEART</span> is..</h1>
//                     <h2>Transform your <span>space,</span><br /> Transform your <span>life.</span></h2>
//                 </div>

//                 <div className="underheading">
//                     <h2>Experience unmatched quality & timely delivery with <span>QUBINETS INTERIORS</span></h2>
//                 </div>


//                 <div className="costestimation">
//                     <button>
//                 <a href="#">Cost-Estimation</a>
//                 </button>
//                 </div>
//             </header>
//         );
//     }
// }
 
// export default Header;



