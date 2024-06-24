import {PathFindingProvider} from "./context/PathFindingContext.tsx";
import {TileProvider} from "./context/TileContext.tsx";
import {SpeedProvider} from "./context/SpeedContext.tsx";

function App() {

  return (
      <PathFindingProvider>
          <TileProvider>
              <SpeedProvider>
          <h1 className="flex flex-col text-7xl text-center justify-center font-bold underline h-screen w-screen bg-blue-600">
              Hello world!
          </h1>
              </SpeedProvider>
          </TileProvider>
      </PathFindingProvider>
  )
}

export default App
