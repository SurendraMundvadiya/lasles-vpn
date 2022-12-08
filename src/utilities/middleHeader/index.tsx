import React, { memo } from "react";
interface MiddleHeaderProps {
    title: string;
    subtitle: string;
}
const MiddleHeader: React.FC<MiddleHeaderProps> = (props) => {
    const { title, subtitle } = props;
    return (
        <div className="w-50 m-auto flex column align-center justify-center">
            <p className="font-large fontWeight-500 text-center">{title}</p>
            <p className="text-center caption">{subtitle}</p>
        </div>
    );
};

export default memo(MiddleHeader);
