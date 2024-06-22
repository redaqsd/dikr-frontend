import "./app.css"
import DikrContextProvider from "./context/context"
import HomeSection from "./components/home"
import MorningSection from "./components/morning"
import EveningSection from "./components/evening"
import AfterSalatSection from "./components/after-salat"
import SleepSection from "./components/sleep"
import GuidanceSection from "./components/guidance"
import HealthSection from "./components/health"
import WealthSection from "./components/wealth"
import ParadiseSection from "./components/paradise"
import RepentingSection from "./components/repenting"
import FacilitationSection from "./components/facilitation"
import AfterAdanSection from "./components/after-adan"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"

function App() {
    return <DikrContextProvider>
        <Router>
            <Routes>
                <Route path="/" element = {<HomeSection />} />
                <Route path="/اذكار الصباح" element = {<MorningSection />} />
                <Route path="/اذكار المساء" element = {<EveningSection />} />
                <Route path="/اذكار ما بعد الصلاه" element = {<AfterSalatSection />} />
                <Route path="/اذكار النوم" element = {<SleepSection />} />
                <Route path="/ادعيه التثبيت" element = {<GuidanceSection />} />
                <Route path="/ادعيه الصحه" element = {<HealthSection />} />
                <Route path="/ادعيه الرزق" element = {<WealthSection />} />
                <Route path="/اذكار حسن الخاتمه" element = {<ParadiseSection />} />
                <Route path="/ادعيه الاستغفار" element = {<RepentingSection />} />
                <Route path="/ادعيه التيسير" element = {<FacilitationSection />} />
                <Route path="/اذكار ما بعد الاذان" element = {<AfterAdanSection />} />
            </Routes>
        </Router>
    </DikrContextProvider>
}

export default App
