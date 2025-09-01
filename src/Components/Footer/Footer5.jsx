import { Link } from "react-router-dom";

const Footer5 = () => {
    return (
        <div className="footer7 _relative">
        <div className="container">
             <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                       <div className="single-footer-items footer-logo-area">
                            <div className="footer-logo">
                              <a href=""><img src="/assets/img/logo/mediwave1.png" alt="" style={{ width: '120px', height: 'auto' }} /></a>
                            </div>
                            <div className="space20"></div>
                            <div className="heading1">
                              <p>Mediwave is here to answer all your questions and explore how our solutions can transform your healthcare practices. Contact us today and let’s discover a future where technology and health are one. </p>
                            </div>
                            <ul className="social-icon">
                            <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                 {/* <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                 <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                                 <li><a href="#"><i className="bi bi-instagram"></i></a></li> */}
                            </ul>
                       </div>
                  </div>

                  <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items" style={{ textAlign: 'center' }}>
                            <h3>Service We Offer</h3>

                            <ul className="menu-list">
                                <li>Cloud Computing Solution</li>
                                 <li>Cybersecurity & Compliance</li>
                                 <li>Software Development</li>
                                 <li>It Consulting & Support</li>
                            </ul>
                       </div>
                  </div>

                  {/* <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Useful Links</h3>

                            <ul className="menu-list">
                                <li><Link to="/about">About Us </Link></li>
                                 <li><Link to="/service">Our Services</Link></li>
                                 <li><Link to="/blog">Blog & News</Link></li>
                                 <li><Link to="/project">Project</Link></li>
                                 <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                       </div>
                  </div> */}


                  <div className="col-lg-3 col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Contact Us</h3>

                            {/* <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon1.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="tel:0500222333">0500 222 333</a>
                              </div>
                            </div> */}

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon2.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="tel:+216 51 488 801">+216 51 488 801</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon3.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="mailto:admin@techxen.org">contact@mediwave.tn</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon4.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="mailto:admin@techxen.org">www.mediwave.tn</a>
                              </div>
                            </div>

                       </div>
                  </div>

             </div>

             <div className="space40"></div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                   <div className="coppyright">
                     <p>Copyright @2025 Mediwave. All Rights Reserved</p>
                   </div>
              </div>
         </div>
          </div>
     </div>

      </div>
    );
};

export default Footer5;