import { useFormik } from "formik";

const PostAddEdit = () => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
  });

  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Post title
          </label>
          <input
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
            type="text"
            className={`form-control ${
              errors.title && touched.title ? "is-invalid" : ""
            }`}
          />
          {touched.title && errors.title ? (
            <small className="invalid-feedback">{errors.title}</small>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="body" className="form-label">
            Post body
          </label>
          <input
            id="body"
            name="body"
            value={values.body}
            onChange={handleChange}
            type="text"
            className={`form-control ${
              errors.body && touched.body ? "is-invalid" : ""
            }`}
          />
          {touched.body && errors.body ? (
            <small className="invalid-feedback">{errors.body}</small>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default PostAddEdit;
