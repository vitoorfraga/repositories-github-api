import React from 'react';
import "./styles.css"

function Button({title, url}) {
  return (
    <a href={url} className="button">
        {title}
    </a>
  );
}

export default Button;