import ToggleBox from "../../../common/ToggleBox/ToggleBox";
import "./ContentList.scss";
const ContentList = () => {
  return (
    <div className="ContentList">
      <ToggleBox>
        <div className="Content--Outside">
          <div className="Content__Title">
            <span className="Content__Title__Colored">Part 1. STUDY:</span>
            글이란 무엇인가
          </div>
          <div className="Content__Introduction"></div>
        </div>
        <div className="Content--Inside"> 두번째 </div>
      </ToggleBox>
      <ToggleBox>
        <div className="Content--Outside">
          <div className="Content__Title">
            <span className="Content__Title__Colored">Part 2. WRITING:</span>
            단편 시나리오
          </div>
          <div className="Content__Introduction"></div>
        </div>
        <div className="Content--Inside"> 두번째 </div>
      </ToggleBox>
      <ToggleBox>
        <div className="Content--Outside">
          <div className="Content__Title">
            <span className="Content__Title__Colored">
              Part 3. PROGRAMMING &#38; WEB DESIGN
            </span>
          </div>
          <div className="Content__Introduction"></div>
        </div>
        <div className="Content--Inside"> 두번째 </div>
      </ToggleBox>
      <ToggleBox>
        <div className="Content--Outside">
          <div className="Content__Title">
            <span className="Content__Title__Colored">Part 4. WRITING:</span>
            장편 소설
          </div>
          <div className="Content__Introduction"></div>
        </div>
        <div className="Content--Inside"> 두번째 </div>
      </ToggleBox>
    </div>
  );
};

export default ContentList;
