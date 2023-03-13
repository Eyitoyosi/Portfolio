

const Home = () => {
  function handleDownload() {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/file/d/1MWlhxvAeA3Za3HEybFPfKfES8kJlL1V3/view?usp=share_link';
    downloadLink.download = 'ayo-cv.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

    return ( 
        <div className="home-container">
            <div className="home-intro">
              <h2>Hey :), I'm Ayotunde Alabi</h2>
              <h3>I am a react frontend developer with a particular interest in making things
                  simpler by creating, symplifying and bringing to life futuristic ideas for websites, one step at a time.
              </h3>
              <div>
                <button className="cv-button" onClick={handleDownload}>Download CV</button>
              </div>
            </div>
            <div className="hero--section">
                <img src="https://react-tailwindcss-portfolio.netlify.app/static/media/developer.ef097afb.svg" alt="hero" className="hero"/>
            </div>
        </div>
     );
}
 
export default Home;












