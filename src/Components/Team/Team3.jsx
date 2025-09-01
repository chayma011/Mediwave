import data from '../../Data/home5/team5.json';
import SectionTitle3 from '../Common/SectionTitle3';
import { useState, useEffect } from 'react';

const Team3 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % Math.ceil(data.length / 3));
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, data.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(data.length / 3));
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(data.length / 3)) % Math.ceil(data.length / 3));
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    const startIndex = currentSlide * 3;
    const visibleTeamMembers = data.slice(startIndex, startIndex + 3);

    return (
        <div className="team7 sp bg5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="heading7">
                <SectionTitle3
                    SubTitle="Our Team"
                    Title="The Team Behind the <span>Solutions</span>"
                    content=""
                ></SectionTitle3>
                </div>
              </div>
            </div>
            <div className="space30"></div>
            
            {/* Carousel Container */}
            <div className="team-carousel-container" style={{ position: 'relative' }}>
                <div className="row">
                    {visibleTeamMembers.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="700">
                            <div className="team-box">
                                <div className="image image-anime">
                                    <img src={item.img} alt="" />
                                    <div className="hover-area">
                                        <ul>
                                            <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                            <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                            <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                                            <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="heading-area">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button 
                    className="carousel-control-prev" 
                    onClick={prevSlide}
                    style={{
                        position: 'absolute',
                        left: '-90px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(13, 69, 237, 0.5)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        color: 'white',
                        fontSize: '20px',
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                >
                    <i className="bi bi-chevron-left"></i>
                </button>
                
                <button 
                    className="carousel-control-next" 
                    onClick={nextSlide}
                    style={{
                        position: 'absolute',
                        right: '-90px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(13, 69, 237, 0.5)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        color: 'white',
                        fontSize: '20px',
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                >
                    <i className="bi bi-chevron-right"></i>
                </button>

                {/* Dots Indicator */}
                <div className="carousel-dots" style={{ 
                    textAlign: 'center', 
                    marginTop: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px'
                }}>
                    {Array.from({ length: Math.ceil(data.length / 3) }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                border: 'none',
                                background: currentSlide === index ? '#007bff' : '#ccc',
                                cursor: 'pointer',
                                transition: 'background 0.3s ease'
                            }}
                        />
                    ))}
                </div>
            </div>
          </div>
        </div>
    );
};

export default Team3;