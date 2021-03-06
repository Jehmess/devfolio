module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'James Aufleger',
    // Main Site Title
    title: `James Aufleger | Web Developer Student`,
    // Description that goes under your name in main bio
    description: `Learning, Learning, Learning..`,
    // Optional: Twitter account handle
    author: `@Jehmess`,
    // Optional: Github account URL
    github: `https://github.com/Jehmess`,
    // Optional: LinkedIn account URL
    linkedin: ``,
    // Content of the About Me section
    about: `Currently Learning the wicked way of the web, and all the beauty it holds. All Projects/Opinions are my own.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Devfolio',
        description:
          'Developing and Managing the Webpage you are currently on',
        link: 'https://github.com/Jehmess/devfolio',
      },
      {
        name: 'Front-End Mastery',
        description:
          'Developing Responsive Single Webpages. Creative Designs that will slap.',
        link: '',
      },
      {
        name: 'JavaScript MiniProjects',
        description:
          'Calculator, StopWatch, Login Credential, To-Do List, Word Counter, Typing Game',
        link: '',
      },
      {
        name: 'Algorithmic Trading Bot',
        description:
          'Python Trading Bot using the Quandl Library',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), HTML5, CSS, Python, JQUERY',
      },
      {
        name: 'Databases',
        description: 'MySQL',
      },
      {
        name: 'Other',
        description:
          'N/A',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
