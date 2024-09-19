import React from "react";
import chooseImg from "../../assets/choose.jpg";
import coffeeMug from "../../assets/coffee-mug.svg";
import coffeeBeans2 from "../../assets/coffee-beans-2.svg";
import coffeeBeans3 from "../../assets/coffee-beans-3.svg";
import "./choose.css";

const Choose = () => {
  return (
    <section className="choose section">
      <div className="choose__grid container grid">
        <div className="choose__content">
          <h2 className="section__title title-left" data-title="Why Choose Us">
            Coffero Most Out Of Your Favorite & Tasty Coffe House
          </h2>
          <p className="choose__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            expedita eos facere tempore exercitationem, beatae nesciunt minus
            rem nemo similique temporibus quaerat sequi cumque atque vitae quis
            tempora veritatis ut. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nam expedita eos facere tempore exercitationem,
            beatae nesciunt minus.
          </p>
          <div className="choose__details grid">
            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img src={coffeeMug} alt="" className="choose__details-img" />
              </div>
              <div>
                <h3 className="choose_details-title">Awesome Aroma</h3>
                <p className="choose__details-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt quae optio consectetur. Quam ullam animi cupiditate
                  beatae, doloremque rem atque temporibus accusamus tempora
                  magnam placeat, voluptas in, qui pariatur consequuntur.
                </p>
              </div>
            </div>
            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img
                  src={coffeeBeans2}
                  alt=""
                  className="choose__details-img"
                />
              </div>
              <div>
                <h3 className="choose_details-title">Pure Grades</h3>
                <p className="choose__details-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt quae optio consectetur. Quam ullam animi cupiditate
                  beatae, doloremque rem atque temporibus accusamus tempora
                  magnam placeat, voluptas in, qui pariatur consequuntur.
                </p>
              </div>
            </div>
            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img
                  src={coffeeBeans3}
                  alt=""
                  className="choose__details-img"
                />
              </div>
              <div>
                <h3 className="choose_details-title">Healthy Coffee</h3>
                <p className="choose__details-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt quae optio consectetur. Quam ullam animi cupiditate
                  beatae, doloremque rem atque temporibus accusamus tempora
                  magnam placeat, voluptas in, qui pariatur consequuntur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={chooseImg} alt="" className="choose__img" />
      </div>
    </section>
  );
};

export default Choose;
