import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid justify-content-center text-light mt-5 pt-5">


            <section class="deneb_cta">
                <div class="container">
                    <div class="cta_wrapper">
                        <div class="row align-items-center">
                            <div class="col-lg-7">
                                <div class="cta_content">
                                    <h3>Have Any Idea in Your Mind ?</h3>
                                    <p>We Supply You With Fully Automated Production Systems For The Mass Production Of Candles for all kinds of candles.</p>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="button_box">
                                    <a href="#" class="btn btn-warning">Contact Us Today</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="deneb_footer">
                <div class="widget_wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="widget widegt_about">
                                    <div class="widget_title">
                                        <img src="assets/images/logo_1.png" class="img-fluid" alt="" />
                                    </div>
                                    <p className="widget_description my-5"> <span className="fw-bold fs-3">ASKKA</span> <br /> is a homemade candle shop. combination of fragrance, flower & love. you will find a artistic vibe here always. so, keep in touch with us. <br /> Thank You.</p>
                                    <ul class="social">
                                        <li><a href="#.."><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#.."><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#.."><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="widget widget_link">
                                    <div class="widget_title">
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
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="widget widget_contact">
                                    <div class="widget_title">
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div class="contact_info">
                                        <div class="single_info">
                                            <div class="icon">
                                                <i class="fas fa-phone-alt"></i>
                                            </div>
                                            <div class="info">
                                                <p><a className="text-dec" href="tel:+919246147999">1800-121-3637</a></p>
                                                <p><a className="text-dec" href="tel:+919246147999">+91 924-614-7999</a></p>
                                            </div>
                                        </div>
                                        <div class="single_info">
                                            <div class="icon">
                                                <i class="fas fa-envelope"></i>
                                            </div>
                                            <div class="info">
                                                <p><a className="text-dec" href="mailto:info@deneb.com">info@deneb.com</a></p>
                                                <p><a className="text-dec" href="mailto:services@deneb.com">services@deneb.com</a></p>
                                            </div>
                                        </div>
                                        <div class="single_info">
                                            <div class="icon">
                                                <i class="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div class="last-info">
                                                <p>125, Park street aven, Brocklyn,Newyork.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright_area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="copyright_text">
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