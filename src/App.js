import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
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
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

function App() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'bot',
      message: 'Hello! Welcome to Cloud Sync. I\'m here to help you learn about our services. How can I assist you today?'
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
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
    AOS.init({
      duration: 1000,
      once: true
    });
    
    // EmailJS will be initialized later when credentials are ready
    // emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    const chatMessages = document.querySelector('.chat-messages');
    if (chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }, [chatMessages]);

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
      // Create mailto link
      const mailtoLink = `mailto:shyakasteven2023@gmail.com?subject=${encodeURIComponent(`Cloud Sync Contact: ${contactForm.subject}`)}&body=${encodeURIComponent(`
Name: ${contactForm.name}
Email: ${contactForm.email}
Subject: ${contactForm.subject}

Message:
${contactForm.message}

---
This message was sent from the Cloud Sync website contact form.
      `)}`;

      // Try to open email client
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
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
      category: "electronics",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Laptops & Computers",
      price: "From $500",
      description: "High-performance laptops and desktop computers for business and personal use with warranty and support."
    },
    {
      category: "electronics",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Smartphones & Tablets",
      price: "From $200",
      description: "Latest smartphones and tablets from top brands with warranty, accessories, and technical support."
    },
    {
      category: "electronics",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Accessories & Peripherals",
      price: "From $20",
      description: "Quality accessories including chargers, cases, headphones, keyboards, and other peripherals."
    },
    {
      category: "software",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "ERP Systems",
      price: "Custom Quote",
      description: "Enterprise Resource Planning systems customized for your business needs with AI-powered insights."
    },
    {
      category: "software",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "E-commerce Platforms",
      price: "Custom Quote",
      description: "Complete e-commerce solutions with payment integration, inventory management, and analytics."
    },
    {
      category: "software",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Business Intelligence",
      price: "Custom Quote",
      description: "Data analytics and reporting tools to transform your business insights and drive growth."
    }
  ];

  const testimonials = [
    {
      text: "Cloud Sync transformed our business operations with their custom ERP system. The AI integration has saved us countless hours and improved our efficiency significantly. Their team is professional and responsive.",
      author: "Jean Pierre Uwimana",
      position: "CEO, Tech Solutions Rwanda",
      rating: 5
    },
    {
      text: "Their mobile app development team delivered an exceptional product that exceeded our expectations. The user experience is outstanding and our customers love it. Highly recommended!",
      author: "Marie Claire Niyonsaba",
      position: "Marketing Director, Kigali Retail",
      rating: 5
    },
    {
      text: "The data analysis services provided by Cloud Sync helped us identify key growth opportunities. Their insights were invaluable for our strategic planning and business expansion.",
      author: "Emmanuel Ndayisaba",
      position: "Operations Manager, East Africa Logistics",
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

  const handleChatbotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    let botResponse = '';

    if (lowerMessage.includes('contact') || lowerMessage.includes('who') || lowerMessage.includes('speak')) {
      botResponse = 'For sales and marketing inquiries, please contact our Sales and Marketing Specialist:\n\n📧 Email: shyakasteven2023@gmail.com\n📞 Phone: +250782194138\n\nI can also help you learn more about our services. What would you like to know?';
    } else if (lowerMessage.includes('mobile') || lowerMessage.includes('app')) {
      botResponse = 'Our Mobile App Development service includes:\n• iOS and Android development\n• Cross-platform solutions\n• UI/UX design\n• App store optimization\n• Maintenance and updates\n\nWould you like to know more about our pricing or process?';
    } else if (lowerMessage.includes('web') || lowerMessage.includes('website')) {
      botResponse = 'Our Web Applications service includes:\n• Custom website development\n• E-commerce platforms\n• ERP systems\n• Business management tools\n• Cloud integration\n\nWhat type of web solution are you looking for?';
    } else if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
      botResponse = 'Our AI Integration services include:\n• Machine learning solutions\n• Predictive analytics\n• Process automation\n• Chatbot development\n• Data insights\n\nHow can AI benefit your business?';
    } else if (lowerMessage.includes('data') || lowerMessage.includes('analysis')) {
      botResponse = 'Our Data Analysis services include:\n• Business intelligence\n• Data visualization\n• Predictive modeling\n• Performance analytics\n• Custom reporting\n\nWhat data insights are you looking for?';
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      botResponse = 'Our pricing varies based on project requirements and complexity. For a detailed quote, please contact our Sales Specialist:\n\n📧 shyakasteven2023@gmail.com\n📞 +250782194138\n\nWhat type of project are you considering?';
    } else if (lowerMessage.includes('electronic') || lowerMessage.includes('device')) {
      botResponse = 'We offer a wide range of electronic devices:\n• Laptops and computers\n• Smartphones and tablets\n• Accessories and peripherals\n• All with warranty and support\n\nContact our sales team for current inventory and pricing.';
    } else {
      botResponse = 'I can help you with information about our services including mobile app development, web applications, AI integration, data analysis, and electronic devices. You can also ask about pricing or contact details. What would you like to know?';
    }

    return botResponse;
  };

  const sendMessage = () => {
    if (!userInput.trim()) return;

    const newUserMessage = {
      type: 'user',
      message: userInput
    };

    setChatMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    setIsTyping(true);

    // Simulate typing delay for more natural conversation
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        message: handleChatbotResponse(userInput)
      };
      setChatMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Cloud Sync</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
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
                <h1>Welcome to Cloud Sync</h1>
                <p>Leading technology solutions provider in Rwanda, specializing in software development, AI integration, data analysis, and electronic devices. Empowering businesses with innovative digital solutions since 2020.</p>
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
                      <h3>5+</h3>
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
                <div className="service-card">
                  <div className="service-icon">
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
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
              <div className="about-image">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cloud Sync Team" />
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="section-title text-start">
                <h2>About Cloud Sync</h2>
                <p>Based in Kigali, Rwanda, Cloud Sync is a dynamic technology company that combines software development expertise with electronic device distribution. We serve businesses across East Africa with innovative solutions.</p>
              </div>
              <div className="mt-4">
                <h5>Why Choose Cloud Sync?</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Custom software solutions tailored to your needs</li>
                  <li className="mb-2">✓ AI-powered automation and analytics</li>
                  <li className="mb-2">✓ Quality electronic devices with warranty</li>
                  <li className="mb-2">✓ Local support and maintenance services</li>
                  <li className="mb-2">✓ Competitive pricing and flexible payment options</li>
                  <li className="mb-2">✓ 24/7 technical support and consultation</li>
                </ul>
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
            <p>Discover our range of electronic devices and software solutions</p>
          </div>
          <Row>
            {products.map((product, index) => (
              <Col lg={4} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="menu-item">
                  <img src={product.image} alt={product.title} />
                  <div className="menu-item-content">
                    <h5 className="menu-item-title">{product.title}</h5>
                    <div className="menu-item-price">{product.price}</div>
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
            <p>Get in touch with us for your technology needs</p>
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
                    placeholder="Message" 
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {submitStatus === 'success' && (
                  <div className="form-feedback success">
                    ✅ Message sent successfully! Your email client should have opened. If it didn't, please email Steven directly at shyakasteven2023@gmail.com
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-feedback error">
                    ❌ Failed to open email client. Please email Steven directly at shyakasteven2023@gmail.com
                  </div>
                )}
                <div className="mt-3 text-muted small">
                  <p>💡 <strong>How it works:</strong> Clicking "Send Message" will open your email client with a pre-filled message to Steven. Just click send in your email app!</p>
                  <p>📧 <strong>Alternative:</strong> <a href="mailto:shyakasteven2023@gmail.com" className="text-primary">Email Steven directly</a></p>
                </div>
              </Form>
            </Col>
            <Col lg={4} data-aos="fade-left">
              <div className="contact-info">
                <h4><FaMapMarkerAlt className="me-2" />Location</h4>
                <p>Kigali, Rwanda<br />Central Business District</p>
                
                <h4><FaPhone className="me-2" />Call Us</h4>
                <p>+250 788 123 456<br />+250 789 123 456</p>
                
                <h4><FaEnvelope className="me-2" />Email Us</h4>
                <p>info@cloudsync.rw<br />support@cloudsync.rw</p>

                <h4><FaUsers className="me-2" />Sales & Marketing</h4>
                <p><strong>Steven Shyaka</strong><br />
                Sales & Marketing Specialist<br />
                📧 shyakasteven2023@gmail.com<br />
                📞 +250782194138</p>
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
              <h5>Cloud Sync</h5>
              <p>Leading technology solutions provider in Rwanda, specializing in software development, AI integration, and electronic devices.</p>
            </Col>
            <Col lg={3} md={6}>
              <h5>Useful Links</h5>
              <ul className="list-unstyled">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </Col>
            <Col lg={3} md={6}>
              <h5>Our Services</h5>
              <ul className="list-unstyled">
                <li><a href="#services">Mobile App Development</a></li>
                <li><a href="#services">Web Applications</a></li>
                <li><a href="#services">AI Integration</a></li>
                <li><a href="#services">Data Analysis</a></li>
                <li><a href="#services">Electronic Devices</a></li>
              </ul>
            </Col>
            <Col lg={3} md={6}>
              <h5>Contact Info</h5>
              <p>Kigali, Rwanda<br />
              Phone: +250 788 123 456<br />
              Email: info@cloudsync.rw<br />
              <strong>Sales:</strong> shyakasteven2023@gmail.com<br />
              <strong>Sales Phone:</strong> +250782194138</p>
            </Col>
          </Row>
          <div className="footer-bottom">
            <p>&copy; 2024 Cloud Sync. All Rights Reserved. | Based in Kigali, Rwanda</p>
          </div>
        </Container>
      </footer>

      {/* Chatbot */}
      <div className="chatbot-container">
        <Button 
          variant="primary" 
          className="chatbot-toggle"
          onClick={() => setShowChatbot(!showChatbot)}
          style={{ 
            position: 'relative',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            animation: 'pulse 2s infinite'
          }}
        >
          💬
        </Button>
        
        <Modal 
          show={showChatbot} 
          onHide={() => setShowChatbot(false)} 
          className="chatbot-modal"
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton style={{ background: 'linear-gradient(135deg, #cda45e 0%, #b8944a 100%)', color: 'white', border: 'none' }}>
            <Modal.Title style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              🤖 Cloud Sync Assistant
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="chatbot-body" style={{ padding: 0, height: '450px', display: 'flex', flexDirection: 'column', background: '#fafafa' }}>
            <div className="chat-messages" style={{ flex: 1, padding: '20px', overflowY: 'auto', maxHeight: '350px', scrollBehavior: 'smooth' }}>
              {chatMessages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.type}`} style={{ 
                  marginBottom: '15px', 
                  display: 'flex', 
                  opacity: 0, 
                  transform: 'translateY(20px)', 
                  animation: `messageSlideIn 0.5s ease forwards ${index * 0.1}s` 
                }}>
                  <div className="message-content" style={{
                    maxWidth: '80%',
                    padding: '15px 18px',
                    borderRadius: '18px',
                    fontSize: '0.9rem',
                    lineHeight: 1.4,
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    background: msg.type === 'user' 
                      ? 'linear-gradient(135deg, #cda45e 0%, #b8944a 100%)' 
                      : 'white',
                    color: msg.type === 'user' ? 'white' : '#6c757d',
                    borderBottomRightRadius: msg.type === 'user' ? '5px' : '18px',
                    borderBottomLeftRadius: msg.type === 'bot' ? '5px' : '18px',
                    boxShadow: msg.type === 'user' 
                      ? '0 5px 15px rgba(205, 164, 94, 0.3)' 
                      : '0 5px 15px rgba(0, 0, 0, 0.1)',
                    border: msg.type === 'bot' ? '1px solid #e9ecef' : 'none'
                  }}>
                    {msg.message.split('\n').map((line, i) => (
                      <p key={i} style={{ margin: 0, marginBottom: '5px', animation: 'textFadeIn 0.6s ease' }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="chat-message bot" style={{ marginBottom: '15px', display: 'flex', justifyContent: 'flex-start' }}>
                  <div className="typing-indicator" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '15px 18px',
                    background: 'white',
                    borderRadius: '18px',
                    borderBottomLeftRadius: '5px',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e9ecef',
                    maxWidth: '80px'
                  }}>
                    <div className="typing-dot" style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#cda45e',
                      animation: 'typing 1.4s infinite ease-in-out'
                    }}></div>
                    <div className="typing-dot" style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#cda45e',
                      animation: 'typing 1.4s infinite ease-in-out',
                      animationDelay: '-0.16s'
                    }}></div>
                    <div className="typing-dot" style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#cda45e',
                      animation: 'typing 1.4s infinite ease-in-out',
                      animationDelay: '0s'
                    }}></div>
                  </div>
                </div>
              )}
            </div>
            <div className="chat-input" style={{
              padding: '20px',
              borderTop: '1px solid #e9ecef',
              display: 'flex',
              gap: '12px',
              background: 'white',
              borderRadius: '0 0 20px 20px'
            }}>
              <Form.Control
                type="text"
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isTyping}
                style={{
                  borderRadius: '25px',
                  border: '2px solid #e9ecef',
                  padding: '12px 18px',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem'
                }}
              />
              <Button 
                variant="primary" 
                onClick={sendMessage}
                disabled={isTyping || !userInput.trim()}
                style={{
                  borderRadius: '25px',
                  padding: '12px 20px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  minWidth: '80px'
                }}
              >
                Send
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default App; 