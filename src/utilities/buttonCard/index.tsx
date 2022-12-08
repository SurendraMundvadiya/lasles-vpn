import React, { memo } from "react";
import "./index.css";
interface ButtonCardProps {
    key?: any;
    img?: any;
    title: string;
    caption: string;
}
const ButtonCard: React.FC<ButtonCardProps> = (props) => {
    const { img, title, caption, key } = props;
    return (
        <div className="flex px-4 py-1 w-1/3" key={key}>
            <div
                id="imageBox"
                className="w-1/3 flex align-center justify-center bg-light border-rounded"
            >
                <img src={img} alt="" style={{ height: "40%" }} />
            </div>
            <div className="w-2/3 flex justify-center column pl-1">
                <p className="title">{title}</p>
                <p className="caption">{caption}</p>
            </div>
        </div>
    );
};

export default memo(ButtonCard);
