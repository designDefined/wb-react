import "./StudyNodeMap.scss";
import StudyLiteratureNode from "./StudyLiteratureNode/StudyLiteratureNode";
const StudyNodeMap = ({ setIsRight, setRightContent }) => {
  return (
    <div className="StudyNodeMap">
      <StudyLiteratureNode
        name={"work"}
        color={"style-green"}
        setIsRight={setIsRight}
        setRightContent={setRightContent}
      >
        작품
      </StudyLiteratureNode>
      <div className="StudyNodeMap__Line"></div>
      <StudyLiteratureNode
        name={"writer"}
        color={"style-yellow"}
        setIsRight={setIsRight}
        setRightContent={setRightContent}
      >
        작가
      </StudyLiteratureNode>
      <div className="StudyNodeMap__Line"></div>
      <StudyLiteratureNode
        name={"world"}
        color={"style-blue"}
        setIsRight={setIsRight}
        setRightContent={setRightContent}
      >
        문학계
      </StudyLiteratureNode>
    </div>
  );
};

export default StudyNodeMap;
