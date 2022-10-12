import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='border bg-primary text-light'>
            <div className='d-flex mx-auto w-50 justify-content-between py-2'>
                <FaTwitter />
                <FaFacebook />
                <FaInstagram />
            </div>
        </footer>
    )
}

export default Footer