import "./slide.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getListUser } from "../../actions/userAction";
import * as AiIcons from "react-icons/ai";
import moment from "moment/moment";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

function ProfileSlider() {
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  const { getListUserResult } = useSelector((state) => state.UserReducer);
  const uid = localStorage.getItem('id')
  const { id } = useParams();
  const accept = uid === id

  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);

  useEffect(() => {
    if (getListUserResult) {
      setUser(getListUserResult.items);
    }
  }, [getListUserResult]);

  return (
    <>
      {user
        .filter((e) => e.id === id)
        .map((user) => {
          return (
            <div className="banner">
              <div
                id=""
                className="p-5 rounded-08 shadow border-0 text-white d-flex justify-content-between rounded"
                style={{ height: "250px", marginTop: "80px" }}
              >
                <div className="text-black" id="text">
                  <img id="profile-img-slider" src={user.profile_img} alt="" />
                  <h2 id="profile-username">{user.username}</h2>
                  <p>
                    <AiIcons.AiFillCalendar /> Joined{" "}
                    {moment(user.createdAt).format("MMM Do YY")}
                  </p>
                </div>
                {accept ? 
                 <Dropdown>
                 <DropdownToggle variant="success">
                   Edit Profile
                 </DropdownToggle>

                 <Dropdown.Menu>
                   <Dropdown.Item href="/edit-profile-pict">
                     Edit Profile Pict
                   </Dropdown.Item>
                 </Dropdown.Menu>
               </Dropdown>
               
               :
               ""
              }
               
              </div>
            </div>
          );
        })}
    </>
  );
}

export default ProfileSlider;
