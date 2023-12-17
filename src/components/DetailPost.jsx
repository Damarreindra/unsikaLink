import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListUser,
  updatePublish,
  unPublish,
  addComment,
} from "../actions/userAction";
import { useNavigate, useParams } from "react-router-dom";
import BorderExample from "./Spinner";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import moment from "moment";
import "./Card/card.css";
import { getThreads } from "./../actions/threadsAction";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function DetailPost() {
  const { updatePublishResult, unPublishResult } = useSelector(
    (state) => state.UserReducer
  );
  const [comment, setComment] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const { getThreadResult, getThreadError, getThreadLoading } = useSelector(
    (state) => state.ThreadsReducer
  );

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getThreads());
  }, [dispatch]);

  const handleSubmit = (e) => {
    const loggedInUsername = user.displayName;
    const photoUrl = user.photoURL
    e.preventDefault();
    dispatch(
      addComment(id, {
        comment: comment,
        username: loggedInUsername,
        photoUrl: photoUrl,
        CommentCreatedAt: Date.now(),
      })
    );
  };
  console.log(getThreadResult);

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
                .filter((thread) => thread.uid === id)
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
                      >
                        <Card.Body>
                          <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center"> 
                              {thread.author.photoURL && (
                                <img
                                  src={thread.author.photoURL}
                                  alt="User Avatar"
                                  className="rounded-circle me-2"
                                  style={{ width: "32px", height: "32px" }}
                                />
                              )}
                              <div className="mt-2">
                                <Card.Title>{thread.author.displayName}</Card.Title>
                                <Card.Subtitle
                                  className="mt-2"
                                  id="title-divider"
                                ></Card.Subtitle>
                              </div>
                            </div>
                            <div className="text-muted">
                              <Card.Subtitle className="card-date mt-3">
                                {createdAt} ago
                              </Card.Subtitle>
                            </div>
                          </div>
                          <div className="text-muted mt-3">
                            <Card.Subtitle className="card-date mb-3">
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
                        <div className="container">
                          <form
                            className="row g-3"
                            onSubmit={(e) => handleSubmit(e)}
                          >
                            <div class="form-floating">
                              <textarea
                                className="form-control"
                                placeholder="Leave a comment here"
                                id="floatingTextarea"
                                required
                                maxLength={30}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                              ></textarea>
                              <label for="floatingTextarea">Comments</label>
                            </div>
                            <div className="col-auto">
                              <button
                                type="submit"
                                className="btn btn-info mb-3 btn-sm"
                              >
                                Comment
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="p-5 d-flex flex-column align-item-center">
  {thread.comments && thread.comments.map((comment) => (
    <div
      key={comment.CommentCreatedAt}
      className="comment-container border rounded p-2 mt-3 position-relative"
    >
      <div className="d-flex align-items-start">
        {comment.photoUrl && (
          <img
            src={comment.photoUrl}
            alt="User Avatar"
            className="rounded-circle me-2"
            style={{ width: "32px", height: "32px" }}
          />
        )}
        <p className="fw-bold mt-1">{comment.username}</p>
        <small className="text-muted ms-auto">
          {moment(comment.CommentCreatedAt).fromNow(true)} ago
        </small>
      </div>
      <p className="mt-1">{comment.comment}</p>
    </div>
  ))}
</div>


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

export default DetailPost;