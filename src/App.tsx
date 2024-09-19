import { HomePage } from "components/Home"
import { PastExperiencesPage } from "components/PastExperiences";
import { ProjectsPage } from "components/Projects";
import './App.css';

function App() {

  return (
    <main className="">
      <HomePage />
      <PastExperiencesPage />
      <ProjectsPage />
    </main>
  )
}

export default App
