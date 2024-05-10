import { Link, NavLink } from "react-router-dom";

const Headerview = () => {
  return (
    <header  className="d-flex justify-content-between p-3 align-items-center ">
      <Link className="d-flex align-items-center gap-3" to={"/home"}>
        <img style={{height:"40px"}} src="c-logo.png" alt="" />
        <h3 className="text-light">Coinmania </h3>
      </Link>
<nav>

      <NavLink to={"/"}>Giriş yap</NavLink>
      <NavLink to={"/home"}>Anasayfa</NavLink>

      </nav>
    </header>
  );
};

export default Headerview