import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalComponent from "./ModalComponent";
import { addPost } from "../../actions/userAction";
import { Link } from "react-router-dom";
import CreateIcon from '@mui/icons-material/Create';


const AddPost = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const HandleShowModal = () => {
    setIsModalShow(!isModalShow);
  };
  const getLS = localStorage.getItem("USER_ID")
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [publish] = useState(false)
  
  const createdAt = Date.now()


    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addPost({title: title, createdAt, content: content, publish: publish}))
        }
    
  return (
 
    <div>
      {getLS ? (
        <button
            onClick={HandleShowModal}
            type="button"
            id="ButtonPopUpLoggedIn"
            className="btn btn-success mb-3 btn-lg justify-content-center"
        >
           Tweed
        </button>
      ) : (
        
        <Link to='/login'
        style={{textDecoration:"none"}}
        >
        <button
            onClick={HandleShowModal}
            type="button"
            id="ButtonPopUp"
            className="btn btn-success mt-3 btn-lg"
        >
            Login to Post Threads
        </button>
        </Link>
        
      )}
      <ModalComponent show={isModalShow} HideHandler={HandleShowModal} />
      <div id="tf" className="container text-center">
        {/* <h3 className="text-white mt-5 mb-3" style={{marginTop:'10px'}}>Threads Feed</h3> */}
    
        <div className="popup-container" id="MainPopUp">
          <div className="container col-md-6">
            <div className="main-popup sm-2">
              <div className="close float-end">&times;</div>
              <div className="title">
                <h3>POST YOUR THREADS</h3>
              </div>
              <form id="form" onSubmit={(e)=>handleSubmit(e)}>
                <input
                  className="input-title"
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                  placeholder="Masukkan judul artikel"
                ></input>
                <textarea
                  className="input-articles"
                  name="content"
                  id="content"
                  value={content}
                  onChange={(e)=>setContent(e.target.value)}
                  cols="30"
                  rows="10"
                  minLength={20}
                  placeholder="Masukkan artikel disini"
                ></textarea>
                <div className="text-end">
                  <button type="submit" id="submit" className="btn btn-dark">
                    <i className="fa-solid fa-plus">add</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="showContent"></div>
      </div>
      
    </div>
  );
};

export default AddPost;

