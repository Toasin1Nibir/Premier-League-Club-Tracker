import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { useState } from 'react';
import './ClubDetail.css'
import imageName from '../Photo/male.png' 
import imageName0 from '../Photo/female.png' 
import imageName1 from '../Photo/f.png' 
import imageName2 from '../Photo/football.png' 
import imageName3 from '../Photo/found.png' 
import imageName4 from '../Photo/mal.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'



const ClubDetail = () => {
    const {strTeam} =useParams()
    const [club , setClub] = useState({})
  useEffect(()=>{
    const url = (`https://www.thesportsdb.com/api/v1/json/2/searchteams.php?t=${strTeam}`)
   
    
    fetch(url)

    .then(res => res.json())
    .then(data => setClub(data.teams[0]))
  },[strTeam])
    const {strTeamBadge,strYoutube,strStadiumThumb,strTwitter,strFacebook,strGender} = club
    const style = {height:'200px'}
    const styles = {height:'20px'}
    let image;
    if(strGender === "Male"){
      image = <img style={style} src={imageName} alt=""/>
     
    }else{
      image = <img style={style} src={imageName0} alt=""/>
    }
    return (
     <div class='header'> 
         <div className='back'  style={{height:'500px', backgroundImage: `url(${strStadiumThumb})` }}>
         <img class='center'  src={strTeamBadge} alt=""/>
          </div>
    


      <div class="container">
          <div class="row d-flex justify-content-center align-items-center">
              <div class="col-md-7">
              <h1>{club.strTeam}</h1>
              <h5><img style={styles} src={imageName3} alt=""/> Founded : {club.intFormedYear} </h5>
              <h5><img style={styles} src={imageName1} alt=""/> Country: {club.strCountry} </h5>
              <h5><img style={styles} src={imageName2} alt=""/> Sports Type: {club.strSport}</h5>
              <h5><img style={styles} src={imageName4} alt=""/> Gender: {club.strGender}  </h5>
              </div>
              <div class="col-md-5 with-bg text-center">  
              {image}
              </div>
          </div>
          <div >
           <p class='footers'>{club.strDescriptionEN}</p>
           
          </div>
          <div class='footer' >
          <a href={`https:/${strTwitter}`}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href={`https:/${strFacebook}`}>
            <FontAwesomeIcon icon={faFacebook} size="2x"/>
            </a>
            <a href={`https:/${strYoutube}`} >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
      </div>
          
      





       
        

        </div>
    );
};

export default ClubDetail;