import React from 'react';
import style from './works.module.scss';
import WorkList from '../../compoment/WorkList';
import datas from '../works.json';
const WorkPage = () => {
    return <div className={style.wrap}>
        <div className={style.title}>
            <h3>作品集</h3 >
        </div>
        <WorkList dataSource={datas.data} />
        
    </div>
}

export default WorkPage;
