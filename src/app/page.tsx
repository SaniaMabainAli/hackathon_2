import TopNav from "./components/topNav";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Listings1 from "./components/listings1";
import Listings2 from "./components/listings2";
import Signup from "./components/signup";
import Featurelast from "./components/featurelast";
import Footer from "./components/footer";

export default function Home() {
  return (
   <div className="bg-background">
    <TopNav/>
    <Hero/>
    <Feature/>
    <Listings1/>
    <Listings2/>
    <Signup/>
    <Featurelast/>
    <Footer/>
   </div>
  );
}
