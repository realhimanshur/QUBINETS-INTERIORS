import React from "react";
import Header from "./Header/Header";
import Mid_Body from "./Mid_Body/Mid_Body";
import Cform from "../Home/Cform/Cform";
class Home extends React.Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header/>
            <Cform/>
            <Mid_Body/>
            </>
        );
    }
}
 
export default Home;