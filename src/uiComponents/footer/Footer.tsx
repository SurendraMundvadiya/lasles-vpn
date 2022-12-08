import React, { memo } from "react";
import "../header/Header.css";

//icon
import logo from "../../assets/Logo.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";

import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <div className="w-full flex justify-space-between">
            <div className="w-30 flex gap-1 column align-start">
                <img src={logo} alt="lasleVPN" id="header_logp_img" />
                <p className="caption">
                    LaslesVPN is a private virtual network that has unique features and has high
                    security.
                </p>
                <div className="flex align-center gap-1">
                    <img src={facebook} alt="facebook" style={{ height: "2rem" }} />
                    <img src={twitter} alt="twitter" style={{ height: "2rem" }} />
                    <img src={instagram} alt="instagram" style={{ height: "2rem" }} />
                </div>
                <p className="caption">©2020LaslesVPN</p>
            </div>
            <div className="w-50 flex">
                <div className="w-50 flex column gap-1/2">
                    <p className="title">Product</p>
                    <Link className="header_link caption" to="#">
                        Download
                    </Link>
                    <Link className="header_link caption" to="#">
                        Pricing
                    </Link>
                    <Link className="header_link caption" to="#">
                        Locations
                    </Link>
                    <Link className="header_link caption" to="#">
                        Server
                    </Link>
                    <Link className="header_link caption" to="#">
                        Countries
                    </Link>
                    <Link className="header_link caption" to="#">
                        Blog
                    </Link>
                </div>
                <div className="w-50 flex column gap-1/2">
                    <p className="title">Engage</p>
                    <Link className="header_link caption" to="#">
                        LaslesVPN ?{" "}
                    </Link>
                    <Link className="header_link caption" to="#">
                        FAQ
                    </Link>
                    <Link className="header_link caption" to="#">
                        Tutorials
                    </Link>
                    <Link className="header_link caption" to="#">
                        About Us
                    </Link>
                    <Link className="header_link caption" to="#">
                        Privacy Policy
                    </Link>
                    <Link className="header_link caption" to="#">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default memo(Footer);
