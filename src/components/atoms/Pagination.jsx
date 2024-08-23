import React from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const Pagination = () => {
  return (
    <div className="pagi--container">
      <div className="pagi--nav-back pagi--button">
        <CaretLeft size={13} />
      </div>

      <div className="pagi--button-case pagi--button current-page">
        1
      </div>

      <div className="pagi--button-case pagi--button">
        2
      </div>

      <div className="pagi--button-case pagi--button">
        3
      </div>

      <div className="pagi--button-case pagi--button">
        4
      </div>

      <div className="pagi--button-case pagi--button">
        5
      </div>

      <div className="pagi--button-case pagi--button">
        6
      </div>

      <div className="pagi--nav-forward pagi--button">
        <CaretRight size={13} />
      </div>
    </div>
  );
};

export default Pagination;
