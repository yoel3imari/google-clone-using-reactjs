import React from "react";
import 'normalize.css';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
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
                        <Route path="/Search" element={<SearchPage />} />
                        <Route path="/Home" element={<HomePage />} />
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
