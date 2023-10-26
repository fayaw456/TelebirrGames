import './style.css';
const Home = () => {
    return(
        <div>
        <header>
          <button>Back</button>
          <input type="text" placeholder="Search" />
        </header>
        <div className="game1">
            <h2>Recommended For You</h2>
        </div>
        <div className="advertisment-box">
          {/* Add your video or GIF element here */}
          {/* For example: */}
          <video src="/path/to/video.mp4" autoPlay loop controls />
        </div>
        <div className="game2">
            <h2>Others</h2>
            <div className="container">
            <div className ="card"></div>
            <div className ="card"></div>
            <div className ="card"></div>
            <div className ="card"></div>
            <div className ="card"></div>
            <div className ="card"></div>
            </div>
        </div>

      </div>
    )
}
export default Home;