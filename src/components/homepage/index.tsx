import React, { lazy, memo } from "react";
import "./index.css";
const Header = lazy(() => import("../../uiComponents/header/Header"));
const FirstContainer = lazy(() => import("../../uiComponents/firstContainer/FirstContainer"));
const SecondContainer = lazy(() => import("../../uiComponents/secondContainer/SecondContainer"));
const DataContainer = lazy(() => import("../../uiComponents/dataContainer/DataContainer"));
const ThirdContainer = lazy(() => import("../../uiComponents/thirdContainer/ThirdContainer"));
const FourthContainer = lazy(() => import("../../uiComponents/fourthContainer/FourthContainer"));
const FifthContainer = lazy(() => import("../../uiComponents/fifthContainer/FifthContainer"));
const WorldMap = lazy(() => import("../../uiComponents/worldMap/WorldMap"));
const PartnerCompanies = lazy(() => import("../../uiComponents/partnerCompanies/PartnerCompanies"));
const SubscribeContainer = lazy(
    () => import("../../uiComponents/subscribeContainer/SubscribeContainer")
);
const FeedbackContainer = lazy(
    () => import("../../uiComponents/feedbackContainer/FeedbackContainer")
);
const Footer = lazy(() => import("../../uiComponents/footer/Footer"));
const SliderContainer = lazy(() => import("../../uiComponents/sliderContainer/SliderContainer"));

const Homepage: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <FirstContainer />
            <DataContainer />
            <SecondContainer />
            <ThirdContainer />
            <FourthContainer />
            <FifthContainer />
            <WorldMap />
            <PartnerCompanies />
            <FeedbackContainer />
            <SliderContainer />
            <SubscribeContainer />
            <Footer />
        </div>
    );
};

export default memo(Homepage);
