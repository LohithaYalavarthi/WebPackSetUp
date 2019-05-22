import { Row, Col } from 'antd';
import React, { Component } from 'react';

class Grid extends Component {
    render() {
        return (
            <div className="gutter-example">
               <Row gutter={16}>
               <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
                </Col>
                </Row>  
            </div>
        );
    }
}

export default Grid;