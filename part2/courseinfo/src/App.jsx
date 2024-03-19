import Course from './components/Course'


function App() {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          id: 1,
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          id: 2,
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          id: 3,
          name: 'State of a component',
          exercises: 14
        },
        {
          id: 4,
          name: 'The good stuff',
          exercises: 5
        }
      ]
    },
    {
      id: 2,
      name: 'Note.js',
      parts: [
        {
          id: 1,
          name: 'Routing',
          exercises: 3
        },
        {
          id: 2,
          name: 'Middleware',
          exercises: 7
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web Development Curriculum</h1>
    
      {courses.map(course => <Course course={course} />)}
    </>
  )
}

export default App