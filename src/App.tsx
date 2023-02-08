import { Routes, Route } from "react-router-dom";
import EmailSent from "./components/EmailSent";
import Main from "./components/Main";

function App() {
  return (
    <>
      <main className="flex flex-col items-center justify-center text-center lg:text-start px-6 py-10 gap-20 lg:px-20">
        <Routes>
          <Route element={<Main />} />
          <Route path="/message-sent" element={<EmailSent />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
