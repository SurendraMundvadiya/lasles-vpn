import React, { lazy, memo } from "react";
const MiddleHeader = lazy(() => import("../../utilities/middleHeader"));
const ThirdContainer: React.FC = () => {
    return (
        <MiddleHeader
            title="Choose Your Plan"
            subtitle=" Let's choose the package that is best for you and explore it happily and cheerfully."
        />
    );
};

export default memo(ThirdContainer);
