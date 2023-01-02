import React, {useEffect} from 'react'
import { AddPost, Cards, ModalComponent, Navbar, Slider, ThreadsList } from '../components'
import NavbarUser from '../components/NavbarUser'
import ParticlesBackground from '../components/ParticlesBackground'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getListUser,updatePublish, unPublish } from '../actions/userAction';
import { formatDistance, subDays } from 'date-fns'
import BorderExample from '../components/Spinner';
import {motion} from 'framer-motion'
import { Link, Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import moment from 'moment';

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
    
    <NavbarUser />
    <Slider/>
    <ParticlesBackground/>
    <AddPost/>
    <div>
      
      <div className="select mb-3">
      <Link to={'/home/politics'}>
     <Button className='' variant="success">Politics</Button>{' '}
     </Link>
     <Link to={'/home/mental'}>
     <Button variant="success">Mental Health</Button>{' '}
     </Link>
     <Link to={'/home/other'}>
     <Button variant="success">Other</Button>{' '}
     </Link>
     </div>
    <div className="pages-btn">
      <h3 id='topics'>Topics</h3>
      <hr/>
     <Link to={'/home/politics'}>
     <Button className='mt-3' variant="success">Politics</Button>{' '}
     </Link>
     <Link to={'/home/mental'}>
     <Button variant="success">Mental Health</Button>{' '}
     </Link>
     <Link to={'/home/other'}>
     <Button variant="success">Other</Button>{' '}
     </Link>
    
     
     </div>

    <motion.div className='container'
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    > 
      
        {getListUserResult ? (
            getListUserResult.map((person)=>{
             
                return(
                <div className='container'>
                    {person.articles.map((x)=>{
                       let createdAt = moment(x.createdAt).fromNow(true); 
                        if(x.publish === true && x.theme === "politics"){
                        return(
                          <div class="card w-75 card border-success mb-3 m-auto">
                          <div class="card-body">
                          <div className='container__card'>
                          <h6 id='uname' class="card-title mb-1">{person.username}</h6>
                          <h6>.</h6>
                          <p class="card-title text-start"> {createdAt} </p> 
                          </div>
                          <Button id='cat' className='btn-sm' variant="success">{x.theme}</Button>
                            <h3 class="card-text">
                              {x.title}
                            </h3>
                            <p class="card-text">
                              {x.content}
                            </p>
                            
                            
                          </div>
                        </div>
                        )
                        }
                    }) 
                }
                </div>
               )
              
            })
          
        ) : getListUserLoading ? (
          //  <p>Loading....</p>
          <div className="container text-center justify-content-center mt-5">
          <BorderExample/>
          </div>
        ): (
            <p>{getListUserError ? getListUserError : "DATA KOSONG"}</p>
        )}
        
    </motion.div>
   
    </div>
    <Footer/>
    <Outlet/> 
    </>
  )
}

export default Politics