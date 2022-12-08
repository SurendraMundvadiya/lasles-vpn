import React, { lazy, memo } from "react";

//icon
import personWithPC2 from "../../assets/personWithPC2.svg";

const Button = lazy(() => import("../../utilities/button"));

const FirstContainer: React.FC = () => {
    return (
        <div className="flex">
            <div className="w-50 flex justify-center column gap-2">
                <p className="font-large fontWeight-500">
                    Want anything to be easy with <strong>LaslesVPN</strong>.
                </p>
                <p>
                    Provide a network for all your needs with ease and fun using
                    <strong> LaslesVPN</strong> discover interesting features from us.
                </p>
                <Button varient="contained" shape="square">
                    Get Started
                </Button>
            </div>
            <div className="w-50 p-2">
                <img src={personWithPC2} alt="" style={{ width: "100%" }} />
            </div>
        </div>
    );
};

export default memo(FirstContainer);
