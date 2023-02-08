import React from 'react'
import logo from '../img/logo1.png';
import { MdFacebook } from 'react-icons/md';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
import { BsTelephone } from 'react-icons/bs';
import { RiPrinterLine } from 'react-icons/ri';
import { GoMail } from 'react-icons/go';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className='footer-content'>
        <div className='container'>
          <div className='footer-content-top'>
            <ul>
              <li><img src={logo} width="250px"/></li>
              <li>บริษัท ทุนภัทร จำกัด (มหาชน)</li>
              <li>ชั้น 9 อาคารสำนักงานเมืองไทย-ภัทร 1 252/6<br/>
              ถนนรัชดาภิเษก แขวงห้วยขวาง<br/>
              กรุงเทพมหานคร 10310
              </li>
            </ul>
            <ul>
              <li>เมนู</li>
              <li>รู้จัก บลจ.ภัทร</li>
              <li>เกี่ยวกับเรา</li>
              <li>ติดต่อเรา</li>
              <li>คำถามที่พบบ่อย</li>
              <li>สมัครงาน</li>
              <li>Links</li>
            </ul>
            <ul>
              <li>เมนู</li>
              <li>รู้จัก บลจ.ภัทร</li>
              <li>เกี่ยวกับเรา</li>
              <li>ติดต่อเรา</li>
              <li>คำถามที่พบบ่อย</li>
              <li>สมัครงาน</li>
              <li>Links</li>
            </ul>
            <ul className='contact'>
              <li>ติดต่อเรา</li>
              <li><BsTelephone/> (66) 23059800</li>
              <li><RiPrinterLine/> (66) 23059803</li>
              <li><GoMail/> customservice@phathaasset.com</li>
              <ul className='social'>
                <li><MdFacebook/></li>
                <li><AiFillTwitterCircle/></li>
                <li><TiSocialYoutubeCircular/></li>
              </ul>
            </ul>
          </div>
        </div>
        <div className='footer-line'></div>
        <div className='footer-content-down'>
          <ul>
            <li>แผนผังเว็บไซต์</li>
            <li>|</li>
            <li>ข้อตกลงและเงื่อนไข</li>
            <li>|</li>
            <li>นโยบายข้อมูลส่วนตัว</li>
          </ul>
          <p>@2019 phatra &copy; สงวนลิขสิทธิ์ 2563 บริษัทหลักทรัพย์จัดการกองทุน ภัทร จำกัด All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer