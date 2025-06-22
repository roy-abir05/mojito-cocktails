import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="flex-center h-screen text-indigo-300 text-9xl">Hello GSAP!</div>
  );
}

export default App;
