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
function Cards() {
  const {
    getListUserResult,
    getListUserLoading,
    getListUserError,
    updatePublishResult,
    unPublishResult,
  } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);
 
  useEffect(() => {
    if (updatePublish) {
      dispatch(getListUser());
    }
  }, [updatePublishResult, dispatch]);

  useEffect(() => {
    if (unPublish) {
      dispatch(getListUser());
    }
  }, [unPublishResult, dispatch]);
  const navigation = useNavigate();
  const handleDetail = (id) =>{
navigation(`/detail/${id}`)
  }
  
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
          getListUserResult.items.map((person) => {
            return (
              <>
                {person.articles.slice(0).reverse().map((x) => {
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
                          style={{  width: "24rem" }}
                    
                        >
                          <Card.Body>
                            <div id="title-container">
                            <Card.Title><img id="card_img" src={person.profile_img} alt="" /> {person.username}</Card.Title>
                            <Card.Subtitle className="mt-2" id="title-divider">.</Card.Subtitle>
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

export default Cards;
