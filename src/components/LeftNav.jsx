import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
    const { selectedCategory, setSelectedCategory, mobileMenu } = useContext(Context);

    const navigate = useNavigate();

    const clickHandler = (name, type) => {
        console.log("line 14", name, type);
        switch (type) {
            case "category":
                return setSelectedCategory(name);
            case "home":
                return setSelectedCategory(name);
            case "menu":
                return false;
            default:
                break;
        }
    };

    return (< >{mobileMenu? 
        <div className="md:block w-[200px] h-full py-4 bg-black absolute md:relative z-10 md:translate-x-0 transition-all" >
        <div className="flex px-5 flex-col">
            {categories.map((item) => {
                console.log("line 30", item);
                return (
                <React.Fragment key={item.name}>
                        <LeftNavMenuItem
                            text={item.type === "home" ? "Home" : item.name}
                            icon={item.icon}
                            action={() => {
                                console.log("line 36", item);
                                clickHandler(item.name, item.type);
                                //navigate("/");
                            }}
                            className={`${
                                selectedCategory === item.name
                                    ? "bg-white/[0.15]"
                                    : ""
                            }`}
                        />
                        {item.divider && (
                            <hr className="my-5 border-white/[0.2]" />
                        )}
                    </React.Fragment>
                );
            })}
            <hr className="my-5 border-white/[0.2]" />
            <div className="text-white/[0.5] text-[12px]">
                Clone by: Tushar Gaur
            </div>
        </div>
    </div>:<div
    className="md:block w-[240px] overflow-y-hidden h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all" >
    <div className="flex px-5 flex-col">
        {categories.map((item) => {
            return (
                <React.Fragment key={item.name}>
                    <LeftNavMenuItem
                        text={item.type === "home" ? "Home" : item.name}
                        icon={item.icon}
                        action={() => {
                            clickHandler(item.name, item.type);
                            navigate("/");
                        }}
                        className={`${
                            selectedCategory === item.name
                                ? "bg-white/[0.15]"
                                : ""
                        }`}
                    />
                    {item.divider && (
                        <hr className="my-5 border-white/[0.2]" />
                    )}
                </React.Fragment>
            );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
           @copyright YouTube 2023
        </div>
    </div>
</div>}</>
        
    );
};

export default LeftNav;