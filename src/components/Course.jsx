

const Total = ({ parts }) => {
    const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
    return <p><strong>total of {totalExercises} exercises</strong></p>;
};

const Header = ({ course }) => <h3>{course.name}</h3>;

const Content = ({ course }) => (
    <>
        {course.parts.map(part => (
            <Part key={part.id} part={part} />
        ))}
    </>
);

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
);

const Course = ({ course }) => (
    <div>
        <Header course={course} />
        <Content course={course} />
        <Total parts={course.parts} />
    </div>
);

export default Course;
