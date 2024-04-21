import React from "react";
import { RiSaveLine } from "react-icons/ri";
import "./SeedPhrase.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
// import {TwelveInput} from "../wordsInput/TwelveInput"
import TwelveInput from "./wordsInput/TwelveInput"
import TwentyfourInput from "./wordsInput/TwentyfourInput"
const SeedPhrase = () => {
  return (
    <div className="SeedPhrase-container">
      <div className="top">
        <RiSaveLine className="logo" />
        <span>
          <p>Enter Seed Phrase</p>
          <p className="small">Usually 12 or 24 words</p>
        </span>
      </div>
      <div className="WordButtons">
        <button className="active">12 Words</button>
        <button>24 Words</button>
      </div>
      <div className="input">
        <input placeholder="Paste your Seed Phrase"/>
      </div>
      <div className="Inputs">
        {/* <TwelveInput/> */}
        <TwentyfourInput/>
      </div>
      <div className="next">
        <button>Next <FaRegArrowAltCircleRight /></button>
      </div>
    </div>
  );
};

export default SeedPhrase;
 