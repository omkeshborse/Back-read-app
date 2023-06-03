import React from 'react'
import Title from './Title'
import {serviceText} from './data'
const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title title="our" subTitle="services" />

        <div className="section-center services-center">
          {serviceText.map((text , index) => {
            const { className, serviceTitle, description } = text ;
            return (
              <article className="service" key={index+ 1}>
                <span className="service-icon">
                  <i className={className}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{serviceTitle}</h4>
                  <p className="service-text">{description}</p>
                </div>
              </article>
            )
          })}
          
        </div>
      </section>
    </>
  )
}

export default Services;
