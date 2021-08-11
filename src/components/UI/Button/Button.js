import React from 'react';
// import styled from 'styled-components';
import styles from'./Button.module.css'; // to use modules

// attacked template literale syntax
// inside backticks put button css sytle without class or id specifiers. hover, focus and etc. should be preceded by ampersand (&)

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

// @media (min-width: 768px){
//   width: auto;
// }

// &:focus { 
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }`;

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
