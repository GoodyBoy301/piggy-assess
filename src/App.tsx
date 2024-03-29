import "./reset.scss"
import "./App.scss"
import Nav from "./components/Nav"
import Header from "./components/Header"
import HomeSave from "./components/HomeSave"
import HomeInvest from "./components/HomeInvest"
import HomeYou from "./components/HomeYou"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Nav />
      <Header />
      <HomeSave />
      <HomeInvest />
      <HomeYou />
      <Footer />
    </>
  )
}

export default App
