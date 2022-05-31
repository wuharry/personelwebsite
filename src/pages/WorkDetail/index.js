import React from 'react';
import style from './detail.module.scss';

const WorkList = () => {
    return <div className={style.wrap}>
        <div className={style.box}>
            <div className={style.title}></div>
            <h1>Drum kit</h1>
            <p>2022/1/2</p>
            <section className={style.content}>
                <p>
                當按下指定按鍵時，播放音效以及渲染畫
                </p>
            </section>
        </div>

    </div>
}
export default WorkList;
