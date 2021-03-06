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
      <Content part1={parts[]} part2={parts[]} part3={parts[]}/>
      <Total part1={parts[1]} part2={parts[1]} part3={parts[1]}/>
    </div>
  )

}

const Header = (props) => {
  console.log("Header, ", props)
  return (<h1>{props.course}</h1>)

}

const Part = (props) => {
  console.log("Part, ", props)
  return(
    <p>
    {props.part} {props.exercises}
    </p>
  )
}









const Content = (props) => {
    console.log("Content, ", props)
    return(<>
    <Part part={props.part1.name} exercises={props.part1.exercises}/>
    <Part part={props.part2.name} exercises={props.part2.exercises}/>
    <Part part={props.part3.name} exercises={props.part3.exercises}/>
    </>)
  }



const Total = (props) => {
  console.log("Total, ", props)
  return(<p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>)
}

ReactDOM.render(<App />, document.getElementById('root'))