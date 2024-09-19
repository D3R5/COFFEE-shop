import React from "react";
import aboutImg from "../../assets/about-img.jpg";
import { FiCheck } from "react-icons/fi";
import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__grid container grid">
        <div className="about__img-wrapper">
          <img src={aboutImg} alt="" className="about__img" />
        </div>
        <div className="about__content">
          <h2 className="section__title title-left" data-title="About Us">
            Fresh Quality And Organic Tasty Coffe House For You
          </h2>

          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            aperiam repellat inventore itaque perspiciatis, pariatur quaerat
            laborum, voluptatum, quo sed quidem delectus laboriosam dolorum quos
            omnis neque animi dolore assumenda.
          </p>

          <div className="about__details grid">
            <p className="about__details-description">
            <FiCheck />
            At vero eos et accusamus et iutso odio
            </p>

            <p className="about__details-description">
            <FiCheck />
            Et harum quidem rerum facilis est et expedita distinctio
            </p>

            <p className="about__details-description">
            <FiCheck />
            Sed ut perspiciatis unde omnis iste natus sit
            </p>
          </div>

          <a href="#team" className="btn">
            Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
