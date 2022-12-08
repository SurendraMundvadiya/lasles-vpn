import React, { memo } from "react";
interface TextfieldProps {
    text: string;
    icon: any;
}
const Textfield: React.FC<TextfieldProps> = (props) => {
    const { text, icon } = props;
    return (
        <div className="flex align-center">
            <img src={icon} alt="text" style={{ paddingTop: "0.2rem" }} />
            <p className="caption" style={{ paddingLeft: "0.4rem" }}>
                {text}
            </p>
        </div>
    );
};

export default memo(Textfield);
