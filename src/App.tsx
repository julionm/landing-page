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

const ITEMS = [
  {
    text: "experiences",
    target: "experiencesSection",
    component: ExperiencesPage
  },
  {
    text: "projects",
    target: "projectsSection",
    component: ProjectsPage
  },
  {
    text: "updates",
    target: "updatesSection",
    component: Updates
  },
  {
    text: "achievments",
    target: "achievmentsSection",
    component: AchievmentsPage
  }
]

function App() {

  return (
    <main className="">
      <Header items={ITEMS} />
      <HomePage />
      {
        ITEMS.map(item => (
          <item.component key={item.text} />
        ))
      }
      <MetricsPage />
      <Footer />
      <ThanksMessage />
    </main>
  )
}

export default App
