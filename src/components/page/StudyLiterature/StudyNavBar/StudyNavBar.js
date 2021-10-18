import "./StudyNavBar.scss";

const StudyNavBar = ({ setIsRight }) => {
  return (
    <div
      className="StudyNavBar"
      onClick={() => {
        setIsRight(false);
      }}
    >
      ←
    </div>
  );
};

export default StudyNavBar;
