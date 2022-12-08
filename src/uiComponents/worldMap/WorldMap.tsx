import React, { memo } from "react";
//icon
import Globalmap from "../../assets/Globalmap.svg";

const WorldMap: React.FC = () => {
    return (
        <div className="p-2">
            <img src={Globalmap} alt="WorldMap" className="w-full" />
        </div>
    );
};

export default memo(WorldMap);
