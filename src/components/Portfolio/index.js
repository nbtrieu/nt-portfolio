import { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Meet-and-Treats',
      skills: 'MERN / Node / React / MongoDB / Graphql',
      link: 'https://meet-n-treats.herokuapp.com/',
      repo: 'https://github.com/nbtrieu/meet-n-treats',
      description: 'Social Media App for Pet Parents & Pet Lovers: Users can create an account, add information about their pet, and post pictures of their pet with caption. Users can also view individual posts from their homepage and leave comments, view their own profile and their pet profile as well as their posts in the Profiles page, and add a bio and/or an avatar, and change their username.'
    },
    {
      name: 'pokemon-battle-simulator',
      skills: 'JavaScript / HTML / FoundationCSS',
      link: 'https://wangbrian26.github.io/Pokemon-Fusion-Battle-Simulator/',
      repo: 'https://github.com/wangbrian26/Pokemon-Fusion-Battle-Simulator',
      description: 'Simulation Probability Game App: Players select a fanmade pokemon (also known as fakemon) as their character, set the stats for their character, and go on to defeat as many fusion pokemon as possible to accumulate points. Players can choose between 4 battle actions with each action having its own pros & cons and probability of success. Players can save their score by submitting their nickname to the high score board and then choose to play again or clear scores.'
    },
    {
      name: 'SEND-MOODS',
      skills: 'Node / Handlebars / Sequelize',
      link: 'https://shrouded-eyrie-81227.herokuapp.com/',
      repo: 'https://github.com/BryantTrinh/Mood-App-Send-Moods',
      description: "Social Mood Journaling App: Users can create an account and create posts to journal their thoughts and select from a range of moods that convey how they are  feeling. Users can enhance their posts by addings songs or playlists from Spotify, view others’ moods through a feed timeline, filter posts associated with any of the five key emotions from both the feed and their profile page, save posts from their feed, and edit/delete their own posts."
    },
    {
      name: 'weather-dashboard',
      skills: 'JavaScript / HTML / CSS',
      link: 'https://nbtrieu.github.io/weather-dashboard/',
      repo: 'https://github.com/nbtrieu/weather-dashboard',
      description: 'This weather dashboard application was built to allow users to search for any city in the US and view the weather forecast for today and the next 5 days. To use this application, type in the name of any US city and click the Search button. The search history will be displayed on the left side bar. The user can click on any of their past searches to review the weather conditions of that city again.'
    },
    {
      name: 'tech-blog',
      skills: 'Express / Handlebars / Sequelize',
      link: 'https://shrouded-falls-58011.herokuapp.com/',
      repo: 'https://github.com/nbtrieu/tech-blog',
      description: "This CMS-style blog is built for developers to publish their blog posts and comment on other developers’ posts as well. Anyone can view existing blog posts on the homepage without signing up or logging in. But to make your own blog posts or leave a comment, you must sign up and log in. Users can then make blog posts, leave comments on other users' blog posts, as well as add, update, or delete comments and blog posts."
    },
    {
      name: 'note-taker',
      skills: 'Express / Handlebars / Sequelize',
      link: 'https://nbtrieu-note-taker.herokuapp.com/',
      repo: 'https://github.com/nbtrieu/note-taker',
      description: 'This application is built for users to write, save and delete notes as needed so that they can organize their thoughts and keep track of tasks to complete. Users can create notes with title and text description, save and view the notes as well as delete any notes by clicking on the Trash icon.'
    },
  ]);

  return (
    <div>
      <div className="flex-row mt-5">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;