import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import Router from "next/router";

import { Creators as commitsActions } from "../ducks/commits";

export function* getCommits(action) {
  const { owner, repo } = action.payload;
  try {
    const { data: commits } = yield call(
      api.get,
      `/repos/${owner}/${repo}/commits`
    );

    Router.push({
      pathname: "/commits"
    });

    yield put(commitsActions.successSaveCommits(commits));
  } catch (error) {
    yield put(commitsActions.failureSaveCommits("Usuário não encontrado"));
  }
}
