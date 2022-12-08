import React, { lazy, memo } from "react";

//icon
import personWithPC from "../../assets/personWithPC.svg";
import RightSign from "../../assets/RightSign.svg";

const Textfield = lazy(() => import("../../utilities/textfield"));

const SecondContainer = () => {
    const data = [
        { text: "Powerfull online protection.", icon: RightSign },
        { text: "Internet without borders.", icon: RightSign },
        { text: "Supercharged VPN", icon: RightSign },
        { text: "No specific time limits.", icon: RightSign },
    ];
    return (
        <div className="flex">
            <div className="w-50 p-2">
                <img src={personWithPC} alt="" style={{ width: "100%" }} />
            </div>
            <div className="w-50 flex justify-center column gap-1">
                <p className="font-large fontWeight-500">We Provide Many Features You Can Use</p>
                <p>
                    You can explore the features that we provide with fun and have their own
                    functions each feature.
                </p>
                {data.map((el) => {
                    return <Textfield icon={el.icon} text={el.text as string} />;
                })}
            </div>
        </div>
    );
};

export default memo(SecondContainer);
