import "./ToggleBox.scss";
import { useState, useEffect } from "react";
const ToggleBox = ({ children }) => {
  const [isToggle, setIsToggle] = useState(false);

  //Debugging
  useEffect(() => {
    if (children.length !== 2) {
      console.error("Invalid ToggleBox");
    }
  }, [children]);

  return (
    <div className="ToggleBox">
      <div className="ToggleBox__Show" onClick={() => setIsToggle(!isToggle)}>
        {children[0]}
        {!isToggle && <div className="ToggleBox__Icon">🠗</div>}
      </div>
      {isToggle && <div className="ToggleBox__Hide">{children[1]}</div>}
    </div>
  );
};

export default ToggleBox;
