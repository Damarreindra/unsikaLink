import React from 'react'

function CardAdmin() {
  return (
    <div>
      <div className="card w-75 card border-success mb-3 m-auto">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          <div className="d-grid gap-2 d-md-block">
            <button className="btn btn-success" type="button">Approve</button>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default CardAdmin