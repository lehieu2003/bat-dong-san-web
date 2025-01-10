import { useEffect } from "react";
import HomePage from "../components/home-page-components/homePage";

const Home = () => {
  useEffect(() => {
    document.title = "Homyz";
  }, []);
  return <HomePage />;
};

export default Home;
