import * as Yup from "yup";
import { Formik, Form, Field, useField } from "formik";
import { Error, Input, Label, Submit } from "./styles";

const InputComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Label>
      {label}: {meta.touched && meta.error && <Error>{meta.error}</Error>}
      <Input {...field} {...props} />
    </Label>
  );
};

function FormComponent({ handleSuccess }) {
  const schema = Yup.object().shape({
    name: Yup.string().required("Required field"),
    email: Yup.string()
      .email("Must be a valid email address")
      .required("Required field"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      onSubmit={handleSuccess}
      validationSchema={schema}
    >
      {() => (
        <Form>
          <InputComponent
            name="name"
            type="text"
            label="Name"
            autoComplete="off"
          />
          <InputComponent
            name="email"
            type="text"
            label="Email"
            autoComplete="off"
          />
          {/* <label>Name: </label>
          <Field type="text" name="name" autoComplete="off" />
          {touched.name && errors && <div>{errors.name}</div>}

          <label>Email address: </label>
          <Field type="email" name="email" autoComplete="off" />
          {touched.email && errors && <div>{errors.email}</div>} */}

          <Submit type="sumbit">Submit</Submit>
        </Form>
      )}
    </Formik>

    // <form onSubmit={handleSuccess}>
    //   <label htmlFor="name">Name: </label>
    //   <input type="text" name="name" required autoComplete="off" />

    //   <label htmlFor="email">Email address: </label>
    //   <input type="email" name="email" required autoComplete="off" />

    //   <button type="sumbit">Submit</button>
    // </form>
  );
}

export default FormComponent;
