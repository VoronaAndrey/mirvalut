import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { COLORS } from "../../../helpers/colors";
import { WrapperInfo, Title, Info, DeleteButton } from "./style";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const ModalReviews = ({
  open,
  reviews,
  handleCloseModal,
  handleDeleteReviews,
}) => {
  return (
    <div>
      <Modal
        // sx={}
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 26,
              color: COLORS.DARK,
              margin: 0,
            }}
          >
            {`All info about ${reviews.Employee}`}
          </Typography>
          <WrapperInfo>
            <Title>Company:</Title>
            <Info>{reviews.Company}</Info>
          </WrapperInfo>
          <WrapperInfo>
            <Title>Company description:</Title>
            <Info>{reviews["Company description"]}</Info>
          </WrapperInfo>
          <WrapperInfo>
            <Title>Email:</Title>
            <Info>{reviews.Email}</Info>
          </WrapperInfo>
          <WrapperInfo>
            <Title>Employees position :</Title>
            <Info>{reviews.Employees_position}</Info>
          </WrapperInfo>
          <WrapperInfo>
            <Title>Rating:</Title>
            <Info>{reviews.Rating}</Info>
          </WrapperInfo>
          <WrapperInfo>
            <Title>Review:</Title>
            <Info>{reviews.Review}</Info>
          </WrapperInfo>
          <WrapperInfo>
            <Title>Reviewer:</Title>
            <Info>{reviews.Reviewer}</Info>
          </WrapperInfo>
          <div style={{ width: "100%", display: "flex", marginTop: 20 }}>
            <DeleteButton
              onClick={() =>
                handleDeleteReviews(reviews.Unique_employee_number)
              }
            >
              Delete Review
            </DeleteButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalReviews;
