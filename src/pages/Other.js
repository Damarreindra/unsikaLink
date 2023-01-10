import React, { useEffect } from "react";
import {
  AddPost,
  Cards,
  ModalComponent,
  Navbar,
  Slider,
  ThreadsList,
} from "../components";
import NavbarUser from "../components/NavbarUser";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getListUser, updatePublish, unPublish } from "../actions/userAction";
import { formatDistance, subDays } from "date-fns";
import BorderExample from "../components/Spinner";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import moment from "moment";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar/RightBar";
import OtherCards from "../components/Card/MentalCard";
import OtherSlider from "../components/Slider/OtherSlider";

function Other() {
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
  return (
    <>
      <Sidebar />
      <RightBar />
      <div className="wrapper">
        <OtherSlider />
        <OtherCards />
      </div>
      <Footer />
      <Outlet />
    </>
  );
}

export default Other;
