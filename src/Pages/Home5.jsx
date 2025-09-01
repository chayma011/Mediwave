import About5 from "../Components/About/About5";
import Brand1 from "../Components/Brand/Brand1";
import HeroBanner5 from "../Components/HeroBanner/HeroBanner5";
import HowWork4 from "../Components/HowWork/HowWork4";
import Services5 from "../Components/Services/Services5";
import Skill1 from "../Components/Skill/Skill1";
import Team3 from "../Components/Team/Team3";
import Testimonial4 from "../Components/Testimonial/Testimonial4";
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import React from "react";
import { Helmet } from "react-helmet";
const Home5 = () => {
    return (
        <div>
        <Helmet>
        <title>Mediwave | Innovative Healthcare & Medical IT Solutions</title>
        <meta
          name="description"
          content="Mediwave pioneers medical innovation with AI-driven healthcare solutions, immersive therapies, sterilization technology, and advanced data management. Transform your well-being with technology and compassion."
        />
        <meta
          name="keywords"
          content="healthcare technology, medical innovation, mediwave, AI healthcare, medical IT solutions, sterilization systems, immersive therapy, Artificielle Intelligence, IT, Company"
        />
        <meta name="author" content="Mediwave" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Mediwave | Innovative Healthcare Solutions" />
        <meta
          property="og:description"
          content="Blending advanced technology with human compassion to reinvent healthcare."
        />
        <meta property="og:image" content="/assets/img/hero/hero2-main-img2.png" />
        <meta property="og:url" content="https://mediwave.tn" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mediwave | Healthcare & IT Solutions" />
        <meta
          name="twitter:description"
          content="Pioneers of medical innovation with AI-driven and patient-centered healthcare solutions."
        />
        <meta name="twitter:image" content="/assets/img/hero/hero2-main-img2.png" />
      </Helmet>   
            <div id="1">
                <HeroBanner5
                subtitle="YOUR PATHWAY TO MODERN HEALTHCARE"
                title="Harness Technology Drive Growth with Our IT Solutions"
                content="Blending Advanced Technology with Human Compassion to Reinvent Healthcare and Transform Your Well-being."
                btnone="Contact Us"
                btnoneurl="/contact"
                // btntwo="Discover More"
                // btntwourl="/service"
                image1="/assets/img/hero/hero2-main-img2.png"
                // shape2="/assets/img/shapes/hero7-shape1.png"
                shape3="/assets/img/shapes/hero7-shape2.png"
                shape4="/assets/img/shapes/hero7-shape3.png"
                shape5="/assets/img/shapes/hero7-shape7.png"
                ></HeroBanner5>
            </div>
            
            <div id="2">
                <About5
                image1="/assets/img/about/aaa.jpg"
                // experienceNum="20+"
                // experienceTitle="Year Of Experience"
                subTitle="About Us"
                title="Pioneers of Medical Innovation</span>"
                content="Mediwave is more than a medical technology company; we are visionaries pushing the boundaries of what’s possible in healthcare. Our expertise spans a range of fields, from immersive therapies to advanced sterilization solutions and medical data management. Our flagship products are designed to meet the evolving needs of patients and professionals while anticipating tomorrow’s challenges."
                featurelist={[
                    "AI-Driven innovation.",
                    "Secure & reliable systems.",
                    "Seamless assistance with Smart solutions.",
                ]}
                // btnname="Learn More"
                // btnurl="/about"
                ></About5>
            </div>
            <div id="3">
                <Services5></Services5>
            </div>
            <div id="4">
                <HowWork4></HowWork4>
            </div>
            <div id="5">
                <Skill1></Skill1>
            </div>
            
            <div id="6">
                <Team3></Team3>
            </div>
            <MarqueeText></MarqueeText>
            <Testimonial4></Testimonial4>
            {/* <Faq2></Faq2> */}
            <div id="7">
                <Brand1></Brand1>
            </div>
            <div id="8">
                <ContactInfo1></ContactInfo1>
            </div>
            {/* <Blog5></Blog5>
            <Cta4></Cta4> */}
        </div>
        
    );
};

export default Home5;