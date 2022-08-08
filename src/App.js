import React from "react";
import 'normalize.css';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import Search from "./pages/Search";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { light } from './styles/Theme';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <ThemeProvider theme={light}>
                <Router>
                    <Switch>
                        <Route path="/Search" element={<Search />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
