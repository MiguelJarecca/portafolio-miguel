import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    }

  return (
    <footer className='footer'>
        <div className="footer-text">
            <p>Miguel Jarecca Ccallo {new Date().getFullYear()}</p>
        </div>

        {/* <div className="footer-icon"> */}
            <button type="button" onClick={handleScrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        {/* </div> */}
    </footer>

    )
}
