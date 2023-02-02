import profileImage from '../../assets/profile/profile.jpeg';

function About() {
  return (
    <div className='flex-row'>
      <div className=''>
        <img src={profileImage} alt='my profile picture' width='200'></img>
      </div>
      <div>
        <p>I graduated from UCI in 2020 with a B.S. in Biology/Education and a teaching credential in Biological Sciences from the UCI CalTeach program. I worked full-time as a teacher for the last 2 years; first at a middle school teaching Integrated Sciences and then at a high school teaching Environmental Science. I loved teaching kids but now I am looking to pivot my career into the education technology and/or environmental science fields.</p>
      </div>
    </div>
  );
};
// *BUG: Bootstrap not working with React???

export default About;