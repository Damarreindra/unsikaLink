import Card from 'react-bootstrap/Card';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListUser, updatePublish, unPublish } from '../../actions/userAction';
import { formatDistance, subDays } from 'date-fns'
import BorderExample from '../Spinner';
import {motion} from 'framer-motion'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

function AdminCards() {
    const { getListUserResult, getListUserLoading, getListUserError, updatePublishResult, unPublishResult} = useSelector((state)=> state.UserReducer)
    const dispatch = useDispatch();
    
    
    useEffect(()=>{
        dispatch(getListUser())
    }, [dispatch])
    
    useEffect(()=>{
        if(updatePublish()){
            dispatch(getListUser());
        }
    },[updatePublishResult, dispatch])

    useEffect(()=>{
        if(unPublish()){
            dispatch(getListUser());
        }
    },[unPublishResult, dispatch])

  return (
    
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
                            <hr />
                          </div>
                          <p className='mx-3'>Edit Publish :</p>
                          <Form.Check 
                            className='check mx-3 mb-3'
                            type="switch"
                            id="custom-switch"
                            checked={x.publish}
                            onChange={()=>
                            {if(x.publish===false){
                            dispatch(updatePublish(x.id,person.id))
                            }else{
                            dispatch(unPublish(x.id,person.id))
                            } } 
                            }
                          /> 
                        </div>
                        )
                        
                    }) 
                }
                </div>

               )
              
            })
          
        ) : getListUserLoading ? (
          
          <div className="container text-center justify-content-center">
          <BorderExample/>
          </div>
        ): (
            <p>{getListUserError ? getListUserError : "DATA KOSONG"}</p>
        )}
        
    </motion.div>
  )

}


<div>
</div>

export default AdminCards;




