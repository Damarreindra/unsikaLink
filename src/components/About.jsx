import React from 'react'
import { motion } from 'framer-motion'
function About() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
    <div className='container'>
          <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://aseanyouthforum.org/wp-content/uploads/2019/03/Logo-Asean-Youth-Forum-HR-01-1.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">ASEAN YOUTH FORUM</h5>
        <p className="card-text">The ASEAN Youth Forum is a movement that represents and fights for the young people in ASEAN to voice out their concerns and strategies for ways to achieve a better ASEAN. AYF has been a platform of the youth in the ASEAN to raise their voice and claim for their rights for a sustainable, inclusive, people-centered, and youth-driven regional community. The network aims to institutionalise and establish its national chapters to focus the engagement on important and timely local issues affecting the youth, and consolidate policy proposal and agenda to put forward to the relevant ASEAN offices.
        AYF held an annual and regular solidarity meeting of youth civil society organisations in Southeast Asia, which is held as a parallel meeting to the ASEAN People’s Forum /ASEAN Civil Society Conference, ASEAN Senior Officials Meeting on Youth and ASEAN Summit. It is a strategic avenue to engage with ASEAN member states and mechanisms. It is also a venue to discuss the issues and concerns of young people in ASEAN and how to address them. 
        AYF has been working at the local, national and regional level. In the last ten years, AYF has been organised in Thailand (2009), Vietnam (2010), Indonesia, Cambodia, Brunei Darussalam, Myanmar, Malaysia, Cambodia, The Philippines, and Indonesia. It has already involved more than 2500 young leaders of Southeast Asia.</p>
        <p className="card-text"><small className="text-muted">Since 2014</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
    </motion.div>
  )
}

export default About