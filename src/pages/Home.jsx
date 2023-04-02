import { NavLink } from "react-router-dom";
import logo from "./../img/amikom.png";

const Home = () => {
  return (
    <div className="px-4 py-5 text-center">
      <img className="d-block mx-auto mb-4" src={logo} alt="" height="128" />
      <h1 className="display-5 fw-bold">Amikom Yogyakarta</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Register
          </button>
          <NavLink
            to="/login"
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
