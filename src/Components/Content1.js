import React from 'react'
import content11 from '../img/content11.png';
import content12 from '../img/content12.png';
import content13 from '../img/content13.png';
import content14 from '../img/content14.png';
import content15 from '../img/content15.png';
import { BsArrowRightCircle } from 'react-icons/bs';
import './Content1.css'

function Content1() {
  return (
    <main className='content1'>  
        <div className='shadow-top'>
            <div className='content1-left'>
                <div className='content1-left-main'>
                    <ul>
                        <li className='main-header'><h2>Article</h2>
                            <ul className='down-menu'>
                                <li><p>ดูทั้งหมด</p></li>
                                <li className='logo'><BsArrowRightCircle/></li>
                            </ul>
                        </li>
                        <li className='main-content'>
                            <ul>
                                <li className='content-img'><img src={content11}/></li>
                                <li className='content'>
                                    <ul>
                                        <li className='content-header'><h3>Margin of Safety กลยุทธ์การ ลงทุนอย่างปลอดภัย หลักการ ลงทุนของเบนจามิน เกรแฮม</h3></li>
                                        <li className='content-detail'><p>ตอบคําถามที่ว่า คุณมีความจำเป็น พร้อมเป็น เจ้าของหรือยัง เช่น เพื่อหน้าที่การงาน อาชีพ หรือการเดินทาง ความสะดวกสบาย เพราะการซื้อ รถนอกจากรถแล้ว ยังมีค่าน้ำมัน ค่าบำรุงรักษา ค่าประกันภัย ซึ่งเป็นค่าใช้จ่ายในระยะยาว</p></li>
                                        <li className='content-footer'><p>การลงทุน</p></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='content1-left-second'>
                    <ul>
                        <li className='content-second'>
                            <ul>
                                <li className='content-img'><img src={content12}/></li>
                                <li className='content-header'><h3>จับจังหวะการลงทุนเป็นก็สร้างเงิน ล้านได้ง่ายๆใกล้แค่เอื้อม</h3></li>
                                <li className='content-footer'><p>การลงทุน</p></li>
                            </ul>
                        </li>
                        <li className='content-second'>
                            <ul>
                                <li className='content-img'><img src={content13}/></li>
                                <li className='content-header'><h3>Margin of Safety กลยุทธ์การ ลงทุนอย่างปลอดภัย Margin of Safety</h3></li>
                                <li className='content-footer'><p>การลงทุน</p></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='content1-right'>
                <div className='content1-right-main'>
                    <ul>
                        <li className='main-header'><h2>News</h2>
                            <ul className='down-menu'>
                                <li><p>ดูทั้งหมด</p></li>
                                <li className='logo'><BsArrowRightCircle/></li>
                            </ul>
                        </li>
                        <li className='content-img'><img src={content14}/></li>
                    </ul>
                </div>
                <div className='content1-right-second'><img src={content15}/></div>
            </div>
        </div>
        <div className='shadow-down'></div>
    </main>  
  )
}

export default Content1