import SplitPage from "./pages/split/SplitPage";
import GroupPage from "./pages/group/GroupPage";
import SummaryPage from "./pages/summary/SummaryPage";
import SetsPage from "./pages/sets/SetsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplitPage />} />
        <Route path="/group" element={<GroupPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/sets" element={<SetsPage />} />
      </Routes>
    </>
  );
}

export default App;
