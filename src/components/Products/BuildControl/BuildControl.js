import React from "react";

import styled from "./BuildControl.css";

const BuildControl = (props) => {
  
  let disabledInfo = false
  if(props.counter === 0){
      disabledInfo = true
  }
  return (
    <div className={styled.BuildControl}>
      <button
        className={styled.More}
        onClick={props.added}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.8652 13.8224H15.6769V5.60349C15.6769 5.40533 15.5985 5.21529 15.4589 5.07516C15.3193 4.93504 15.1299 4.85632 14.9325 4.85632C14.7351 4.85632 14.5457 4.93504 14.4061 5.07516C14.2665 5.21529 14.1881 5.40533 14.1881 5.60349V13.8224H5.99977C5.80234 13.8224 5.613 13.9011 5.4734 14.0412C5.3338 14.1813 5.25537 14.3714 5.25537 14.5695C5.2517 14.6666 5.2688 14.7634 5.30554 14.8533C5.34227 14.9432 5.39778 15.0242 5.46832 15.0907C5.53887 15.1573 5.6228 15.2079 5.71448 15.2392C5.80615 15.2704 5.90343 15.2816 5.99977 15.2719H14.1881V23.5356C14.1881 23.7337 14.2665 23.9238 14.4061 24.0639C14.5457 24.204 14.7351 24.2827 14.9325 24.2827C15.1299 24.2827 15.3193 24.204 15.4589 24.0639C15.5985 23.9238 15.6769 23.7337 15.6769 23.5356V15.3167H23.8652C24.0627 15.3167 24.252 15.238 24.3916 15.0979C24.5312 14.9577 24.6096 14.7677 24.6096 14.5695C24.6096 14.3714 24.5312 14.1813 24.3916 14.0412C24.252 13.9011 24.0627 13.8224 23.8652 13.8224Z"
            fill="#1780df"
          />
          <path
            d="M28.8982 14.5698C28.8982 22.3147 22.6434 28.5897 14.9321 28.5897C7.22076 28.5897 0.966016 22.3147 0.966016 14.5698C0.966016 6.82498 7.22076 0.55 14.9321 0.55C22.6434 0.55 28.8982 6.82498 28.8982 14.5698Z"
            stroke="#1780df"
            strokeWidth="1.1"
          />
        </svg>
      </button>
      <span className={styled.ingredientsCounter}>{props.counter}</span>
      <button
        className={styled.Less}
        onClick={props.removed}
        disabled={disabledInfo}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="24.27"
            y1="14.3483"
            x2="6.41525"
            y2="14.3483"
            stroke="#1780df"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M29.3088 14.5698C29.3088 22.3147 23.0541 28.5897 15.3427 28.5897C7.6314 28.5897 1.37666 22.3147 1.37666 14.5698C1.37666 6.82498 7.6314 0.55 15.3427 0.55C23.0541 0.55 29.3088 6.82498 29.3088 14.5698Z"
            stroke="#1780df"
            strokeWidth="1.1"
          />
        </svg>
      </button>
    </div>
  );
};

export default BuildControl;