import React, { memo } from "react";
import "./index.css";
interface ButtonProps {
    onClick?: (_: any) => void;
    varient?: string;
    shape?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { onClick, varient, children, shape } = props;
    let classStyle = "";
    if (varient) classStyle = classStyle + " " + varient;
    if (shape) classStyle = classStyle + " " + shape;

    return (
        <button onClick={onClick} className={classStyle}>
            {children}
        </button>
    );
};

export default memo(Button);
