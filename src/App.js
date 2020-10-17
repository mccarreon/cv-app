import React from 'react';
import GeneralInfo from './components/GeneralContainer';
import EducationInfo from './components/EducationContainer';
import ExperienceInfo from './components/ExperienceContainer';
import { Box, Grid, CssBaseline, Container, ThemeProvider } from '@material-ui/core/';
import theme from './theme';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="primary.light" style={{height: "100%"}}>
        <Container maxWidth='md'>
          <Grid container direction="column" spacing={2}>
            <CssBaseline />
            <Grid item>
              <GeneralInfo />
            </Grid>
            <Grid item>
              <EducationInfo />
            </Grid>
            <Grid item>
              <ExperienceInfo />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
