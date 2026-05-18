import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <div className="about-hero__badge">OUR STORY</div>
          <h1>About Elemental Arena</h1>
          <p>
            Born from the belief that the best workout is one you actually
            look forward to.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__container">
          <div className="about-story__content">
            <h2>The Vision</h2>
            <p>
              We started with a simple question: what if your workout was
              the best part of your day? Not because you forced yourself
              through it, but because you genuinely couldn't wait to step
              into the arena.
            </p>
            <p>
              Elemental Arena was born from the fusion of VR gaming, IoT
              wearable technology, and competitive esports design. We
              believe that when you stop thinking about exercise and start
              thinking about strategy, mastery, and rivalry, the fitness
              follows naturally.
            </p>
            <p>
              Our team combines expertise in game design, wearable
              technology, fitness science, and fantasy storytelling to
              create an experience that is as physically effective as it is
              mentally engaging.
            </p>
          </div>
          <div className="about-story__visual">
            <div className="about-story__element-wheel">
              <div className="element-orbit element-orbit--fire">
                <span>&#128293;</span>
              </div>
              <div className="element-orbit element-orbit--water">
                <span>&#128167;</span>
              </div>
              <div className="element-orbit element-orbit--earth">
                <span>&#127793;</span>
              </div>
              <div className="element-orbit element-orbit--air">
                <span>&#128168;</span>
              </div>
              <div className="element-center">
                <span>&#9670;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values__container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="about-values__grid">
            <div className="about-value">
              <div className="about-value__icon">&#9876;</div>
              <h3>Fitness Through Play</h3>
              <p>
                We design every mechanic to maximize physical engagement
                while keeping the experience fun. If it feels like a chore,
                we've failed.
              </p>
            </div>
            <div className="about-value">
              <div className="about-value__icon">&#9878;</div>
              <h3>Fair Competition</h3>
              <p>
                Our matchmaking prioritizes balanced, exciting matches.
                Every player deserves an opponent that pushes them to grow.
              </p>
            </div>
            <div className="about-value">
              <div className="about-value__icon">&#10024;</div>
              <h3>Immersive Worlds</h3>
              <p>
                From elemental lore to arena design, we craft every detail
                to pull players deeper into the experience.
              </p>
            </div>
            <div className="about-value">
              <div className="about-value__icon">&#128200;</div>
              <h3>Real Results</h3>
              <p>
                Behind the fantasy, real science drives our fitness design.
                IoT tracking ensures every session counts toward meaningful
                health improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <div className="about-timeline__container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            <div className="timeline__item">
              <div className="timeline__marker timeline__marker--fire"></div>
              <div className="timeline__content">
                <h3>Concept & Research</h3>
                <p>
                  Identified the gap between VR fitness and competitive
                  gaming. Began prototyping IoT band integration with VR
                  combat mechanics.
                </p>
              </div>
            </div>
            <div className="timeline__item">
              <div className="timeline__marker timeline__marker--water"></div>
              <div className="timeline__content">
                <h3>Prototype Development</h3>
                <p>
                  Built the first playable prototype with basic elemental
                  abilities and motion-to-action translation using
                  wrist-mounted sensors.
                </p>
              </div>
            </div>
            <div className="timeline__item">
              <div className="timeline__marker timeline__marker--earth"></div>
              <div className="timeline__content">
                <h3>IoT Integration</h3>
                <p>
                  Expanded to full 4-band system (wrists + thighs).
                  Achieved sub-20ms latency for motion capture to in-game
                  response.
                </p>
              </div>
            </div>
            <div className="timeline__item">
              <div className="timeline__marker timeline__marker--air"></div>
              <div className="timeline__content">
                <h3>Launch & Beyond</h3>
                <p>
                  Preparing for public launch with competitive matchmaking,
                  four elemental paths, and a living fantasy storyline that
                  evolves with the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta__container">
          <h2>Join the Arena</h2>
          <p>
            The elements await. Whether you are here to compete, to train,
            or to explore a new world — there is a place for you.
          </p>
          <div className="about-cta__buttons">
            <Link to="/features" className="btn btn--primary">
              See Features
            </Link>
            <Link to="/target" className="btn btn--secondary">
              Who It's For
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
