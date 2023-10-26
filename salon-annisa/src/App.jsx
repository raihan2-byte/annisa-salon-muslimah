import Testimonial from "./components/testimonial";
import Home from "./pages/Home";
import Kontak from "./components/kontak";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <div className="">
        <Testimonial />
        <Kontak />
        <Footer />
        <Home />
      </div>
    </>
  );
}

export default App;
