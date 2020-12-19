import React from 'react'
import { Container, Box } from '@material-ui/core';
import Routes from './Routes';

export default function App() {
  return (
    <Container>
      <Box mt={5} p={5}>
        <Routes />
      </Box>
    </Container>
  );
}