import React from 'react'
import Title from './Title'
import { ToursData } from "./data" 
const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
      <Title title='featured' subTitle='tours' />
       

        <div className="section-center featured-center">
          {
            ToursData.map(((data ,index) =>{
              const {src , tourDate , tourTitle ,description ,destination ,date,price } = data ;
              return (
                <article className="tour-card" key={index}>
                  <div className="tour-img-container">
                    <img
                      src={src}
                      className="tour-img"
                      alt=""
                    />
                    <p className="tour-date">{tourDate}</p>
                  </div>
                  <div className="tour-info">
                    <div className="tour-title">
                      <h4>{tourTitle}</h4>
                    </div>
                    <p>
                      {description}
                    </p>
                    <div className="tour-footer">
                      <p>
                        <span>
                          <i className="fas fa-map"></i>
                        </span>
                        {destination}
                      </p>
                      <p>{date}</p>
                      <p>{price}</p>
                    </div>
                  </div>
                </article>
              )
            }))
          }

        </div>
      </section>
    </>
  )
}

export default Tours
