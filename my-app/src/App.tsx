import React from "react";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer.component";
import Header from "./components/Header/Header.component";
import Pages from "./components/Pages/Pages.component";
import Loader from "./components/UI/Loader/Loader.component";
import { AppState } from "./redux.config";

const App: React.FC = () => {
  const isLoading = useSelector((state: AppState) => state.loaders.loaderPage);

  return (
    <div>
      <Header />
      <Pages />
      <Footer />
      <Loader isLoading={isLoading} />
    </div>
  );
};

export default App;
