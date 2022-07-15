import { Routes, Route } from "react-router-dom";
import FavouritesPage from "./pages/FavouritesPage";
import HomePage from "./pages/HomePage";
import Nav from './components/Nav'

function App(): JSX.Element {
  return (
    <div className="max-w-screen-lg text-center mx-auto">
    <Nav />
    <Routes>
      <Route path="/" element={ <HomePage /> }></Route>
      <Route path="/favourites" element={ <FavouritesPage /> }></Route>
    </Routes>
    </div>
  );
}

export default App;
