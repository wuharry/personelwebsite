import React, { FunctionComponent } from "react";

interface NavigationBarProps {}

const NavigationBar: FunctionComponent<NavigationBarProps> = () => {
  return (
    <>
      <header className={``}>
        {/* {" "} */}
        <div className={``}>
          {/* //{" "} */}
          <Link to="/">
            {" "}
            <div className={``}>Portfolio</div>{" "}
          </Link>
          // {/* link to+'導航地址',  "/"為首頁地址  */}
          //{" "}
          <div className={``}>
            //{" "}
            <Link to="/">
              <p className={``}>Home</p>
            </Link>
            //{" "}
            <Link to="/about">
              <p className={``}>About</p>
            </Link>
            <Link to="/services">
              <p className={``}>Services</p>
            </Link>
            <Link to="/skills">
              <p className={``}>Skills</p>
            </Link>
            <Link to="/project">
              <p className={``}>Project</p>
            </Link>
            <Link to="/contact">
              <p className={``}>contact</p>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
