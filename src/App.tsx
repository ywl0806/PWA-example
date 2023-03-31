import { AddImage } from "./components/addImage";
import { Header } from "./components/layouts/header";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="z-auto min-h-[calc(100vh-680px)] w-full">
        <AddImage />
      </main>
    </div>
  );
}

export default App;
