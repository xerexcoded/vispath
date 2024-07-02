import {PathFindingProvider} from "./context/PathFindingContext.tsx";
import {TileProvider} from "./context/TileContext.tsx";
import {SpeedProvider} from "./context/SpeedContext.tsx";
import {Grid} from "./components/Grid.tsx";

function App() {

  return (
      <PathFindingProvider>
          <TileProvider>
              <SpeedProvider>
          <div className="flex flex-col h-screen w-screen">
              <Grid/>
          </div>
              </SpeedProvider>
          </TileProvider>
      </PathFindingProvider>
  )
}

export default App
