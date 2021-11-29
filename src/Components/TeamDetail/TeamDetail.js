import './TeamDetail.css'
import { useHistory} from 'react-router-dom'

const TeamDetail = (props) => {
    const { strTeamBadge ,strTeam ,strSport,idTeam} = props.teamdetails
    
    const st = {height:'200px'}
    
    const history = useHistory()
    const handleClick =(strTeam)=>{
        const url = `/ClubDetail/${strTeam}`
        history.push(url)
    }
    return (
     
       <div class="card text-center col-md-3">
        <div>
         <img style={st} src={strTeamBadge} alt=""/>
        <div class="card-body">
           <h1>{strTeam}</h1>
           <h4>sports type: {strSport}</h4>
           <button class='btn' onClick={() => handleClick(strTeam)}>Explore <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
      </div>
       </div>  
    );
};

export default TeamDetail;