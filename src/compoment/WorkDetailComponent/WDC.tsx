import React from "react";
import "./detail.module.scss";

const WorkDetailComponent: React.FC<string> = (textelment) => {
  return (
    <div className={`wrap`}>
      <div className={`box`}>
        <div className={`title`}></div>
        <h1>textelment</h1>
        <p>2022/1/2</p>
        <section className={`content`}>
          <p></p>
        </section>
      </div>
    </div>
  );
};
export { WorkDetailComponent };
