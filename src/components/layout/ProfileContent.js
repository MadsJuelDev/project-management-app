import { useState } from "react";
import { ProfileSidebar } from "./ProfileSidebar";

export const ProfileContent = () => {
  let [num, setNum] = useState(1);

  let incNum = () => {
    setNum(Number(num) + 1);
  };
  let decNum = () => {
    if (num > 1) {
      setNum(Number(num) - 1);
    }
  };

  let handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <section data-testid="profilePage-content" className="content">
      <ProfileSidebar />
      <div className="tasks" data-testid="tasks">
        <div className="char-wrapper">
          <div className="char-holder">
            <img
              src={require("../../assets/main_layer.png")}
              alt="Template Body"
            />
            <img
              src={require("../../assets/Hair/hair_one_white.png")}
              alt="Hair"
            />
            <img
              src={require("../../assets/Top/top_one_black.png")}
              alt="Top"
            />
            <img
              src={require("../../assets/Bottom/bottom_one_blue.png")}
              alt="Bottom"
            />
            <img
              src={require("../../assets/Shoes/shoes_one_WHite.png")}
              alt="Shoes"
            />
            <img src={require("../../assets/ground.png")} alt="" />
          </div>
        </div>
        <hr className="char__hr" />
        <div>
          <button onClick={decNum}>left</button>
          <select value={num} name="" id="" onChange={handleChange}>
            <option key="1" value="1">
              Hair One
            </option>
            <option key="2" value="2">
              Hair Two
            </option>
            <option key="3" value="3">
              Hair Three
            </option>
            <option key="4" value="4">
              Hair Four
            </option>
          </select>
          <button onClick={incNum}>Right</button>
        </div>
      </div>
    </section>
  );
};
