import React from 'react';
import '../App.css';
import { Col, Row } from 'antd';
  
const Profile =() => {
    return(
 <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="container" span={6}>
        <div><h1>Helicopter</h1></div>
      </Col>
      <Col className="container" span={6}>
        <div>Helicopter</div>
      </Col>
      <Col className="container" span={6}>
        <div>Helicopter</div>
      </Col>
      <Col className="container" span={6}>
        <div>Helicopter</div>
      </Col>
    </Row> 
    );
}
export default Profile;