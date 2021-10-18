import "./DetailViewWork.scss";

const DetailViewWork = () => {
  return (
    <div className="DetailViewWork">
      <div className="Work__Header">
        <h1>작품</h1>
        <h3>활자가 예술이 되는 순간</h3>
      </div>
      <div className="Work__Content">
        <p className="p-title">1. 이것도 문학일까?</p>
        <div className="hl-back p-quote">
          <div className="quote">
            만약 문학이론이라는 게 있다면, <br />그 대상인 문학이라 불리는 어떤
            것이 분명 있을 것이다.
          </div>
          <div className="author">-테리 이글턴, 문학이론</div>
        </div>
        <p>
          문학 작품이 '글'에 기반한 예술이라는 사실은 자명하다. 그러나 모든 글이
          문학 작품인 것은 아니다.
        </p>
        <p>
          우리는 일상적으로 문학과 문학이 아닌 글, 문학이 아니지만 '문학적인'
          글을 구분하곤 한다. 그러나 그 기준을 명확히 설명하는 것은 쉽지 않다.
          문학과 문학이 아닌 글 사이에 있는 여러 회색지대 때문이다.
        </p>
        <p>다음 글들을 문학 작품이라 할 수 있을까?</p>
        <p className="p-title">-웹소설</p>
        <p className="p-title">-시나리오</p>
        <div className="hl-front p-quote">
          <div className="quote">
            All work and no play makes Jack a dull boy
          </div>
          <div className="author">-스탠리 큐브릭 연출, The Shining</div>
        </div>
        <p>
          오늘날 영상 컨텐츠는 대중 예술 분야에서 텍스트 기반 예술을 대체하고
          있지만, 영상의 바탕에도 '시나리오'라는 특수한 형태의 글은 존재한다.
          감독이나 시나리오 전문 작가가 새로이 창작한 글 부터, 기존의 문학
          작품이나 희곡, 만화 등을 각색한 글까지, 시나리오의 종류는 다양하며,
          영상이 완성된 후 시나리오북이나 콘티북과 같은 형태로 출판되기도 한다.
        </p>
        <p>
          과연 이 글들은, 영상을 완성하기 위한 수단이라는 사실과 별개로 예술성을
          인정받을 수 있을까? 그렇다면 시나리오는 '문학 작품'에 해당할까?
        </p>
        <p className="p-title">-가사</p>
        <div className="hl-front p-quote">
          <div className="quote">
            힙합이 이 땅 위 자리잡기까지 <br />
            차디찬 시각이란 비탈길과 실랑이 <br />
            괄시나 심한 비난 이간질 딴지 사이 <br />
            만신창이 삭신 난 이 바위 앞의 가위
          </div>
          <div className="author">-화나, 동전 한닢 remix</div>
        </div>
        <p className="p-title">-신문 기사</p>
        <p className="p-title">-판결문</p>
        <div className="hl-front p-quote">
          <div className="quote">
            That, at any rate, is the theory of our Constitution. It is an
            experiment, as all life is an experiment.
          </div>
          <div className="author">
            -올리버 웬델 홈스, Abrams v. U.S. 반대 의견
          </div>
        </div>
        <p>
          정도의 차이는 있겠지만, 어떤 국가의 사법 시스템은 판결을 내릴 때,
          판사나 배심원들의 의견이 지닌 호소력을 중요시한다. 이 호소력은 물론
          주장이 기반한 법 논리의 충실성에서 나오기 마련이다. 그러나 판례가
          충분히 마련되지 않아 법 조항에 대한 해석이 중요시되던 건국 초기나,
          기존의 법으로 다룰 수 없는 새로운 종류의 분쟁이 발생했을 때, 의사
          결정자들은 자신의 윤리관이나 감수성에 의거하여 판단할 수 밖에 없었다.
        </p>
        <p>
          이 과정에서 혹자는 자신의 철학을 담은 강력한 예술적 표현으로 시민들의
          공감을 획득하기도 했다. 이러한 판례들은 미국을 비롯한 많은 나라들의
          사법 전통으로 여전히 작동하고 있다.
        </p>
        <p className="p-title">-코드나 수식?</p>
        <div className="hl-front p-quote">
          <div className="quote">
            나는 우아하고 효율적인 코드를 좋아한다. 논리가 간단해야 버그가
            숨어들지 못한다...(중략) <br /> 깨끗한 코드는 한 가지를 제대로 한다.
          </div>
          <div className="author">-</div>
        </div>
        <p>
          코드나 수식이 문학 작품이 될 수 있다는 주장은 헛소리처럼 보이지만,
          프로그래머와 작가의 작업 형태를 분석하면 많은 유사성을 발견할 수 있을
          것이다. 매일 타이핑을 한다. 하나의 문장이 보이는 것 보다 많은 의미를
          담을 수 있게 한다. 구조적으로 완성도 있는 글을 좋아한다. 쓰는 것보다
          탈고가 더 고통스럽다. 오타에 민감하다.
        </p>
        <p className="p-nextTitle">2. 문학은 왜 매력적인가?</p>
        <p>
          앞서 언급했듯이, 오늘날 대부분의 사람은 책보다 핸드폰이나 TV 화면을
          바라보는데 익숙할 것이다. 그럼에도 불구하고 문학은 여전히 생존하고
          있으며, 많은 사람들에게 다른 예술 장르로는 대체 불가능한 즐거움을
          선사한다. 어떠한 요소가 문학을 특별하게 만들까?
          <span className="hl-front">당신에게 그 이유는 무엇인가? </span>
        </p>
        <p>-인간의 상상력?</p>
        <p>-좋은 작품들?</p>
        <p>-불변하는 가치들?</p>
        <p>-아날로그 감성?</p>
      </div>
    </div>
  );
};

export default DetailViewWork;
