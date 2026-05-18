import React from 'react';
import FadeInSection from '../components/FadeInSection';
import './Target.css';

interface Persona {
  name: string;
  age: string;
  avatar: string;
  description: string;
  painPoints: string[];
  whyElementalArena: string;
  element: string;
}

const personas: Persona[] = [
  {
    name: 'The Gamer Who Wants to Get Fit',
    age: '18-30',
    avatar: '🎮',
    description:
      'Loves competitive gaming but struggles to find motivation for traditional workouts. Spends hours in VR already and wants that time to count toward fitness goals.',
    painPoints: [
      'Gyms feel repetitive and boring',
      'Hard to stay motivated without competition',
      'Wants results without sacrificing gaming time',
    ],
    whyElementalArena:
      'Elemental Arena turns their gaming sessions into full-body workouts. The competitive matchmaking keeps them engaged, and the ranking system provides the same dopamine loop as their favorite esports titles.',
    element: 'fire',
  },
  {
    name: 'The Fitness Enthusiast Seeking Variety',
    age: '22-40',
    avatar: '💪',
    description:
      'Already active and health-conscious but bored with their current routine. Looking for something that challenges both their body and mind in new ways.',
    painPoints: [
      'Workout plateau from repetitive routines',
      'Craves mental engagement alongside physical effort',
      'Wants data-driven progress tracking',
    ],
    whyElementalArena:
      'The IoT bands provide precise fitness analytics they crave, while the ever-evolving elemental combat system ensures no two sessions feel the same. New elements and abilities keep the challenge fresh.',
    element: 'water',
  },
  {
    name: 'The VR Early Adopter',
    age: '20-35',
    avatar: '🥽',
    description:
      'Already owns a VR headset and is looking for compelling content that goes beyond novelty. Wants experiences that provide lasting value and social connection.',
    painPoints: [
      'Most VR games lack replay value',
      'Wants social and competitive VR experiences',
      'Looking for VR apps that justify the hardware investment',
    ],
    whyElementalArena:
      'With deep competitive systems, a rich fantasy narrative, and IoT integration, Elemental Arena gives their VR headset a purpose they will return to daily. The skill-based matchmaking creates a thriving competitive community.',
    element: 'earth',
  },
  {
    name: 'The Casual Player Looking for Fun Exercise',
    age: '16-45',
    avatar: '✨',
    description:
      'Not a hardcore gamer or gym-goer, but interested in staying active. Drawn to the fantasy theme and wants something that makes exercise feel effortless and fun.',
    painPoints: [
      'Traditional exercise feels like a chore',
      'Intimidated by competitive gaming communities',
      'Wants a welcoming entry point',
    ],
    whyElementalArena:
      'The fantasy storyline and element customization create a welcoming world. Skill-based matchmaking means they will always face opponents at their level, never feeling overwhelmed.',
    element: 'air',
  },
];

const Target: React.FC = () => {
  return (
    <div className="target-page">
      <section className="target-hero">
        <div className="target-hero__content">
          <div className="target-hero__badge">WHO WE SERVE</div>
          <h1>Our Target Market</h1>
          <p>
            Elemental Arena is built for anyone who believes fitness should be
            exciting, competitive, and immersive. Here are the people we are
            designing for.
          </p>
        </div>
      </section>

      <section className="market-overview">
        <div className="market-overview__container">
          <div className="market-stats">
            <div className="market-stat">
              <span className="market-stat__number">$14.8B</span>
              <span className="market-stat__label">VR Gaming Market by 2027</span>
            </div>
            <div className="market-stat">
              <span className="market-stat__number">73%</span>
              <span className="market-stat__label">of gamers want fitness integration</span>
            </div>
            <div className="market-stat">
              <span className="market-stat__number">42M+</span>
              <span className="market-stat__label">VR headset owners worldwide</span>
            </div>
          </div>
        </div>
      </section>

      <section className="personas">
        <div className="personas__container">
          <h2 className="section-title">Meet Our Players</h2>
          <p className="section-subtitle">
            Each persona represents a core segment of our audience, united by a
            shared desire to make fitness feel like play.
          </p>
          <div className="personas__grid">
            {personas.map((persona, index) => (
              <FadeInSection key={index} delay={index * 100}>
              <div className={`persona-card persona-card--${persona.element}`}>
                <div className="persona-card__header">
                  <span className="persona-card__avatar">{persona.avatar}</span>
                  <div>
                    <h3>{persona.name}</h3>
                    <span className="persona-card__age">Ages {persona.age}</span>
                  </div>
                </div>
                <p className="persona-card__desc">{persona.description}</p>
                <div className="persona-card__section">
                  <h4>Pain Points</h4>
                  <ul>
                    {persona.painPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="persona-card__section">
                  <h4>Why Elemental Arena</h4>
                  <p>{persona.whyElementalArena}</p>
                </div>
              </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="problem-solution">
        <div className="problem-solution__container">
          <h2 className="section-title">The Problem We Solve</h2>
          <div className="problem-solution__grid">
            <div className="problem-box">
              <h3>The Problem</h3>
              <p>
                Traditional workouts are repetitive and hard to stick with.
                VR fitness games exist, but they lack competitive depth,
                meaningful progression, and the kind of immersive
                storytelling that keeps players engaged long-term.
              </p>
            </div>
            <div className="solution-box">
              <h3>Our Solution</h3>
              <p>
                Elemental Arena combines precise IoT body tracking with
                skill-based competitive matchmaking and a rich fantasy
                narrative. Players don't just exercise — they train,
                compete, and progress through an elemental world where
                their real fitness gains unlock new abilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Target;
