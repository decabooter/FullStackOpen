const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}. You are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const boyname = 'Patrick'
  const girlage = 15
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Katie' age={girlage}/>
      <Hello name='Maddy' age={girlage}/>
      <Hello name={boyname} age='18'/>
    </div>
  )
}

export default App
