import DetailViewWork from "./DetailViewWork/DetailViewWork";
import DetailViewWorld from "./DetailViewWorld/DetailViewWorld";
import DetailViewWriter from "./DetailViewWriter/DetailViewWriter";

const StudyDetailView = ({ rightContent }) => {
  switch (rightContent) {
    case "work":
      return <DetailViewWork />;
    case "writer":
      return <DetailViewWriter />;
    case "world":
      return <DetailViewWorld />;
    default:
      return null;
  }
};

export default StudyDetailView;
