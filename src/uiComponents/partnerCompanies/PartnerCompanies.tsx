import React, { memo } from "react";

import netflix from "../../assets/netflix.svg";
import reddit from "../../assets/reddit.svg";
import amazon from "../../assets/amazon.svg";
import discord from "../../assets/discord.svg";
import spotify from "../../assets/spotify.svg";

import "./PartnerCompanies.css";

const PartnerCompanies: React.FC = () => {
    const parters = [
        { companyName: "netflix", logo: netflix, link: "https://www.netflix.com/in/" },
        { companyName: "reddit", logo: reddit, link: "https://www.reddit.com/" },
        { companyName: "amazon", logo: amazon, link: "https://www.amazon.in/" },
        { companyName: "discord", logo: discord, link: "https://discord.com/" },
        { companyName: "spotify", logo: spotify, link: "https://open.spotify.com/" },
    ];
    return (
        <div className="flex gap-1 justify-space-between">
            {parters.map((el) => {
                return (
                    <div className="img-container flex align-center justify-center">
                        <img src={el.logo} alt={el.companyName} />
                    </div>
                );
            })}
        </div>
    );
};

export default memo(PartnerCompanies);
