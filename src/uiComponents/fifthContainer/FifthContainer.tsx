import React, { lazy, memo } from "react";

const MiddleHeader = lazy(() => import("../../utilities/middleHeader"));

const FifthContainer: React.FC = () => {
    return (
        <MiddleHeader
            title="Huge Global Network of Fast VPN"
            subtitle="See LaslesVPN everywhere to make it easier for you when you move locations."
        />
    );
};

export default memo(FifthContainer);
