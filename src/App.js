import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//Page Components
// import Home from "./components/page/Home/Home";
import ActText from "./components/page/ActText/ActText";
import StudyLiterature from "./components/page/StudyLiterature/StudyLiterature";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {/* <Route path="/home" component={Home} exact></Route> */}
        <Route path="/wb-react" component={ActText} exact></Route>
        <Route
          path="/wb-react/study_literature"
          component={StudyLiterature}
          exact
        ></Route>
        <Redirect to="/wb-react"></Redirect>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
