import React from 'react';
import style from './detail.module.scss';
import day3 from '../../assets/day3.png';
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
            <h1>Blur picture</h1>
            <p>2022/1/2</p>
            <section className={style.content}>
                <div style={{ width: '350px' }} onMouseEnter={MouseEnterHandler} onMouseLeave={MouseLeaveHandler}
                    className={imgshader ? style.shaderin : style.shaderouut}  >
                    <a href='https://wuharry.github.io/day3/'>
                        <img src={day3} alt="" className={style.tileimg}>
                        </img></a>
                </div>
                <h2>效果講解:</h2>
                <p>可以調整邊框大小，並去修改模糊度的照片</p>
                <br></br>
                <h2>程式講解:</h2>
                <p>
                    本作品在CSS的部分有用到CSS變數來去做調整參數，
                    並用選擇器去設定該圖可以變化/調整的部分，
                    藉由JavaScrupt去做DOM操作，並把資料轉乘nodelist，
                    藉由事件觸發時，去做渲染頁面的動作。
                </p>
                <a href='https://wuharry.github.io/day3/'>點我前往</a>
            </section>
        </div>

    </div>
}
export default WorkList;
