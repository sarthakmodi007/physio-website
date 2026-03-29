import Image from "next/image";

const services = [
  {
    title: "Orthopaedic Physiotherapy",
    description:
      "Focused care for neck, back, knee, and joint pain with manual therapy, guided exercise, and movement correction.",
  },
  {
    title: "Sports Injury Rehabilitation",
    description:
      "Targeted recovery plans for sports injuries to restore strength, flexibility, balance, and safe return to activity.",
  },
  {
    title: "Post-Operative Rehabilitation",
    description:
      "Structured rehab after surgery, fracture, or immobilization to rebuild mobility, confidence, and daily function.",
  },
  {
    title: "Neck, Back & Knee Pain",
    description:
      "Evidence-based treatment for stiffness, posture-related pain, slip disc, sciatica, and recurring spine discomfort.",
  },
  {
    title: "Neuro Care & Stroke Rehab",
    description:
      "Supportive rehabilitation for paralysis, stroke recovery, balance challenges, and functional independence.",
  },
  {
    title: "Muscle & Joint Injury Care",
    description:
      "Treatment for muscle strain, joint injury, shoulder pain, and movement restrictions with progressive rehab support.",
  },
];

const highlights = [
  "Personalized treatment plans by Dr. Priya Chudasama (PT), A.I.P",
  "Specialized physiotherapy for pain management and post-operative recovery",
  "Home visit available for patients needing convenient rehabilitation support",
  "Patient-friendly clinic with appointment-based focused consultations",
];

const testimonials = [
  {
    name: "Priya Sharma",
    stars: "5/5",
    review:
      "The team helped me recover from severe neck pain with patience and clarity. I felt supported from the very first session.",
  },
  {
    name: "Rahul Mehta",
    stars: "5/5",
    review:
      "After my ACL surgery, their rehab program gave me structure and confidence. My strength and mobility improved every week.",
  },
  {
    name: "Ananya Kapoor",
    stars: "5/5",
    review:
      "I came in with posture-related back pain from long desk hours. The exercises were practical, and the relief was noticeable.",
  },
];

