import "./StudyLiterature.scss";
import { useState } from "react";
import StudyNodeMap from "./StudyNodeMap/StudyNodeMap";
import StudyHeader from "./StudyHeader/StudyHeader";
import StudyDetailView from "./StudyDetailView/StudyDetailView";
import StudyNavBar from "./StudyNavBar/StudyNavBar";
import { useRef } from "react";
const StudyLiterature = () => {
  const [isRight, setIsRight] = useState(false);
  const [rightContent, setRightContent] = useState(null);
  const detailViewRef = useRef();

  return (
    <div
      className={`Page--StudyLiterature  
        ${isRight ? "StudyLiterature-right" : "StudyLiterature-center"}`}
    >
      <div className="css3d-container">
        <div className="css3d-front">
          <div className="StudyLiterature__FrontContainer">
            <div className="StudyLiterature__HeaderContainer">
              <StudyHeader />
              <StudyNodeMap
                setIsRight={setIsRight}
                setRightContent={setRightContent}
              />
              <div className="StudyLiterature__Footer">
                위의 세 단어를 클릭하면 발제문을 열람할 수 있습니다.
                <br />
                결과지는 추후 업로드 예정입니다.
              </div>
            </div>
          </div>
        </div>
        <div className="css3d-right">
          <div
            className="StudyLiterature__RightContainer"
            ref={detailViewRef}
            onTransitionEnd={() => {
              if (!isRight) {
                detailViewRef.current.scrollTo(0, 0);
              }
            }}
          >
            <div className="StudyLiterature__DetailViewContainer">
              <StudyNavBar setIsRight={setIsRight} />
              <StudyDetailView rightContent={rightContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyLiterature;
