import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Router from "next/router";
import Head from "next/head";

import { Creators } from "../src/store/ducks/commits";

import styled from "styled-components";

import colors from "../src/styles/variables/colors";
import { Container, Button, CircularProgress } from "@material-ui/core";

const StyledButton = styled(Button)`
  && {
    display: flex;
    height: 40px;
    color: ${colors.darkGrey}
    text-align: left;
    
    :hover {
      color: ${colors.white}
      background: ${colors.darkGrey};
      opacity: 0.8;
    }
  }
`;

const List = styled.ul`
  padding: 0;
`;

const StyledCircularProgress = styled(CircularProgress)`
  && {
    display: block;
    color: ${colors.darkGrey};
    margin: 0 auto;
  }
`;

const Repositories = ({ repos, loading, requestSaveCommits }) => {
  useEffect(() => {
    if (repos === null) {
      Router.push({ pathname: "/" });
    }
  }, []);

  return (
    <Container component="main" maxWidth="lg">
      <Head>
        <title>Repositorios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <List>
        {repos &&
          repos.map(repo => (
            <li key={repo.id}>
              <StyledButton
                fullWidth
                disabled={loading}
                onClick={() => requestSaveCommits(repo.owner.login, repo.name)}
              >
                {!loading ? repo.name : <StyledCircularProgress />}
              </StyledButton>
            </li>
          ))}
      </List>
    </Container>
  );
};

const mapStateToProps = state => ({
  repos: state.repos.repos,
  loading: state.repos.loading
});

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repositories);
