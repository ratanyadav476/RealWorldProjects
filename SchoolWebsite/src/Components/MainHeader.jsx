import Home from "./Home";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Pages from "./Pages";
import Courses from "./Courses";
import Blog from "./Blog";
function MainHeader() {
  return (
    <div className="flex flex-col">
      <section className="w-full">
        <Home />
      </section>
      <section className="w-full">
        <AboutUs />
      </section>
      <section className="w-full">
        <Pages />
      </section>
      <section className="w-full">
        <Services />
      </section>
      <section className="w-full">
        <Courses />
      </section>
    </div>
  );
}

export default MainHeader;
