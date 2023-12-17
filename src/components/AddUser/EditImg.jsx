import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Form from "react-bootstrap/Form";
import "./AddImg.css";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, updateProfile } from "firebase/auth";

function EditImg() {
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [currentPhotoUrl, setCurrentPhotoUrl] = useState(""); // Added state for current photoURL
  const dispatch = useDispatch();

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    // Set the current photoURL when the component mounts
    setCurrentPhotoUrl(user?.photoURL || ""); // Use the user's current photoURL or an empty string if not available
  }, [user]);

  const uploadImage = () => {
    setUploading(true);

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "tutorial");
    data.append("cloud_name", "dttd52ltg");

    fetch("https://api.cloudinary.com/v1_1/dttd52ltg/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        // Update the user's profile picture in Firebase Authentication
        updateProfile(auth.currentUser, { photoURL: data.url })
          .then(() => {
            // Profile picture updated successfully
            setUploading(false);
            window.location.reload();
          })
          .catch((error) => {
            // Handle errors
            console.error("Error updating profile picture:", error);
            setUploading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };

  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mt-5 col-md-7">
            <div className="card mb-4">
              <div className="row g-0">
                <div className="col-md-6 mx-auto">
                  <div className="card-body text-center">
                    <h2 className="card-title border-bottom mb-4 text-dark">
                      Edit Your Profile Picture
                    </h2>
                    <img
                      className="def-img mx-auto"
                      alt=""
                      src={currentPhotoUrl} // Display the current photoURL
                    />
                    <div action="" id="form">
                      <div>
                        <Form.Control
                          type="file"
                          onChange={(e) => setImage(e.target.files[0])}
                        />

                        <button
                          className="btn btn-info mt-3"
                          onClick={uploadImage}
                          disabled={uploading}
                        >
                          {uploading ? "Uploading..." : "Upload"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default EditImg
