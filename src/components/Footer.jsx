import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className="footer-text">
            <p>2023</p>
        </div>

        <div className="footer-icon">
            <a href="/"> <FontAwesomeIcon icon= {faArrowUp}>icon</FontAwesomeIcon></a>
        </div>
    </footer>

    )
}
