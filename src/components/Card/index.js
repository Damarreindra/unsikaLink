import Card from "react-bootstrap/Card";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListUser,
  updatePublish,
  unPublish,
} from "../../actions/userAction";
import { useNavigate } from "react-router-dom";
import BorderExample from "../Spinner";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import moment from "moment";
import './card.css'
import { getThreads } from "../../actions/threadsAction";


// ... (imports)

function Cards() {
  const {
    updatePublishResult,
    unPublishResult,
  } = useSelector((state) => state.UserReducer);
  
  const {
    getThreadResult,
    getThreadError,
    getThreadLoading
  } = useSelector((state) => state.ThreadsReducer);
  
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    dispatch(getThreads());
  }, [dispatch]);

  useEffect(() => {
    if (updatePublishResult) {
      console.log('Publish update successful');
      dispatch(getListUser());
    }
  }, [updatePublishResult, dispatch]);

  useEffect(() => {
    if (unPublishResult) {
      console.log('Unpublish successful');
      dispatch(getListUser());
    }
  }, [unPublishResult, dispatch]);

  const handleDetail = (id) => {
    navigation(`/detail/${id}`);
  };

  const handleUpdatePublish = (threadId) => {
    dispatch(updatePublish(threadId));
  };

  const handleUnPublish = (threadId) => {
    dispatch(unPublish(threadId));
  };

  return (
    <>
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="threads-container py-5">
          <div className="row d-flex justify-content-center">
            {getThreadResult ? (
              getThreadResult
                .slice()
                .sort((a, b) => b.createdAt - a.createdAt) // Sort by createdAt in descending order
                .map((thread) => {
                  let createdAt = moment(thread.createdAt).fromNow(true);
                  return (
                    <motion.div
                      key={thread.id}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                      className="col-lg-12 col-md-12 d-flex justify-content-center mt-3"
                    >
                      <Card
                        className="card rounded-08 shadow border-0 p-2"
                        style={{ width: "24rem" }}
                      >
                        <Card.Body>
                          <div id="title-container">
                            <Card.Title>{thread.author}</Card.Title>
                            <Card.Subtitle
                              className="mt-2"
                              id="title-divider"
                            >
                              .
                            </Card.Subtitle>
                            <Card.Subtitle className="card-date mt-3 text-muted">
                              {createdAt} ago
                            </Card.Subtitle>
                          </div>
                          <Button
                            id="cat"
                            className="btn-sm"
                            variant="success"
                          >
                            {thread.theme}
                          </Button>
                          <Card.Text>
                            <h5>{thread.title}</h5>
                          </Card.Text>
                        </Card.Body>
                        <Button
                          variant="success"
                          onClick={() => handleDetail(thread.id)}
                        >
                          See Details
                        </Button>
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

export default Cards;
