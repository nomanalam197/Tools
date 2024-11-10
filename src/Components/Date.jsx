import React, { useState } from 'react'

export default function Convert() {
  const [myDate1, setMyDate1] = useState('');
  const [myDate2, setMyDate2] = useState('');
  const [result, setResult] = useState('');

  //onchange event
  const Onchange1 = (event)=>{
    setMyDate1(event.target.value);
  }
  const Onchange2 = (event)=>{
    setMyDate2(event.target.value);
  }

  const GetDifference=()=>{

    let dateTwo = new Date(myDate2);
    let dateOne = new Date(myDate1);
    let time = Math.abs(dateTwo-dateOne);
    let days = Math.ceil(time / (1000*60*60*24));
    setResult(days);

  }


  return (
    <div className='container mt-5'>

      <h1 className='text-center heading mt-5 d'>Date Difference</h1>
      <div className='line'>  </div>

      <form action="/">
        <div className="mb-3 mt-5">
          {/* <textarea className="form-control" id="exampleFormControlTextarea1" onChange={Onchange} value={myText} rows="8"></textarea> */}
          <input type="date" className="form-control mb-2" id="exampleFormControlInput1" onChange={Onchange1} value={myDate1} rows="3"/>
          <input type="date" className="form-control" id="exampleFormControlInput1" onChange={Onchange2} value={myDate2} rows="3"/>
        </div>
        <div className='d-flex justify-content-center mt-5'>
            <button type="button" className="btn btn-primary me-3 d1" onClick={GetDifference}>Get Difference</button>
        </div>
      </form>

        <div className='mt-5 pb-5'>
          <h1 className='text-center'>Difference</h1>
          <h1 className='text-center head d1'>{result ? result:0} Days</h1>
        </div>

    </div>
  )
}
