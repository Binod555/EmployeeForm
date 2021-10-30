import react from "react";
import "antd/dist/antd.css";
import { Form, Input, Select, Button, AutoComplete,Radio } from 'antd';
const { Option } = Select;

const Contact = () => {
  return (

    <div className="Contact">
      <header className="App-header">
        <h2 style={{ textAlign: "center" }}>Employee Form</h2>
        <Form
          onFinishFailed={() => alert('Failed to submit')}
          onFinish={() => alert('Form Submitted')}
          initialValues={{ remember: true }}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          labelAlign='left'>

          <Form.Item label="First Name" name="firstname"
            rules={[
              {
                required: true,
                message: 'Please input your firstname!',
                whitespace: true,
              },
            ]}>
            <Input placeholder="First Name"></Input>
          </Form.Item>

          <Form.Item label="Last Name" name="lastname"
            rules={[
              {
                required: true,
                message: 'Please input your lastname!',
                whitespace: true,
              },
            ]}>
            <Input placeholder="Last Name"></Input>
          </Form.Item>
          <Form.Item name="radio-group" label="Gender"
          rules={[
              {
                required: true,
                message: 'Please select your gender!',
                whitespace: true,
              },
            ]}>
        <Radio.Group>
          <Radio value="a">Male</Radio>
          <Radio value="b">Female</Radio>
          <Radio value="c">Others</Radio>
        </Radio.Group>
      </Form.Item>
          {/* <Form.Item name="gender" label="Gender"
            rules={[
              {
                required: true,
                message: 'Please select gender!',
              },
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item> */}
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="E-mail"/>
          </Form.Item>
          <Form.Item label="Password" name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
                whitespace: true,
              },
            ]}>
            <Input.Password placeholder="Password"></Input.Password>
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              // {
              //   type: 'number',
              //   message: 'The input is not valid number!',
              // },
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input placeholder="Number" />

          </Form.Item>
          <Form.Item name="country" label="Country"
            rules={[
              {
                required: true,
                message: 'Please select country!',
              },
            ]}
          >
            <Select placeholder="select your country">
              <Option value="nepal">Nepal</Option>
              <Option value="india">India</Option>
              <Option value="usa">USA</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Designation" name="designation"
            rules={[
              {
                required: true,
                message: 'Please input your designation!',
                whitespace: true,
              },
            ]}>
            <Input placeholder="Designation"></Input>
          </Form.Item>

          <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        </Form>
      </header>
    </div>
  );
}


export default Contact;