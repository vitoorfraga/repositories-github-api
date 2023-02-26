import React from 'react';
import linkedinIcon from './../../images/icons/linkedin.png'
import githubIcon from './../../images/icons/github.png'
import mousePointerIcon from './../../images/icons/mouse-pointer.png'

import "./styles.css"

function Network() {
  return (
    <div className="networks">
        <a href="" className="network">
          <img src={linkedinIcon} alt="" />
        </a>

        <a href="" className="network">
          <img src={githubIcon} alt="" />
        </a>

        <a href="" className="network">
          <img src={mousePointerIcon} alt="" />
        </a>
    </div>
  )
}

export default Network;