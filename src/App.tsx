import { HomePage } from "components/Home"
import { ExperiencesPage } from "components/Experiences";
import { Updates } from "components/Updates";
import { ProjectsPage } from "components/Projects";
import { Footer } from "components/Footer";
import { MetricsPage } from "components/Metrics";
import './App.css';

function App() {

  return (
    <main className="">
      <HomePage />
      <ExperiencesPage />
      <ProjectsPage />
      <Updates />
      <MetricsPage />
      <Footer />
    </main>
  )
}

export default App
