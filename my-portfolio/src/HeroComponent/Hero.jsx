import React from "react"
import { BrowserRouter, Link } from "react-router-dom"
import styled from "styled-components"


function Hero(){
    return( 
        <MainContainer>
        <div className="image-container">
            <img src="imgArbab.jpg" height="350vh"/>
        </div>
        <div className="title-container">
        <h2>Hello,I m</h2>
        <h1>Sayyed Arbaab</h1>
        <h2>Frontend Developer</h2>
        <button>Download Cv</button>
        <button>Contact Info</button>
        </div>
        </MainContainer>
    )
}
export default Hero

const MainContainer=styled.div`
background:black;
max-width: 1280px;
margin: 0 auto;
height:82vh;
display:flex;

.image-container{
    width:47%;
    display:flex;
    justify-content:end;
    align-items:center;

    img{
        border-radius:100px;
        border: 3px solid gold;
    }
}
.title-container{
    background:gold;
    width:30%;
    height:40vh;
    margin: auto;
    margin-left:40px;
    h1{
        text-align:center;
        font-family: 'Heebo', sans-serif;
    }
    h2{
        text-align:center;
        font-family: 'Heebo', sans-serif;
        color:gray;
    }
    button{
        border-radius:4px;
        height:4vh;
    }
}
`