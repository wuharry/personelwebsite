import React from 'react';
import style from './detail.module.scss';
import day5 from '../../assets/day5.png';
import { useState } from 'react';
const WorkList = () => {
    const [imgshader, setimgshader] = useState(false)
    function MouseEnterHandler(e) {
        setimgshader(true);
    }
    function MouseLeaveHandler(e) {
        setimgshader(false);
    }
    return <div className={style.wrap}>
        <div className={style.box}>
            <div className={style.title}></div>
            <h1> FLEX PANEL</h1>
            <p>2022/1/2</p>
            <section className={style.content}>
                <div style={{ width: '350px' }} onMouseEnter={MouseEnterHandler} onMouseLeave={MouseLeaveHandler}
                    className={imgshader ? style.shaderin : style.shaderouut}  >
                    <a href='https://62b2624dfafbbb095f5b5e9c--dazzling-rugelach-a2ba75.netlify.app/'>
                        <img src={day5} alt="" className={style.tileimg}>
                        </img></a>
                </div>
                <h2>效果講解:</h2>
                <p>模仿IG的頁面</p>
                <p>
                    該頁面是模仿IG所做出的網站，該頁面有使用到Rudex去管理好友狀態，使用TypeScript，以及TailWind去做美化。
                </p>
                <a href='https://62b2624dfafbbb095f5b5e9c--dazzling-rugelach-a2ba75.netlify.app/'>點我前往</a>
            </section>
        </div>

    </div>
}
export default WorkList;
