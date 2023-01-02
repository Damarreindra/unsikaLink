import { motion } from 'framer-motion'
import React from 'react'

function Asean() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
    <div className='container'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://t3.ftcdn.net/jpg/03/48/12/50/360_F_348125022_I5Snv9KRMsMtfSqIARSpJOkrou2jsMb0.jpg" className="card-img-top" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/6147076/pexels-photo-6147076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
  </div>
</div>
    </div>
    </div>
    </motion.div>
  )
}

export default Asean