import { HomePage } from "components/Home"
import { PastExperiencesPage } from "components/PastExperiences";
import { Header } from "components/Header";
import { ProjectsPage } from "components/Projects";
import './App.css';

function App() {

  return (
    <main className="">
      <Header />
      <HomePage />
      <PastExperiencesPage />
      <ProjectsPage />
    </main>
  )
}

export default App
