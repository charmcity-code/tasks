import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    const handleLogClick = () => {
        console.log("Hello World!");
    };

    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "#87CEEB" }}
            >
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Hello World</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. And Lincoln rocks!
            </p>
            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.selectadogbreed.com%2Fmedia%2F1203%2Fitaliangreyhound_headshot.jpg&f=1&nofb=1&ipt=bfa80414c3082dad05ed5a9ba9d816cf3d9d415e766ced8ac30f5a2c72ecfdd0"
                alt="Italian Greyhound"
            />
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
            <div>
                <Button
                    style={{ marginTop: "20px" }}
                    variant="primary"
                    onClick={handleLogClick}
                >
                    Log Hello World
                </Button>
            </div>
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
