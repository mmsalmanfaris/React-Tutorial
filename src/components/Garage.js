import Car from './Car';
import Apple from './Apple';

function Garage(){
    // const brand = "BMW";  
    // const color = "Black";
    const carInfo = {brand:"BMW", color:"Black"};
    // const carInfo = {};
    const displayCarInfo = carInfo.brand !== undefined || carInfo.color !== undefined;
    const appleInfo = {type:"fuji", color:"red"};
    const isDoorOpened = false;

    const carList = [{brand:"Audi", color:"Red"},
      {brand:"Tesla", color:"Blue"},
      {brand:"Honda", color:"Orange"}
    ]

    return(      
      <div>
        <h1>How's Garage is this?</h1>
        {/* <Car _brand={brand} _color="Black"/> */}

        { displayCarInfo && <Car _carInfo = {carInfo}/>}
        
        <Apple _appleInfo = {appleInfo}/>

        {isDoorOpened ? <h1>The Garage door is opened</h1> : <h1>The garage door is closed</h1>}

        <ul>
          {carList.map((car, index)=> <li key={index}><Car _carInfo = {car}/></li>)}
        </ul>
      </div>
    )
  }

  export default Garage;