import React from "react";
import './Notes.css';

export const Notes = () => {
    const clicked = () => {
        return (
            <img src="https://wabisabiproject.com/media/galleries/notes/il_570xn.png" alt="Note Image" />
        );  
    };
    return(
        <div className="notesContainer">
        <h1>NOTES</h1>
        
          <div className="secondcarduppercontent">
          <p1>
          We are a group of people who love traditional Indian crafts. <br/>We want to revive and share the knowledge of dyeing and crafts with the world. <br/>  We have created a series of workshops in India, where we teach you how to make natural dyes, natural paints and other traditional craft materials. Our workshop is for anyone who wants to learn about Indian crafts and dyeing techniques.
          </p1>
        
          

          <p2>
          Browse through our crafts Programs as well as Excursions of tours and unattended studio access below-
          </p2>
          </div>
          <div>
          <span>ALL</span> / <span>PLACEHOLDER</span>

          </div>
          <div>
          <span>ALL</span> / <span>ENGLISH</span>
          </div>
          <div>
          <span>ALL</span> / <span>LOCKED</span> / <span onClick={clicked}>UNLOCKED</span>
          </div>
          </div>

    )
}