import React from "react";
import chooseImg from '../../assets/choose.jpg';
import coffeeMug from '../../assets/coffee-mug.svg';
import coffeeBeans2 from '../../assets/coffee-beans-2.svg';
import coffeeBeans3 from '../../assets/coffee-beans-3.svg';


const Choose = () => {
  return (
    <section className="choose section">
      <div className="choose__grid container grid">
        <div className="choose__grid">
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
                <img src="" alt="" className="choose__details-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
