import "./WorkCard.css"
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import React from "react";

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className="project-container">
           {
            WorkCardData.map((Element,index)=>{
                return(
                    <WorkCard
                    key={index}
                    imgsrc={Element.imgsrc}
                    title={Element.title}
                    text={Element.text}
                    view={Element.view}
                    source={Element.source}
                    />
                )
            })
           }
            </div>
        </div>
      
 
  )
}

export default Work
