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
    name: 'Gamers That Skip the Gym',
    age: '18-30',
    avatar: '🎮',
    description:
      'They love competitive games and already spend time in VR, but they can\'t get themselves to go to the gym. Working out feels boring compared to playing a game.',
    painPoints: [
      'The gym is repetitive and they lose motivation after a few weeks',
      'Without competition, there\'s less of a reason to push yourself harder',
      'They don\'t want to give up gaming time for exercise',
    ],
    whyElementalArena:
      'Their gaming time becomes their workout time. The ranked matchmaking gives them the same competitive drive they get from competitive gaming, except now they\'re burning 400+ calories per session doing it.',
    element: 'fire',
  },
  {
    name: 'Gym Regulars Who Are Bored',
    age: '22-40',
    avatar: '💪',
    description:
      'They have already been working out, but they\'re stuck being bored, because they\'re using the same exercises, listening to the same playlist, and getting the same results. They want something that actually stimulates their brain, not just sweat.',
    painPoints: [
      'Hit a plateau doing the same routine over and over',
      'Want something mentally engaging, not just physical',
      'Like tracking their stats and seeing real numbers and progress',
    ],
    whyElementalArena:
      'The IoT bands give them detailed workout data after every match, and because the combat system keeps changing with new abilities and opponents, no two sessions willplay out in the same way.',
    element: 'water',
  },
  {
    name: 'People Who Already Own a VR Headset',
    age: '20-35',
    avatar: '🥽',
    description:
      'They bought a VR headset, played a few games, and now its not getting used at all. They want a reason to pick it back up, something with replay value.',
    painPoints: [
      'Most VR games get old fast',
      'Not enough social or competitive VR content out there',
      'Hard to justify keeping the headset if they barely use it',
    ],
    whyElementalArena:
      'Between the competitive ladder, the ongoing story, and the IoT fitness tracking, there\'s always a reason to play. The matchmaking also means there\'s always someone to play against.',
    element: 'earth',
  },
  {
    name: 'Casual Players Who Hate Exercise',
    age: '16-45',
    avatar: '✨',
    description:
      'They\'re not gamers and they\'re not gym people. They just want to be more active without it feeling like punishment. They found this concept appealing.',
    painPoints: [
      'Working out feels like a chore every single time',
      'Online gaming communities can feel intimidating and hard to feel welcome in',
      'They need a low-pressure way to start',
    ],
    whyElementalArena:
      'The matchmaking puts them against other beginners, so they\'re never getting beaten by experienced players. The story and element customization give them something fun to work toward beyond just fitness numbers.',
    element: 'air',
  },
];

const Target: React.FC = () => {
  return (
    <div className="target-page">
      <section className="target-hero">
        <div className="target-hero__content">
          <div className="target-hero__badge">WHO THIS IS FOR</div>
          <h1>Our Target Market</h1>
          <p>
            We're not trying to be for everyone. These are the specific
            types of people we had in mind when we designed Elemental Arena.
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
          <h2 className="section-title">Who We're Building For</h2>
          <p className="section-subtitle">
            Four types of people who would actually use this, and the
            specific problems we're solving for each one.
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
          <h2 className="section-title">The Problem and Our Fix</h2>
          <div className="problem-solution__grid">
            <div className="problem-box">
              <h3>The Problem</h3>
              <p>
                Most people quit their workouts because they're boring.
                VR fitness games tried to fix this, but they still feel
                like exercise with a gimmick: no real competition, no
                reason to keep coming back after the first week, and
                nothing to care about beyond the next rep.
              </p>
            </div>
            <div className="solution-box">
              <h3>What We Do Differently</h3>
              <p>
                We made a game first and a workout second. You wear IoT
                bands that track how your body moves, fight real people
                at your skill level, and work through an storyline.
                The exercise happens because the gameplay demands
                it, not because we put a calorie counter on screen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Target;
