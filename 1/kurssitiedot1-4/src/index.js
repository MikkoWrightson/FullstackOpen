import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  console.log("App")


  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )

}

const Header = (props) => {
  //console.log("Header, ", props)
  return (<h1>{props.course}</h1>)

}

const Part = (props) => {
  console.log("Part, ", props)
  return(
    <p>
    {props.part[1].name} {props.part[1].exercises}
    </p>
  )
}


const Content = (props) => {
    //console.log("Content, ", props)
    return(<>
    <Part part={props.part}/>
    <Part part={props.part}/>
    <Part part={props.part}/>
    </>)
  }



const Total = (props) => {
  //console.log("Total, ", props)
  return(<p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>)
}

ReactDOM.render(<App />, document.getElementById('root'))