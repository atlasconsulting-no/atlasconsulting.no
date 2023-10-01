import React from 'react';
import "./Services.scss";
import style from "../../style.scss";
import sections from "../../constants/data";
import SingleService from './SingleService';

const Services = () => {
  return (
    <section className='services section-p bg-md-black' id = "services">
        <div className='container'>
            <div className='services-content'>
                <svg width = "1em" height = "1em">
                    <linearGradient id = "color-gradient" x1 = "100%" y1 = "100%" x2 = "0%" y2 = "0%">
                        <stop stopColor = {style.clr1} offset="0%" />
                        <stop stopColor = {style.clr2} offset = "100%" />
                    </linearGradient>
                </svg>

                <div className='item-list grid text-white text-center'>
                    {
                        sections.services.map(service => {
                            return (
                                <SingleService service = {service} key = {service.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services