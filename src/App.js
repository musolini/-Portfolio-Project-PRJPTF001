import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles  from "react-particles-js";
function App() {
  return (
    <>
    <Particles
    params={{
      particles:{
        number:{
          value:40,
          density:{
            enable:true,
            volume_area:900,
          }
        },
        shape:{
          type:"star",
          stroke:{
            width:8,
            color:"#008000"
          }
        }

      }
    }}
    />
    <Navbar />
    <Header />
    </>
  );
}

export default App;
