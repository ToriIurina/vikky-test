import ManagerImg from "../../images/manager.svg";
import {CallBackBannerInput} from "../Call-back-banner-input";
import React from "react";
import './Call-back-banner-block.scss'

const CallBackBannerBlock = () => {
  return (
    <section className="call-back-banner">
      <h2 className="call-back-banner__title">Нужна помощь?</h2>
      <p className="call-back-banner__text">Наши менеджеры с удовольствием погавкают с вами о всех ваших вопросах</p>
      <img className="call-back-banner__img" src={ManagerImg} alt="собака"/>
      <CallBackBannerInput/>
    </section>
  );
}

export {CallBackBannerBlock};
