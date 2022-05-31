import React from 'react';
import style from './home.module.scss';
import headimg from '../../assets/head.jpg';
import WorkList from '../../compoment/WorkList';
import WorkData from '../works.json';

const HomePage = () => {
    return <div className={style.wrap}>
        {/* 個人簡介 */}
        <section className={style.brief}>
            <img src={headimg} alt="" />
            <h2>吳浩維</h2>
            <ul>
                <li>前端工程師</li>
                {/* <li></li>
                <li></li> */}
            </ul>
            <p>熱衷學習新的技術，不放棄任何自我成長的機會，對設計網站有極大的熱忱，樂於與他人合作</p>
            <p>來自南投縣的前端工程師</p>
            <p>聯絡方式: whw880218we@gmail.com</p>
        </section>

        {/* 作品列表 */}
        <section className={style.work}>
            <div className={style.title}>
                <h2 >作品集</h2>
                <p>到work頁面瀏覽</p>
            </div>
            <WorkList dataSource={WorkData.data} />
        </section>
    </div>;

}

export default HomePage;
