
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import  Style  from '@/styles/Home.module.css';
const MyComponent = () => {
  return (
    <Row >
        <Col xs="3" style={{ backgroundColor:'hsl(0 100% 0%)', padding: '0px'}}>
            <div style={{ backgroundColor:'#424949',textAlign: 'center',aspectRatio:'1/1',display:'flex',flexWrap:'wrap',alignContent:'center',justifyContent:'center'
        }}>
                <Image src="/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png" roundedCircle width={'50%'} height={'50%'}/>
                <p className='text-light' style={{ fontSize:'1.5rem' }}>Nguyễn Xuân Danh</p>
            </div>
            <div className='bg-secondary start-0 p-2' > 
                <div style={{ display:'flex',alignContent:'center'}} >                
                  <div className={Style.iconsidebar} ><i  className="fa fa-calendar text-light" aria-hidden="true"></i></div>
                  <p className='text-light' style={{ margin:'auto 0 auto' , paddingLeft:'2px'}}>01/05/2000</p>
                </div>
                <div style={{ display:'flex',alignContent:'center'}}>
                  <div className={Style.iconsidebar} ><i className="fa fa-phone-square text-light" aria-hidden="true"></i></div>
                  <p className='text-light' style={{ margin:'auto 0 auto', paddingLeft:'2px' }}>0326968216</p>
                </div>
                <div style={{ display:'flex',alignContent:'center'}}>
                  <div className={Style.iconsidebar} ><i className="fa fa-envelope-o text-light" aria-hidden="true"></i></div>
                  <p className='text-light' style={{ margin:'auto 0 auto',width:'80%',wordBreak:'break-word', paddingLeft:'2px' }}>danhb1805680@student.ctu.edu.vn</p>
                </div>
                <div style={{ display:'flex',alignContent:'center'}}>
                  <div className={Style.iconsidebar} ><i  className="fa fa-map-marker text-light" aria-hidden="true"></i></div>
                  <p className='text-light' style={{ margin:'auto 0 auto',width:'80%',wordBreak:'break-word', paddingLeft:'2px' }}>Ấp Tân Nghĩa, xã Rạch Chèo, huyện Phú Tân, tỉnh Cà Mau </p>
                </div>
                <div style={{ display:'flex',alignContent:'center'}}>
                  <div className={Style.iconsidebar} ><i  className="fa fa-link text-light" aria-hidden="true"></i></div>
                  <a className='text-light' href='https://www.facebook.com/danh.xuan.3975012/' style={{ margin:'auto 0 auto',width:'80%',wordBreak:'break-word', paddingLeft:'2px',textDecoration:'none' }}>https://www.facebook.com/danh.xuan.3975012/</a>
                </div>
                <div>
                  <h5 className='text-light mt-3'style={{ fontSize:'17px' }}>MỤC TIÊU NGHỀ NGHIỆP</h5>
                  <div className='text-light' style={{ fontSize:'15px' }}>
                    Mong muốn được làm việc trong môi trường chuyên nghiệp, phúc lợi tốt, đồng nghiệp hòa đồng 
                  </div>
                </div>
                <h5 className='text-light mt-3' style={{ fontSize:'17px' }}>KỸ NĂNG</h5>
                <div className='text-light'>Nextjs</div>
                <div className="progress">
                  <div className="progress-bar bg-success" style={{ width:'50%' }}></div>
                </div>
                <div className='text-light'>Laravel</div>
                <div className="progress">
                  <div className="progress-bar bg-success" style={{ width:'100%' }}></div>
                </div>
                <div className='text-light'>English</div>
                <div className="progress">
                  <div className="progress-bar bg-success" style={{ width:'20%' }}></div>
                </div>
                <div className='text-light'>Microsoft Office</div>
                <div className="progress">
                  <div className="progress-bar bg-success" style={{ width:'100%' }}></div>
                </div>
                <h5 className='text-light mt-3' style={{ fontSize:'17px' }}>SỞ THÍCH</h5>
                <div className='text-light'>Chơi game</div>
                <div className='text-light'>Bóng đá</div>
            </div>
        </Col>
        <Col >
          <hr />
          <h5>GIỚI THIỆU BẢN THÂN</h5>
          <p style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'5px'}}>
            Tôi tên Nguyên Xuân Danh. Tôi có đam mê với khoa học và công nghệ. Tôi cũng đã có cho mình tấm bằng đại học trong lĩnh vực CNTT
            và có những dự án mini do bản thân xây dựng. Tôi sống hướng nội, trung thực, thẳng thắng, có ý thức và kỷ luật cao, khả năng giao tiếp
            khá, khả năng tự học cao, chịu được mọi áp lực.
          </p> 
          <Row>
            <Col xs="1">
              <svg style={{ fontSize:'40px'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"/></svg>         
            </Col>          
            <Col style={{ display:'flex',alignItems:'center'}}>
              <h5>HỌC VẤN</h5>
            </Col> 
            <b style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'0'}}>ĐẠI HỌC CẦN THƠ</b> 
            <p style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'0'}}>Chuyên ngành: Hệ thống thông tin</p> 
            <p style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'10px'}}>Tốt nghiệp loại khá, GPA: 2.5</p> 
          </Row>
          <Row>
            <Col xs='1'>
              <i style={{ fontSize:'40px'}} className="fa fa-briefcase" aria-hidden="true"></i>
            </Col>
            <Col style={{ display:'flex',alignItems:'center'}}>
              <h5>KINH NGHIỆM LÀM VIỆC</h5>
            </Col> 
            <b style={{ fontSize:'20px',left:'10px',position:'relative',marginBottom:'0'}}>VNPT</b>
            <b style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'0'}}>Intern</b>
            <b style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'0'}}>Trách nhiệm</b>
            <p style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'10px'}}>
            Learn about e-invoices and digital signatures
            </p>
          </Row>
          <Row>
            <Col xs='1'>
              <i style={{ fontSize:'40px'}} className="fa fa-database" aria-hidden="true"></i>
            </Col>
            <Col style={{ display:'flex',alignItems:'center'}}>
              <h5>DỰ ÁN</h5>
            </Col> 
            <b style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'0'}}>Tên dự án: Vietnamese agricultural social networks – Modulel 2: Transaction recommendation</b>
            <b style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'0'}}>Thông tin về thời gian dự án: 3 months</b>
            <b style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'0'}}>Giới thiệu dự án:</b>
            <p style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'10px'}}>
              Dự án Vietnamese agricultural social networks – Modulel 2: Transaction recommendation giải quyết vấn đề tìm kiếm các mặt hàng
            nông sản mới phù hợp với nhu cầu, khẩu vị của khách hàng, ... tức là hệ thống sẽ đưa ra các gợi ý sản phẩm cho khách hàng. Hệ
            thống gợi ý dựa trên phương pháp lọc cộng tác(Neighborhood-based Collaborative Filtering) và sử dụng hệ quản trị cơ sở dữ liệu
            Neo4j có thể cung cấp tốc độ truy vấn và xử lý dữ liệu nhanh chóng.
            </p>
          </Row>
          <Row>
            <Col xs='1'>
              <i style={{ fontSize:'40px'}} className="fa fa-users" aria-hidden="true"></i>
            </Col>
            <Col style={{ display:'flex',alignItems:'center'}}>
              <h5>HOẠT ĐỘNG</h5>
            </Col> 
            <b style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'0'}}>Hiến máu tình nguyện | 01/2022 - 01/2022</b>
            <p style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'0'}}>Tình nguyện hiến 350ml máu cho cơ sở tiếp nhận máu: BVHH - TM TP. Cần Thơ</p>
            <b style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'0'}}>Mùa hè xanh | 06/2022 - 06/2022</b>
            <p style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'0'}}>Trồng cây xanh bên đường và dọn sạch cỏ tại địa phương mình sinh sống</p>
          </Row>  
          <Row>
            <Col xs='1'>
              <i style={{ fontSize:'40px'}} className="fa fa-certificate" aria-hidden="true"></i>
            </Col>
            <Col style={{ display:'flex',alignItems:'center'}}>
              <h5>CHỨNG CHỈ</h5>
            </Col> 
            <p style={{ fontSize:'15px',left:'10px',position:'relative',marginBottom:'0'}}>Chứng chỉ TOEIC (Test of English for International Communication) do Education Testing Service (ETS) và IIG Việt Nam cấp</p>
          </Row>
          <hr />
        </Col>
    </Row>
  );
};

export default MyComponent;
