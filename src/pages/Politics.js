import React, {useEffect} from 'react'
import { Slider } from '../components'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getListUser,updatePublish, unPublish } from '../actions/userAction';
import { Outlet } from 'react-router-dom';
import PoliticCards from '../components/Card/PoliticCard'
import Sidebar from '../components/Sidebar';
import RightBar from '../components/RightBar/RightBar';
import PoliticSlider from '../components/Slider/PoliticSlider';

function Politics() {

  const { getListUserResult, getListUserLoading, getListUserError, updatePublishResult, unPublishResult} = useSelector((state)=> state.UserReducer)
    const dispatch = useDispatch();
    
    
    useEffect(()=>{
        dispatch(getListUser())
    }, [dispatch])

    useEffect(()=>{
      if(updatePublish){
          dispatch(getListUser());
      }
  },[updatePublishResult, dispatch])

  useEffect(()=>{
      if(unPublish){
          dispatch(getListUser());
      }
  },[unPublishResult, dispatch])
  
  return (
    <>
    <Sidebar />
    <RightBar/>
    <div className="wrapper">
    <PoliticSlider/>
    <PoliticCards/>
    </div>
    <Footer/>
    <Outlet/> 
    </>
  )
}

export default Politics