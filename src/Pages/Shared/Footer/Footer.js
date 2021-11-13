import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid justify-content-center text-light mt-5 pt-5">


            <section className="deneb_cta">
                <div className="container">
                    <div className="cta_wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="cta_content">
                                    <h3>Have Any Idea in Your Mind ?</h3>
                                    <p>We Supply You With Fully Automated Production Systems For The Mass Production Of Candles for all kinds of candles.</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="button_box">
                                    <a href="#.." className="btn btn-warning">Contact Us Today</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="deneb_footer">
                <div className="widget_wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="widget widegt_about">
                                    <div className="widget_title">
                                        <img src="assets/images/logo_1.png" className="img-fluid" alt="" />
                                    </div>
                                    <p className="widget_description my-5"> <span className="fw-bold fs-3">ASKKA</span> <br /> is a homemade candle shop. combination of fragrance, flower & love. you will find a artistic vibe here always. so, keep in touch with us. <br /> Thank You.</p>
                                    <ul className="social">
                                        <li><a href="#.."><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#.."><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#.."><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget widget_link">
                                    <div className="widget_title">
                                        <h4>Links</h4>
                                    </div>
                                    <ul>
                                        <li><a className="text-dec" href="#..">About Us</a></li>
                                        <li><a className="text-dec" href="#..">Services</a></li>
                                        <li><a className="text-dec" href="#..">Portfolio</a></li>
                                        <li><a className="text-dec" href="#..">Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget widget_contact">
                                    <div className="widget_title">
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div className="contact_info">
                                        <div className="single_info">
                                            <div className="icon">
                                                <i className="fas fa-phone-alt"></i>
                                            </div>
                                            <div className="info">
                                                <p><a className="text-dec" href="tel:+919246147999">1800-121-3637</a></p>
                                                <p><a className="text-dec" href="tel:+919246147999">+91 924-614-7999</a></p>
                                            </div>
                                        </div>
                                        <div className="single_info">
                                            <div className="icon">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <div className="info">
                                                <p><a className="text-dec" href="mailto:info@deneb.com">info@deneb.com</a></p>
                                                <p><a className="text-dec" href="mailto:services@deneb.com">services@deneb.com</a></p>
                                            </div>
                                        </div>
                                        <div className="single_info">
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="last-info">
                                                <p>125, Park street aven, Brocklyn,Newyork.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright_text">
                                    <p><small>&copy; All rights reserved to Tamanna Bithy, 2021.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;