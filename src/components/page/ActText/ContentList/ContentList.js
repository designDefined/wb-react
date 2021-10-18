import ToggleBox from "../../../common/ToggleBox/ToggleBox";
import "./ContentList.scss";
const ContentList = ({ history }) => {
  return (
    <div className="ContentList">
      <ToggleBox>
        <div className="Content--Outside">
          <div className="Content__Title">
            <span className="Content__Title__Colored">Part 1. STUDY:</span>
            글이란 무엇인가
          </div>
          <div className="Content__Introduction">
            <p>문학, 에세이, 신문기사, 블로그와 SNS... </p>
            <p>사람을 통해 글을 배우다</p>
          </div>
        </div>
        <div className="Content--Inside">
          <p>
            글과 관련된 다양한 분야에서 활동하는 사람들에게 글의 본질에 대해
            질문합니다.
          </p>
          <p>
            글을 쓰고 읽는 행위의 의미는 무엇일까요? 오늘날 글은 어떻게 변화하고
            있을까요? 글쓰기는 인간 고유의 활동일까요?
          </p>
          <p>
            이곳에 기록된 생각들은 아래의 프로젝트를 이끌 길잡이가 되어 줄
            것입니다.
          </p>
          <div
            className="Content--Inside__Link"
            onClick={() => history.push("act_text/study_literature")}
          >
            문학 편 보러가기
          </div>
        </div>
      </ToggleBox>
      <ToggleBox>
        <div className="Content--Outside">
          <div className="Content__Title">
            <span className="Content__Title__Colored">Part 2. WRITING:</span>
            단편 시나리오
          </div>
          <div className="Content__Introduction">
            <p>2021 대학문학상 투고 예정</p>
            <p>가제: "코드는 어째서 문학이 될 수 없는가"</p>
          </div>
        </div>
        <div className="Content--Inside">
          <p>20분 내외의 단편 시나리오.</p>
          <p>
            작가 지망생 A와 프로그래머 B는 첫 눈에 반해 연인이 되지만, 너무나도
            다른 그들의 사랑은 순탄치 않습니다.
          </p>
          <p>
            A는 과연 자신의 첫번째 작품을 완성해 등단을 할 수 있을까요? B는
            '소설을 쓰는 인공지능을 만들겠다'는 원대한 꿈을 이루었을까요?
          </p>
          <p>
            그 정답은 먼 훗날, 백발이 성성한 노인의 수발을 드는 인공지능만이
            알고 있습니다.
          </p>
        </div>
      </ToggleBox>
      <ToggleBox>
        <div className="Content--Outside">
          <div className="Content__Title">
            <span className="Content__Title__Colored">
              Part 3. PROGRAMMING &#38; WEB DESIGN
            </span>
          </div>
          <div className="Content__Introduction">
            <p>디지털 환경 속에서 글 본연의 의미를 되살리다</p>
            <p>쓰는 사람도, 읽는 사람도 만족할 수 있는 웹 플랫폼</p>
          </div>
        </div>
        <div className="Content--Inside">
          <p>
            공책 대신 랩탑이 작가의 필수품이 되고, 애서가의 기준이 e-북 리더의
            유무로 결정되는 시대.
          </p>
          <p>
            그동안 글은 디지털 매체와 웹 환경이 제공하는 틀 속에 자신의 몸을
            끊임없이 우겨넣어 왔습니다.
          </p>
          <p>
            디지털 기술이 선사한 또 다른 가능성 속에서, 작가와 독자가 글 본연의
            의미를 표현하고 즐길 수 있을 새로운 방안을 모색합니다.
          </p>
        </div>
      </ToggleBox>
      <ToggleBox>
        <div className="Content--Outside">
          <div className="Content__Title">
            <span className="Content__Title__Colored">Part 4. WRITING:</span>
            장편 소설
          </div>
          <div className="Content__Introduction">
            <p>글을 쓰는 인공지능 1인칭 시점의 소설</p>
            <p>가제: "애자일 AGILE"</p>
          </div>
        </div>
        <div className="Content--Inside">
          <p>
            정체 불명의 인공지능 집단 {"<토성>"}이 문학을 창작하기 시작한 지 반
            세기 후.
          </p>
          <p>
            인간은 도태되고 인공지능이 세상을 지배할 것이라는 모두의 예상과는
            다르게, 세상은 몹시도 평화롭고 아름답습니다.
          </p>
          <p>
            군인은 더 이상 싸우지 않고, 아이들은 인문과 예술을 즐기며, 모든
            인간은 서로의 내면에 존재하는 공통의 본질을 바라봅니다.
          </p>
          <p>
            이 의아한 고요 속에서, 실패작 인공지능 "애자일"이 자신의 첫 작품을
            완성하기 위해 {"<토성>"}의 비밀을 파해칩니다.
          </p>
        </div>
      </ToggleBox>
    </div>
  );
};

export default ContentList;
