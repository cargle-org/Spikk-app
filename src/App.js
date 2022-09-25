import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
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
        </Routes>
      </Router>
      </SendItemProvider>
      </ItemProvider>
  );
}

export default App;
