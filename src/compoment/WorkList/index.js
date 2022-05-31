import React from 'react';
import style from './work.module.scss';
import { Link } from 'react-router-dom';
const WorkDetail = ({ dataSource }) => {
    return <div className={style.worklist}>
        <ul>
            {dataSource && dataSource.map(item =>
                <li key={item.id}>
                    <Link to={`/works/${item.id}`}>
                        <div className={style.cover}>
                            <img src={item.cover} />
                        </div>

                        <div className={style.workbrief}>
                            <h3>{item.title}</h3>
                            <p>{item.brief}</p>
                            <div className={style.tag}>
                                {item.tags && item.tags.map( i=><span key={i}>{i}</span>)}
                            </div>
                        </div>
                    </Link>
                </li>
                )
            }
        </ul>
    </div>
}
export default WorkDetail;
