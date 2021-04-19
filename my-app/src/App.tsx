import React from "react";

import "./App.scss";
import Footer from "./components/Footer/Footer.component";
import Header from "./components/Header/Header.component";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
