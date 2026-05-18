import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
import './Home.css';

const Home: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const colors = ['#ff4500', '#00bfff', '#8b6914', '#c0c0c0'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.setProperty('--color', color);
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = 4 + Math.random() * 6 + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(particle);
      setTimeout(() => particle.remove(), 10000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__particles" ref={particlesRef}></div>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <div className="hero__badge">VR FITNESS REIMAGINED</div>
          <h1 className="hero__title">
            Enter the <span className="hero__title--fire">Elemental</span>{' '}
            <span className="hero__title--water">Arena</span>
          </h1>
          <p className="hero__subtitle">
            A VR combat experience that transforms your workout into an epic
            elemental battle. Wield the power of fire, water, earth, and air
            as you compete against rivals matched to your skill level.
          </p>
          <div className="hero__cta-group">
            <Link to="/features" className="btn btn--primary">
              Discover Features
            </Link>
            <Link to="/about" className="btn btn--secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <span>Scroll</span>
          <div className="hero__scroll-arrow"></div>
        </div>
      </section>

      <section className="value-props">
        <div className="value-props__container">
          <FadeInSection>
            <h2 className="section-title">Why Elemental Arena?</h2>
            <p className="section-subtitle">
              We believe fitness should be an adventure, not a chore. Elemental Arena
              bridges the gap between intense physical training and immersive gaming.
            </p>
          </FadeInSection>
          <div className="value-props__grid">
            <FadeInSection delay={0}>
              <div className="value-card value-card--fire">
                <div className="value-card__icon">&#128293;</div>
                <h3>Feels Like a Game</h3>
                <p>
                  Forget counting reps. Every punch, dodge, and spell cast is a
                  strategic move in an elemental battle that keeps you coming back.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="value-card value-card--water">
                <div className="value-card__icon">&#9876;</div>
                <h3>Competitive Matchmaking</h3>
                <p>
                  Our skill-based ranking system pairs you with opponents at your
                  level, ensuring every match is challenging and rewarding.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="value-card value-card--earth">
                <div className="value-card__icon">&#129520;</div>
                <h3>IoT Motion Tracking</h3>
                <p>
                  Smart bands on your wrists and thighs capture every movement,
                  translating real physical effort into in-game elemental power.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="value-card value-card--air">
                <div className="value-card__icon">&#127752;</div>
                <h3>Fantasy Storyline</h3>
                <p>
                  Immerse yourself in an evolving elemental drama where your
                  fitness journey drives the narrative forward.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="elements-showcase">
        <div className="elements-showcase__container">
          <FadeInSection>
            <h2 className="section-title">Master the Elements</h2>
            <p className="section-subtitle">
              Choose your elemental affinity and master unique combat styles that
              translate real movement into devastating abilities.
            </p>
          </FadeInSection>
          <div className="elements-grid">
            <FadeInSection delay={0}>
              <div className="element-tile element-tile--fire">
                <div className="element-tile__glow"></div>
                <div className="element-tile__content">
                  <span className="element-tile__symbol">&#128293;</span>
                  <h3>Fire</h3>
                  <p>Aggressive strikes and explosive combos. High-intensity cardio through rapid attack sequences.</p>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="element-tile element-tile--water">
                <div className="element-tile__glow"></div>
                <div className="element-tile__content">
                  <span className="element-tile__symbol">&#128167;</span>
                  <h3>Water</h3>
                  <p>Fluid movements and defensive counters. Builds flexibility and core strength through flowing motions.</p>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="element-tile element-tile--earth">
                <div className="element-tile__glow"></div>
                <div className="element-tile__content">
                  <span className="element-tile__symbol">&#127793;</span>
                  <h3>Earth</h3>
                  <p>Powerful stances and crushing blows. Develops lower body strength through grounded power moves.</p>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="element-tile element-tile--air">
                <div className="element-tile__glow"></div>
                <div className="element-tile__content">
                  <span className="element-tile__symbol">&#128168;</span>
                  <h3>Air</h3>
                  <p>Swift dodges and ranged attacks. Enhances agility and reflexes through evasive maneuvers.</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <FadeInSection>
          <div className="cta-section__container">
            <h2>Ready to Enter the Arena?</h2>
            <p>Transform your workout. Unleash your element. Conquer your rivals.</p>
            <Link to="/features" className="btn btn--primary btn--large">
              Explore All Features
            </Link>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};

export default Home;
