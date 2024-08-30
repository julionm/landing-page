import { HomePage } from "./components/Home"
import './App.css';
import { PastExperiencesPage } from "components/PastExperiences";
import { Header } from "components/Header";

function App() {

  return (
    <main className="">
      <Header />
      <HomePage />
      <PastExperiencesPage />
    </main>
  )
}

export default App
