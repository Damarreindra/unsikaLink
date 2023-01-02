import { motion } from 'framer-motion'
import React from 'react'

function Helps() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    >
    <div className='container'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Education</h5>
        <p className="card-text">A website help asian teenanger to consultate about their education</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/1464223/pexels-photo-1464223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Politic</h5>
        <p className="card-text">A wesbite that help asian teenanger to find and get information about Politics</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/2274162/pexels-photo-2274162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mental Health</h5>
        <p className="card-text">A wesbite that help asian teenager who need help about their mental health</p>
      </div>
    </div>
  </div>
</div>
    </div>
    </motion.div>
  )
}

export default Helps