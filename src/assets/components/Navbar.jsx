import "../hojas-de-estilos/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar  bg-light border-2 border-bottom border-success">
      <div className="container-fluid d-flex justify-content-start">
        <div className="offcanvas offcanvas-start" id="abrir">
          <div className="offcanvas-header">
            <a className="navbar-brand  m-0" href="#">
              <img
                src={"/public/imagenes/tienda.PNG"}
                alt={"tinda"}
                width="45"
                height="35"
                className="d-inline-block align-text-top "
              />
              ISAIVEN
            </a>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active weight text-primary"
                  aria-current="page"
                  href="#"
                >
                  <i className="bi bi-house"></i> Inicio{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  active  weight text-success" href="#">
                  {" "}
                  <i className="bi bi-arrow-repeat"></i> Convertidor{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  active  weight text-danger" href="#">
                  {" "}
                  <i className="bi bi-calculator"></i> Calculadora{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#abrir"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand p-2 m-0" href="#">
          {/* <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/> */}
          <img
            src={"./imagenes/tienda.PNG"}
            alt={"tinda"}
            width="45"
            height="35"
            className="d-inline-block align-text-top "
          />
          ISAIVEN
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
