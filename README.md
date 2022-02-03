<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://featherblog.herokuapp.com/">
    <p  align="center">
        <img src="./public/assets/logo.png" alt="Logo" width="auto" height="80">
    </p>
  </a>

<h3 align="center">Feather: A Markdown blog app</h3>

  <p align="center">
    Where Ideas Come Together
    <br />
    <br />
    <a href="https://featherblog.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/outoflaksh/feather-blog/issues">Report Bug</a>
    ·
    <a href="https://github.com/outoflaksh/feather-blog/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Feather Landing Page][product-screenshot]](https://featherblog.herokuapp.com/)
<b>
Feather is a fully-functioning blog web application that supports Markdown and also implements a complete user model with custom profile pages, dynamic post routes, and username+password based auth-flow.
<br />
 
Every user can write a blog post and additionally provide a title, subtitle, and a cover image to go with the content. They can also delete their posts from their profile page. The blog supports Markdown and hence all the text formatting such as headings, subheadings, lists, links, bold/italics also work.
</b>
<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/)
* [MongoDB (Atlas)](https://www.mongodb.com/atlas/database)
* [Passport.js](https://www.passportjs.org/)
* [CSS3](https://www.w3.org/Style/CSS/Overview.en.html)

#### Additionally:
* [EJS Templating](https://ejs.co/)
* [Marked.js](https://marked.js.org/)

#### Deployment:
* [Heroku](https://www.heroku.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/outoflaksh/feather-blog.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter a MongoDB connection string in a `.env` file
   ```
   MONGO_URI=<your connection string (Atlas or localhost)>
   ```
4. Start the development server by executing:
   ```sh
   npm run devStart
   ```
    

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Lakshya Malik - [IG: @outoflaksh](https://instagram.com/outoflaksh)

Project Link: [https://github.com/outoflaksh/feather-blog](https://github.com/outoflaksh/feather-blog)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-url]: https://linkedin.com/in/lakshya-malik
[product-screenshot]: ./public/assets/img/home-ss.png
