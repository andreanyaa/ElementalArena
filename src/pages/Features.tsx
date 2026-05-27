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
    title: 'VR Combat That Feels Real',
    description:
      'You\'re not just waving your arms around. The game reads your actual body movement and turns it into attacks, blocks, and dodges in a full 3D arena. Move your body, and your character moves with you.',
    details: [
      '360-degree arenas — each element has its own themed environment',
      'Your real punches and dodges become in-game abilities',
      'Difficulty adjusts based on how you\'re performing',
      'Haptic feedback so you feel the hits land',
    ],
    element: 'fire',
  },
  {
    icon: '📡',
    title: 'IoT Smart Bands',
    description:
      'You wear four lightweight bands — two on your wrists and two on your thighs. They have built-in sensors that pick up how fast and hard you\'re moving, and send that data to the game with almost no delay.',
    details: [
      '4 bands total — comfortable enough to forget you\'re wearing them',
      'Accelerometer and gyroscope in each band for accurate tracking',
      'Tracks your heart rate and calories in real time',
      'Connects wirelessly with very little lag',
    ],
    element: 'water',
  },
  {
    icon: '⚔️',
    title: 'Skill-Based Matchmaking',
    description:
      'You get matched against someone around your level. We use an ELO-style ranking system (similar to chess or League of Legends) so fights are close and competitive, not one-sided.',
    details: [
      'Ranked seasons with ladders you can climb',
      'Quick match for casual play, ranked mode for serious competition',
      'Tournament brackets for organized events',
      'Systems in place to prevent smurfing and unfair matches',
    ],
    element: 'earth',
  },
  {
    icon: '📖',
    title: 'A World Worth Caring About',
    description:
      'There\'s an ongoing fantasy storyline woven into the game. As you get stronger and play more, you unlock new chapters, character backstories, and plot twists tied to your chosen element.',
    details: [
      'Different story paths depending on which element you pick',
      'Lore and backstories you unlock by training consistently',
      'New story arcs each season with new characters',
      'Co-op story missions you can play with friends',
    ],
    element: 'air',
  },
  {
    icon: '📊',
    title: 'Fitness Tracking Built In',
    description:
      'After every match, you get a breakdown of how hard you actually worked — calories burned, heart rate data, how much you moved. Over time, you can see yourself getting stronger both in-game and in real life.',
    details: [
      'Post-match workout summary after every fight',
      'Weekly and monthly reports showing your progress',
      'Calories, heart rate zones, and movement intensity tracked',
      'Personal bests and milestones so you can see your growth',
    ],
    element: 'fire',
  },
  {
    icon: '🎭',
    title: 'Build Your Own Style',
    description:
      'Start with one of four base elements, then customize your ability loadout. Eventually you can mix two elements together to create hybrid fighting styles — like combining fire and earth for explosive ground attacks.',
    details: [
      'Four elements, each with its own ability tree to level up',
      'Dual-element hybrids for players who want to mix it up',
      'Cosmetic skins, arena effects, and victory animations',
      'A progression system that rewards showing up regularly',
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
          <h1>What's Under the Hood</h1>
          <p>
            Here's how Elemental Arena actually works — the tech, the
            gameplay systems, and what makes it different from other VR
            fitness games.
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
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            The short version of what happens between you throwing a real punch
            and your opponent getting hit in VR.
          </p>
          <div className="tech-stack__flow">
            <div className="tech-step">
              <div className="tech-step__number">01</div>
              <h3>Move</h3>
              <p>The bands on your wrists and thighs pick up your movements as you go</p>
            </div>
            <div className="tech-step__arrow">&#10140;</div>
            <div className="tech-step">
              <div className="tech-step__number">02</div>
              <h3>Translate</h3>
              <p>The game engine figures out what you did and turns it into an attack, dodge, or ability</p>
            </div>
            <div className="tech-step__arrow">&#10140;</div>
            <div className="tech-step">
              <div className="tech-step__number">03</div>
              <h3>Fight</h3>
              <p>You go head-to-head with a real opponent in VR — and get a serious workout in the process</p>
            </div>
            <div className="tech-step__arrow">&#10140;</div>
            <div className="tech-step">
              <div className="tech-step__number">04</div>
              <h3>Get Better</h3>
              <p>See your fitness stats improve over time and unlock new abilities as you level up</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
