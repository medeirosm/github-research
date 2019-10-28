import { combineReducers } from "redux";

import repos, { INITIAL_STATE as REPOS_INITIAL_STATE } from "./repos";
import commits, { INITIAL_STATE as COMMITS_INITIAL_STATE } from "./commits";

export const initialState = {
  repos: { ...REPOS_INITIAL_STATE },
  commits: { ...COMMITS_INITIAL_STATE }
};

export default combineReducers({
  repos,
  commits
});
