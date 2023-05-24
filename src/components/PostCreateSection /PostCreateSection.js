import { Form, WrapperInput, SubmitButton } from "./style";
import { useState } from "react";
import { useAppDispatch } from "../../store";
import { useFormik } from "formik";
import { TextField, Typography, FormHelperText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Notification from "../notification";
import { useNotification } from "../../hooks/useNotification";
import { createPost } from "../../store/posts/actionCreators";
import { initialValues, getValidationSchema } from "./config";

const PostCreateSection = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isUpdate, setIsUpdate] = useState(false);
  const [showNotification, toggleNotification] = useNotification();
  const [notificationMessage, setNotificationMessage] = useState({
    success: "",
    error: "",
  });
  const onSuccess = (id) => {
    navigate(`/post/${id}`, { state: { success: "createNewPost" } });
  };

  const onFailure = () => {
    setNotificationMessage({ success: "", error: "something went wrong" });
    toggleNotification();
  };
  const formik = useFormik({
    initialValues: {
      text: "",
      title: "",
    },
    onSubmit: handleSubmit,
    validationSchema: getValidationSchema(),
  });
  function handleSubmit(value) {
    dispatch(createPost(value, onSuccess, onFailure));
    formik.resetForm();
  }
  return (
    <div style={{ marginTop: 40 }}>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <WrapperInput>
          <Typography>Title</Typography>
          <TextField
            onChange={formik.handleChange}
            helperText={formik.touched["title"] && formik.errors["title"]}
            margin="none"
            size="small"
            required
            fullWidth
            id="title"
            name="title"
            value={formik.values.title}
            sx={{
              width: "340px",
            }}
          />
          <FormHelperText error={true}>{formik.errors.title}</FormHelperText>
        </WrapperInput>
        <WrapperInput>
          <Typography>Post</Typography>
          <TextField
            onChange={formik.handleChange}
            helperText={formik.touched["text"] && formik.errors["text"]}
            margin="none"
            size="small"
            multiline
            required
            fullWidth
            id="text"
            name="text"
            value={formik.values.text}
            sx={{
              width: "340px",
            }}
          />
          <FormHelperText error={true}>{formik.errors.text}</FormHelperText>
        </WrapperInput>
        <SubmitButton
          type="submit"
          className={!formik.isValid ? "" : "active"}
          disabled={!formik.isValid}
        >
          Create post
        </SubmitButton>
      </Form>
      <Notification
        onClose={toggleNotification}
        isOpen={showNotification}
        success={notificationMessage.success}
        error={notificationMessage.error}
      />
    </div>
  );
};

export default PostCreateSection;
