import React,{useState} from "react";
import Profiledcard from "../../../components/profilecard/Profiledcard";
import styled from "styled-components";
export default function Achievments() {
  const [currentid,setcurrentid]= useState(null);
function  openblock(id){
  if(currentid === id){
    setcurrentid(null);
    return
  }
 setcurrentid(id);
}
  const arr = [
    {
      id:1,
      title:"Test #1",
      data:"23/04/2022",
      ball:"30.0/270.0",
      result:["Blok #1 <br />29 / 30","Blok #1 <br />29 / 30","Blok #1 <br />29 / 30","Blok #1 <br />29 / 30","Blok #1 <br />29 / 30",],
    },
    {
      id:2,
      title:"Test #2",
      data:"23/04/2022",
      ball:"30.0/270.0",
      result:["Blok #1 <br />29 / 30","Blok #1 <br />29 / 30","Blok #1 <br />29 / 30","Blok #1 <br />29 / 30","Blok #1 <br />29 / 30",],
    },{
      id:3,
      title:"Test #3",
      data:"23/04/2022",
      ball:"30.0/270.0",
      result:["Blok #1 <br />29 / 30","Blok #1 <br />29 / 30","Blok #1 <br />29 / 30","Blok #1 <br />29 / 30","Blok #1 <br />29 / 30",],
    },{
      id:4,
      title:"Test #4",
      data:"23/04/2022",
      ball:"30.0/270.0",
      result:["Blok #1 <br />29 / 30","Blok #1 <br />29 / 30","Blok #1 <br />29 / 30","Blok #1 <br />29 / 30","Blok #1 <br />29 / 30",],
    },
  ]
  return (
    <Profiledcard>
      <Styledachi>
        <h1>Testlar</h1>
        <footer>
        {arr.map((i)=>(
          <section key={i.id}>
            <div className="first">
              <div>{i.title}</div>
              <div>{i.data}</div>
              <div className="qq">
                <p>{i.ball}</p>
                <i className="icon icon-vector" style={{transform: i.id === currentid ? null:"rotate(180deg)"}} onClick={()=>(openblock(i.id))}></i>
              </div>
            </div>
            {i.id === currentid ?
            <div className="last">
            {i.result.map((j)=>(  
              
              <p dangerouslySetInnerHTML={{__html : j}} key={i.id+j}></p>
            ))} 
            </div> : null }
          </section>
        ))}
        </footer>
      </Styledachi>
    </Profiledcard>
  );
}
const Styledachi = styled.div`
  h1 {
    font-size: 25px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    margin-bottom: 22px;
  }
  footer {
    display: flex;
    flex-direction: column;
    gap: 25px;
    section {
      .first {
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        letter-spacing: 0em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .qq{
          display: flex;
          gap: 20px;
          align-items: center;
          p{
            margin: 0;
            padding: 0;
          }
        }
      }
      .last{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #DCDCDC;
        border-left:0;
        border-right:0;
        margin-top: 20px;
        padding: 20px 26px;
font-size: 18px;
font-weight: 500;
line-height: 27px;
letter-spacing: 0em;
      }
    }
  }
`;
