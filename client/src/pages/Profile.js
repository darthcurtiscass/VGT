import React from 'react';
import '../App.css';
import { Col, message, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd'
import { Card } from 'antd';
import { Checkbox,Form,Input,} from 'antd';
import { useState } from 'react';
import { GET_ME } from '../utils/queries';
import { useQuery }  from '@apollo/client';
const { TextArea } = Input;
const Profile = () => {
const [componentDisabled, setComponentDisabled] = useState(true);

const { loading, data } = useQuery(GET_ME);
const me = data?.me || []

console.log(data)

if (!data) return <div>Loading...</div>;

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="container" span={6}>
        <div><h1>Name:</h1></div>
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar size={64} icon={<UserOutlined />} />
          </Space>
        </Space>
      </Col>
      <Col className="container" span={6}>
        <div>
          <div key={me._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0 bg-dark">
              {me.username}<br />
            </h4>
          </div>
         </div>
        <Card
          title="Default size card"
          style={{
            width:400,
            height: 300,
            border: 'solid',
            display: 'center',
          }}
        >
                <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Info:">
          <TextArea rows={6} />
        </Form.Item>
        </Form>
        </Card>
      </Col>
      <Col className="container" span={6}>
        <div><h1>Friends</h1></div>
      </Col>
    </Row>
  );
}

export default Profile;