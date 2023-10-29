import Hero from "../components/Hero";
import Layanan from "../components/Layanan";
import Navbar from "../components/Navbar";
import Perawatan from "../components/perawatan";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Layanan />
        {/* <Card /> */}
        <Perawatan />
      </div>
    </>
  );
}

export default Home;