const metrics = [
  { value: "A.I.P", label: "Qualified and certified physiotherapy care" },
  { value: "Home Visit", label: "Available for selected rehabilitation needs" },
  { value: "By Appointment", label: "Focused one-on-one consultation model" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero-section" id="home">
        <div className="hero-overlay" />
        <header className="topbar">
          <a className="brand" href="#home">
            <Image
              className="brand-mark"
              src="/wellness-logo.svg"
              alt="Wellness Physiocare logo"
              width={48}
              height={48}
            />
            <span>
              Wellness Physiocare
              <small>Dr. Priya Chudasama (PT), A.I.P</small>
            </span>
          </a>

          <nav className="topnav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#why-us">Why Choose Us</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-content section-frame">
          <div className="hero-copy">
            <p className="eyebrow">Pain Relief, Sport Injury, Neurocare, Post-Operative Rehab</p>
            <h1>Restore Movement. Relieve Pain. Live Better.</h1>
            <p className="hero-text">
              Wellness Physiocare offers specialized physiotherapy care for pain
              management, sports physiotherapy, neuro care, and rehabilitation.
              Every session is designed to help you move better and live
              pain-free.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Book Appointment
              </a>
              <a className="button button-secondary" href="tel:+919313587442">
                Contact Us
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Clinic overview">
            <p className="card-label">Healing Through Movement</p>
            <h2>Specialized physiotherapy care with your recovery as the priority</h2>
            <ul className="feature-list">
              <li>Pain management, rehabilitation, and sports physiotherapy</li>
              <li>Neck, back, knee, muscle, and joint injury treatment</li>
              <li>Home visit available and consultation by appointment</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="stats-band section-frame" aria-label="Clinic highlights">
        {metrics.map((metric) => (
          <article className="stat-card" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <section className="content-section section-frame" id="about">
        <div className="section-heading">
          <p className="eyebrow">About Us</p>
          <h2>Expert physiotherapy care led by Dr. Priya Chudasama (PT)</h2>
        </div>

        <div className="about-grid">
          <div className="info-panel">
            <p>
              Wellness Physiocare is dedicated to helping patients recover from
              pain, injury, and movement limitations with calm, supportive, and
              practical treatment. The clinic focuses on personalized care for
              orthopedic issues, neurological rehabilitation, and sports injury
              recovery.
            </p>
            <p>
              Led by Dr. Priya Chudasama (PT), A.I.P, the clinic combines
              therapeutic exercise, pain management, post-operative rehab, and
              movement-based recovery strategies to support long-term results.
            </p>
          </div>

          <div className="info-panel accent-panel">
            <h3>What patients can expect</h3>
            <ul className="check-list">
              <li>One-on-one assessments with clear treatment explanations</li>
              <li>Care plans based on pain condition, injury stage, and daily needs</li>
              <li>Appointment-based consultations in a patient-friendly setting</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section section-frame" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Services inspired directly by your visiting card offerings</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon" aria-hidden="true">
                <span />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-frame split-section" id="why-us">
        <div className="section-heading split-heading">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Specialized physiotherapy care for pain relief and recovery</h2>
          <p className="section-text">
            The clinic focuses on pain management, post-operative rehab, sports
            physiotherapy, and functional recovery with attention to each
            patient&apos;s comfort and progress.
          </p>
        </div>

        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight-card" key={item}>
              <span className="highlight-dot" aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-frame" id="testimonials">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>Kind words from patients who trusted us with their recovery</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <p className="stars" aria-label={`${testimonial.stars} rating`}>
                {testimonial.stars}
              </p>
              <p>{testimonial.review}</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-frame contact-section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Contact Us</p>
          <h2>Book your appointment with Wellness Physiocare</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-cards">
            <article className="contact-card">
              <h3>Visit the Clinic</h3>
              <p>B/707, Saujanya - 1, Near Anupam Cinema</p>
              <p>Khokhara, Ahmedabad 380021</p>
            </article>

            <article className="contact-card">
              <h3>Call or Email</h3>
              <p>
                <a href="tel:+919313587442">+91 93135 87442</a>
              </p>
              <p>
                <span>Available by phone appointment</span>
              </p>
            </article>

            <article className="contact-card">
              <h3>Clinic Hours</h3>
              <p>By appointment only</p>
              <p>Home visit available on request</p>
            </article>
            <div className="map-frame">
              <iframe
                title="Wellness Physiocare clinic location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4075935650826!2d72.6165784!3d23.008802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87000b9c80df%3A0x582cc5612cbde241!2sSAUJANYA%201%2C%20NEAR%20ANUPAM%20CINEMA%2CKHOKHARA%2CAHMEDABAD!5e0!3m2!1sen!2sin!4v1774720664204!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="appointment-form">
            <h3>Appointment Request Form</h3>
            <p>
              Share your pain area or rehab need, and Wellness Physiocare will
              contact you to confirm your appointment.
            </p>

            <label>
              Full Name
              <input type="text" name="name" placeholder="Enter your full name" />
            </label>

            <label>
              Phone Number
              <input type="tel" name="phone" placeholder="+91 93135 87442" />
            </label>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                placeholder="Optional email address"
              />
            </label>

            <label>
              Service Needed
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Describe Your Concern
              <textarea
                name="message"
                rows={5}
                placeholder="Share your symptoms, pain area, injury history, or rehab goals"
              />
            </label>

            <button className="button button-primary" type="submit">
              Request Appointment
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-frame footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-row">
              <Image
                className="footer-logo"
                src="/wellness-logo.svg"
                alt="Wellness Physiocare logo"
                width={54}
                height={54}
              />
              <div>
                <h3>Wellness Physiocare</h3>
                <p>Dr. Priya Chudasama (PT), A.I.P</p>
              </div>
            </div>
            <p className="footer-copy">
              Specialized physiotherapy care for pain relief, rehabilitation,
              sports injury recovery, and neuro care with a calm, patient-first
              approach.
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#why-us">Why Choose Us</a>
            <a href="#contact">Book Appointment</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <p>B/707, Saujanya - 1, Near Anupam Cinema</p>
            <p>Khokhara, Ahmedabad 380021</p>
            <a href="tel:+919313587442">+91 93135 87442</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="section-frame footer-bottom-row">
            <p>Healing Through Movement</p>
            <p>Your Recovery, Our Priority</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
