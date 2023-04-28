import React, {useState} from "react";
import styled from "styled-components";



function App() {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const [myYear, setMyYear] = useState('')
  const [myMonth, setMyMonth] = useState('')
  const [myDay, setMyDay] = useState('')
  const [isClicked, setIsClick] = useState(false); 

  function handleYearChange(event) {
    if(myMonth > month){
        setMyYear(year - event.target.value - 1)
    } else {
        setMyYear(year - event.target.value)
    }
  }
  function handleMonthChange(event) {
    const totalMonths = 12
    const calcMonths = event.target.value - +month
    setMyMonth(totalMonths - calcMonths)
  }
  function handleDayChange(event) {
    // const calcDays = +date - event.target.value 
    //    setMyDay(calcDays)
  }
  

function daysInThisMonth() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
}

function handleClick(){
  setIsClick(!isClicked)
//   console.log(myYear)
  console.log(myMonth)
console.log(daysInThisMonth() - +date + +myDay)
console.log(daysInThisMonth())


}



  return (
    <AgeCalculatorContainer>
       
        <InputContainer>
          <MyInput>
              <label>Year</label>
              <input onChange={handleYearChange} name="Year" type="number" />
          </MyInput>
          <MyInput>
              <label>Month</label>
              <input onChange={handleMonthChange} name="Month" type="number" />
          </MyInput>
          <MyInput>
              <label>Day</label>
              <input onChange={handleDayChange} name="Day" type="number" />
          </MyInput>
        </InputContainer>
          <button onClick={handleClick}name="submit" type="submit">Submit</button>
        

        {/* <h1>{isClicked ? myYear : ""}</h1> */}
        <h1>{myMonth < month ? myYear : myYear - 1} Years</h1>
        <h1>{myMonth} Months</h1>

    </AgeCalculatorContainer>
  );
}

export default App;

const AgeCalculatorContainer = styled.div``

const InputContainer = styled.div`
  display: flex;
`

const MyInput = styled.div`
  display: flex;
  flex-direction: column;

  input {
    max-width: 75px;
    height: 30px;
  }
`