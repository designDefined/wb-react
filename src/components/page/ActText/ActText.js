import "./ActText.scss";
import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import PleaseScrollDown from "../../common/PleaseScrollDown/PleaseScrollDown";
import ContentList from "./ContentList/ContentList";
const ActText = () => {
  return (
    <div className="Page--ActText">
      <div className="HeaderContainer">
        <Header />
        <Introduction />
      </div>
      <PleaseScrollDown />
      <div className="ContentListContainer">
        <ContentList />
      </div>
    </div>
  );
};

export default ActText;
