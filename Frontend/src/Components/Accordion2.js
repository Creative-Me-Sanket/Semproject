import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Accordion2 = prop => {
  const [expanded, setExpanded] = useState(false);
  const navigate  = useNavigate();
  const sendData=(e,itm)=>{
    e.preventDefault() 
    console.log('clicked');
    navigate('/Testing/CourseScreen',{state:itm.linkToVideo,replace:true}) 
  }
  return (
    <div>
      <div>
        <div
          className="sectionCard"
          style={{
            backgroundColor: "white",
            borderBottom: "1px solid gray"
          }}
        >
          <div style={{display: "flex",}}>
          <h5
            onClick={() =>{
              
              setExpanded(!expanded)}
            }
            className="question-title"
            style={{ padding: "1vh", flex: "4", fontWeight: "normal" }}
          >
            <svg
              style={{ margin: "2vh" }}
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              class="bi bi-collection-play"
              viewBox="0 0 16 16"
            >
              <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z" />
              <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z" />
            </svg>
            {prop.data.section}
          </h5>
          
          {expanded
            ? <svg
                style={{ flex: 1, margin: "3vh" }}
                onClick={() => setExpanded(!expanded)}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </svg>
            : <svg
                style={{ flex: 1, margin: "3vh" }}
                onClick={() => setExpanded(!expanded)}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
              }
              </div>
              <h5 style={{display:'block',fontWeight:'normal',paddingLeft:'4vh',paddingBottom:'1vh'}}>{prop.data.videoList.length} Lessons   {prop.data.quiz.length ? <>{"    "+prop.data.quiz.length} Quiz</>:null}</h5>
        </div>
        <div
          style={{ backgroundColor: "white", borderBottom: "1px solid gray" }}
        >
          {expanded &&
            prop.data.videoList.map((itm, ind) => {
              return (
                <div>
                  <div
                    className="sectionCard2"
                    style={{
                      backgroundColor: "#EEEEFF",
                      borderBottom: "1px solid gray"
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <h5
                        onClick={() => setExpanded(!expanded)}
                        className="question-title"
                        style={{
                          padding: "2vh",
                          flex: "4",
                          fontWeight: "normal"
                        }}
                      >
                        <svg
                          style={{ flex: 1, margin: "3vh" }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-play-btn"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                        </svg>
                        <div style={{cursor:'pointer'}} onClick={(e)=>{sendData(e,itm)}}>{itm.name}</div>
                      </h5>
                      <a style={{flex:'1',padding: "5vh",fontSize:'20px'}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-paperclip"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                      </svg> Attachment
                    </a>
                    </div>
                  </div>
                </div>
              );
            })}
          {expanded && prop.data.quiz
            ? prop.data.quiz.map((itm, ind) => {
                return (
                  <div>
                    <div
                      className="sectionCard2"
                      style={{
                        display: "flex",
                        backgroundColor: "white",
                        borderBottom: "1px solid gray"
                      }}
                    >
                      <h4
                        onClick={() => setExpanded(!expanded)}
                        className="question-title"
                        style={{
                          padding: "2vh",
                          flex: "4",
                          fontWeight: "normal"
                        }}
                      >
                        <svg
                          style={{ flex: 1, margin: "3vh" }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          fill="currentColor"
                          class="bi bi-controller"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                          <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                        </svg>
                        {itm.name}
                      </h4>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};
export default Accordion2;
