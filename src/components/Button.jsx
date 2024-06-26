import React from 'react';

const Button = ({ children, onClick }) => (
  <button style={styles.button} onClick={onClick}>
    {children}
  </button>
);

const styles = {
  button: {
    backgroundColor: '#00B0BA',
    color: 'black',
    outline: 'none',
    fontSize: 18,
    padding: '12px 10px',
  },
};

export default Button;