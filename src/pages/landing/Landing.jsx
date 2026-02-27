import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Carbon<span style={{ color: '#588157' }}>Credit</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Empowering farmers, NGOs, and companies to trade carbon credits 
            and build a sustainable future.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/register" className={styles.primaryBtn}>
              Get Started
            </Link>
            <Link to="/login" className={styles.secondaryBtn}>
              Sign In
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=hero&backgroundColor=ffffff&color=000000&size=200" 
            alt="Hero"
            className={styles.abstractImage}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>10,000+</span>
          <span className={styles.statLabel}>Farmers</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>50,000+</span>
          <span className={styles.statLabel}>Trees Planted</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>100,000+</span>
          <span className={styles.statLabel}>tCO₂ Offset</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>500+</span>
          <span className={styles.statLabel}>Companies</span>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <img 
              src="https://api.dicebear.com/7.x/identicon/svg?seed=register&backgroundColor=ffffff&color=000000&size=60" 
              alt="Register"
              className={styles.stepIcon}
            />
            <h3>Register</h3>
            <p>Create your account as a Farmer, NGO, or Company</p>
          </div>
          
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <img 
              src="https://api.dicebear.com/7.x/identicon/svg?seed=project&backgroundColor=ffffff&color=000000&size=60" 
              alt="Create Project"
              className={styles.stepIcon}
            />
            <h3>Create Projects</h3>
            <p>Farmers register land and tree plantation projects</p>
          </div>
          
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <img 
              src="https://api.dicebear.com/7.x/identicon/svg?seed=verify&backgroundColor=ffffff&color=000000&size=60" 
              alt="Verification"
              className={styles.stepIcon}
            />
            <h3>Verification</h3>
            <p>NGOs and admins verify project authenticity</p>
          </div>
          
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>4</div>
            <img 
              src="https://api.dicebear.com/7.x/identicon/svg?seed=trade&backgroundColor=ffffff&color=000000&size=60" 
              alt="Trade"
              className={styles.stepIcon}
            />
            <h3>Trade Credits</h3>
            <p>Companies purchase carbon credits to offset emissions</p>
          </div>
        </div>
      </section>

      {/* For Farmers Section */}
      <section className={styles.forFarmers}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>For Farmers</h2>
          <p className={styles.sectionText}>
            Register your land, plant trees, and earn carbon credits. Get paid for 
            your contribution to a sustainable future.
          </p>
          <ul className={styles.benefitsList}>
            <li>🌱 Register multiple projects</li>
            <li>💰 Earn carbon credits</li>
            <li>📱 Track project status</li>
            <li>📸 Upload evidence easily</li>
          </ul>
          <Link to="/register" className={styles.learnMoreBtn}>
            Learn More →
          </Link>
        </div>
        <div className={styles.sectionImage}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=farmer&backgroundColor=ffffff&color=000000&size=200" 
            alt="For Farmers"
            className={styles.abstractImage}
          />
        </div>
      </section>

      {/* For NGOs Section */}
      <section className={styles.forNGOs}>
        <div className={styles.sectionImage}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=ngo&backgroundColor=ffffff&color=000000&size=200" 
            alt="For NGOs"
            className={styles.abstractImage}
          />
        </div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>For NGOs</h2>
          <p className={styles.sectionText}>
            Onboard farmers, manage groups, and assist with monitoring. Help build 
            sustainable communities.
          </p>
          <ul className={styles.benefitsList}>
            <li>🤝 Onboard multiple farmers</li>
            <li>📊 Track project performance</li>
            <li>✅ Assist with verification</li>
            <li>📈 Generate impact reports</li>
          </ul>
          <Link to="/register" className={styles.learnMoreBtn}>
            Learn More →
          </Link>
        </div>
      </section>

      {/* For Companies Section */}
      <section className={styles.forCompanies}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>For Companies</h2>
          <p className={styles.sectionText}>
            Purchase verified carbon credits, meet ESG goals, and showcase your 
            commitment to sustainability.
          </p>
          <ul className={styles.benefitsList}>
            <li>🏢 Browse carbon projects</li>
            <li>💚 Purchase verified credits</li>
            <li>📊 Track ESG impact</li>
            <li>📄 Generate reports</li>
          </ul>
          <Link to="/register" className={styles.learnMoreBtn}>
            Learn More →
          </Link>
        </div>
        <div className={styles.sectionImage}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=company&backgroundColor=ffffff&color=000000&size=200" 
            alt="For Companies"
            className={styles.abstractImage}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What People Say</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <img 
              src="https://api.dicebear.com/7.x/identicon/svg?seed=rajesh&backgroundColor=ffffff&color=000000&size=60" 
              alt="Farmer"
              className={styles.testimonialAvatar}
            />
            <p className={styles.testimonialText}>
              "I've earned over ₹50,000 from my agroforestry project. This platform changed my life!"
            </p>
            <p className={styles.testimonialName}>- Rajesh Kumar, Farmer</p>
          </div>
          
          <div className={styles.testimonialCard}>
            <img 
              src="https://api.dicebear.com/7.x/identicon/svg?seed=priya&backgroundColor=ffffff&color=000000&size=60" 
              alt="NGO"
              className={styles.testimonialAvatar}
            />
            <p className={styles.testimonialText}>
              "We've onboarded 500+ farmers and helped them earn carbon credits. Amazing impact!"
            </p>
            <p className={styles.testimonialName}>- Priya Sharma, NGO</p>
          </div>
          
          <div className={styles.testimonialCard}>
            <img 
              src="https://api.dicebear.com/7.x/identicon/svg?seed=amit&backgroundColor=ffffff&color=000000&size=60" 
              alt="Company"
              className={styles.testimonialAvatar}
            />
            <p className={styles.testimonialText}>
              "We've offset 10,000 tCO₂ and met our ESG goals. Great platform!"
            </p>
            <p className={styles.testimonialName}>- Amit Patel, EcoCorp</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Ready to Make a Difference?</h2>
        <p className={styles.ctaText}>
          Join thousands of farmers, NGOs, and companies building a sustainable future.
        </p>
        <div className={styles.ctaButtons}>
          <Link to="/register" className={styles.primaryBtn}>
            Get Started Now
          </Link>
          <Link to="/login" className={styles.secondaryBtn}>
            Sign In
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <img 
              src="https://api.dicebear.com/7.x/identicon/svg?seed=footer&backgroundColor=ffffff&color=000000&size=32" 
              alt="Logo"
              className={styles.footerIcon}
            />
            <span>CarbonCredit</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
          <p className={styles.copyright}>© 2024 CarbonCredit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;