import {
  Input,
  Button,
  Form,
  notification,
  Row,
  Col,
  Divider,
  Typography,
} from "antd";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createUserAPI } from "../../util/api";
const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate(); // Chuyển trang
  const onFinish = async (values) => {
    console.log(values);
    // call api
    const res = await createUserAPI(values.name, values.password, values.email);
    console.log(res);
    if (res.data) {
      notification.success({
        message: "Register user",
        description: " Đăng kí người dùng thành công",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Register user",
        description: JSON.stringify(res.message),
      });
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "50px",
      }}
    >
      <Form
        form={form}
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Typography.Title style={{ display: "flex", justifyContent: "center" }}>
          Đăng kí tài khoản
        </Typography.Title>
        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your Full Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  min: 6,
                  message: "Mật khẩu phải có ít nhất 6 ký tự!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>

        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row justify={"center"}>
          <Form.Item
            style={{ minWidth: "300px" }}
            name="remember"
            valuePropName="checked"
          >
            <div>
              <Button type="primary" onClick={() => form.submit()}>
                Register
              </Button>
              <Divider />
              <div>
                Đã có tài khoản? <Link to={"/login"}>Đăng nhập tại đây</Link>
              </div>
            </div>
          </Form.Item>
        </Row>
      </Form>
    </div>
  );
};
export default RegisterPage;
