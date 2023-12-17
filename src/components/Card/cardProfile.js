import Card from "react-bootstrap/Card";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListUser,
  updatePublish,
  unPublish,
} from "../../actions/userAction";
import { useNavigate, useParams } from "react-router-dom";
import BorderExample from "../Spinner";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import moment from "moment";
import './card.css'
import { getThreads } from "../../actions/threadsAction";




function CardProfile() {
  const { updatePublishResult, unPublishResult } = useSelector(
    (state) => state.UserReducer
  );

  const {
    getThreadResult,
    getThreadError,
    getThreadLoading
  } = useSelector((state) => state.ThreadsReducer);

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getThreads());
  }, [dispatch]);

  useEffect(() => {
    if (updatePublishResult) {
      console.log("Publish update successful");
      dispatch(getListUser());
    }
  }, [updatePublishResult, dispatch]);

  useEffect(() => {
    if (unPublishResult) {
      console.log("Unpublish successful");
      dispatch(getListUser());
    }
  }, [unPublishResult, dispatch]);

  const handleDetail = (id) => {
    navigation(`/detail/${id}`);
  };

  return (
    <>
    <motion.div
      className="container"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="threads-container py-5 mt-5">
        <div className="row d-flex justify-content-center">
          {getThreadResult ? (
            getThreadResult
              .filter((thread) => thread.author.uid === id)
              .slice()
              .sort((a, b) => b.createdAt - a.createdAt)
              .map((thread) => {
                let createdAt = moment(thread.createdAt).fromNow(true);
                return (
                  <motion.div
                    key={thread.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="col-lg-12 col-md-12 d-flex justify-content-center mt-2"
                  >
                    <Card
                      className="card rounded-4 border-0 shadow p-2"
                      style={{ width: "80%", borderColor: "#D9D9D9" }}
                      onClick={() => handleDetail(thread.uid)}
                    >
                      <Card.Body>
                        <div className="d-flex justify-content-between">
                          <div id="title-container">
                            <div className="d-flex align-items-center"> {/* Add this div for image and display name */}
                              {thread.author.photoURL && (
                                <img
                                  src={thread.author.photoURL}
                                  alt="User Avatar"
                                  className="rounded-circle me-2"
                                  style={{ width: "32px", height: "32px" }}
                                />
                              )}
                              <div>
                                <Card.Title>{thread.author.displayName}</Card.Title>
                                <Card.Subtitle
                                  className="mt-2"
                                  id="title-divider"
                                ></Card.Subtitle>
                              </div>
                            </div>
                          </div>
                          <div className="text-muted">
                            <Card.Subtitle className="card-date mt-3">
                              {createdAt} ago
                            </Card.Subtitle>
                          </div>
                        </div>
                        <div className="text-muted">
                          <Card.Subtitle className="card-date mb-3 mt-3">
                            {thread.theme}
                          </Card.Subtitle>
                        </div>
                        <Card.Text>
                          <h2 className="fw-bold">{thread.title}</h2>
                        </Card.Text>
                        <Card.Text>
                          <h5>{thread.content}</h5>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
                );
              })
          ) : getThreadLoading ? (
            <div className="container text-center justify-content-center mt-5">
              <BorderExample />
            </div>
          ) : (
            <p>{getThreadError ? getThreadError : "DATA KOSONG"}</p>
          )}
        </div>
      </div>
    </motion.div>
  </>
  );
}

export default CardProfile;


