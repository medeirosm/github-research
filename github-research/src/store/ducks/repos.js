export const Types = {
  SAVE_REPOS_REQUEST: "repos/SAVE_REPOS_REQUEST",
  SAVE_REPOS_SUCCESS: "repos/SAVE_REPOS_SUCCESS",
  SAVE_REPOS_FAILURE: "repos/SAVE_REPOS_FAILURE"
};

export const INITIAL_STATE = {
  repos: null,
  loading: false,
  error: false
};

export default function repos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SAVE_REPOS_REQUEST:
      return { ...state, loading: true };

    case Types.SAVE_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.payload.repos,
        loading: false,
        error: false
      };

    case Types.SAVE_REPOS_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export const Creators = {
  requestSaveRepos: username => ({
    type: Types.SAVE_REPOS_REQUEST,
    payload: { username }
  }),
  successSaveRepos: repos => ({
    type: Types.SAVE_REPOS_SUCCESS,
    payload: { repos }
  }),
  failureSaveRepos: () => ({
    type: Types.SAVE_REPOS_FAILURE
  })
};
