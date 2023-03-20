import React from 'react';
import style from './detail.module.scss';
import day2 from '../../assets/day2.png';
const WorkList = () => {
    return <div className={style.wrap}>
        <div className={style.box}>
            <div className={style.title}></div>
            <h1>Clock</h1>
            <p>2022/1/2</p>
            <section className={style.content}>
                <div >
                    <a href='https://wuharry.github.io/day2/'>
                    <img src={day2} alt="" className={style.tileimg}>
                    </img></a>
                </div>
                <h2>效果講解:</h2>
                <p>Tick Tok~Tick Tok~ is time for lunch</p>
                <br></br>
                <h2>程式講解:</h2>
                <p>
                    一個會自動計時的時鐘，
                    該作品比較核心的地方在於操作在CSS的部分，
                    用now.Date()物件來獲取時間點，
                    藉由JavaScript去選取時針，分針，秒針的物件
                    然後去改變其樣式來去達成一個時鐘的效果
                </p>


            </section>
        </div>

    </div>
}
export default WorkList;
