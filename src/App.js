import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Slider from "./components/Slider";
// import RecipeCategories from "./components/RecipeCategories";
import LatestRecipes from "./components/LatestRecipes";
// import RecipeVideos from "./components/RecipeVideo";
// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <LatestRecipes/>
      {/* <Slider/>
      <RecipeCategories/>
      <RecipeVideos/>
      <Footer/> */}
    </div>
  );
}

export default App;
