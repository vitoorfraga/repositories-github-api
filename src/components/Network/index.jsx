import React from 'react';
import linkedinIcon from './../../images/icons/linkedin.png'
import githubIcon from './../../images/icons/github.png'
import "./styles.css"

function Network() {
  return (
    <div className="networks">
        <a href="https://www.linkedin.com/in/vitorfragaa/" className="network">
          <img src={linkedinIcon} alt="Ícone linkedin" />
        </a>

        <a href="https://github.com/vitoorfraga" className="network">
          <img src={githubIcon} alt="Ícone Github" />
        </a>

    </div>
  )
}

export default Network;