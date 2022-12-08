import React, { lazy, memo } from "react";
import "./Header.css";

//icon
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const Button = lazy(() => import("../../utilities/button"));
const Header: React.FC = () => {
    return (
        <div className="flex wrap align-center justify-space-between">
            <div>
                <img src={logo} alt="lasleVPN" id="header_logp_img" />
            </div>
            <div className="flex gap-2 wrap">
                <Link to="#" className="header_link">
                    Pricing
                </Link>
                <Link to="#" className="header_link">
                    Features
                </Link>
                <Link to="#" className="header_link">
                    Testimonials
                </Link>
                <Link to="#" className="header_link">
                    About
                </Link>
                <Link to="#" className="header_link">
                    Help
                </Link>
            </div>
            <div className="flex gap-1">
                <Button varient="text">sign in</Button>
                <Button varient="outlined" shape="rounded">
                    sign up
                </Button>
            </div>
        </div>
    );
};

export default memo(Header);
