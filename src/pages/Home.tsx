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
          <div className="hero__badge">VR FITNESS MEETS COMBAT</div>
          <h1 className="hero__title">
            Enter the <span className="hero__title--fire">Elemental</span>{' '}
            <span className="hero__title--water">Arena</span>
          </h1>
          <p className="hero__subtitle">
            A VR game where you fight using fire, water, earth, and air,
            and get a real workout while doing it. IoT bands on your wrists and
            thighs track your movement and turn it into in-game power. You
            won't even realize you're exercising.
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
              Most workout games feel like workouts with a coat of paint. We built
              something different: a game you'd play even if it didn't burn calories.
              The fact that it does is just a bonus.
            </p>
          </FadeInSection>
          <div className="value-props__grid">
            <FadeInSection delay={0}>
              <div className="value-card value-card--fire">
                <div className="value-card__icon">&#128293;</div>
                <h3>Feels Like a Game</h3>
                <p>
                  No rep counting. No timer staring. You're throwing fireballs
                  and dodging attacks, and before you know it, you've done
                  a 30-minute cardio session without thinking about it.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="value-card value-card--water">
                <div className="value-card__icon">&#9876;</div>
                <h3>Play Against Real People</h3>
                <p>
                  You get matched against someone close to your skill level, so
                  fights actually feel fair. Win and you climb the ranks. Lose
                  and you learn something.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="value-card value-card--earth">
                <div className="value-card__icon">&#129520;</div>
                <h3>Your Body is the Controller</h3>
                <p>
                  Four lightweight bands (two on your wrists, two on your thighs)
                  pick up how you move. Throw a real punch, and your character
                  throws one too. Squat to charge up a ground slam.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="value-card value-card--air">
                <div className="value-card__icon">&#127752;</div>
                <h3>An Actual Story</h3>
                <p>
                  There's a whole fantasy world behind the fights: elemental
                  factions, rivalries, and lore. The more you play and train, the
                  more of the story you unlock.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="elements-showcase">
        <div className="elements-showcase__container">
          <FadeInSection>
            <h2 className="section-title">Pick Your Element</h2>
            <p className="section-subtitle">
              Each element has its own fighting style and its own type of workout.
              Pick the one that fits how you like to move.
            </p>
          </FadeInSection>
          <div className="elements-grid">
            <FadeInSection delay={0}>
              <div className="element-tile element-tile--fire">
                <div className="element-tile__glow"></div>
                <div className="element-tile__content">
                  <span className="element-tile__symbol">&#128293;</span>
                  <h3>Fire</h3>
                  <p>Fast punches, big combos, constant pressure. If you like going all-out, this is your element. Expect to sweat.</p>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="element-tile element-tile--water">
                <div className="element-tile__glow"></div>
                <div className="element-tile__content">
                  <span className="element-tile__symbol">&#128167;</span>
                  <h3>Water</h3>
                  <p>Smooth, flowing moves with well-timed counters. Great for building core strength and flexibility without the brute force.</p>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="element-tile element-tile--earth">
                <div className="element-tile__glow"></div>
                <div className="element-tile__content">
                  <span className="element-tile__symbol">&#127793;</span>
                  <h3>Earth</h3>
                  <p>Heavy hits, solid stances, and ground-shaking slams. Lots of squats and lunges built into the combat, so your legs will feel it.</p>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="element-tile element-tile--air">
                <div className="element-tile__glow"></div>
                <div className="element-tile__content">
                  <span className="element-tile__symbol">&#128168;</span>
                  <h3>Air</h3>
                  <p>Quick on your feet, hard to pin down. Lots of dodging and ranged attacks. Think reflex training disguised as wind magic.</p>
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
            <p>Stop dreading your workouts. Start looking forward to them.</p>
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
