import React, { lazy, memo } from "react";
const Button = lazy(() => import("../../utilities/button"));
const SubscribeContainer: React.FC = () => {
    return (
        <div className="flex p-2 border-1 bg-white justify-space-between align-center w-90 ">
            <div className="w-40">
                <p className="title">Subscribe Now for Get Special Features!</p>
                <p className="caption">Let's subscribe with us and find the fun.s</p>
            </div>
            <div className="w-40 flex justify-end">
                <Button varient="contained" shape="square">
                    Subscribe Now
                </Button>
            </div>
        </div>
    );
};

export default memo(SubscribeContainer);
