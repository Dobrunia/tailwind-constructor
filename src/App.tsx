import "./App.css";
import { RightAdminPanel } from "./components/RightAdminPanel";
import { SelectionWindow } from "./components/SelectionWindow";

function App() {
  return (
    <section className="min-h-screen">
      <div className="absolute right-0 top-2/4 translate-y-[-50%] flex flex-row items-center justify-center">
        <SelectionWindow content="Header"/>
        <RightAdminPanel />
      </div>
    </section>
  );
}

export default App;
