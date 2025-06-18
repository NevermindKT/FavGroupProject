import './CSS/MyCSS.css'
import BandInfo from "./modules/BandInfo.jsx";
import BandList from "./modules/BandList.jsx";
import AlbumCovers from "./modules/AlbumCovers.jsx";
import MusicPlayer from "./modules/MusicPlayer.jsx";

function App() {

  return (
      <>
          <BandInfo />
          <BandList />
          <AlbumCovers />
          <MusicPlayer />
      </>
  )
}

export default App
