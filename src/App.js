import SplitPage from "./pages/split/SplitPage";
import GroupPage from "./pages/group/GroupPage";
import SummaryPage from "./pages/summary/SummaryPage";
import SetsPage from "./pages/sets/SetsPage";
import Gsummary from "./pages/gsummary/Gsummary";
import Fsummary from "./pages/fsummary/Fsummary";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/new-split" element={<SplitPage />} />
        <Route path="/new-split/sets" element={<SetsPage />} />
        <Route path="/group/:gid" element={<GroupPage />} />
        <Route path="/group/:gid/summary/:sid" element={<SummaryPage />} />
        <Route path="/summary/:sid" element={<SummaryPage />} />
        <Route path="/groups" element={<Gsummary />} />
        <Route path="/friends" element={<Fsummary />} />
      </Routes>
    </>
  );
}

export default App;
