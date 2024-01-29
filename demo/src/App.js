import WelcomeMessage from "./components/welcome";
import StudentInfo from "./components/student-info";
import Skills from './components/skills'; // Import the Skills component


function App() {
return (
<div className="App">
<div class="container-fluid">
<WelcomeMessage/>
<StudentInfo/>
<Skills />
</div>
</div>
);
}
export default App;