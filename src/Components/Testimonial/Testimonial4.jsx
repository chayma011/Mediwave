import SectionTitle3 from "../Common/SectionTitle3";

const Testimonial4 = () => {
    // Team activities data
    const activities = [
        {
            id: 1,
            title: "Paintball Day",
            image: "/assets/img/testimonial/team1.jpg"
        },
        {
            id: 2,
            title: "Paintball Day",
            image: "/assets/img/testimonial/team2.jpg"
        },
        {
            id: 3,
            title: "Paintball Day",
            image: "/assets/img/testimonial/team.jpg"
        }
    ];

    return (
        <div className="tes7 sp">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto text-center">
                        <div className="heading7">
                        <SectionTitle3
                                SubTitle="Our Activities"
                                Title="Team <span>Building</span>"
                                content="Building stronger teams through collaboration, innovation, and shared experiences."
                            ></SectionTitle3>
                        </div>
                    </div>
                </div>
                <div className="space60"></div>
                
                {/* Activities Photo Gallery */}
                <div className="row">
                    {activities.map((activity, index) => (
                        <div key={activity.id} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="900">
                            <div className="activity-card" style={{
                                borderRadius: '15px',
                                overflow: 'hidden',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-5px)';
                                e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                            }}>
                                <div className="activity-image" style={{ position: 'relative' }}>
                                    <img 
                                        src={activity.image} 
                                        alt={activity.title}
                                        style={{ 
                                            width: '100%', 
                                            height: '250px', 
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <div className="activity-overlay" style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                        color: 'white',
                                        padding: '20px',
                                        transform: 'translateY(100%)',
                                        transition: 'transform 0.3s ease'
                                    }}>
                                        <h5 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
                                            {activity.title}
                                        </h5>
                                    </div>
                                </div>
                                {/* <div className="activity-content" style={{
                                    padding: '20px',
                                    background: 'white'
                                }}>
                                    <h5 style={{ 
                                        margin: 0, 
                                        fontSize: '16px', 
                                        fontWeight: 'bold',
                                        color: '#333',
                                        textAlign: 'center'
                                    }}>
                                        {activity.title}
                                    </h5>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial4;