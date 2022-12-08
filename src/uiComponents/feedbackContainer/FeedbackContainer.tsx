import React, { lazy, memo } from "react";

const MiddleHeader = lazy(() => import("../../utilities/middleHeader"));

const FeedbackContainer: React.FC = () => {
    return (
        <MiddleHeader
            title="Trusted by Thousands of Happy Customer"
            subtitle="These are the stories of our customers who have joined us with great pleasure when using this crazy feature.s"
        />
    );
};

export default memo(FeedbackContainer);
