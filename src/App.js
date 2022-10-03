import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PrivacyPage from "./pages/PrivacyPage";
import RestrictedItems from "./pages/RestrictedItems";
import { ItemProvider } from "./providers/ItemProvider";
import { SendItemProvider } from "./providers/SendItemProvider";
function App() {
  return (
    <ItemProvider>
      <SendItemProvider>
      <Router>
        <Routes>
          <Route
           path="/"
           exact
           element={<LandingPage />}></Route>
          <Route
           path="/privacy-policy"
           exact
           element={<PrivacyPage />}></Route>
          <Route
           path="/privacy/restricted-items"
           exact
           element={<RestrictedItems />}></Route>
        </Routes>
      </Router>
      </SendItemProvider>
      </ItemProvider>
  );
}

export default App;
