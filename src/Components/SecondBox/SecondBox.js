import React, {useState, useEffect} from "react";
import './SecondBox.css';
const SecondBox =()=>{
    const [mainHeading, setMainHeading]=useState(window.innerWidth >550?'Medium is a place to write, read, and connect':'Write, read, and connect');
    useEffect(() => {
        function handleheading(){
          if(window.innerWidth>=1080){
            setMainHeading('Medium is a place to write, read, and connect');
        }
        else{
            setMainHeading('Write, read, and connect');
          }
        }
        window.addEventListener('resize', handleheading);
        return () => {
          window.removeEventListener('resize', handleheading);
        }
      }, []);
    return(
        <div className="secondBox bb" style={{backgroundColor: '#FFC017'}}>
            <div className="leftBox">
                <h1 className="boxHeading">{mainHeading}</h1>
                <h3 className="lowerText">It's easy and free to post your thinking on any topic and connect with millions of readers.</h3>
                <button type="button" className="startWButton">Start Writing</button>
            </div>
        </div>
    )
}
export default SecondBox;