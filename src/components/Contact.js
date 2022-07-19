import React from "react";

function Contact() {
    return (
        <section className="contact mt-5 mb-5">
            <h4 className="text-center">Contact</h4>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="label" for="name">Full Name</label>
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="label" for="email">Email Address</label>
                                        <input type="email" className="form-control" name="email" id="email"
                                            placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="label" for="subject">Subject</label>
                                        <input type="text" className="form-control" name="subject" id="subject"
                                            placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="label" for="#">Message</label>
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="4"
                                            placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="submit" value="Send Message" className="btn btn-primary" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center">
                            <p><span>Address:</span> Ruko Plaza Pasifik Blok B3 No. 49 Jl. Boulevard Barat Raya Kelapa
                                Gading Jakarta
                                Utara 14240</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center">
                            <p><span>Phone:</span> <a href="tel://622129363868">(+62-21) 2936 3868</a></p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center">
                            <p><span>Email:</span> <a href="mailto:info@arcacorp.com">info@arcacorp.com</a></p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center">
                            <p><span>Website</span> <a href="#">arcacorp.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;