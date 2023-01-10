import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListUser,
  updatePublish,
  unPublish,
} from "../../actions/userAction";
import BorderExample from "../Spinner";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./card.css";
import { useState } from "react";

function CardProfile() {
  const uid = localStorage.getItem("id");
  const [uthreads, setUthreads] = useState([]);
  const { id } = useParams();
  const { getListUserResult, getListUserLoading, getListUserError } =
    useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);

  useEffect(() => {
    if (getListUserResult) {
      setUthreads(
        getListUserResult.items
          .filter((e) => e.id === id)
          .map((person) => person.articles.map((e) => e.title))
      );
    }
  }, [getListUserResult]);

  console.log(uthreads.find((e)=>e.title));

  const navigation = useNavigate();
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
        <div className="threads-container py-5">
          <div class="row d-flex justify-content-center">
            {getListUserResult ? (
              getListUserResult.items
                .filter((e) => e.id === id)
                .map((person) => {
                  return (
                    <>
                      
                     
                      <div className="container mt-5 mb-3 mx-auto text-center">
                        <div
                          style={{ marginTop: "0px" }}
                          className="text-dark"
                        >
                          
                          <h3>{person.username}'s Threads</h3>
                        </div>
                      </div>
                    
                    

                      {person.articles.map((x) => {
                        let createdAt = moment(x.createdAt).fromNow(true);

                        return (
                          <>
                            <motion.div
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
                                    <Card.Title>
                                      <img
                                        id="card_img"
                                        src={person.profile_img}
                                        alt=""
                                      />{" "}
                                      {person.username}
                                    </Card.Title>
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
                                    {x.theme}
                                  </Button>
                                  <Card.Text>
                                    <h5>{x.title}</h5>
                                  </Card.Text>
                                </Card.Body>
                                <Button
                                  variant="success"
                                  onClick={() => handleDetail(x.id)}
                                >
                                  See Details
                                </Button>
                              </Card>
                            </motion.div>
                          </>
                        );
                      })}
                    </>
                  );
                })
            ) : getListUserLoading ? (
              //  <p>Loading....</p>
              <div className="container text-center justify-content-center mt-5">
                <BorderExample />
              </div>
            ) : (
              <p>{getListUserError ? getListUserError : "DATA KOSONG"}</p>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default CardProfile;
