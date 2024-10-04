import { HomePage } from "components/Home"
import { ExperiencesPage } from "components/Experiences";
import { MemoriesPage } from "components/Memories";
import { Updates } from "components/Updates";
import './App.css';

function App() {

  return (
    <main className="">
      <HomePage />
      <ExperiencesPage />
      <Updates />
      <MemoriesPage />
    </main>
  )
}

export default App
