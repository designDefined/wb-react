import { useHistory } from "react-router";
import "./StudyHeader.scss";

const StudyHeader = () => {
  const history = useHistory();
  return (
    <div className="StudyHeader">
      <div className="StudyHeader__Navigator">
        <div className="PrevButton" onClick={() => history.push("/act_text")}>
          ← 이전으로 돌아가기
        </div>
        <div className="SectionName">발제문</div>
      </div>
      <div className="StudyHeader__Title">
        <h1>문학?</h1>
      </div>
      <div className="StudyHeader__Introduction">
        <p>우리가 즐기는 문학의 본질은 무엇이고,</p>
        <p>앞으로 문학은 어떠한 형태로 발전할까?</p>
        <p>이를 작품과, 작가 그리고 문학계의 차원에서 고민해보자</p>
      </div>
    </div>
  );
};

export default StudyHeader;
