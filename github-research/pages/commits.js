import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import Head from "next/head";

import styled from "styled-components";

import colors from "../src/styles/variables/colors";

import SearchFilter from "../src/components/searchFilter.js";

import { Container } from "@material-ui/core";

const StyledContainer = styled(Container)`
  height: 100%;
`;

const List = styled.ul`
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 40px;
  margin: 10px 0;
  color: ${colors.lightGrey}
  padding: 10px;
  border-radius: 4px;

  :hover {
    color: ${colors.white}
    background: ${colors.lightGrey}
    opacity: 0.8;
  }
`;

const Repositories = ({ commits }) => {
  const [currentCommits, setCurrentCommits] = useState(commits);

  useEffect(() => {
    if (commits === null) {
      Router.push({ pathname: "/" });
    }
  }, []);

  return (
    <StyledContainer component="main" maxWidth="lg">
      <Head>
        <title>Repositorios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchFilter
        list={commits}
        onChange={commits => setCurrentCommits(commits)}
      />

      <List>
        {currentCommits &&
          currentCommits.length !== 0 &&
          currentCommits.map(commit => <Item>{commit}</Item>)}
      </List>
    </StyledContainer>
  );
};

const mapStateToProps = state => ({
  commits: state.commits.data
});

export default connect(mapStateToProps)(Repositories);
