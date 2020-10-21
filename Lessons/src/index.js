import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Greeting = (props) => {
  return (
    <div>
      <p>My name is {props.name} and I am {props.age} </p>
    </div>
  )
}

const MiddleFo = () => {
  const now = new Date();
  return (
    <div>
      <p>The Date is: {now.toString()}</p>
    </div>
  )
}

const KennyWhatDaHailYouDoingHereDawg = () => {
  const nowDate = Date.now();
  return (
    <div>
      <p>The Date Now Is: {nowDate.toString()}</p>
    </div>
  )
} 

const Footer = () => {
  return(
    <div>
      <p>Billy 2020 G Clan</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  const name1 = 'Billy'
  const age1 = 'Too Fucking Old'

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="lizzie" age={26 + 10} />
      <Hello name={name} age={age} />
      <MiddleFo />
      <Greeting name="Kenny" age={age1}/>
      <Footer />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))