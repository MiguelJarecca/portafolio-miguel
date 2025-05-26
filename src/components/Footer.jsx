import React from 'react'

import { ArrowUp } from '../icons/Icons';

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
            <p>Miguel Jarecca Ccallo | {new Date().getFullYear()}</p>
        </div>

        <button 
            type="button" 
            className='footer-button' 
            onClick={handleScrollToTop}
            aria-label='Volver arriba'
        >
            <ArrowUp />
        </button>
    </footer>

    )
}
