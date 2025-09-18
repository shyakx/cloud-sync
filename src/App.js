import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Button, Form } from 'react-bootstrap';
import { 
  FaMobile, 
  FaLaptop, 
  FaCloud, 
  FaChartLine, 
  FaCogs, 
  FaHeadset,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaDatabase,
  FaShieldAlt,
  FaGlobe,
  FaUsers,
  FaAward,
  FaRocket
} from 'react-icons/fa';
import AOS from 'aos';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';

function App() {
  
  // Contact form states
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Initialize AOS with optimized settings for better performance
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
    
    // Initialize EmailJS with your public key
    emailjs.init("Dn6w5-kRtXr99jX4v");
    
    // Lazy loading for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Cleanup
    return () => {
      images.forEach(img => imageObserver.unobserve(img));
    };
  }, []);


  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: contactForm.name,
        from_email: contactForm.email,
        subject: contactForm.subject,
        message: contactForm.message,
        to_email: 'cloudsync.rw@gmail.com'
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_m7aj4ca',
        'template_18ebwqg', 
        templateParams
      );

      console.log('Email sent successfully:', result);
      
      // Show success message
      setSubmitStatus('success');
      setContactForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: <FaMobile />,
      title: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android platforms with modern UI/UX design, real-time synchronization, and offline capabilities."
    },
    {
      icon: <FaLaptop />,
      title: "Web Applications",
      description: "Scalable web applications including ERP systems, e-commerce platforms, and business management tools with cloud integration."
    },
    {
      icon: <FaCloud />,
      title: "AI Integration",
      description: "Advanced AI and machine learning solutions integrated into your existing systems for enhanced automation and decision-making."
    },
    {
      icon: <FaChartLine />,
      title: "Data Analysis",
      description: "Comprehensive data analysis and business intelligence solutions to drive informed decision-making and strategic planning."
    },
    {
      icon: <FaCogs />,
      title: "Management Tools",
      description: "Custom management tools and software solutions tailored to your business needs and workflows with real-time reporting."
    },
    {
      icon: <FaHeadset />,
      title: "Technical Support",
      description: "24/7 technical support and maintenance services to ensure your systems run smoothly and efficiently."
    }
  ];

  const products = [
    {
      id: 1,
      category: "software",
      title: "Custom Software Development",
      price: "From $5,000",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
      description: "Tailored software solutions designed specifically for your business needs and requirements."
    },
    {
      id: 2,
      category: "software",
      title: "Mobile App Development",
      price: "From $3,000",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
      description: "Native and cross-platform mobile applications for iOS and Android platforms."
    },
    {
      id: 3,
      category: "software",
      title: "Web Application Development",
      price: "From $4,000",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      description: "Scalable web applications with modern frameworks and cloud integration."
    },
    {
      id: 4,
      category: "software",
      title: "AI & Machine Learning Solutions",
      price: "From $8,000",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
      description: "Advanced AI integration and machine learning models for business automation."
    },
    {
      id: 5,
      category: "software",
      title: "Data Analysis & BI Tools",
      price: "From $6,000",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      description: "Comprehensive data analysis and business intelligence solutions."
    },
    {
      id: 6,
      category: "software",
      title: "ERP System Development",
      price: "From $15,000",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400",
      description: "Enterprise Resource Planning systems tailored to your business processes."
    }
  ];

  const testimonials = [
    {
      text: "Cloud Sync Rwanda helped us build a professional e-commerce platform that sells flowers and cosmetics. Their team is incredibly professional and the results speak for themselves - our sales have significantly boosted since working with them. They truly understand e-commerce and delivered exactly what we needed.",
      author: "Akazuba Florist",
      position: "Owner, Akazuba Florist - E-commerce Store",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <FaDatabase />,
      title: "Cloud Solutions",
      description: "Secure cloud infrastructure and data management solutions"
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description: "Advanced security measures to protect your business data"
    },
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      description: "Serving clients across East Africa with local expertise"
    },
    {
      icon: <FaUsers />,
      title: "Expert Team",
      description: "Experienced developers and consultants at your service"
    },
    {
      icon: <FaAward />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control for all projects"
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "Cutting-edge technology solutions for modern businesses"
    }
  ];


  return (
    <div className="App">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand 
            href="#home" 
            className="d-flex align-items-center"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="fw-bold fs-4">Cloud Sync</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </Nav.Link>
              <Nav.Link 
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Services
              </Nav.Link>
              <Nav.Link 
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Products
              </Nav.Link>
              <Nav.Link 
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Testimonials
              </Nav.Link>
              <Nav.Link 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <div className="hero-content">
                <h1>Welcome to Cloud Sync Rwanda</h1>
                <p>Leading technology solutions provider in Rwanda, specializing in software development, AI integration, data analysis, and electronic devices. Empowering businesses with innovative digital solutions since 2022. Based in Kigali, Rwanda.</p>
                <div className="d-flex gap-3">
                  <Button variant="primary" size="lg" href="#services">Our Services</Button>
                  <Button variant="outline-primary" size="lg" href="#contact">Contact Us</Button>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="hero-stats">
                <Row>
                  <Col md={6} className="text-center mb-4">
                    <div className="stat-item">
                      <h3>50+</h3>
                      <p>Projects Completed</p>
                    </div>
                  </Col>
                  <Col md={6} className="text-center mb-4">
                    <div className="stat-item">
                      <h3>30+</h3>
                      <p>Happy Clients</p>
                    </div>
                  </Col>
                  <Col md={6} className="text-center mb-4">
                    <div className="stat-item">
                      <h3>3+</h3>
                      <p>Years Experience</p>
                    </div>
                  </Col>
                  <Col md={6} className="text-center mb-4">
                    <div className="stat-item">
                      <h3>24/7</h3>
                      <p>Support Available</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5">
        <Container>
          <div className="section-title" data-aos="fade-up">
            <h2>Our Services</h2>
            <p>Comprehensive technology solutions to drive your business forward</p>
          </div>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-card">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5" style={{backgroundColor: 'var(--light-bg)'}}>
        <Container>
          <div className="section-title" data-aos="fade-up">
            <h2>Why Choose Cloud Sync</h2>
            <p>We deliver excellence through innovation and expertise</p>
          </div>
          <Row>
            {features.map((feature, index) => (
              <Col lg={4} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="feature-card">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <div className="about-content">
                <h2>About Cloud Sync Rwanda</h2>
                <p className="lead">Based in Kigali, Rwanda, Cloud Sync Rwanda is a dynamic technology company that specializes in software development and innovative digital solutions. We serve businesses across East Africa with cutting-edge technology services.</p>
                
                <div className="mt-5">
                  <h5>Why Choose Cloud Sync Rwanda?</h5>
                  <ul>
                    <li>Custom software solutions tailored to your needs</li>
                    <li>AI-powered automation and analytics</li>
                    <li>Local support and maintenance services</li>
                    <li>Competitive pricing and flexible payment options</li>
                    <li>24/7 technical support and consultation</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="about-image text-center">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Cloud Sync professional team working on technology solutions in Kigali, Rwanda" 
                  className="img-fluid"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products Section */}
      <section id="products" className="menu-section">
        <Container>
          <div className="section-title" data-aos="fade-up">
            <h2>Our Products & Solutions</h2>
            <p>Discover our range of software solutions and digital services</p>
          </div>
          <Row>
            {products.map((product, index) => (
              <Col lg={4} md={6} key={product.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="menu-item">
                  <img 
                    src={product.image} 
                    alt={`${product.title} - Cloud Sync technology solution`} 
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  <div className="menu-item-content">
                    <h5 className="menu-item-title">{product.title}</h5>
                    <p className="menu-item-description">{product.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <Container>
          <div className="section-title" data-aos="fade-up">
            <h2>What Our Clients Say</h2>
            <p>Testimonials from satisfied customers across Rwanda and East Africa</p>
          </div>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="testimonial-card">
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{color: 'var(--primary-color)'}}>★</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <h6 className="testimonial-author">{testimonial.author}</h6>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <Container>
          <div className="section-title" data-aos="fade-up">
            <h2>Contact Us</h2>
            <p>Get in touch with us for your software development needs</p>
          </div>
          <Row>
            <Col lg={8} data-aos="fade-right">
              <Form onSubmit={handleContactSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="text" 
                        placeholder="Your Name" 
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactFormChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="email" 
                        placeholder="Your Email" 
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactFormChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="text" 
                    placeholder="Subject" 
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactFormChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    placeholder="Your Message" 
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    required
                  />
                </Form.Group>
                <Button 
                  variant="primary" 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {submitStatus === 'success' && (
                  <div className="alert alert-success mt-3">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="alert alert-danger mt-3">
                    Error sending message. Please try again or contact us directly.
                  </div>
                )}
              </Form>
            </Col>
            <Col lg={4} data-aos="fade-left">
              <div className="contact-info">
                <h4><FaMapMarkerAlt className="me-2" />Our Location</h4>
                <p>Kigali, Rwanda<br />East Africa</p>

                <h4><FaPhone className="me-2" />Call Us</h4>
                <p>+250 782 194 138<br />+250 793 463 570</p>

                <h4><FaEnvelope className="me-2" />Email Us</h4>
                <p>cloudsync.rw@gmail.com<br />support@cloudsync.rw</p>

                <h4><FaUsers className="me-2" />Our Team</h4>
                <p>Our dedicated team of professionals is ready to help you with your technology needs. Contact us for personalized assistance.</p>

                <h4><FaGlobe className="me-2" />Follow Us</h4>
                <p>
                  <a href="https://www.instagram.com/cloudsync.c?igsh=MXd4d3Z0YXk3bHB0NA%3D%3D&utm_source=qr" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     style={{ color: '#E4405F', textDecoration: 'none' }}>
                    📸 @cloudsync.c
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="text-center text-lg-start">
                <h5>Cloud Sync</h5>
                <p>Leading technology solutions provider in Rwanda, specializing in software development, AI integration, and data analysis. Empowering businesses with innovative digital solutions since 2022.</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <h5>Useful Links</h5>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </Col>
            <Col lg={3} md={6}>
              <h5>Our Services</h5>
              <ul>
                <li>Mobile App Development</li>
                <li>Web Applications</li>
                <li>AI Integration</li>
                <li>Data Analysis</li>
                <li>Custom Software</li>
              </ul>
            </Col>
            <Col lg={3} md={6}>
              <h5>Contact Info</h5>
              <div className="contact-info" style={{ background: 'transparent' }}>
                <p>Kigali, Rwanda</p>
                <p>Phone: +250 782 194 138</p>
                <p>Email: cloudsync.rw@gmail.com</p>
                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/cloudsync.c?igsh=MXd4d3Z0YXk3bHB0NA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">@cloudsync.c</a></p>
              </div>
            </Col>
          </Row>
          <div className="footer-bottom">
            <p>© 2024 Cloud Sync. All Rights Reserved. | Based in Kigali, Rwanda.</p>
          </div>
        </Container>
      </footer>

    </div>
  );
}

export default App;