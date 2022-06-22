import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Header from "./Header/Section_nav";
import Contenu from "./Contenu/Section";
import Footer from "./Footer/BasDeLaPAge";

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
