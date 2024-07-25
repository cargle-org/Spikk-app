import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PrivacyPage from "./pages/PrivacyPage";
import RestrictedItems from "./pages/RestrictedItems";
import { ItemProvider } from "./providers/ItemProvider";
import { SendItemProvider } from "./providers/SendItemProvider";
import Terms from "./pages/Terms";
function App() {
  return (
    <ItemProvider>
      <SendItemProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<LandingPage />}></Route>
            <Route path="/privacy" exact element={<PrivacyPage />}></Route>
            <Route
              path="/restricted"
              exact
              element={<RestrictedItems />}
            ></Route>
            <Route path="/tc" exact element={<Terms />}></Route>
          </Routes>
        </Router>
      </SendItemProvider>
    </ItemProvider>
  );
}

export default App;
