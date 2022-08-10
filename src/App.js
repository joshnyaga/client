import "./App.css";
import Nav from "./Components/Nav";
import Category from "./Container/category/Category";
import Home from "./Container/Home/Home";
import Details from "./Container/ProductDetails/Details";

function App() {
  return (
    <div className="App">
      <Nav />
      <Details />
    </div>
  );
}

export default App;
