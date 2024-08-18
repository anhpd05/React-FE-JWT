import { Col, Divider, message, notification, Row } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginAPI } from "../../util/api";
const LoginPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("Success:", values);
    setLoading(true);
    const res = await loginAPI(values.email, values.password);
    setLoading(false);
    if (res.data && res.data.EC === 0) {
      localStorage.setItem("access_token", res.data.access_token);
      message.success("Đăng nhập thành công.");
      form.resetFields();
      navigate("/");
    } else {
      notification.error({
        message: "Error Login",
        description: res?.data?.EM ?? "Error",
      });
    }
    console.log(res);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row justify={"center"} style={{ marginTop: "30px" }}>
        <Col xs={24} md={16} lg={8}>
          <fieldset
            style={{
              padding: "15px",
              margin: "5px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.2)",
            }}
          >
            <legend
              style={{
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Đăng nhập
            </legend>
            <Form
              form={form}
              layout="vertical"
              name="basic"
              style={{}}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                  {
                    type: "email",
                    message: "Nhập đúng định dạng Email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    min: 6,
                    message: "Mật khẩu trên 6 kí tự",
                  },
                  {},
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    padding: "1px 40px",
                    width: "fit-content",
                    display: "block",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                  loading={loading}
                >
                  Submit
                </Button>
              </Form.Item>

              <Divider>Or</Divider>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p>
                  Chưa có tài khoản ?
                  <span>
                    <Link to={"/register"}> Đăng kí tài khoản.</Link>
                  </span>
                </p>
              </div>
            </Form>
          </fieldset>
        </Col>
      </Row>
    </>
  );
};
export default LoginPage;
