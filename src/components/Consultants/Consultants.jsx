import React from 'react';
import "./Consultants.scss";
import sections from '../../constants/data';
import {MdStar} from "react-icons/md";
import {FaEnvelopeOpen, FaPhoneAlt, FaLinkedin} from "react-icons/fa";

const gradient = "url(#color-gradient)";

const Consultants = () => {

    let startList;
    const showRating = (starCount) => {
        startList = new Array(starCount);
        for(let i = 0; i < startList.length; i++){
            startList[i] = <MdStar size = {25} style = {{ fill: gradient }} />;
        }
        return startList;
    }

  return (
    <section className='consultants section-p bg-black' id = "consultants">
        <div className='container'>
            <div className='consultants-content'>
                <div className='section-t text-center'>
                    <h3>Our Consultants</h3>
                </div>

                <div className='item-list grid text-white text-center'>
                    {
                        sections.consultants.map(consultant => {
                            showRating(consultant.rating);
                            return (
                                <div className='item translate-effect bg-dark' key = {consultant.id}>
                                    <div className='item-img'>
                                        <img src = {consultant.image} alt = "" />
                                    </div>
                                    <b className='item-name'>{consultant.name}</b>
                                    <p className='item-text text'> <FaEnvelopeOpen style = {{ fill: gradient }} /> &nbsp; {consultant.email}</p>
                                    <p className='item-text text'> <FaPhoneAlt style = {{ fill: gradient }} /> &nbsp; {consultant.phone}</p>
                                    <p className='item-text text'> <FaLinkedin style = {{ fill: gradient }} /> &nbsp; {consultant.linkedin  }</p>
                                    <p className='item-text text'>{consultant.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Consultants
