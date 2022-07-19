import React from "react";
import { Link } from "react-router-dom";

function Panel() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 info-panel">
                    <h4 className="text-center">Products</h4>
                    <div className="row">
                        <div className="col-lg">
                            <a href="https://www.prohukum.com/">
                                <img src="img/prohukum_logo.png" alt="prohukum_logo" className="img-fluid"/>
                            </a>
                            <p>ProHukum is the leading Practice Management System in Indonesia trusted by thousands of
                                lawyers and
                                top-tier law firms. ProHukum helps law firms track worktime accurately, collaborate easily,
                                and
                                streamline their financial operations.</p>
                        </div>
                        <div className="col-lg">
                            <a href="https://www.eversheet.com/">
                                <img src="img/eversheet_logo.png" alt="eversheet_logo" className="img-fluid"/>
                            </a>
                            <p>Eversheet is a contract management system to help you manage contracts. It helps you stay on
                                top of
                                your contracts and foster collaboration between you and your team. With our intelligent
                                alerting system,
                                you will be notified whenever a contract is due for renewal and give you ample time to do
                                so.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panel;