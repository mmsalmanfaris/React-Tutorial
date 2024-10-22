import './Header.css';

function Header(){
    const myStyle = {
        color:"red", 
        backgroundColor:"lightblue",
        padding: "20px"
    }
    return(
        <div>
            <h1 style={myStyle}>Hello Styling</h1>
            <p>Add a little Style</p>
        </div>)
}

export default Header;