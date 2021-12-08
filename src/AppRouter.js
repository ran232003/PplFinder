import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import PageContext from "context/PageContext";

const AppRouter = () => {
  const[pageNum, setChangePage] = useState(0);
  const handleChangePage = (val)=>{
    setChangePage(val);
  }
  return (
    
    <ThemeProvider>
      <PageContext.Provider value = {{pageNum:pageNum,handleChangePage:handleChangePage}}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      </PageContext.Provider>
    </ThemeProvider>
    
  );
};

export default AppRouter;
