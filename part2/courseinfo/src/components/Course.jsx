const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <strong>Number of exercises {sum}</strong>

const Part = ({ part }) => 
  <p key={part.id}>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => <Part part={part} />)}     
  </>

const Course = ({ course }) => {
var sum = course.parts.reduce((sum, part) => sum += part.exercises, 0)

return(
   <div key={course.id}>
     {console.log("Course name", course.name)}
     <Header course={course.name} />
     <Content parts={course.parts} />
     <Total sum={sum} />
   </div>
)
}

export default Course