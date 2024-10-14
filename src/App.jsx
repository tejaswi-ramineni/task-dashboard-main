import Mainbar from "./Components/Mainbar"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
function App() {
  return (
    <div className="App w-screen h-screen p-2">
      <Navbar/>
      <div className="databar flex p-4" style={{height:"95%"}}>
      <Sidebar></Sidebar>
      <Mainbar></Mainbar>
      </div>
    </div>
  )
}

export default App
