import React from 'react';
import Row from "./components/defaults/Row";
import Col from "./components/defaults/Col";
import {Link,BrowserRouter as Router} from 'react-router-dom'
const Role = () => {
    return (
        <Row>
            <Router>
                    <Col style={{flex:"1"}}>
                <Link to={"/admin"}>
                        Admin
                </Link>
                    </Col>
                    <Col style={{flex:"1"}}>
                <Link to={"/student"}>
                        student
                </Link>
                    </Col>
            </Router>
        </Row>
    );
};

export default Role;