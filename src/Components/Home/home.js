import './home.css';
import { FaLaptopCode, FaCogs, FaChartLine, FaBullhorn, FaHandshake, FaClock, FaGlobe, FaThumbsUp } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import SubmitForm from '../SubmitForm/Submitform';
const steps = [
    {
      icon: 'https://img.icons8.com/ios-glyphs/90/FFC107/search.png',
      title: 'Discovery',
      description: 'We start with an in-depth consultation to understand your goals, needs, and vision for the project.',
    },
    {
      icon: 'https://img.icons8.com/ios-glyphs/90/FFC107/design.png',
      title: 'Design',
      description: 'Our team creates a unique design that combines functionality with aesthetics, tailored to your brand.',
    },
    {
      icon: 'https://img.icons8.com/ios-glyphs/90/FFC107/code.png',
      title: 'Development',
      description: 'We turn the design into a fully functional product using robust and scalable technologies.',
    },
    {
      icon: 'https://img.icons8.com/ios-glyphs/90/FFC107/settings.png',
      title: 'Testing',
      description: 'Every feature is rigorously tested to ensure optimal performance and a smooth user experience.',
    },
    {
      icon: 'https://img.icons8.com/ios-glyphs/90/FFC107/rocket.png',
      title: 'Launch',
      description: 'After final approvals, we launch the project, ensuring a smooth transition to your audience.',
    },
    {
      icon: 'https://img.icons8.com/ios-glyphs/90/FFC107/growth.png',
      title: 'Support & Growth',
      description: 'We provide ongoing support to help your project evolve and reach new heights.',
    },
  ];


