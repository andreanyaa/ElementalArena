import React from 'react';
import FadeInSection from '../components/FadeInSection';
import './Features.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
  details: string[];
  element: string;
}

const features: Feature[] = [
  {
    icon: '🎮',
    title: 'Immersive VR Combat',
    description:
      'Step into a fully realized elemental arena where every physical movement translates into powerful in-game actions. Our VR environment responds to your body in real time.',
    details: [
      'Full 360-degree arena environments themed to each element',
      'Real-time motion-to-ability translation system',
      'Dynamic difficulty that adapts to your performance',
      'Haptic feedback synced with elemental impacts',
    ],
    element: 'fire',
  },
  {
    icon: '📡',
    title: 'IoT Smart Bands',
    description:
      'Our proprietary wrist and thigh bands use advanced sensors to capture your movements with precision. Every punch, squat, and dodge is tracked and converted into elemental power.',
    details: [
      'Lightweight bands for wrists and thighs (4 total)',
      'Accelerometer + gyroscope for precise motion capture',
      'Real-time heart rate and calorie tracking',
      'Wireless sync with ultra-low latency',
    ],
    element: 'water',
  },
  {
    icon: '⚔️',
    title: 'Competitive Matchmaking',
    description:
      'Face off against opponents matched to your fitness level and skill rank. Our ELO-based system ensures every battle is a fair, challenging fight.',
    details: [
      'Skill-based ranking with seasonal ladders',
      'Quick match and ranked arena modes',
      'Tournament brackets for competitive play',
      'Anti-smurf protection for fair matchmaking',
    ],
    element: 'earth',
  },
  {
    icon: '📖',
    title: 'Fantasy Storyline',
    description:
      'Your fitness journey drives an evolving fantasy narrative. As you grow stronger in real life, your character rises through an epic elemental saga.',
    details: [
      'Branching story paths based on your element choice',
      'Unlock lore and character backstories through training',
      'Seasonal story arcs with new characters and conflicts',
      'Co-op story missions with friends',
    ],
    element: 'air',
  },
  {
    icon: '📊',
    title: 'Fitness Analytics',
    description:
      'Track your real-world fitness progress alongside your in-game achievements. See how your physical improvements translate to elemental mastery.',
    details: [
      'Detailed workout summaries after every match',
      'Weekly and monthly fitness trend reports',
      'Calories burned, heart rate zones, and movement intensity',
      'Personal records and milestone celebrations',
    ],
    element: 'fire',
  },
  {
    icon: '🎭',
    title: 'Element Customization',
    description:
      'Choose and evolve your elemental affinity. Mix elements to create unique hybrid fighting styles that match your preferred workout intensity.',
    details: [
      'Four base elements with unique ability trees',
      'Dual-element hybrid combinations',
      'Cosmetic skins and arena effects for each element',
      'Progression system that rewards consistency',
    ],
    element: 'water',
  },
];

const Features: React.FC = () => {
  return (
    <div className="features-page">
      <section className="features-hero">
        <div className="features-hero__content">
          <div className="features-hero__badge">TECHNOLOGY & GAMEPLAY</div>
          <h1>Features & Innovation</h1>
          <p>
            Discover the technology and design that makes Elemental Arena the
            next evolution in VR fitness gaming.
          </p>
        </div>
      </section>

      <section className="features-list">
        <div className="features-list__container">
          {features.map((feature, index) => (
            <FadeInSection key={index} delay={index * 80}>
              <div
                className={`feature-block feature-block--${feature.element} ${
                  index % 2 === 1 ? 'feature-block--reverse' : ''
                }`}
              >
                <div className="feature-block__visual">
                  <div className="feature-block__icon-wrapper">
                    <span className="feature-block__icon">{feature.icon}</span>
                    <div className="feature-block__ring"></div>
                  </div>
                </div>
                <div className="feature-block__info">
                  <h2>{feature.title}</h2>
                  <p className="feature-block__desc">{feature.description}</p>
                  <ul className="feature-block__details">
                    {feature.details.map((detail, i) => (
                      <li key={i}>
                        <span className="feature-block__bullet">&#9670;</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <section className="tech-stack">
        <div className="tech-stack__container">
          <h2 className="section-title">How It All Connects</h2>
          <p className="section-subtitle">
            From your body to the arena, every component works together seamlessly.
          </p>
          <div className="tech-stack__flow">
            <div className="tech-step">
              <div className="tech-step__number">01</div>
              <h3>Move</h3>
              <p>Your physical movements are captured by the IoT smart bands in real time</p>
            </div>
            <div className="tech-step__arrow">&#10140;</div>
            <div className="tech-step">
              <div className="tech-step__number">02</div>
              <h3>Translate</h3>
              <p>Our engine converts movement data into elemental abilities and combat actions</p>
            </div>
            <div className="tech-step__arrow">&#10140;</div>
            <div className="tech-step">
              <div className="tech-step__number">03</div>
              <h3>Compete</h3>
              <p>Battle matched opponents in immersive VR arenas while getting a full workout</p>
            </div>
            <div className="tech-step__arrow">&#10140;</div>
            <div className="tech-step">
              <div className="tech-step__number">04</div>
              <h3>Progress</h3>
              <p>Track fitness gains and unlock new abilities as your real-world strength grows</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
