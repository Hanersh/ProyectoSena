import React, { Fragment } from "react";
import Menu from "./Menu";

function Index() {
  return (
    <Fragment>
      <Menu />
      <div className="header-content container">
        <div className="header-info">
          <div className="header-txt">
            <h1>Bienvenido al Admin Dashboard</h1>
          </div>

          <div className="header-img">
            <img src="ASSETS/images/planta.png" alt="" />
          </div>
        </div>
      </div>

      <hr />
    </Fragment>
  );
}

export default Index;
