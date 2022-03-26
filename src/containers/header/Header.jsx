import React from 'react';
import people from '../../assets/people.png';
import OB from '../../assets/OB.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with Out Of Box</h1>
      <p>A strong brand reputation does more for long term customer loyalty and organization success than any single advertising campaign you launch. A strong brand reputation helps build repeat business and promote word of mouth advertising by satisfied clients. But we are here to create your brand reputation..</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="people"/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={OB} alt="OB"/>
    </div>
  </div>
);

export default Header;