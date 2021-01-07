import React from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import Employees from '../components/pages/employees/Employees';

const useStyles = makeStyles({
  appMain:{
    paddingLeft : "320px",
    width : "100%"
  }
});

const customTheme = createMuiTheme({
  palette:{
    primary:{
      main:"#FF0000"
    }
  }
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline/>
      <SideMenu/>
      <div className = {classes.appMain}>
        <Header/>
        <Employees/>
      </div> 
    </ThemeProvider >
  );
}

export default App;
