import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const services = [
    { icon: "❤️", title: "Cardiology", desc: "Expert care for your heart and cardiovascular health." },
    { icon: "🚑", title: "Emergency Care", desc: "Emergency medical support when every second matters." },
    { icon: "🩺", title: "General Medicine", desc: "Complete healthcare for you and your family." },
    { icon: "🦷", title: "Dental Care", desc: "Healthy smiles with professional dental treatment." },
  ];

  const doctors = [
    {
      name: "Dr. Amit Sharma",
      specialty: "Cardiologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Dr. Priya Verma",
      specialty: "General Physician",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Dr. Rahul Mehta",
      specialty: "Neurologist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="hospital-home">
      {/* Navbar */}
      <header className="home-navbar">
        <Link to="/home" className="home-brand">
          <span className="home-logo">✚</span>
          <span>MediCare<span className="brand-highlight">.</span></span>
        </Link>

        <nav className="home-nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#contact">Contact</a>
        </nav>

        <Link to="/appointments" className="home-nav-btn">
          Book Appointment ↗
        </Link>
      </header>

      {/* Hero Section */}
      <section className="home-hero" id="home">
        <div className="hero-content">
          <span className="hero-badge">
            ✦ YOUR TRUSTED HEALTHCARE PARTNER
          </span>

          <h1>
            Your Health,
            <br />
            Our <span>Priority.</span>
          </h1>

          <p>
            Experience compassionate care, modern medical
            technology and expert doctors dedicated to
            keeping you and your family healthy.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-primary-btn">
              Book an Appointment <span>→</span>
            </a>
            <a href="#services" className="hero-secondary-btn">
              Explore Services
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-avatars">
              <span>👨‍⚕️</span>
              <span>👩‍⚕️</span>
              <span>👨🏻‍⚕️</span>
            </div>
            <div>
              <strong>Expert Medical Team</strong>
              <p>Care you can trust, every day.</p>
            </div>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85"
            alt="Doctor at MediCare Hospital"
          />

          <div className="hero-floating-card">
            <span className="floating-icon">✚</span>
            <div>
              <strong>Quality Healthcare</strong>
              <p>Your wellness comes first</p>
            </div>
          </div>

          <div className="hero-image-decoration" />
        </div>
      </section>

      {/* Stats */}
      <section className="home-stats">
        <div><h2>15+</h2><p>Years of Experience</p></div>
        <div><h2>25+</h2><p>Expert Doctors</p></div>
        <div><h2>10k+</h2><p>Happy Patients</p></div>
        <div><h2>24/7</h2><p>Emergency Support</p></div>
      </section>

      {/* About */}
      <section className="home-about" id="about">
        <div className="about-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
            alt="Healthcare professionals working together"
          />
          <div className="about-label">
            <strong>Care that matters</strong>
            <span>Every patient. Every day.</span>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">ABOUT MEDICARE</span>
          <h2>Healthcare with a human touch.</h2>
          <p>
            At MediCare Hospital, we believe everyone deserves
            quality healthcare. Our team combines medical
            expertise with compassion to make your care
            experience comfortable and supportive.
          </p>

          <div className="about-point">✓ Experienced medical professionals</div>
          <div className="about-point">✓ Patient-focused treatment plans</div>
          <div className="about-point">✓ Modern facilities and technology</div>

          <a href="#services" className="about-link">
            Discover Our Services →
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="home-services" id="services">
        <div className="section-heading">
          <span className="section-label">WHAT WE OFFER</span>
          <h2>Our Medical Services</h2>
          <p>Comprehensive healthcare services designed around you.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="home-service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#contact">Learn More →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section className="home-doctors" id="doctors">
        <div className="section-heading">
          <span className="section-label">MEET OUR TEAM</span>
          <h2>Our Expert Doctors</h2>
          <p>Dedicated specialists committed to your well-being.</p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <div className="home-doctor-card" key={doctor.name}>
              <img src={doctor.image} alt={doctor.name} />
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
                <a href="#contact">Book a Visit →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="home-contact" id="contact">
        <div>
          <span>WE ARE HERE FOR YOU</span>
          <h2>Your health journey starts here.</h2>
          <p>Connect with our team to plan your next visit.</p>
        </div>
        <a href="mailto:appointments@example.com">
          Contact Hospital ↗
        </a>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <Link to="/home" className="home-brand">
          <span className="home-logo">✚</span>
          <span>MediCare<span className="brand-highlight">.</span></span>
        </Link>

        <p>Compassionate care for a healthier tomorrow.</p>

        <span>© 2026 MediCare Hospital. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default Home;