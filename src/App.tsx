import { HomePage } from "components/Home"
import { ExperiencesPage } from "components/Experiences";
import { Updates } from "components/Updates";
import { ProjectsPage } from "components/Projects";
import { Footer } from "components/Footer";
import { MetricsPage } from "components/Metrics";
import { AchievmentsPage } from "components/Achievments";
import { ThanksMessage } from "components/ThanksMessage";
import { Header } from "components/Header";
import './App.css';

function App() {

  return (
    <main className="">
      <Header />
      <HomePage />
      <ExperiencesPage />
      <ProjectsPage />
      <Updates />
      <AchievmentsPage />
      <MetricsPage />
      <Footer />
      <ThanksMessage />
    </main>
  )
}

export default App