const Home = () => {
    // Intersection Observer for animation on scroll
    const sectionRefs = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        sectionRefs.current.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionRefs.current.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };

    }, []);
    return (
        <div className="home-container">
            <section className="home-firstsection" ref={el => sectionRefs.current[0] = el}>
                    {/* Animated background elements */}
                <div className="animated-background">                
                    <div className="circle big-circle"></div>
                    <div className="circle medium-circle"></div>
                    <div className="circle small-circle"></div>
                    <div className="sphere striped-sphere"></div>
                    <div className="sphere polka-dot-sphere"></div>
                    <div className="ripple ripple-1"></div>
                    <div className="ripple ripple-2"></div>
                </div>
                <img
                    src="https://res.cloudinary.com/drevfgyks/image/upload/v1733832260/tech%20nanisai/Home-image-png_rbr3zi.png"
                    alt="home-banner-img"
                    className="home-banner-img"
                />
                <div className="home-firstsection-content">
                    <h2 className="home-firstsection-heading">
                    Make perfect <span className="title-business">business</span>
                    </h2>
                    <p className="home-firstsection-para">
                    In today’s digital age, having a strong online presence is essential for success. At Tech nanisai,
                    we specialize in creating stunning websites and powerful applications tailored to meet your unique
                    business needs. Whether you’re a startup or an established brand, our team of experienced developers
                    is here to help you thrive in the digital landscape.
                    </p> 
                    <p className="home-firstsection-para-mobile">
                    In the modern digital era, your online presence defines your success. At Tech Nanisai, we bring your vision to life 
                    with innovative websites and dynamic applications, tailored to elevate your business and set you apart from the 
                    competition.
                    </p>             
                </div>
            </section>
            <div className='button-container'>
                <button className='home-firstsection-button'><span>Contact Us<span/></span></button>
            </div>
            <section className="Product-container">
                <div className="all-products-container" ref={el => sectionRefs.current[1] = el}>
                    <div className="two-products-container">
                        <div className="products-container">
                            <FaLaptopCode className="icon-home" />
                            <p className="product-title">Web applications</p>
                        </div>
                        <div className="products-container">
                            <FaCogs className="icon-home" />
                            <p className="product-title">API's</p>
                        </div>
                    </div>
                    <div className="two-products-container">
                        <div className="products-container">
                            <FaChartLine className="icon-home" />
                            <p className="product-title">maintan & Support</p>
                        </div>
                        <div className="products-container">
                            <FaBullhorn className="icon-home" />
                            <p className="product-title">Digital marketing</p>
                        </div>
                    </div>
                </div>
                <div className="services-section" ref={el => sectionRefs.current[2] = el}>
                    <img 
                        src="https://res.cloudinary.com/drevfgyks/image/upload/v1730195027/tech%20nanisai/4421964-2_mxes99.jpg"
                        alt="services-banner-img"
                        className="home-services-img"
                    />
                </div>
            </section>
            <section className="home-aboutus-section">
                <h2 className="aboutus-heading">About Us</h2>
                <p className="aboutus-quotation">
                    "Our commitment is to transform visions into reality, delivering excellence and innovation every step of the way."
                </p>
                <p className="aboutus-description">
                    At Tech NaniSai, we specialize in crafting top-notch web applications and end-to-end digital solutions tailored to the unique needs of our clients. Our team is driven by the pursuit of quality and the promise to deliver projects on time, every time. From comprehensive project management to digital marketing strategies, we ensure each aspect of your online presence is handled with the utmost professionalism and expertise.  
                </p>
                <div className="aboutus-values">
                    <div className="value-container">
                        <FaHandshake className="value-icon" />
                        <p className="value-title">Trust & Reliability</p>
                        <p className="value-text">Building strong partnerships based on trust and transparent communication.</p>
                    </div>
                    <div className="value-container">
                        <FaClock className="value-icon" />
                        <p className="value-title">On-Time Delivery</p>
                        <p className="value-text">Commitment to delivering high-quality projects within your timeline.</p>
                    </div>
                    <div className="value-container">
                        <FaGlobe className="value-icon" />
                        <p className="value-title">Global Reach</p>
                        <p className="value-text">Providing solutions for a global audience with cutting-edge digital strategies.</p>
                    </div>
                    <div className="value-container">
                        <FaThumbsUp className="value-icon" />
                        <p className="value-title">Quality Assurance</p>
                        <p className="value-text">Ensuring every project meets our high standards of excellence.</p>
                    </div>
                </div>
            </section>
            <section>
                <div class="fixed-background-section">
                    <div class="fixed-bg-content">
                        <h1>INNOVATE | CREATE | SCALE | SUCCEED</h1>
                        <p>Empowering your vision, we take pride in delivering tailored solutions from concept to execution. Your success is our commitment, bringing innovation and precision to every project.</p>
                        <a href="#learn-more" className="learn-more-button">Learn More</a>
                    </div>
                </div>
            </section>
            <section>
                <div className="work-process-section">
                <h2>Our Workflow Process</h2>
                <p>Our seamless approach ensures that each project is executed to perfection, from start to finish.</p>
                <div className="workflow-steps">
                    {steps.map((step, index) => (
                    <div className="workflow-step" key={index}>
                        <div className="step-icon">
                        <img src={step.icon} alt={`${step.title} Icon`} />
                        </div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                    ))}
                </div>
                </div>
            </section>
            <section className='submitsection'>
                <SubmitForm/>
            </section>
            <section>
            <h1 className='Home-ourclints'>OUR CLINTS</h1>
                <div className="Home-testimonials-container">
                    {/* Client Feedback Container */}
                    <div className="Home-testimonials-feedback">
                        <h2 className="Home-testimonials-project-name">Project Name</h2>
                        <p className="Home-testimonials-description">
                            "This is the client's feedback text. They appreciated our work on this project and would highly recommend us!"
                            "This is the client's feedback text. They appreciated our work on this project and would highly recommend us!"
                        </p>
                        <p className="Home-testimonials-client-name">- Client Name</p>
                        <a 
                            href="https://client-website.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="Home-testimonials-link"
                        >
                            Visit Website
                        </a>
                    </div>
                    {/* Client Speaking Video Container */}
                    <div className="Home-testimonials-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sN-qiF60o6U?si=H63ziTKDQ8Ty1RZr" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share fullscreen" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>
                    </iframe>
                    </div>
                    </div>
            </section>
        </div>
    );
};

export default Home;
