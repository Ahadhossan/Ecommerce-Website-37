import "./App.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Footer from "./component/Footer/Footer";
import Virtual from "./component/Virtual/Virtual";
import Slider from "./component/Slider/Slider";
import Testimonial from "./component/Testimonial/Testimonial";
import Products from "./component/Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products/>
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
