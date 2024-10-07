import { HomePage } from "components/Home"
import { ExperiencesPage } from "components/Experiences";
import { MemoriesPage } from "components/Memories";
import { Updates } from "components/Updates";
import { ProjectsPage } from "components/Projects";
import './App.css';

function App() {

  return (
    <main className="">
      <HomePage />
      <ExperiencesPage />
      <ProjectsPage />
      <Updates />
      <MemoriesPage />
    </main>
  )
}

export default App
