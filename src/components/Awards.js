import React from "react";

function Awards() {
    return (
        <section className="awards mt-5 text-center">
            <h4>Awards</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-4 mt-5">
                        <img src="img/awards-gepi.png" alt="awards-gepi" className="img-fluid" />
                    </div>
                    <div className="col-md-3 col-sm-4 mt-5">
                        <img src="img/awards-imulai.png" alt="awards-imulai" className="img-fluid" />
                    </div>
                    <div className="col-md-3 col-sm-4 mt-5">
                        <img src="img/awards-inaicta.png" alt="awards-inaicta" className="img-fluid" />
                    </div>
                    <div className="col-md-3 col-sm-4 mt-5">
                        <img src="img/awards-indigo-fellowship.png" alt="awards-indigo-fellowship" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Awards;