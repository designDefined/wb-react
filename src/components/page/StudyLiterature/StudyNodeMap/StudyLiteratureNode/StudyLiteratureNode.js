import "./StudyLiteratureNode.scss";

const StudyLiteratureNode = ({
  children,
  name,
  color,
  setIsRight,
  setRightContent,
}) => {
  return (
    <div
      className={`StudyLiteratureNode ${color}`}
      onClick={() => {
        setIsRight(true);
        setRightContent(name);
      }}
    >
      {children}
    </div>
  );
};

export default StudyLiteratureNode;
