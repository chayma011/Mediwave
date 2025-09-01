import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactInfo1 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_9rqgbts",
        "template_krdymes",
        form.current,
        "H8daCzSsDrGYzGqxl"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          form.current.reset(); // clear the form
        },
        (error) => {
          console.log(error.text);
          alert("❌ Something went wrong, please try again.");
        }
      );
  };

  return (
    <div>
      <div className="space100"></div>
      <div className="contact-page">
        <div className="container">
          <div className="row">
            {/* Left Side Info */}
            <div className="col-lg-6">
              <div className="contact-boxs">
                <div className="heading1">
                  <h2>Contact Information</h2>
                  <p>We have grown up with the internet revolution, and we <br /> know how to deliver on its</p>
                </div>

                <div className="contact-box">
                  <img src="/assets/img/icons/contact-page-icon1.png" alt="" />
                  <div style={{ paddingLeft: '30px' }}>
                    <h5>Contact Us</h5>
                    <a href="tel:(216)51 488 801">(216) 51 488 801</a>
                  </div>
                </div>

                <div className="contact-box">
                  <img src="/assets/img/icons/contact-page-icon2.png" alt="" />
                  <div style={{ paddingLeft: '30px' }}>
                    <h5>Send Us a Mail</h5>
                    <a href="mailto:admin@techxen.org">contact@mediwave.tn</a>
                  </div>
                </div>

                <div className="contact-box">
                  <img src="/assets/img/icons/contact-page-icon3.png" alt="" />
                  <div style={{ paddingLeft: '30px' }}>
                    <h5>Office Location</h5>
                    <p>
                    Alya Medicale building, rue des Olivier <br />
                    4001, Khzema, Sousse
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="col-lg-6">
              <div className="contact-form-details">
                <form ref={form} onSubmit={sendEmail}>
                 <div className="row"> 
                    <div className="col-lg-6"> 
                        <div className="single-input"> 
                            <input type="text" placeholder="First Name" /> 
                        </div>                         
                    </div> 
                    <div className="col-lg-6"> 
                        <div className="single-input"> 
                            <input type="text" placeholder="Last Name" /> 
                        </div> 
                    </div> 
                    <div className="col-lg-6"> 
                        <div className="single-input"> 
                            <input type="email" placeholder="Email" /> 
                        </div> 
                    </div>                                 
                    <div className="col-lg-6"> 
                        <div className="single-input"> 
                            <input type="number" placeholder="Phone" /> 
                        </div> 
                    </div>
                    <div className="col-lg-12"> 
                        <div className="single-input"> 
                            <input type="text" placeholder="Subject" /> 
                        </div>                            
                    </div> 
                    <div className="col-lg-12"> 
                        <div className="single-input"> 
                            <textarea cols="30" rows="5" placeholder="Message"></textarea> 
                        </div> 
                    </div> 
                    <div className="col-lg-12"> 
                        <button className="theme-btn1">Submit <span><i className="bi bi-arrow-right"></i></span></button> 
                    </div> 
                </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="contact-map-page">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo1;
