import React from 'react';
import { Col, Container, Row } from "react-bootstrap"

const Inbanner = (props) => {
    const title = props.title;
    return (
        <div className="inBanner">
            <Container>
                <Row>
                    <Col>
                        <h1 className="innerH1">{title}</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Inbanner;