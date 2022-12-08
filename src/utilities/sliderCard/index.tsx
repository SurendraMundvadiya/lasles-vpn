import React, { memo } from "react";
import star from "../../assets/star.svg";
interface SliderCardProps {
    key?: any;
    name: string;
    address: string;
    image: any;
    rating: string;
    review: any;
}
const SliderCard: React.FC<SliderCardProps> = (props) => {
    const { address, name, image, rating, review } = props;
    return (
        <div className="w-1/3 p-1 card-border bg-white" style={{ minWidth: "350px" }}>
            <div className="flex align-center">
                <img src={image} style={{ height: "2rem" }} alt="" />
                <div className="flex column align-start pl-1">
                    <p className="caption">{name}</p>
                    <p className="caption">{address}</p>
                </div>
                <div className="flex align-center ml-auto">
                    <p>{rating}</p>
                    <img src={star} alt="" style={{ height: "1rem" }} />
                </div>
            </div>
            <div className="py-1">
                <p className="caption">{review}</p>
            </div>
        </div>
    );
};

export default memo(SliderCard);
