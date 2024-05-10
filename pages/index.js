import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import { fetchAPI } from "../lib/api"
import Image from "../components/image"
import Link from "next/link"

const Home = ({ step1, step2, step3, step4, step5, step6, years, subjects, global  }) => {

  function getStep0(event) {
    event.target.classList.toggle('active');
    document.getElementById("active-0").appendChild(event.target);
  }
  
  function step0Next(){
    var subject, year, current, selected;
    current = window.location.search;
    selected = document.getElementById("active-0");
    let active = selected.getElementsByClassName('active');
    let yearIds = [];
    let subjectIds = [];
    for (i = 0; i < active.length; i++) {
      if(active[i].id == 'subject'){
        subject += `${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
        subjectIds.push(active[i].getElementsByTagName('span')[0]?.innerText)
      }
      if(active[i].id == 'year'){
        year += `${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
        yearIds.push(active[i].getElementsByTagName('span')[0]?.innerText)
      }
    }
   
    window.location.href = current + '&subjectIds=' + subjectIds + '&yearIds=' + yearIds + '&step0=' + year.replaceAll('undefined', '') + '&step01=' + subject.replaceAll('undefined', '') ;
  }

  function getStep1(event) {
    event.target.classList.toggle('active');
    document.getElementById("active-1").appendChild(event.target);
  }
  
  function step1Next(){
    var input, current, selected;
    current = window.location.search;
    selected = document.getElementById("active-1");
    let active = selected.getElementsByClassName('active');
    let itemIds = [];
    for (i = 0; i < active.length; i++) {
      if (active.length > 2){
        if (i >= 2){
          input += ` and ${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
        } else {
          input += `${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
        }
      } else {
        input += ` ${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
      }
      if (active[i].getElementsByTagName('span')[0]){
        itemIds.push(active[i].getElementsByTagName('span')[0]?.innerText);
      }
    }
    fetch('https://cms.didactic-syntax.org/api/step-1s?populate=*', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          Slug: document.getElementById('step1Input')?.innerText
        },
      }),
    })
      .then(response => response.json())
      .then(data => 
        itemIds.push(data.data.id.toString())
      )
      .then(
        setTimeout(() => {
          window.location.href = current + '&step1Ids=' + itemIds +  '&step1=' + input.replaceAll('undefined', ' ').replaceAll('...', '')
        } , 1000)
      )
  }
  
  function getStep2(event) {
    event.target.classList.toggle('active');
    document.getElementById("active-2").appendChild(event.target);
  }
  
  function step2Next(){
    var input, current, selected;
    current = window.location.search;
    selected = document.getElementById("active-2");
    let active = selected.getElementsByClassName('active');
    let itemIds = [];
    for (i = 0; i < active.length; i++) {
      if (active.length > 2){
        if (i >= 2){
          input += ` and ${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
        } else {
          input += `${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
        }
      } else {
        input += ` ${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
      }
      itemIds.push(active[i].getElementsByTagName('span')[0]?.innerText)
    }
    fetch('https://cms.didactic-syntax.org/api/step-2s?populate=*', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          Slug: document.getElementById('step2Input')?.innerText
        },
      }),
    })
      .then(response => response.json())
      .then(data => 
        itemIds.push(data.data.id.toString())
      )
      .then(
        setTimeout(() => {
          window.location.href = current + '&step2Ids=' + itemIds + '&step2=' + input.replaceAll('undefined', ' ').replaceAll('...', '');
        } , 1000)
      )
    
  }
  
  function getStep3(event) {
    event.target.classList.toggle('active');
    document.getElementById("active-3").appendChild(event.target);
  }
  
  function step3Next(){
    var input, current, selected;
    current = window.location.search;
    selected = document.getElementById("active-3");
    let active = selected.getElementsByClassName('active');
    let itemIds = [];
    for (i = 0; i < active.length; i++) {
      if (active.length > 2){
        if (i >= 2){
          input += ` and ${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
        } else {
          input += `${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
        }
      } else {
        input += ` ${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
      }
      itemIds.push(active[i].getElementsByTagName('span')[0]?.innerText)
    }
    fetch('https://cms.didactic-syntax.org/api/step-3s?populate=*', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          Slug: document.getElementById('step3Input')?.innerText
        },
      }),
    })
      .then(response => response.json())
      .then(data => 
        itemIds.push(data.data.id.toString())
      )
      .then(
        setTimeout(() => {
          window.location.href = current + '&step3Ids=' + itemIds + '&step3=' + input.replaceAll('undefined', ' ').replaceAll('...', '');
        } , 1000)
      )
  }
  
  function getStep4(event) {
    event.target.classList.toggle('active');
    document.getElementById("active-4").appendChild(event.target);
  }
  
  function step4Next(){
    var input, current, selected;
    current = window.location.search;
    selected = document.getElementById("active-4");
    let active = selected.getElementsByClassName('active');
    let itemIds = [];
    for (i = 0; i < active.length; i++) {
      if (active.length > 2){
        if (i >= 2){
          input += ` and ${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
        } else {
          input += `${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
        }
      } else {
        input += ` ${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
      }
      itemIds.push(active[i].getElementsByTagName('span')[0]?.innerText)
    }
    fetch('https://cms.didactic-syntax.org/api/step-4s?populate=*', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          Slug: document.getElementById('step4Input')?.innerText
        },
      }),
    })
      .then(response => response.json())
      .then(data => 
        itemIds.push(data.data.id.toString())
      )
      .then(
        setTimeout(() => {
          window.location.href = current + '&step4Ids=' + itemIds + '&step4=' + input.replaceAll('undefined', ' ').replaceAll('...', '');
        } , 1000)
      )
  }
  
  function getStep5(event) {
    event.target.classList.toggle('active');
    document.getElementById("active-5").appendChild(event.target);
  }
  
  function step5Next(){
    var input, current, selected;
    current = window.location.search;
    selected = document.getElementById("active-5");
    let active = selected.getElementsByClassName('active');
    let itemIds = [];
    for (i = 0; i < active.length; i++) {
      if (active.length > 2){
        if (i >= 2){
          input += ` and ${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
        } else {
          input += `${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
        }
      } else {
        input += ` ${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
      }
      itemIds.push(active[i].getElementsByTagName('span')[0]?.innerText)
    }
    fetch('https://cms.didactic-syntax.org/api/step-5s?populate=*', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          Slug: document.getElementById('step5Input')?.innerText
        },
      }),
    })
      .then(response => response.json())
      .then(data => 
        itemIds.push(data.data.id.toString())
      )
      .then(
        setTimeout(() => {
          window.location.href = current + '&step5Ids=' + itemIds + '&step5=' + input.replaceAll('undefined', ' ').replaceAll('...', '');
        } , 1000)
      )
  }
  
  function getStep6(event) {
    event.target.classList.toggle('active');
    document.getElementById("active-6").appendChild(event.target);
  }
  
  function step6Next(){
    var input, current, selected;
    current = window.location.search;
    selected = document.getElementById("active-6");
    let active = selected.getElementsByClassName('active');
    let itemIds = [];
    for (i = 0; i < active.length; i++) {
      if (active.length > 2){
        if (i >= 2){
          input += ` and ${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
        } else {
          input += `${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
        }
      } else {
        input += ` ${active[i].innerText.replace(active[i].getElementsByTagName('span')[0]?.innerText, '')}`;
      }
      itemIds.push(active[i].getElementsByTagName('span')[0]?.innerText)
    }
    fetch('https://cms.didactic-syntax.org/api/step-6s?populate=*', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          Slug: document.getElementById('step6Input')?.innerText
        },
      }),
    })
      .then(response => response.json())
      .then(data => 
        itemIds.push(data.data.id.toString())
      )
      .then(
        setTimeout(() => {
          window.location.href = current + '&step6Ids=' + itemIds + '&step6=' + input.replaceAll('undefined', ' ').replaceAll('...', '');
        } , 1000)
      )
  }

  function refresh(){
    location.reload();
  }


  return (
    <Layout global={global}>
      <div id="topbar"></div>

      <div id="landing-page" className="wrapper">
        <div className="canvas">
          <h2 className="note">Create a learning goal</h2>
          <div className="line"></div>
          <a className="next" id="how-link" href="?start=true">Start</a>
        </div>
        <div className="balls" id="balls">
          <li className="ball">Didactic Syntax</li>
          <li className="ball">Dot.ds</li>
          <li className="ball">Graphic Design Arnhem</li>
          <li className="ball">Didactic Syntax</li>
          <li className="ball">Dot.ds</li>
          <li className="ball">Graphic Design Arnhem</li>
          <li className="ball">Didactic Syntax</li>
          <li className="ball">Dot.ds</li>
          <li className="ball">Graphic Design Arnhem</li>
        </div>
      </div>

       {/* <!-- Step 0 --> */}
       <div id="step0" className="wrapper">

        <div className="canvas">
          <h2 className="note">For which cohort are you writing a learning goal?</h2>
          <div id="active-0"></div>
          <div className="line"></div>
          <div className="next" id="link1" onClick={step0Next}>Next</div>
        </div>

        <div className="balls" id="balls">
          {subjects.map((subject, i) => {
            return(
              <li id="subject" className="ball" key={`step0${i}`} onClick={getStep0}>{subject.attributes.Slug.replaceAll('_', ' ')}<span>{subject.id}</span></li>
            )
          })}
          {years.map((year, i) => {
            return(
              <li id="year" className="ball" key={`step0-year${i}`} onClick={getStep0}>{year.attributes.Slug.replaceAll('_', ' ')}<span>{year.id}</span></li>
            )
          })}
        </div>

      </div>

      {/* <!-- Step 1 --> */}
      <div id="step1" className="wrapper">

        <div className="canvas">
          <h2 className="note">At the end of this assignment, students will</h2>
          <div id="active-1">
            <span className="ball active" id="step1Input" role="textbox" contentEditable>...</span>
          </div>
          <div className="line"></div>
          <div className="next" id="link1" onClick={step1Next}>Next</div>
        </div>

        <div className="balls" id="balls">
          {step1.map((item1, i) => {
            return(
              <li className="ball" key={`step1${i}`} onClick={getStep1}>{item1.attributes.Slug.replaceAll('_', ' ')}<span>{item1.id}</span></li>
            )
          })}
        </div>

      </div>

      {/* <!-- Step 2 --> */}
      <div id="step2" className="wrapper">

        <div className="canvas">
          <h2 className="note">What?</h2>
          <div id="active-2">
            <span className="ball active" id="step2Input" role="textbox" contentEditable>...</span>
          </div>
          <div className="line"></div>
          <div className="next" id="link2" onClick={step2Next}>Next</div>
        </div>

        <div className="balls" id="balls">
          {step2.map((item2, i) => {
            return(
              <li className="ball" key={`step2${i}`} onClick={getStep2}>{item2.attributes.Slug.replaceAll('_', ' ')}<span>{item2.id}</span></li>
            )
          })}
        </div>

      </div>

      {/* <!-- Step 3 --> */}
      <div id="step3" className="wrapper">

        <div className="canvas">
          <h2 className="note">... demonstrating</h2>
          <div id="active-3">
            <span className="ball active" id="step3Input" role="textbox" contentEditable>...</span>
          </div>
          <div className="line"></div>
          <div className="next" id="link3" onClick={step3Next}>Next</div>
        </div>

        <div className="balls" id="balls">
          {step3.map((item3, i) => {
            return(
              <li className="ball" key={`step3${i}`} onClick={getStep3}>{item3.attributes.Slug.replaceAll('_', ' ')}<span>{item3.id}</span></li>
            )
          })}
        </div>

      </div>

      {/* <!-- Step 4 --> */}
      <div id="step4" className="wrapper">

        <div className="canvas">
          <h2 className="note">... of one (or more) of these skills</h2>
          <div id="active-4">
            <span className="ball active" id="step4Input" role="textbox" contentEditable>...</span>
          </div>
          <div className="line"></div>
          <div className="next" id="link4" onClick={step4Next}>Next</div>
        </div>

        <div className="balls" id="balls">
          {step4.map((item4, i) => {
            return(
              <li className="ball" key={`step4${i}`} onClick={getStep4}>{item4.attributes.Slug.replaceAll('_', ' ')}<span>{item4.id}</span></li>
            )
          })}
        </div>
      </div>    

      {/* <!-- Step 5 --> */}
      <div id="step5" className="wrapper">

        <div className="canvas">
          <h2 className="note">... using these tools, situations or formats</h2>
          <div id="active-5">
            <span className="ball active" id="step5Input" role="textbox" contentEditable>...</span>
          </div>
          <div className="line"></div>
          <div className="next" id="link5" onClick={step5Next}>Next</div>
        </div>

        <div className="balls" id="balls">
          {step5.map((item5, i) => {
            return(
              <li className="ball" key={`step5${i}`} onClick={getStep5}>{item5.attributes.Slug.replaceAll('_', ' ')}<span>{item5.id}</span></li>
            )
          })}
        </div>
      </div> 

      {/* <!-- Step 6 --> */}
      <div id="step6" className="wrapper">

        <div className="canvas">
          <h2 className="note">Define a base level for acceptable performance of the demonstrated <span id="insert3"></span></h2>
          <div id="active-6">
            <span className="ball active" id="step6Input" role="textbox" contentEditable>...</span>
          </div>
          <div className="line"></div>
          <div className="next" id="link6" onClick={step6Next}>Next</div>
        </div>

        <div className="balls" id="balls">
          {step6.map((item6, i) => {
            return(
              <li className="ball" key={`step6${i}`} onClick={getStep6}>{item6.attributes.Slug.replaceAll('_', ' ')}<span>{item6.id}</span></li>
            )
          })}
        </div>
      </div> 

      <div id="result">
        <p>Learning Outcome Suggestion based on Input</p>
        <h1 contentEditable id="final-text"></h1>
        <div className="buttons">
        {/* Show <div className="button" onClick={refresh}>Another Option</div> */}
          <div className="button"><a href={`/?start=true`}>Start Over</a></div>
          {/* <div className="button"><a href={`/`}>Email Me</a></div> */}
        </div>
      </div>

      <div className="overlay"></div>
    </Layout>
  )
}

export async function getServerSideProps() {

  const [yearsRes, subjectsRes, step1Res, step2Res, step3Res, step4Res, step5Res, step6Res, globalRes] = await Promise.all([
    fetchAPI("/years?populate=*"),
    fetchAPI("/subjects?populate=*"),
    fetchAPI("/step-1s?populate=*"),
    fetchAPI("/step-2s?populate=*"),
    fetchAPI("/step-3s?populate=*"),
    fetchAPI("/step-4s?populate=*"),
    fetchAPI("/step-5s?populate=*"),
    fetchAPI("/step-6s?populate=*"),
    fetchAPI("/global?populate=*"),
  ])


  return {
    props: {
      years: yearsRes.data,
      subjects: subjectsRes.data,
      step1: step1Res.data,
      step2: step2Res.data,
      step3: step3Res.data,
      step4: step4Res.data,
      step5: step5Res.data,
      step6: step6Res.data,
      global: globalRes.data,
    }
  }
}

export default Home
