import React from "react";
import Footer from "./components/Footer/Footer.component";
import Header from "./components/Header/Header.component";
import Pages from "./components/Pages/Pages.component";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Pages />
      <Footer />
    </div>
  );
};

export default App;
