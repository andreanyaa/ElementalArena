import React from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
import './Investors.css';

const Investors: React.FC = () => {
  return (
    <div className="investors-page">
      <section className="investors-hero">
        <div className="investors-hero__content">
          <div className="investors-hero__badge">INVESTMENT OPPORTUNITY</div>
          <h1>Invest in the Future of Fitness</h1>
          <p>
            Elemental Arena sits at the intersection of three explosive markets:
            VR gaming, wearable fitness tech, and competitive esports.
          </p>
        </div>
      </section>

      <section className="market-opportunity">
        <div className="market-opportunity__container">
          <FadeInSection>
            <h2 className="section-title">Market Opportunity</h2>
            <p className="section-subtitle">
              The convergence of VR, fitness, and gaming creates a massive untapped market.
            </p>
          </FadeInSection>
          <div className="market-opportunity__grid">
            <FadeInSection delay={0}>
              <div className="opp-card">
                <div className="opp-card__stat">$14.8B</div>
                <h3>VR Gaming Market</h3>
                <p>Projected global VR gaming market by 2027, growing at 30.2% CAGR</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="opp-card">
                <div className="opp-card__stat">$116B</div>
                <h3>Global Fitness Industry</h3>
                <p>The fitness market continues to shift toward gamified, tech-driven experiences</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="opp-card">
                <div className="opp-card__stat">$5.7B</div>
                <h3>Wearable Tech Market</h3>
                <p>IoT fitness wearables are the fastest-growing segment in consumer health tech</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="why-invest">
        <div className="why-invest__container">
          <FadeInSection>
            <h2 className="section-title">Why Elemental Arena?</h2>
          </FadeInSection>
          <div className="why-invest__grid">
            <FadeInSection delay={0}>
              <div className="why-card why-card--fire">
                <div className="why-card__number">01</div>
                <h3>First-Mover Advantage</h3>
                <p>
                  No competitor combines IoT body tracking with competitive VR
                  combat and a living fantasy narrative. We are defining the
                  category.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="why-card why-card--water">
                <div className="why-card__number">02</div>
                <h3>Multiple Revenue Streams</h3>
                <p>
                  Hardware sales (IoT bands), software subscriptions, in-game
                  cosmetics, seasonal battle passes, and tournament entry fees
                  create diversified revenue.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="why-card why-card--earth">
                <div className="why-card__number">03</div>
                <h3>High Retention by Design</h3>
                <p>
                  Competitive matchmaking, seasonal content, and fitness
                  progression create powerful engagement loops that keep
                  players coming back daily.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="why-card why-card--air">
                <div className="why-card__number">04</div>
                <h3>Scalable Platform</h3>
                <p>
                  Our modular element system allows continuous content expansion.
                  New elements, abilities, and story arcs extend the product
                  lifecycle indefinitely.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="business-model">
        <div className="business-model__container">
          <FadeInSection>
            <h2 className="section-title">Business Model</h2>
            <p className="section-subtitle">
              A proven freemium-plus-hardware model with multiple monetization layers.
            </p>
          </FadeInSection>
          <div className="business-model__grid">
            <FadeInSection delay={0}>
              <div className="biz-card">
                <div className="biz-card__icon">&#129520;</div>
                <h3>Hardware</h3>
                <div className="biz-card__detail">IoT Smart Band Kit</div>
                <p>
                  4-band starter kit (2 wrist + 2 thigh) sold as a premium
                  accessory. Hardware margins at 40%+ with declining component
                  costs at scale.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="biz-card">
                <div className="biz-card__icon">&#128274;</div>
                <h3>Subscription</h3>
                <div className="biz-card__detail">Arena Pass</div>
                <p>
                  Monthly subscription unlocks ranked matchmaking, detailed
                  fitness analytics, seasonal story content, and premium
                  training programs.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="biz-card">
                <div className="biz-card__icon">&#127912;</div>
                <h3>In-Game Store</h3>
                <div className="biz-card__detail">Cosmetic Marketplace</div>
                <p>
                  Elemental skins, arena effects, victory animations, and
                  character customization. Purely cosmetic — no pay-to-win
                  mechanics.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="biz-card">
                <div className="biz-card__icon">&#127942;</div>
                <h3>Esports & Events</h3>
                <div className="biz-card__detail">Competitive Circuit</div>
                <p>
                  Seasonal tournaments with entry fees and sponsorships.
                  Creates community engagement and media exposure while
                  generating revenue.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="traction">
        <div className="traction__container">
          <FadeInSection>
            <h2 className="section-title">Roadmap & Milestones</h2>
          </FadeInSection>
          <div className="traction__timeline">
            <FadeInSection delay={0}>
              <div className="traction__phase traction__phase--complete">
                <div className="traction__phase-header">
                  <span className="traction__phase-tag traction__phase-tag--complete">COMPLETED</span>
                  <h3>Phase 1 — Foundation</h3>
                </div>
                <ul>
                  <li>Core VR combat engine prototype</li>
                  <li>IoT band hardware design and first sensor integration</li>
                  <li>4 base elemental ability systems</li>
                  <li>Initial motion-to-action translation engine</li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="traction__phase traction__phase--current">
                <div className="traction__phase-header">
                  <span className="traction__phase-tag traction__phase-tag--current">IN PROGRESS</span>
                  <h3>Phase 2 — Competitive Core</h3>
                </div>
                <ul>
                  <li>ELO-based matchmaking system</li>
                  <li>Multiplayer networking infrastructure</li>
                  <li>Fitness analytics dashboard</li>
                  <li>Beta testing with initial user cohort</li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="traction__phase">
                <div className="traction__phase-header">
                  <span className="traction__phase-tag">UPCOMING</span>
                  <h3>Phase 3 — Launch</h3>
                </div>
                <ul>
                  <li>Public launch on major VR platforms</li>
                  <li>IoT band kit retail distribution</li>
                  <li>Season 1 story content and battle pass</li>
                  <li>Marketing campaign and influencer partnerships</li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="traction__phase">
                <div className="traction__phase-header">
                  <span className="traction__phase-tag">FUTURE</span>
                  <h3>Phase 4 — Scale</h3>
                </div>
                <ul>
                  <li>Esports tournament circuit launch</li>
                  <li>Dual-element hybrid system expansion</li>
                  <li>Mobile companion app</li>
                  <li>International market expansion</li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="investors-cta">
        <FadeInSection>
          <div className="investors-cta__container">
            <h2>Ready to Join the Arena?</h2>
            <p>
              We are building the future of fitness entertainment. If you share
              our vision that workouts should be epic, competitive, and
              unforgettable — let's talk.
            </p>
            <div className="investors-cta__buttons">
              <Link to="/features" className="btn btn--primary">
                Explore the Product
              </Link>
              <Link to="/target" className="btn btn--secondary">
                See Our Market
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};

export default Investors;
