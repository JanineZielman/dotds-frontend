window.addEventListener("load", (event) => {
  document.getElementById('step0').style.visibility = 'hidden';
  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'none';
  document.getElementById('step4').style.display = 'none';
  document.getElementById('step5').style.display = 'none';
  document.getElementById('step6').style.display = 'none';

  document.getElementById('result').style.display = 'none';

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const start = urlParams.get('start')
  const step0 = urlParams.get('step0')
  const step01 = urlParams.get('step01')
  const step1 = urlParams.get('step1')
  const step2 = urlParams.get('step2')
  const step3 = urlParams.get('step3')
  const step4 = urlParams.get('step4')
  const step5 = urlParams.get('step5')
  const step6 = urlParams.get('step6')


  const subjectIds = urlParams.get('subjectIds')
  const yearIds = urlParams.get('yearIds')
  const step1Ids = urlParams.get('step1Ids')
  const step2Ids = urlParams.get('step2Ids')
  const step3Ids = urlParams.get('step3Ids')
  const step4Ids = urlParams.get('step4Ids')
  const step5Ids = urlParams.get('step5Ids')
  const step6Ids = urlParams.get('step6Ids')

  let final;

  if(start){
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('step0').style.visibility = 'visible';
  }

  if (step0){
    document.getElementById('step0').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
  }
  
  if(step1){
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${step1}`;
  }

  if(step2){
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${step1} • ${step2}`;
  }

  if(step3){
    document.getElementById('step3').style.display = 'none';
    document.getElementById('step4').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${step1} • ${step2} • ${step3}`;
  }

  if(step4){
    document.getElementById('step4').style.display = 'none';
    document.getElementById('step5').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${step1} • ${step2} • ${step3} • ${step4}`;
    document.getElementById('insert3').innerText = step3;
  }

  if(step5){
    document.getElementById('step5').style.display = 'none';
    document.getElementById('step6').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${step1} • ${step2} • ${step3} • ${step4} • ${step5}`;
  }

  if(step6){
    document.getElementById('step6').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('topbar').style.display = 'none';
    final = `create a grammatically correct sentence using the following words as a base: "At the end of this assignment, students will be able to ${step1} a(n) ${step2}, demonstrating ${step6} ${step3} of ${step4}ing through ${step5}."`
    // document.getElementById('final-text').innerText = final
  }


  if(final){

    document.getElementById('final-text').innerText = "loading..."

    const data = JSON.stringify({
      "max_tokens": 512,
      "model": "chat-sophos-1",
      "n": 1,
      "source_lang": "en",
      "target_lang": "en",
      "temperature": 0.65,
      "text": final
    });
    
    const xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        document.getElementById('final-text').innerText = JSON.parse(this.responseText).data.outputs?.[0]?.text

        fetch('https://cms.didactic-syntax.org/api/results?populate=*', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              goal: JSON.parse(this.responseText).data.outputs?.[0]?.text,
              years: yearIds.split(',').map(Number),
              subjects: subjectIds.split(',').map(Number),
              step_1s: step1Ids.split(',').map(Number).filter(function(number) {
                return number > 0;
              }),
              step_2s: step2Ids.split(',').map(Number).filter(function(number) {
                return number > 0;
              }),
              step_3s: step3Ids.split(',').map(Number).filter(function(number) {
                return number > 0;
              }),
              step_4s: step4Ids.split(',').map(Number).filter(function(number) {
                return number > 0;
              }),
              step_5s: step5Ids.split(',').map(Number).filter(function(number) {
                return number > 0;
              }),
              step_6s: step6Ids.split(',').map(Number).filter(function(number) {
                return number > 0;
              })
            },
          }),
        })
          .then(response => response.json())
          .then(data => console.log(data));
      }
    });
    
    xhr.open("POST", "https://api.textcortex.com/v1/texts/completions");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer gAAAAABloT7yHMSb4yYsU9H8d2lp1zX3tmwwQwlrVoiyCR2r4-aLPzYzm8Crd0aiJAAjHSYT-CS6nvRVZvXDJYjxgFqgGygfyBvNjMi12fBvqeYbtlyNaOOWX_z4CvoTpmK00gvZlNmY");
    
    xhr.send(data);
  }


  
});