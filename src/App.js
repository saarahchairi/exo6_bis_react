import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Header from "./Header/Header";
import Contenu from "./Contenu/Contenu";
import Footer from "./Footer/Footer";

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Contenu />
        <Footer />
      </div>
    );
  }
}

export default App;
