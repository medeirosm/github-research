import { all, takeLatest } from "redux-saga/effects";

import { Types as reposActionsTypes } from "../ducks/repos";
import { getRepos } from "./repos";

import { Types as commitsActionsTypes } from "../ducks/commits";
import { getCommits } from "./commits";

export default function* rootSaga() {
  yield all([
    takeLatest(reposActionsTypes.SAVE_REPOS_REQUEST, getRepos),
    takeLatest(commitsActionsTypes.SAVE_COMMITS_REQUEST, getCommits)
  ]);
}
