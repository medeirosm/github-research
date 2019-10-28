export const Types = {
  SAVE_COMMITS_REQUEST: "commits/SAVE_COMMITS_REQUEST",
  SAVE_COMMITS_SUCCESS: "commits/SAVE_COMMITS_SUCCESS",
  SAVE_COMMITS_FAILURE: "commits/SAVE_COMMITS_FAILURE"
};

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null
};

export default function commits(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SAVE_COMMITS_REQUEST:
      return { ...state, loading: true };

    case Types.SAVE_COMMITS_SUCCESS:
      return { ...state, data: action.payload, loading: false };

    case Types.SAVE_COMMITS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  requestSaveCommits: (owner, repo) => ({
    type: Types.SAVE_COMMITS_REQUEST,
    payload: { owner, repo }
  }),
  successSaveCommits: commits => {
    const commitMessages = commits
      .slice(0, 20)
      .map(commit => commit.commit.message);

    return {
      type: Types.SAVE_COMMITS_SUCCESS,
      payload: commitMessages
    };
  },
  failureSaveCommits: error => ({
    type: Types.SAVE_COMMITS_FAILURE,
    payload: { error }
  })
};
