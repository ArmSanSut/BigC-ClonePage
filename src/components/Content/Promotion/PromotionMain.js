import React, { useState } from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";
import FourthTab from "./FourthTab";
import FifthTab from "./FifthTab";
import './Promotion.css'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        setActiveTab("tab2");
    };
    const handleTab3 = () => {
        setActiveTab("tab3");
    };
    const handleTab4 = () => {
        setActiveTab("tab4");
    };
    const handleTab5 = () => {
        setActiveTab("tab5");
    };
    return (
        <div className="Tabs">
            <h2 className="head-text">โปรโมชั่น</h2>            
            <ul className="nav">
                <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>สินค้าถูกสุดๆ</li>
                <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>ซื้อ 1 แถม 1</li>
                <li className={activeTab === "tab3" ? "active" : ""} onClick={handleTab3}>ซื้อ 2 แถม 1</li>
                <li className={activeTab === "tab4" ? "active" : ""} onClick={handleTab4}>ซื้อ 3 แถม 1</li>
                <li className={activeTab === "tab5" ? "active" : ""} onClick={handleTab5}>2 ชิ้นถูกกว่า</li>
            </ul>
            <hr></hr>
            <div className="outlet">
                {activeTab === "tab1" ? <FirstTab /> :
                    activeTab === "tab2" ? <SecondTab /> :
                        activeTab === "tab3" ? <ThirdTab /> :
                            activeTab === "tab4" ? <FourthTab /> : <FifthTab />
                }
            </div>
        </div>
    );
};
export default Tabs;