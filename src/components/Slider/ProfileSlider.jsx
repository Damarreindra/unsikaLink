import "./slide.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getListUser } from "../../actions/userAction";
import moment from "moment/moment";

function ProfileSlider() {
    const [user,setUser] = useState([])
    const dispatch = useDispatch();
    const {
        getListUserResult
      } = useSelector((state) => state.UserReducer);
      const {id} = useParams();

    useEffect(() => {
      dispatch(getListUser());
    }, [dispatch]);
   
    useEffect(()=>{
        if(getListUserResult){
            setUser(getListUserResult)
        }
    },[getListUserResult])
    
    console.log(user);
  
 
  return (
    <>
    {user.filter((e)=> e.id === id)
    .map((user)=>{
        return(
            <div className="banner">
            <div
              id="jumbotron"
              className="p-5 rounded-08 shadow border-0 text-white d-flex justify-content-between rounded"
              style={{ height: "250px", marginTop: "80px" }}
            >
              
              <div id="text">
                <img id="profile-img-slider" src={user.profile_img} alt="" />
                <h2>{user.username}</h2>
                <p>Joined: {moment(user.createdAt).format("MMM Do YY")}</p>
              </div>
             
            </div>
            </div>
        )
    })
    }
    </>
  );
}

export default ProfileSlider;
