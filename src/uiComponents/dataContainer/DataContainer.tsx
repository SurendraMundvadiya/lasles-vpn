import React, { lazy, memo } from "react";

//icon
import Users from "../../assets/Users.svg";
import Locations from "../../assets/Locations.svg";
import Servers from "../../assets/Servers.svg";

const ButtonCard = lazy(() => import("../../utilities/buttonCard"));

const DataContainer: React.FC = () => {
    const data = [
        { title: "90+", icon: Users, caption: "Users" },
        { title: "30+", icon: Locations, caption: "Locations" },
        { title: "50+", icon: Servers, caption: "Servers" },
    ];
    return (
        <div className="flex w-90 m-auto align-center justify-space-between bg-white border-1 py-1">
            {data.map((el) => {
                return <ButtonCard img={el.icon} title={el.title} caption={el.caption} />;
            })}
        </div>
    );
};

export default memo(DataContainer);
