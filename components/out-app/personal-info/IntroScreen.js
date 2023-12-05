import CompletionScreen from "@/components/out-app/personal-info/CompletionScreen";
import {Button} from "react-bootstrap";


const IntroScreen = () => (
  <div className="intro-screen">
    <p>Nur noch ein paar Fragen, bevor wir loslegen können. Du kannst diese überspringen und später bearbeiten.</p>
    <Button onClick={() => setShowIntroScreen(false)}>Fragen starten</Button>
  </div>
);

export default IntroScreen;