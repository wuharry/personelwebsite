import React from "react";
import { WorkList } from "../../compoment/WorkList";
import { WORKS } from "../works";
import { WORKPROPS } from "../../types";

export const WorkPage: React.FC<WORKPROPS> = () => {
  return (
    <div className={`wrap`}>
      <div className={`title`}>
        <h3>作品集</h3>
      </div>
      <WorkList dataSource={WORKS} />
    </div>
  );
};
