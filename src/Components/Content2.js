import React from 'react';
import content21 from '../img/content21.png';
import content22 from '../img/content22.png';
import content23 from '../img/content23.png';
import content24 from '../img/content24.png';
import { BsArrowRightCircle } from 'react-icons/bs';
import './Content2.css';

function Content2() {
  return (
    <main className='content2'>
        <ul>
            <li className='head'>
                <ul>
                    <li className='line-short'></li>
                    <li><h2>KKP Channel</h2></li>
                    <li><p>อัปเดตทุกความรู้ด้านการเงินและการลงทุนก่อนใคร พร้อมอินเทรนด์ไปกับหลากหลายเรื่องราวไลฟ์สไตล์</p></li>
                </ul>
            </li>
            <li className='content2-top'>
                <ul className='content2-top-menu'>
                    <li style={{color:'#59536b'}}><h3>KKP FOCUS</h3></li>
                    <li style={{color:'#999999'}}><h3>OPTIMISE</h3></li>
                    <li style={{color:'#999999'}}><h3>KKP Advisor</h3></li>
                </ul>
                <ul className='content2-top-content'>
                    <li><img src={content21} width="500px"/></li>
                    <li>
                        <ul>
                            <div className='line-long'>
                                <li><h2>KKP FOCUS</h2></li>
                                <li><p>ฝนนักสู้ พบเรื่องราวความจริง เจ็บจริง<br/> ประสบความสำเร็จจริง ที่จะเป็น<br/>แรงกระตุ้นให้ SME นักสู้รุ่นต่อไป<br/>ได้ก้าวไปถึงฝัน</p></li>
                            </div>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className='content2-down'>
                <ul className='content2-down-menu'>
                    <li><p>ดูทั้งหมด</p></li>
                    <li className='logo'><BsArrowRightCircle/></li>
                </ul>
                <ul className='content2-down-content'>
                    <li><img src={content22} width="250px"/><h4>KKP Focus ช่วงที่ 2 กูรู... โต๊ะกลม</h4></li>
                    <li className='block'><img src={content23} width="250px"/><h4>KKP Focus ช่วงที่ 1 ย่อประเด็นโลก โยกประเด็นร้อน</h4></li>
                    <li><img src={content24} width="250px"/><h4>KKP Focus ช่วงที่ 2 กูรู... โต๊ะกลม</h4></li>
                </ul>
            </li>
        </ul>
    </main>
  )
}

export default Content2