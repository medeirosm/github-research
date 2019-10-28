import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import Router from "next/router";

import { Creators as reposActions } from "../ducks/repos";

export function* getRepos(action) {
  const { username } = action.payload;
  try {
    const { data: repos } = yield call(api.get, `/users/${username}/repos`);

    Router.push({
      pathname: "/repositories"
    });

    yield put(reposActions.successSaveRepos(repos));
  } catch (error) {
    yield put(reposActions.failureSaveRepos());
  }
}
