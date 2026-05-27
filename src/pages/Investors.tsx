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
          <h1>Why Back Elemental Arena</h1>
          <p>
            VR gaming, fitness wearables, and esports are all growing fast
            in their respective industries. We're the first to put all three
            together.
          </p>
        </div>
      </section>

      <section className="market-opportunity">
        <div className="market-opportunity__container">
          <FadeInSection>
            <h2 className="section-title">The Numbers</h2>
            <p className="section-subtitle">
              These are three different markets we're tapping into. Each one is big on
              its own, but there is more potential since we are combining them.
            </p>
          </FadeInSection>
          <div className="market-opportunity__grid">
            <FadeInSection delay={0}>
              <div className="opp-card">
                <div className="opp-card__stat">$14.8B</div>
                <h3>VR Gaming Market</h3>
                <p>Where VR gaming is headed by 2027, growing roughly 30% year by year</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="opp-card">
                <div className="opp-card__stat">$116B</div>
                <h3>Global Fitness Industry</h3>
                <p>People are spending more on fitness than ever, and more of that money is going toward technology fitness options</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="opp-card">
                <div className="opp-card__stat">$5.7B</div>
                <h3>Wearable Tech Market</h3>
                <p>Fitness wearables keep growing. People clearly want technology thawt tracks their body metrics</p>
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
                <h3>Nobody Else Is Doing This</h3>
                <p>
                  There are VR fitness apps and there are VR fighting games,
                  but nobody has combined IoT body tracking, competitive
                  matchmaking, and a fantasy story into one product.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="why-card why-card--water">
                <div className="why-card__number">02</div>
                <h3>More Than One Way to Make Money</h3>
                <p>
                  We have different ways to make money from selling the IoT bands, charging a monthly subscription, selling
                  cosmetic items in-game, running seasonal battle passes, and
                  hosting tournaments. That's five revenue channels from one
                  product.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="why-card why-card--earth">
                <div className="why-card__number">03</div>
                <h3>People Keep Coming Back</h3>
                <p>
                  Ranked competition gives players a reason to want to play. New
                  seasons give them something to look forward to. And
                  because the workout data tracks real progress, they can
                  see themselves getting stronger, making it hard to stop wanting to play.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="why-card why-card--air">
                <div className="why-card__number">04</div>
                <h3>Easy to Keep Growing</h3>
                <p>
                  The element system is modular, so we can keep adding new
                  elements, abilities, and story chapters without
                  rebuilding anything. It's designed to be built to scale over time.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="business-model">
        <div className="business-model__container">
          <FadeInSection>
            <h2 className="section-title">How We Make Money</h2>
            <p className="section-subtitle">
              The 4 revenue channels: hardware, subscriptions,
              in-game purchases, and competitive events.
            </p>
          </FadeInSection>
          <div className="business-model__grid">
            <FadeInSection delay={0}>
              <div className="biz-card">
                <div className="biz-card__icon">&#129520;</div>
                <h3>Hardware</h3>
                <div className="biz-card__detail">IoT Smart Band Kit</div>
                <p>
                  The 4-band starter kit (2 wrist + 2 thigh) is how most
                  players enter our ecosystem. Margins sit around 40%, and
                  component costs drop as we scale the production.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="biz-card">
                <div className="biz-card__icon">&#128274;</div>
                <h3>Subscription</h3>
                <div className="biz-card__detail">Arena Pass</div>
                <p>
                  A monthly pass gets you into ranked matches, unlocks
                  detailed fitness reports, and gives access to seasonal
                  story content and even more effective training programs.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="biz-card">
                <div className="biz-card__icon">&#127912;</div>
                <h3>In-Game Store</h3>
                <div className="biz-card__detail">Cosmetic Marketplace</div>
                <p>
                  Skins, arena effects, victory animations, all cosmetic
                  only. We aren't selling a pay-to-win system. You can't buy your way to a
                  higher rank.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="biz-card">
                <div className="biz-card__icon">&#127942;</div>
                <h3>Esports & Events</h3>
                <div className="biz-card__detail">Competitive Circuit</div>
                <p>
                  Seasonal tournaments with entry fees and sponsor deals.
                  Good for the community, good for visibility and outreach, and they
                  pay for themselves.
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
                  <h3>Phase 1:Foundation</h3>
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
                  <h3>Phase 2:Competitive Core</h3>
                </div>
                <ul>
                  <li>ELO-based matchmaking system</li>
                  <li>Multiplayer networking infrastructure</li>
                  <li>Fitness analytics dashboard</li>
                  <li>Beta testing with initial users</li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="traction__phase">
                <div className="traction__phase-header">
                  <span className="traction__phase-tag">UPCOMING</span>
                  <h3>Phase 3:Launch</h3>
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
                  <h3>Phase 4:Scale</h3>
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
            <h2>Interested?</h2>
            <p>
              We think this is a real opportunity. If you do too, take a
              closer look at the product and the market we're going after.
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
