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
            We got tired of workouts that feel like work. So we made one
            that doesn't.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__container">
          <div className="about-story__content">
            <h2>How This Started</h2>
            <p>
              Honestly? We were tired of forcing ourselves to go to the gym.
              We already spent hours in VR, so we asked ourselves — what if
              that time actually counted as a workout?
            </p>
            <p>
              That's where Elemental Arena came from. We took the parts of
              gaming that keep people hooked — competition, rankings, story
              progression — and built a VR experience around them that
              happens to be a serious workout. You're not thinking about
              exercise. You're thinking about winning.
            </p>
            <p>
              We're a team that knows game design, wearable tech, and
              fitness. We put all of that together because we genuinely
              think this is how people should be working out.
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
          <h2 className="section-title">What We Care About</h2>
          <div className="about-values__grid">
            <div className="about-value">
              <div className="about-value__icon">&#9876;</div>
              <h3>Fun First, Fitness Second</h3>
              <p>
                If it feels like a chore, we messed up. Every game mechanic
                is built to be fun on its own — the workout is a side
                effect, not the sales pitch.
              </p>
            </div>
            <div className="about-value">
              <div className="about-value__icon">&#9878;</div>
              <h3>Fair Fights</h3>
              <p>
                Nobody wants to get stomped by someone way above their
                level. We put a lot of work into matching people fairly
                so every fight actually feels winnable.
              </p>
            </div>
            <div className="about-value">
              <div className="about-value__icon">&#10024;</div>
              <h3>The World Matters</h3>
              <p>
                We didn't just throw a fantasy skin on a fitness app. The
                lore, the arena designs, the elemental factions — we
                actually thought through all of it.
              </p>
            </div>
            <div className="about-value">
              <div className="about-value__icon">&#128200;</div>
              <h3>It Actually Works</h3>
              <p>
                Behind the dragons and fireballs, the fitness side is
                legit. The IoT bands track real data, and the movements
                are designed to give you an actual workout.
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
                  Noticed that VR fitness games and competitive VR games
                  existed separately but nobody was combining them. Started
                  experimenting with strapping sensors to our arms and
                  seeing what was possible.
                </p>
              </div>
            </div>
            <div className="timeline__item">
              <div className="timeline__marker timeline__marker--water"></div>
              <div className="timeline__content">
                <h3>First Prototype</h3>
                <p>
                  Got a rough version working where wrist sensors could
                  trigger basic fire and water attacks. It was janky, but
                  it was fun — and that told us we were onto something.
                </p>
              </div>
            </div>
            <div className="timeline__item">
              <div className="timeline__marker timeline__marker--earth"></div>
              <div className="timeline__content">
                <h3>Full Body Tracking</h3>
                <p>
                  Added thigh bands to the setup, bringing it to 4 bands
                  total. Got the delay between moving and seeing it
                  on-screen down to under 20 milliseconds.
                </p>
              </div>
            </div>
            <div className="timeline__item">
              <div className="timeline__marker timeline__marker--air"></div>
              <div className="timeline__content">
                <h3>Getting Ready to Launch</h3>
                <p>
                  Building out the competitive matchmaking, finishing all
                  four elemental paths, and writing the first season of
                  the story. Almost there.
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
            Whether you want to compete, get in shape, or just mess around
            in a fantasy world — there's a reason to play.
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
