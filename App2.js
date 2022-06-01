import React from 'react';
import Col from "./components/defaults/Col";
import Role from "./Role";
import Row from "./components/defaults/Row";
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Main from "./main";
import Admin from "./Admin";
import Student from "./Student";
import {ContextProvider} from "./context2/NetContext";
const App2 = () => {
    return (
        <ContextProvider>

        <Col>
            <Role/>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Main />} />
                    <Route path={"/admin"} element={<Admin />} />
                    <Route path={"/student"} element={<Student />} />
                </Routes>
            </Router>
        </Col>
        </ContextProvider>
    );
};

export default App2;