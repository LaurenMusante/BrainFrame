import React from "react";
import { Link } from "react-router-dom";
import "./ClassDescriptions.css";

const ClassDescriptions = () => {
  return (
    <div className="ui text container">
      <h1>Class Descriptions</h1>
      <div className="ui three column grid">
        <div className="column">
          <div className="ui card">
            <div className="content">
              <div className="header">HATHA YOGA</div>
              <div className="meta">
                <span>All Levels</span>
              </div>
              <p>
                In this class, postures are practiced to align, strengthen and
                promote flexibility in the body. Breathing techniques and
                meditation are also integrated. You can expect an emphasis on
                simplicity, repetition, and ease of movement. Full-body
                relaxation and balance are the goals, as we make a full circuit
                of the body’s range of motion with standing postures, twists,
                backbends, forward folds, and hip openers.
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="ui card">
            <div className="content">
              <div className="header">VINYASA and HATHA FLOW</div>
              <div className="meta">
                <span>Intermediate</span>
              </div>
              <p>
                Vinyasa ( translates to “flowing with breath”) is a dynamic
                style of Hatha yoga which joins physical postures, or asanas,
                with inhales and exhales, creating a steady internal rhythm for
                the practice. Our Flow classes are designed to cultivate heat in
                the body with creative sequences involving sun salutations,
                standing and seated postures, back bending, arm balancing, and a
                strong focus on the power of breath awareness. Flow yoga classes
                tend to be more vigorous and aerobic, and classes can have a
                variety of music and themes.
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="ui card">
            <div className="content">
              <div className="header">SLOW FLOW AND RESTORE</div>
              <div className="meta">
                <span>Beginners Welcome</span>
              </div>
              <p>
                This class will flow slowly through sun salutations and postures
                designed to build internal heat slowly and gently. Meditation
                and Pranaymana (breath work) techniques are taught to promote
                relaxation. Class concludes with Restorative Yoga postures which
                settle the body and mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ui three column grid">
        <div className="column">
          <div className="ui card">
            <div className="content">
              <div className="header">FOUNDATIONS</div>
              <div className="meta">
                <span>All Levels</span>
              </div>
              <p>
                {" "}
                In this class the basic, foundational yoga postures are
                practiced to align, strengthen and promote flexibility in the
                body. Breathing techniques and meditation are also integrated.
                You can expect an emphasis on simplicity, repetition, and ease
                of movement. Full-body relaxation and balance are the goals, as
                we make a full circuit of the body’s range of motion with
                standing postures, twists, backbends, forward folds, and hip
                openers. Beginner level/Basic.
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="ui card">
            <div className="content">
              <div className="header">YIN YOGA</div>
              <div className="meta">
                <span>Intermediate</span>
              </div>
              <p>
                Enjoy the feelings of rejuvenation and steadiness that arise
                from a Yin Yoga practice as you slow down, move from noise to
                silence, from agitation to calm, from complexity to simplicity.
                This practice integrates the ancient Yoga teachings with
                Meridian Theory as taught in Chinese Medicine. Engage the body’s
                natural healing power as you actively nourish and harmonize the
                body's vital life force or chi. As the whole body rests and
                opens with long held poses, the natural healing power of chi is
                used to rejuvenate and repair the area of focus.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="ui card">
            <div className="content">
              <div className="header">CHAIR YOGA</div>
              <div className="meta">
                <span>All Levels</span>
              </div>
              <p>
                This gentle class uses both the yoga mat and a chair and is
                designed for relaxation. You will experience deep, rhythmic
                breathing accompanied by simple stretches in a safe and
                comfortable setting. When the mind quiets down and your body
                resolves patterns of tension, then harmony and well-being are
                naturally restored. Not everyone can get up and down off the
                floor easily making traditional yoga classes difficult.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ui three column grid">
        <div className="column">
          <div className="ui card">
            <div className="content">
              <div className="header">YIN FLOW AND MEDITATION</div>
              <div className="meta">
                <span>All Levels</span>
              </div>
              <p>
                {" "}
                A modern-day movement with lineage inspired teachings. This
                class starts with a slow flowing movement to get the body warm
                and the mind focused. Yin poses, passive stretches held for
                minutes at a time, prepare the body for stillness by releasing
                deep-rooted tension. Meditation or Yoga Nidra the practices of
                stillness that connect us to the true essence of Yoga, finish
                this complete practice.
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="ui card">
            <div className="content">
              <div className="header">KUNDALINI/ VINYASA</div>
              <div className="meta">
                <span>Advanced</span>
              </div>
              <p>
                This practice incorporates elements of vinyasa, kundalini,
                pranayama, meditation, chanting and mantra. An ideal choice for
                students looking for a practice that is eclectic and inclusive
                of a well-balanced synthesis of challenging and calming
                elements. Encourages mindful exploration of the postures amidst
                an invigorating combination of fluid movement and deeper,
                prolonged holds. This is yoga for everyday life, and every
                person. Kundalini Yoga works for you if you can breathe and move
                your body. No previous experience in yoga is required for you to
                achieve results with your very first class.
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="ui card">
            <div className="content">
              <div className="header">BEGINNER YOGA SERIES</div>
              <div className="meta">
                <span>Beginners Welcome</span>
              </div>
              <p>
                {" "}
                The beginner class series introduces the history of yoga,
                fundamental principles of alignment, and breath work. Students
                will be introduced to yoga postures through step-by-step verbal
                description and demonstration. Emphasis is placed on student
                understanding, safety, and stability within each pose. If you
                have never tried yoga this series is perfect for you and is
                designed to meet the needs of those new to yoga as well as those
                seeking continued understanding of basic yoga poses. Beginner
                level/Basic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDescriptions;
