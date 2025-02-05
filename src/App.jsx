import Header from "./components/Header";
import Course from "./components/Course";
import { courses } from "./data";
import "./css/Course.css";
const App = () => {
  return (
    <div>
      <Header />
      <div className="coruse-main">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default App;
