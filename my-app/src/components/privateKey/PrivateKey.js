import React from "react";
import { AiOutlineKey } from "react-icons/ai";
import '../privateKey/PrivateKey.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const PrivateKey = () => {
  return (
    <div className="PrivateKey-container">
      <div className="top">
      <AiOutlineKey className="logo" />
        <span>
          <p>Enter Private Key</p>
          <p className="small">Usually 40 hexadecimal characters</p>
        </span>
      </div>
      <div className="private-key-form">
        <div className="input">
        <input />
        </div>
        <span className="next">
        <button>Next <FaRegArrowAltCircleRight /></button>
        </span>
      </div>
    </div>
  );
};

export default PrivateKey;
