import NewSplitPage from "./pages/newsplit/NewSplitPage";
import GroupFeedPage from "./pages/groupfeed/GroupFeedPage";
import SetsPage from "./pages/sets/SetsPage";
import GroupsSummaryPage from "./pages/groupssummary/GroupsSummaryPage";
import FriendsSummaryPage from "./pages/friendssummary/FriendsSummaryPage";
import FriendSummaryPage from "./pages/friendsummary/FriendSummaryPage";
import SplitSummaryPage from "./pages/splitsummary/SplitSummaryPage";
import Menu from "./components/Menu";
import Back from "./components/Back";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Back />
      <Routes>
        <Route path="/" element={<FriendsSummaryPage />} />

        <Route path="/new-split" element={<NewSplitPage />} />
        <Route path="/new-split/sets" element={<SetsPage />} />

        <Route path="/groups" element={<GroupsSummaryPage />} />

        <Route path="/groups/:id" element={<GroupFeedPage />} />
        <Route path="/groups/:id/summary/:id" element={<SplitSummaryPage />} />

        <Route path="/friends" element={<FriendsSummaryPage />} />

        <Route path="/friends/:id" element={<FriendSummaryPage />} />
      </Routes>
      <Menu />
    </>
  );
}

export default App;
