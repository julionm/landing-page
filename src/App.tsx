import { HomePage } from "components/Home"
import { PastExperiencesPage } from "components/PastExperiences";
import { ProjectsPage } from "components/Projects";
import './App.css';
import { Updates } from "components/Updates";

function App() {

  return (
    <main className="">
      <HomePage />
      <PastExperiencesPage />
      <ProjectsPage />
      <Updates />
    </main>
  )
}

export default App
