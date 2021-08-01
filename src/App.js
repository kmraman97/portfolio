import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Professional from "./pages/Professional";
import Layout from "./components/layout/Layout";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import About from "./pages/About";
import ProjectDetail from "./pages/subpages/ProjectDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="Home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/professional">
          <Professional />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <subpages>
        <Route path="/projects/:projectId">
          <ProjectDetail />
        </Route>
      </subpages>
    </Layout>
  );
}

export default App;
