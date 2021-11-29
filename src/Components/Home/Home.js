import { useEffect, useState } from 'react';
import './Home.css'
import TeamDetail from '../TeamDetail/TeamDetail';
import imageName from '../Photo/stadium.jpg' 

const Home = () => {
    const [team , setTeam ] = useState([])
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League'
    
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams))
    },[])
    const style = {width:'100%',height:'480px'}
    return (


        <div className='main-container'>
            
           
            {/* <div class='image-container' style={{height:'250px',width:'100%', backgroundImage:  `url(${imageName})`, backgroundRepeat: 'no-repeat'  }}>
                <h1 class='header'>Premier Legue Club Tracker</h1>
                </div> */}
                <div>
                   {/* <h1 class='header'>Premier League Club Tracker</h1> */}
                    <img style={style} src={imageName} alt=""/>
                
                </div>
              
          
            
          <div class='row'>
   
           {
            //   team.map(teamdetails => <TeamDetail key={team.idTeam} teamdetails={teamdetails}></TeamDetail>)
            team.map(teamdetails => <TeamDetail key={team.idTeam} teamdetails={teamdetails}></TeamDetail>)
           }
         </div>
    
        </div>
       
    );
};

export default Home;