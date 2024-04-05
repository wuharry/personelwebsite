import React from "react";
import "./work.module.scss";
import { Link } from "react-router-dom";
import { WORKPROPS } from "../../types";

interface WorkListProps {
  dataSource: WORKPROPS[];
}
export const WorkList: React.FC<WorkListProps> = ({ dataSource }) => {
  return (
    <div className={`worklist`}>
      {/* 製作HomePage下面的作品列表 */}
      <ul>
        {dataSource &&
          dataSource.map((item) => (
            <li key={item.id}>
              <Link to={`/works/${item.id}`}>
                {/* 跳轉功能 */}
                <div className={`cover`}>
                  {/*這邊是HomePage下面作品內容所展現得格式 */}
                  <img src={item.cover} />
                </div>

                <div className={`workContent`}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <div className={`tag`}>
                    {item.tags &&
                      item.tags.map((obj: any) => <span key={obj}>{obj}</span>)}
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
