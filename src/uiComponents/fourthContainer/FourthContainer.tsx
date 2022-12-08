import React, { memo, lazy } from "react";
const PriceCard = lazy(() => import("../../utilities/priceCard"));

const FourthContainer: React.FC = () => {
    const PlanDetail = [
        {
            planName: "Free Plan",
            benifits: [
                "Unlimited Bandwitch",
                "Encrypted Connection",
                "No Traffic Logs",
                "Works on All Devices",
            ],
            price: "Free",
        },
        {
            planName: "Standard Plan",
            benifits: [
                "Unlimited Bandwitch",
                "Encrypted Connection",
                "No Traffic Logs",
                "Works on All Devices",
                "Connect Anyware",
            ],
            price: "$9 / mo",
        },
        {
            planName: "Premium Plan",
            benifits: [
                "Unlimited Bandwitch",
                "Encrypted Connection",
                "No Traffic Logs",
                "Works on All Devices",
                "Connect Anyware",
                "Get New Features",
            ],
            price: "$12 / mos",
        },
    ];
    return (
        <div className="w-full flex gap-1">
            {PlanDetail.map((el: any, index: number) => {
                return (
                    <PriceCard
                        key={index}
                        title={el.planName}
                        benifits={el.benifits}
                        price={el.price}
                    />
                );
            })}
        </div>
    );
};

export default memo(FourthContainer);
