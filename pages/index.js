import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import { fetchAPI } from "../lib/api"
import Image from "../components/image"

const Home = ({ step1 }) => {
  function getStep1(event) {
    event.target.classList.toggle('active');
    document.getElementById("active-1").appendChild(event.target);
  }
  
  function step1Next(){
    var input, current, selected;
    current = window.location.search;
    selected = document.getElementById("active-1");
    let active = selected.getElementsByClassName('active');
    for (i = 0; i < active.length; i++) {
      input += `${active[i].innerText} `;
      
    }
    window.location.href = current +  '&step1=' + input.replaceAll('undefined', '').replaceAll('...', '');
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
    for (i = 0; i < active.length; i++) {
      input += `${active[i].innerText} `;
      
    }
    window.location.href = current + '&step2=' + input.replaceAll('undefined', '').replaceAll('...', '');
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
    for (i = 0; i < active.length; i++) {
      input += `${active[i].innerText} `;
      
    }
    window.location.href = current + '&step3=' + input.replaceAll('undefined', '').replaceAll('...', '');
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
    for (i = 0; i < active.length; i++) {
      input += `${active[i].innerText} `;
      
    }
    window.location.href = current + '&step4=' + input.replaceAll('undefined', '').replaceAll('...', '');
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
    for (i = 0; i < active.length; i++) {
      input += `${active[i].innerText} `;
      
    }
    window.location.href = current + '&step5=' + input.replaceAll('undefined', '').replaceAll('...', '');
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
    for (i = 0; i < active.length; i++) {
      input += `${active[i].innerText} `;
      
    }
    window.location.href = current + '&step6=' + input.replaceAll('undefined', '').replaceAll('...', '');
  }

  console.log(step1)
  return (
    <Layout>
      <div id="topbar"></div>

      <div id="landing-page" className="wrapper">
        <div className="canvas">
          <h2 className="note">Compose your learning goal</h2>
          <div className="line"></div>
          <a className="next" id="how-link" href="?start=true">Start</a>
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
              <li className="ball" onClick={getStep1}>{item1.attributes.Slug}</li>
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
          <li className="ball" onClick={getStep2}>website</li>
          <li className="ball" onClick={getStep2}>web-app</li>
          <li className="ball" onClick={getStep2}>code</li>
          <li className="ball" onClick={getStep2}>document</li>
          <li className="ball" onClick={getStep2}>prototype</li>
          <li className="ball" onClick={getStep2}>experiment</li>
          <li className="ball" onClick={getStep2}>presentation</li>
          <li className="ball" onClick={getStep2}>audio fragment</li>
          <li className="ball" onClick={getStep2}>book</li>
          <li className="ball" onClick={getStep2}>image</li>
          <li className="ball" onClick={getStep2}>research</li>
          <li className="ball" onClick={getStep2}>documentation</li>
          <li className="ball" onClick={getStep2}>project</li>
          <li className="ball" onClick={getStep2}>visualization</li>
          <li className="ball" onClick={getStep2}>process</li>
          <li className="ball" onClick={getStep2}>interaction</li>
          <li className="ball" onClick={getStep2}>dissemination</li>
          <li className="ball" onClick={getStep2}>animation</li>
          <li className="ball" onClick={getStep2}>film</li>
          <li className="ball" onClick={getStep2}>model</li>
          <li className="ball" onClick={getStep2}>essay</li>
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
          <li className="ball" onClick={getStep3}>knowledge</li>
          <li className="ball" onClick={getStep3}>understanding</li>
          <li className="ball" onClick={getStep3}>ability</li>
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
          <li className="ball" onClick={getStep4}>code</li>
          <li className="ball" onClick={getStep4}>write</li>
          <li className="ball" onClick={getStep4}>animate</li>
          <li className="ball" onClick={getStep4}>prototype</li>
          <li className="ball" onClick={getStep4}>research</li>
          <li className="ball" onClick={getStep4}>analyse</li>
          <li className="ball" onClick={getStep4}>typeset</li>
          <li className="ball" onClick={getStep4}>reflect</li>
          <li className="ball" onClick={getStep4}>develop</li>
          <li className="ball" onClick={getStep4}>plan</li>
          <li className="ball" onClick={getStep4}>interact</li>
          <li className="ball" onClick={getStep4}>interpret</li>
          <li className="ball" onClick={getStep4}>plan</li>
          <li className="ball" onClick={getStep4}>explore</li>
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
          <li className="ball" onClick={getStep5}>text</li>
          <li className="ball" onClick={getStep5}>information</li>
          <li className="ball" onClick={getStep5}>content</li>
          <li className="ball" onClick={getStep5}>type</li>
          <li className="ball" onClick={getStep5}>layout</li>
          <li className="ball" onClick={getStep5}>html</li>
          <li className="ball" onClick={getStep5}>css</li>
          <li className="ball" onClick={getStep5}>php</li>
          <li className="ball" onClick={getStep5}>illustrator</li>
          <li className="ball" onClick={getStep5}>photoshop</li>
          <li className="ball" onClick={getStep5}>indesign</li>
          <li className="ball" onClick={getStep5}>cinema4d</li>
          <li className="ball" onClick={getStep5}>blender</li>
        </div>
      </div> 

      {/* <!-- Step 6 --> */}
      <div id="step6" className="wrapper">

        <div className="canvas">
          <h2 className="note">Define a base level for acceptable performance of this <span id="insert3"></span></h2>
          <div id="active-6">
            <span className="ball active" id="step6Input" role="textbox" contentEditable>...</span>
          </div>
          <div className="line"></div>
          <div className="next" id="link6" onClick={step6Next}>Next</div>
        </div>

        <div className="balls" id="balls">
          <li className="ball" onClick={getStep6}>extensive</li>
          <li className="ball" onClick={getStep6}>significant</li>
          <li className="ball" onClick={getStep6}>confident</li>
          <li className="ball" onClick={getStep6}>sound</li>
          <li className="ball" onClick={getStep6}>adequate</li>
        </div>
      </div> 

      <div id="result">
        <h2 contentEditable id="final-text"></h2>
      </div>

      <div className="overlay"></div>
    </Layout>
  )
}

export async function getServerSideProps() {

  const [step1Res] = await Promise.all([
    fetchAPI("/step-1s?populate=*"),
  ])


  return {
    props: {
      step1: step1Res.data,
    }
  }
}

export default Home
