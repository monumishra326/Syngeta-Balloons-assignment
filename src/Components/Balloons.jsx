
import React, { useState } from "react";
import "./Balloons.css";
import styled from "styled-components";
export const Balloons = () => {
 let colorspoint=[0,1,2,3,4];
 let randomgenerator=colorspoint.sort((a,b)=>0.5-Math.random());


  const [input, setInput] = useState(0);
  const [circle1, setCircle1] = useState("block");
  const [circle2, setCircle2] = useState("block");
  const [circle3, setCircle3] = useState("block");
  const [circle4, setCircle4] = useState("block");
  const [circle5, setCircle5] = useState("block");
  const [circle8, setCircle8] = useState("none");
  const [circle9, setCircle9] = useState("none");
  const [circle10, setCircle10] = useState("none");
  const [circle11, setCircle11] = useState("none");
  const [circle12, setCircle12] = useState("none");
  const [colorpoin,setColorpoin]= useState(randomgenerator);

  var colorstore=["#d5e8d4","#ffe6cd","#6a00ff","#d9e8fb","#e2d5e7"];
  var borderstore=["#c1d4bb","#c9b378","#804dc6","#b0bdcd","#c9bccd"];

  //////right block////////////
  const Circlediv1 = styled.div`
    background-color: ${colorstore[colorpoin[0]]};
    border: 4px solid ${borderstore[colorpoin[0]]};
    display: ${circle1};
  `;
  const Circlediv2 = styled.div`
    background-color: ${colorstore[colorpoin[1]]};
    border: 4px solid ${borderstore[colorpoin[1]]};
    display: ${circle2};
  `;
  const Circlediv3 = styled.div`
    background-color: ${colorstore[colorpoin[2]]};
    border: 4px solid  ${borderstore[colorpoin[2]]};
    display: ${circle3};
  `;
  const Circlediv4 = styled.div`
    background-color: ${colorstore[colorpoin[3]]};
    border: 4px solid ${borderstore[colorpoin[3]]};
    display: ${circle4};
  `;
  const Circlediv5 = styled.div`
    background-color: ${colorstore[colorpoin[4]]};
    border: 4px solid ${borderstore[colorpoin[4]]};
    display: ${circle5};
  `;

  //left block/////////////////////////
  const Circlediv8 = styled.div`
    background-color: ${colorstore[colorpoin[0]]};
    border: 4px solid ${borderstore[colorpoin[0]]};
    display: ${circle8};
  `;
  const Circlediv9 = styled.div`
    background-color: ${colorstore[colorpoin[1]]};
    border: 4px solid ${borderstore[colorpoin[1]]};
    display: ${circle9};
  `;
  const Circlediv10 = styled.div`
    background-color: ${colorstore[colorpoin[2]]};
    border: 4px solid ${borderstore[colorpoin[2]]};
    display: ${circle10};
  `;
  const Circlediv11 = styled.div`
    background-color: ${colorstore[colorpoin[3]]};
    border: 4px solid ${borderstore[colorpoin[3]]};
    display: ${circle11};
  `;
  const Circlediv12 = styled.div`
    background-color: ${colorstore[colorpoin[4]]};
    border: 4px solid ${borderstore[colorpoin[4]]};
    display: ${circle12};
  `;
/////////////////////shot handler////////
  const textHandler = () => {
    

    if (input == 1) {
      setCircle1("none");
      setCircle8("block");
    } else if (input == 2) {
      setCircle2("none");
      setCircle9("block");
    } else if (input == 3) {
      setCircle3("none");
      setCircle10("block");
    } else if (input == 4) {
      setCircle4("none");
      setCircle11("block");
    } else if (input == 5) {
      setCircle5("none");
      setCircle12("block");
    }
  };

  /////////////same position back////////

  const backhandler = (value) => {
    
    if (value == 1) {
      setCircle8("none");
      setCircle1("block");
    } else if (value == 2) {
      setCircle9("none");
      setCircle2("block");
    } else if (value == 3) {
      setCircle10("none");
      setCircle3("block");
    } else if (value == 4) {
      setCircle11("none");
      setCircle4("block");
    } else if (value == 5) {
      setCircle12("none");
      setCircle5("block");
    }
  };
  return (
    <div>
    <div className="inputbox">
      <input type="number" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => textHandler()}>Shoot</button>
    </div>

    <div className="maincontainer">
      <div className="box">
        <Circlediv8 onClick={() => backhandler(1)}></Circlediv8>
        <Circlediv9 onClick={() => backhandler(2)}></Circlediv9>
        <Circlediv10 onClick={() => backhandler(3)}></Circlediv10>
        <Circlediv11 onClick={() => backhandler(4)}></Circlediv11>
        <Circlediv12 onClick={() => backhandler(5)}></Circlediv12>
      </div>
      <div className="circlediv">
        <Circlediv1></Circlediv1>
        <Circlediv2></Circlediv2>
        <Circlediv3></Circlediv3>
        <Circlediv4></Circlediv4>
        <Circlediv5></Circlediv5>
      </div>
    </div>
  </div>
  )
}
