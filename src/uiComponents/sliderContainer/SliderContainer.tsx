import React, { lazy } from "react";
import "./SliderContainer.css";
import person1 from "../../assets/person_one.png";
import person2 from "../../assets/person_two.png";
import person3 from "../../assets/person_three.png";

const SliderCard = lazy(() => import("../../utilities/sliderCard"));
const SliderContainer = () => {
    const people = [
        {
            name: "Yessica Christy",
            review: "“I like it because I like to travel far and still can connect with high speed.”.",
            image: person1,
            address: "Shanxi, China",
            rating: "4.5",
        },
        {
            name: "Kim Young Jou",
            review: "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
            image: person2,
            address: "Seoul, South Korea",
            rating: "4.5",
        },
        {
            name: "Viezh Robert",
            review: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
            image: person3,
            address: "Warsaw, Poland",
            rating: "4.5",
        },
    ];
    return (
        <div className="w-full p-1">
            <div className="sliderBox flex gap-2">
                {people.map((el: any, index: number) => {
                    return (
                        <SliderCard
                            name={el.name}
                            address={el.address}
                            image={el.image}
                            rating={el.rating}
                            review={el.review}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SliderContainer;
