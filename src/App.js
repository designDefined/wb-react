import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
//Page Components
import Home from "./components/page/Home/Home";
import ActText from "./components/page/ActText/ActText";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} exact></Route>
        <Route path="/act_text" component={ActText} exact></Route>
        <Redirect to="/act_text"></Redirect>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
