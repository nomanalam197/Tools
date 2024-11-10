import React, { useState } from 'react'
export default function Convert() {
  const [myText, setMyText] = useState('');

  //onchange event
  const Onchange = (event)=>{
    setMyText(event.target.value);
  }

  // 1 lower case
  const LowerCase=()=>{
    let newText = myText.toLowerCase();
    setMyText(newText);
  }

  // 2. Upper case
  const UpperCase=()=>{
    let newText = myText.toUpperCase();
    setMyText(newText);
  }

  // 3. Capitalize
  const Capitalize=()=>{
    let newText = myText.replace(/(?:^|\s)\S/g, function(a){return a.toUpperCase();});
    setMyText(newText);
  }

  // 4. Camel Case
  const CamelCase=()=>{
    let newText = myText.replace(/(?:^|\s)\S/g, function(a){return a.toUpperCase();});
    let removedSpacesText = newText.replace(/ /g, "");
    setMyText(removedSpacesText);
  }

  // 5. Reverse
  const Reverse=()=>{
    let newText = myText.split(' ').reverse().join(' ');
    setMyText(newText);
  }

  // 6. Clear
  const Clear=()=>{
    setMyText('');
  }


  return (
    <div className='container mt-5'>

      <h1 className='text-center heading mt-5'>Convert Case</h1>
      <div className='line'>  </div>

      <form action="/">
        <div className="mb-3 mt-5">
          <textarea className="form-control" id="exampleFormControlTextarea1" onChange={Onchange} value={myText} rows="8"></textarea>

        </div>
        <div className='b d-flex justify-content-center mt-5'>
            <button type="button" className="btn btn-primary me-3" onClick={LowerCase}>Lower Case</button>
            <button type="button" className="btn btn-primary me-3" onClick={UpperCase}>UPPER CASE</button>
            <button type="button" className="btn btn-primary me-3" onClick={Capitalize}>Capitalize</button>
            <button type="button" className="btn btn-primary me-3" onClick={CamelCase}>Camel Case</button>
            <button type="button" className="btn btn-primary me-3" onClick={Reverse}>Reverse Sentence</button>
            <button type="button" className="btn btn-primary me-3" onClick={Clear}>Clear</button>
        </div>
      </form>

        <div className='mt-5'>
          <h1 className='text-center'>Calculate length of Word and Character</h1>
          <h1 className='text-center head'>{myText.length? myText.split(" ").length: 0} Word and {myText.length} Character</h1>
        </div>

    </div>
  )
}
