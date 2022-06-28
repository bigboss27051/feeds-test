import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { FeedsProvider } from "./contexts/feed";

function App() {
  return (
    <FeedsProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </FeedsProvider>
  );
}

export default App;
