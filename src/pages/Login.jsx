import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { loginUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth);

  const navigate = useNavigate();

  console.log("authUser", authUser);

  const handleSubmitForm = async (fields) => {
    await dispatch(loginUser(fields))
      .then((response) => {
        console.log("response", response);
        if (response?.payload?.token) {
          localStorage.setItem("token", response.payload.token);
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("username is required!"),
    password: Yup.string().required("password is required!"),
  });

  const initialValues = {
    username: "",
    password: "",
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (state, action) => {
      handleSubmitForm(state);
      action.resetForm();
    },
  });

  return (
    <div>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            className={`${
              touched.username && errors.username ? "is-invalid" : ""
            }`}
            required
          />
          {touched.username && errors.username ? (
            <small className="text-danger">{errors.username}</small>
          ) : null}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className={`${
              touched.password && errors.password ? "is-invalid" : ""
            }`}
            required
          />
          {touched.password && errors.password ? (
            <small className="text-danger">{errors.password}</small>
          ) : null}
        </Form.Group>
        <Button type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
