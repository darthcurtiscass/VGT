import { React, useState } from 'react';
import '../App.css';
import { Avatar, Space, Card, Checkbox, Form, Input, Col, message, Row } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { GET_ME, GET_SPECIFIC_USER } from '../utils/queries';
import { useQuery }  from '@apollo/client';
const Profile = () => {
const { loading, data } = useQuery(GET_ME);

const me = data?.me || []

console.log(data)


if (!data) return <div>Loading...</div>;

return (

  <div class="container-fluid">

<div class="card bg-dark text-white border-white">
  <div class="card-body">
    <h1>{me.username}</h1>
  </div>
</div>


  <div class="container text-center bg-dark w-80 ">
  <div class="row align-items-start">
 
    <div class="col-8 ">
    <table class="table table-dark table-striped w-100 mx-auto border-white">
    <thead>
    <tr>
      <th scope="col">Quiz</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
{me.scores.map((score) => 
  <tbody>
  <tr>
    <td>{score.quiz}</td>
    <td>{score.score}</td>
  </tr>
</tbody>
)}
 </table>
    </div>
    </div>
    {/* <div class="col bg-secondary">
      <h3>Friends</h3>

      {me.friends.map ((friend) => 
  
<div class="container-fluid bg-secondary mx-auto w-100 ">
  <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action text-white bg-dark">
      {}
    </button>
    <button type="button" class="list-group-item list-group-item-action text-white bg-dark">
      The current button
    </button>
    <button type="button" class="list-group-item list-group-item-action text-white bg-dark">
      The current button
    </button>
    <button type="button" class="list-group-item list-group-item-action text-white bg-dark">
      The current button
    </button>
    
  </div>
</div>
)}
    </div>
  </div> */} 





<br />
<br />

<br />


  

</div>
</div>

)





// const [componentDisabled, setComponentDisabled] = useState(true);

// const { loading, data } = useQuery(GET_ME);
// const me = data?.me || []

// console.log(data)

// if (!data) return <div>Loading...</div>;

//   return (
//     <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//       <Col className="container" span={6}>
//         <div><h1>Name:</h1></div>
//         <Space direction="vertical" size={16}>
//           <Space wrap size={16}>
//             <Avatar size={64} icon={<UserOutlined />} />
//           </Space>
//         </Space>
//       </Col>
//       <Col className="container" span={6}>
//         <div>
//           <div key={me._id} className="card mb-3">
//             <h4 className="card-header bg-primary text-light p-2 m-0 bg-dark">
//               {me.username}<br />
//             </h4>
//           </div>
//          </div>
//         <Card
//           title="Default size card"
//           style={{
//             width:400,
//             height: 300,
//             border: 'solid',
//             display: 'center',
//           }}
//         >
//                 <Checkbox
//         checked={componentDisabled}
//         onChange={(e) => setComponentDisabled(e.target.checked)}
//       >
//         Form disabled
//       </Checkbox>
//       <Form
//         labelCol={{
//           span: 4,
//         }}
//         wrapperCol={{
//           span: 14,
//         }}
//         layout="horizontal"
//         disabled={componentDisabled}
//         style={{
//           maxWidth: 600,
//         }}
//       >
//         <Form.Item label="Info:">
//           <TextArea rows={6} />
//         </Form.Item>
//         </Form>
//         </Card>
//       </Col>
//       <Col className="container" span={6}>
//         <div><h1>Friends</h1></div>
//       </Col>
//     </Row>
//   );
}

export default Profile;