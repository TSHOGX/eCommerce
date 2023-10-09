export default function About() {
  return (
    <div className = "about">
      <div className="body">
      <div className="developers">
        <div className="text-wrapper">Developers</div>
        <div className="frame">
          <div className="developer">
            <div className="profile">
              <img className="image" alt="Image" src="https://avatars.githubusercontent.com/u/46259514?s=64&v=4" />
              <div className="info">
                <div className="div">Shiwen Han</div>
                <div className="text-wrapper-2">han.1970@buckeyemail.osu.edu</div>
              </div>
            </div>
            <div className="text-wrapper-3">CFO, MSCSE at Ohio State University.</div>
          </div>
          <div className="developer">
            <div className="profile">
              <img className="image" alt="Image" src="https://avatars.githubusercontent.com/u/13644713?v=4" />
              <div className="info">
                <div className="div">Will Keiser</div>
                <div className="text-wrapper-2">keiser.70@buckeyemail.osu.edu</div>
              </div>
            </div>
            <div className="text-wrapper-3">VP of Engineering. 4 years of education at The Ohio State University, and 1 year of experience with J.P. Morgan Chase.</div>
          </div>
          <div className="developer">
            <div className="profile">
              <img className="image rounded-xl" alt="Image" src="https://avatars.githubusercontent.com/u/91095404?s=96&v=4" />
              <div className="info">
                <div className="div">Hailie Payne</div>
                <div className="text-wrapper-2">payne.733@buckeyemail.osu.edu</div>
              </div>
            </div>
            <div className="text-wrapper-3"> CTO. BS in Computer Science & Engineering, The Ohio State University. SEP Intern at J.P. Morgan Chase & Co., June 2022 - Present.</div>
          </div>
          <div className="developer">
            <div className="profile">
              <img className="image" alt="Image" src="INSERT LINK TO IMAGE HERE" />
              <div className="info">
                <div className="div">Name</div>
                <div className="text-wrapper-2">email@buckeyemail.osu.edu</div>
              </div>
            </div>
            <div className="text-wrapper-3">Description</div>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="text-wrapper">About Us</div>
        <div className="text-wrapper-4"> An E-Commerce Website designed for CSE 5234. Data used for the project is scraped from Nike Inc, so our website name is Nikia. This website was created using NextJS.</div>
      </div>
    </div>
    </div>    
  );
};