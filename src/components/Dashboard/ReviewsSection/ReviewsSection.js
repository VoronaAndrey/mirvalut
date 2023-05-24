import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { MainWrapper, MainTitle } from "./style";
import { useAppDispatch } from "../../../store";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  deleteReviews,
  getReviews,
} from "../../../store/reviews/actionCreators";
import { COLORS } from "../../../helpers/colors";
import { Pagination } from "@mui/material";
import Modal from "../Modal";
import Notification from "../../notification";
import { useNotification } from "../../../hooks/useNotification";
const ReviewsSection = () => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [reviews, setReviews] = useState({});
  const handleCloseModal = () => {
    setReviews({});
    setOpenModal(false);
  };
  const handleOpenModal = (data) => {
    setOpenModal(true);
    setReviews(data);
  };

  const { data, currentPage, totalPages } = useSelector(
    (state) => state.reviews?.reviewsData
  );
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [showNotification, toggleNotification] = useNotification();
  const [notificationMessage, setNotificationMessage] = useState({
    success: "",
    error: "",
  });

  const onSuccess = () => {
    setNotificationMessage({
      success: "Review Deleted",
      error: "",
    });
    setOpenModal(false);
    dispatch(
      getReviews({
        page: page,
        limit: limit,
      })
    );
    toggleNotification();
  };

  const onFailure = (message) => {
    setNotificationMessage({ success: "", error: message });
    toggleNotification();
    setOpenModal(false);
  };
  const handleDeleteReviews = (id) => {
    dispatch(deleteReviews(id, onSuccess, onFailure));
  };
  useEffect(() => {
    setPage(currentPage);
  }, [page]);

  useEffect(() => {
    dispatch(
      getReviews({
        page: page,
        limit: limit,
      })
    );
  }, [page]);
  const style = {
    TableCell: {
      fontWeight: "700",
      color: COLORS.DARK,
    },
  };
  return (
    <MainWrapper>
      <MainTitle>All reviews</MainTitle>
      <TableContainer>
        <Table sx={{ maxWidth: "95%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={style.TableCell}>Company</TableCell>
              <TableCell sx={style.TableCell} align="right">
                Employee
              </TableCell>
              <TableCell sx={style.TableCell} align="right">
                Employees position
              </TableCell>
              <TableCell sx={style.TableCell} align="right">
                Reviewer
              </TableCell>
              <TableCell sx={style.TableCell} align="right">
                Rating
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                hover
                onClick={() => handleOpenModal(row)}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
              >
                <TableCell component="th" scope="row">
                  {row.Company}
                </TableCell>
                <TableCell align="right">{row.Employee}</TableCell>
                <TableCell align="right">{row.Employees_position}</TableCell>
                <TableCell align="right">{row.Reviewer}</TableCell>
                <TableCell align="right">{row.Rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        defaultPage={page}
        color="primary"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "60px",
          "li button": {
            color: "#727272",
            background: "#FFFFFF",
            border: "1px solid #0880AE",
          },
        }}
        page={currentPage}
        count={totalPages}
        onChange={(event, page) => {
          setPage(page);
        }}
      />
      <Modal
        open={openModal}
        reviews={reviews}
        handleCloseModal={handleCloseModal}
        handleDeleteReviews={handleDeleteReviews}
      />
      <Notification
        onClose={toggleNotification}
        isOpen={showNotification}
        success={notificationMessage.success}
        error={notificationMessage.error}
      />
    </MainWrapper>
  );
};

export default ReviewsSection;
