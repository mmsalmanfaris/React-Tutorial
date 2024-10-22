function Car(props){

  // const {_brand, _color} = props
  const {_carInfo} = props
  const {brand, color, HP} = _carInfo

    const display = `This is ${color} ${brand} show room`;
    return(
      <h1>{display}</h1>
    )
  }

  export default Car;