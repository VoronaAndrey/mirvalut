import * as Yup from "yup";
export const initialValues = {
  text: "",
  title: "",
};

export const getValidationSchema = () =>
  Yup.object().shape({
    title: Yup.string()
      .required("Field is required")
      .min(5, "Title should be at least 5 characters long"),
    text: Yup.string()
      .required("Field is required")
      .min(10, "Text should be at least 10 characters long"),
  });
