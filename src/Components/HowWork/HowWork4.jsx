import { Link } from 'react-router-dom';
import data from '../../Data/home5/work5.json';
import SectionTitle3 from '../Common/SectionTitle3';

const HowWork4 = () => {

    const leftContent = {
        Content:'Explore our work to discover how we empower healthcare providers and patients with innovative digital solutions, from AI-driven health tracking to secure medical data management, helping them overcome challenges, achieve better outcomes, and thrive in today’s connected healthcare landscape.',
        // btnName:'View Our Work',
        btnUrl:'/about',
        img1:'/assets/img/work/cc.jpg',
      }

    return (
        <div className="work7 sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="work7-image-area image-anime">
                            <img src={leftContent.img1} alt="" />
                            <div className="space20"></div>
                            <div className="heading7">
                                <p>{leftContent.Content}</p>
                                <div className="space20"></div>
                                {/* <div className="">
                                  <Link className="theme-btn13" to={leftContent.btnUrl}><span className="text">{leftContent.btnName}</span> <span className="arrows"><span className="arrow1"><i className="bi bi-arrow-right"></i></span><span className="arrow2"><i className="bi bi-arrow-right"></i></span></span></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="heading7">

                            <SectionTitle3
                                SubTitle="Explore our world"
                                Title="See Our Work in Action <span>Featured Projects</span>"
                                content="At Mediwave, we don’t just follow innovation; we create it. Our mission is simple yet ambitious: to transform healthcare through cutting-edge technology that puts people first."
                            ></SectionTitle3> 

                            {data.map((item, i) => (
                            <div key={i} className="work-box" data-aos="fade-left" data-aos-duration="900">
                                <div className="icon">
                                    <span>
                                    <i className="bi bi-check-lg"></i>
                                    </span>
                                </div>
                                <div className="heading">
                                    <h4>
                                    {i=== 0 ? (
                                        <a href="https://steriwave-uv.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline">
                                            {item.title}
                                        </a>):(
                                        <a>{item.title }</a> )}         
                                    </h4>
                                    <div className="space16"></div>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                           ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWork4;