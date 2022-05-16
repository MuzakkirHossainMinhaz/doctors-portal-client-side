import React from 'react';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'contain'
        }} className="p-10">
            <div className='mx-auto max-w-screen-xl'>
                <div className='footer flex justify-between flex-col lg:flex-row'>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Emergency Checkup</a>
                        <a className="link link-hover">Monthly Checkup</a>
                        <a className="li nk link-hover">Weekly Checkup</a>
                        <a className="link link-hover">Deep Checkup</a>
                    </div>
                    <div>
                        <span className="footer-title">Oral Health</span>
                        <a className="link link-hover">Fluoride Treatment</a>
                        <a className="link link-hover">Cavity Filling</a>
                        <a className="link link-hover">Teath Whitening</a>
                    </div>
                    <div>
                        <span className="footer-title">Our Address</span>
                        <a className="link link-hover">New Yourk - 101010 Hudson</a>
                    </div>
                </div>

                <div className='mt-16 text-center text-sm'>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;