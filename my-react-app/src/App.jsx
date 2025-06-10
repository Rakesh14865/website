import Card from "./card.jsx";
import ANXIETY from "./assets/ANXIETY.jpg"
import Stress from "./assets/Stress.jpg"
// import Students from "./students.jsx";
function App() {
 return(<>
        {/* <div>
              <Students name="John" age={20} isStudent = {true} />
              <Students name="Doe" age={30} isStudent = {false} />
        </div> */}
        <div> 
              <Card name="Anxiety" about=" This is Anxiety" image={ANXIETY} />
              <Card name="Stress" about=" This is Stress" image ={Stress} />
        </div>
 </>);
}

export default App
