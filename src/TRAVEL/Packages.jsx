import React from 'react'
import { destinations } from './data'
const Packages = () => {

  return (
    <div>
      {destinations.map((destination) => (
        <div key={destination.id} className="card mb-3" style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={destination.image} className="img-fluid rounded-start" alt={destination.title} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{destination.title}</h5>
                <p className="card-text">{destination.description}</p>
                <p className="card-text"><small className="text-muted">Price: {destination.price}</small></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Packages
