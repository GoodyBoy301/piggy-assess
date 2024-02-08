import "./reset.scss"
import "./App.scss"
import Nav from "./components/Nav"
import Header from "./components/Header"
import HomeSave from "./components/HomeSave"
import HomeInvest from "./components/HomeInvest"

function App() {
  return (
    <>
      <Nav />
      <Header />
      <HomeSave />
      <HomeInvest />
    </>
  )
}

export default App
