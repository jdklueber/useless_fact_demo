import {useState} from "react";
import UselessFactConfigurator from "./components/UselessFactConfigurator";
import DisplayFact from "./components/DisplayFact";

function App() {
    const [language, setLanguage] = useState("en")

  return (
    <div className="p-10">
        <UselessFactConfigurator language={language} setLanguage={setLanguage}/>
        <DisplayFact language={language} />
    </div>
  );
}

export default App;
