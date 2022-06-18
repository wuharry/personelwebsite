import React from 'react';
import style from './detail.module.scss';

const WorkList = () => {
    return <div className={style.wrap}>
        <div className={style.box}>
            <div className={style.title}></div>
            <h1>Blur picture</h1>
            <p>2022/1/2</p>
            <section className={style.content}>
                <p>
                可以調整邊框大小，並去修改模糊度的照片，
                本作品在CSS的部分有用到CSS變數來去做調整參數，
                並用選擇器去設定該圖可以變化/調整的部分，
                藉由JavaScrupt去做DOM操作，並把資料轉乘nodelist，
                藉由事件觸發時，去做渲染頁面的動作。
                </p>
                {/* <a href='https://wuharry.github.io/day3/'>點我前往</a> */}
            </section>
        </div>

    </div>
}
export default WorkList;
