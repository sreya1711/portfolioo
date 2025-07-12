import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <img src="/sreyaaa.jpeg" alt="Sreya" className="about-img" />
        <div className="about-text">
          <h2>About Me 💫</h2>
          <p>
            I'm Sreya, a passionate full-stack developer who loves building stunning web experiences that combine design and logic.
            I enjoy creating beautiful interfaces and solving real-world problems with code.
          </p>
          <p>
            Currently exploring React, MongoDB, 3D design, and all things creative ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
