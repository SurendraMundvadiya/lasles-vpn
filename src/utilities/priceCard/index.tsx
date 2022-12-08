import React, { memo } from "react";
import Gift from "../../assets/Free.svg";
import Textfield from "../textfield";
import RightSign from "../../assets/RightSign.svg";
import Button from "../button";
import "./index.css";
interface PriceCardProps {
    key?: any;
    title: string;
    benifits: string[];
    price: string;
}
const PriceCard: React.FC<PriceCardProps> = (props) => {
    const { title, benifits, price, key } = props;
    return (
        <div key={key} className="flex column p-2 card-border w-1/3 gap-2 align-center">
            <img src={Gift} alt={title} style={{ height: "10rem" }} />
            <p className="title">{title}</p>
            <div className="flex column gap-1/2">
                {benifits.map((bnf) => (
                    <Textfield text={bnf} icon={RightSign} />
                ))}
            </div>
            <div className="card-button">
                <p className="title">{price}</p>
                <Button
                    varient={title.toLowerCase().includes("premium") ? "contained" : "outlined"}
                    shape="rounded"
                >
                    Select
                </Button>
            </div>
        </div>
    );
};

export default memo(PriceCard);
