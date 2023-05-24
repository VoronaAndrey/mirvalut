import { Form, WrapperInput, UpdateButton, SubmitButton } from "./style";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import { getByIdPost } from "../../store/posts/actionCreators";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { Button, TextField, Typography } from "@mui/material";
import { format } from "date-fns";
import { Link, useLocation } from "react-router-dom";
import Notification from "../notification";
import { useNotification } from "../../hooks/useNotification";
import { updatePost } from "../../store/posts/actionCreators";

const PostSection = () => {
  const dispatch = useAppDispatch();
  const data = useSelector((state) => state.posts?.currentPost);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [isUpdate, setIsUpdate] = useState(false);
  const [showNotification, toggleNotification] = useNotification();
  const [notificationMessage, setNotificationMessage] = useState({
    success: "",
    error: "",
  });
  useEffect(() => {
    if (location.state?.success === "createNewPost") {
      setNotificationMessage({
        success: "Post created",
        error: "",
      });
      toggleNotification();
    }
  }, [location]);
  const onSuccess = () => {
    setNotificationMessage({
      success: "Post updated",
      error: "",
    });
    toggleNotification();
    setIsUpdate(false);
  };

  const onFailure = () => {
    setNotificationMessage({ success: "", error: "something went wrong" });
    toggleNotification();
  };
  const formik = useFormik({
    initialValues: {
      createDate: new Date(),
      id: "",
      text: "",
      title: data.title,
      updateDate: new Date(),
    },
    onSubmit: handleSubmit,
  });
  function handleSubmit(value) {
    dispatch(updatePost(value, onSuccess, onFailure));
    formik.resetForm();
  }
  const handleUpdatePost = () => {
    setIsUpdate((isUpdate) => !isUpdate);
    formik.setValues(data);
  };
  useEffect(() => {
    dispatch(getByIdPost(postId));
  }, [location]);
  useEffect(() => {
    formik.setValues(data);
  }, [data]);
  return (
    <div style={{ marginTop: 40 }}>
      <UpdateButton
        className={isUpdate ? "" : "active"}
        onClick={handleUpdatePost}
      >
        Update post
      </UpdateButton>
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
            disabled={!isUpdate}
            id="title"
            name="title"
            value={formik.values.title}
            sx={{
              width: "340px",
            }}
          />
        </WrapperInput>
        <WrapperInput>
          <Typography>Post</Typography>
          <TextField
            onChange={formik.handleChange}
            helperText={formik.touched["title"] && formik.errors["title"]}
            margin="none"
            size="small"
            multiline
            required
            fullWidth
            disabled={!isUpdate}
            id="text"
            name="text"
            value={formik.values.text}
            sx={{
              width: "340px",
            }}
          />
        </WrapperInput>
        <WrapperInput>
          <Typography>Create Date</Typography>
          <TextField
            onChange={formik.handleChange}
            helperText={formik.touched["title"] && formik.errors["title"]}
            margin="none"
            size="small"
            required
            fullWidth
            id="createTime"
            disabled
            name="createTime"
            value={format(new Date(formik.values.createDate), "MM.dd.yy H:mm")}
            sx={{
              width: "340px",
            }}
          />
        </WrapperInput>
        <WrapperInput>
          <Typography>Update Date</Typography>
          <TextField
            onChange={formik.handleChange}
            margin="none"
            size="small"
            required
            fullWidth
            id="updateDate"
            name="updateDate"
            disabled
            value={
              formik.values.updateDate !== null
                ? format(new Date(formik.values.updateDate), "MM.dd.yy H:mm")
                : "no updated"
            }
            sx={{
              width: "340px",
            }}
          />
        </WrapperInput>
        <SubmitButton
          type="submit"
          disabled={!isUpdate}
          className={isUpdate ? "" : "active"}
        >
          Update
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

export default PostSection;
