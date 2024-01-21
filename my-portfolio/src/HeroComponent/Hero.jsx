import React from "react"
// import { BrowserRouter, Link } from "react-router-dom"
import styled from "styled-components"


function Hero(){
    return( 
        <MainContainer>
        <div className="image-container">
            <img src="imgArbab.jpg" height="350vh" alt="admin_img"/>
        </div>
        <div className="title-container">
        <h2>Hello,I m</h2>
        <h1>Sayyed Arbaab</h1>
        <h2>Frontend Developer</h2>
        <div className="btn-container">
        <button>Download CV</button>
        <button>Contact Info</button>
        </div>
        <div className="logo-container">
        <img src="github-sign.png" alt="gitLogo"/>
        <img src="linkedin.png" alt="linkedlnLogo" />
        </div>
        </div>
        </MainContainer>
    )
}
export default Hero


const MainContainer=styled.div`
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
        border: 3px solid black;
    }
}
.title-container{
    width:30%;
    height:50vh;
    margin: auto;
    margin-left:40px;
    line-height:33px;
    margin-top:110px;
    h1{
        text-align:center;
        font-family: 'Heebo', sans-serif;
        margin-top:20px;
    }
    h2{
        text-align:center;
        font-family: 'Heebo', sans-serif;
        color:gray;
        margin-top:20px;
    }
    .btn-container{
        height:5vh;
        margin:auto;
        display:flex;
        gap:10px;
        justify-content:center;

        button{
            font-family: 'Heebo', sans-serif;
            border-radius: 20px;
            cursor:pointer;
            color:black;
            height:6vh;
            width:28%;      
        }
    }
    .logo-container{
        height:7vh;
        margin:auto;
        display:flex;
        gap:10px;
        justify-content:center;

        img{
            margin-top:20px;
        }
    }
}
`