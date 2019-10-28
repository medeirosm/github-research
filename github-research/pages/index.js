import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Head from "next/head";

import { Creators } from "../src/store/ducks/repos";

import styled from "styled-components";

import colors from "../src/styles/variables/colors";

import {
  TextField,
  Button,
  CircularProgress,
  FormControl,
  Box,
  Container
} from "@material-ui/core";

const GithubImage = styled.img`
  display: block;
  max-width: 300px;
  margin: 40px auto;
`;

const Form = styled(FormControl)`
  && {
    display: block;
    max-width: 500px;
  }
`;

const StyledTextField = styled(TextField)`
  && :focus {
    border-color: ${colors.darkGrey};
  }
`;

const StyledButton = styled(Button)`
  && {
    height: 40px;
    max-width: 500px;
    color: ${colors.white}
    background: ${colors.darkGrey};

    :hover {
      background: ${colors.darkGrey};
      opacity: 0.8;
    }
  }
`;

const StyledCircularProgress = styled(CircularProgress)`
  && {
    display: block;
    color: ${colors.darkGrey};
    margin: 0 auto;
  }
`;

const Home = ({ loading, error, requestSaveRepos }) => {
  const [draftUsername, setDraftusername] = useState("");

  return (
    <Container component="main" maxWidth="lg">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <GithubImage alt="logo" src="../static/images/logo.png" />

        <Form fullWidth>
          <StyledTextField
            display="flex"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="github-user"
            placeholder="Usuário"
            value={draftUsername}
            error={error}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setDraftusername(e.target.value)}
          />
          {!loading ? (
            <StyledButton
              fullWidth
              onClick={() => requestSaveRepos(draftUsername)}
            >
              Buscar usuário
            </StyledButton>
          ) : (
            <StyledCircularProgress />
          )}
        </Form>
      </Box>
    </Container>
  );
};

const mapStateToProps = state => ({
  loading: state.repos.loading,
  error: state.repos.error
});

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
