import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Yusra Erlangga",
  lastName: "Putra",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Scientist",
  avatar: "/images/avatar.jpg",
  email: "yusraerlangg@gmail.com",
  location: "Asia/Makassar",
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/YusraEr",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@ys_erlanggaa",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: `https://www.instagram.com/ys_erlanggaa/`,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: `https://wa.me/6281254798079`,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming data into meaningful insights</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4"> Depressive Prediction </strong>
      </>
    ),
    href: "/work/depressive-disorder-prediction",
  },
  subline: (
    <>
      I&apos;m Yusra, an undergraduate Data Science student at Hasanuddin
      University , where I analyze complex data and build predictive models.
      <br /> Passionate about turning raw data into actionable solutions.
    </>
  ),
};

const about = {
  path: "/about/",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Yusra is a Makassar-based undergraduate student at Hasanuddin University
        with a passion for data science and transforming complex data into
        meaningful insights. His work focuses on machine learning, data
        analysis, and the convergence of statistics and technology.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Ikhtiar Mosque of Hasanuddin University",
        timeframe: "2025 - Present",
        role: "Administrator and Genitor Coordinator",
        achievements: [
          <>
            Coordinated events, improving client engagement and satisfaction.
          </>,
          <>
            Created detailed reports, aiding strategic decision-making.
          </>,
          <>
            Manage websites and social media of Campus Mosque
          </>
        ],
        images: [],
      },
      {
        company: "UKM LDK MPM Unhas",
        timeframe: "2023 - Present",
        role: "Lead of Media Information Department",
        achievements: [
          <>
            Lead content strategy and digital media campaigns, increasing social
            media engagement by 40% through data-driven content optimization.
          </>,
          <>
            Managed media analytics and reporting, utilizing data visualization
            tools to track performance metrics and inform strategic decisions.
          </>,
          <>
            Coordinated cross-functional teams to deliver multimedia projects,
            improving workflow efficiency through process automation.
          </>,
        ],
        images: [],
      },
      {
        company: "Hasanuddin University",
        timeframe: "2025",
        role: "Programming Laboratory Assistant",
        achievements: [
          <>
            Assisted students in learning fundamental programming concepts
            including data structures, algorithms, and software development
            methodologies.
          </>,
          <>
            Conducted laboratory sessions and workshops on Python programming,
            data analysis, and machine learning fundamentals.
          </>,
          <>
            Mentored over 90 students throughout the semester, resulting in
            improved academic performance and programming proficiency.
          </>,
        ],
        images: [],
      },
      {
        company: "Hasanuddin University",
        timeframe: "2024",
        role: "Teaching Assistant - Mathematical Foundations",
        achievements: [
          <>
            Taught advanced linear algebra concepts including matrix operations,
            eigenvalues, vector spaces, and their applications.
          </>,
          <>
            Instructed students in differential and integral calculus, focusing
            on optimization techniques, multivariable calculus, and mathematical
            analysis essential.
          </>,
          <>
            Developed comprehensive tutorials on discrete mathematics,
            probability theory, and statistical foundations, improving student
            comprehension of mathematical concepts.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Hasanuddin University",
        description: (
          <>
            Undergraduate in Information System with focus on Data Science and
            Machine Learning.
          </>
        ),
        timeframe: "2023 - Present",
      },
      {
        name: "SMAN 7 Maros",
        description: (
          <>
            High school with focus on Natural Sciences (IPA) and mathematics.
          </>
        ),
        timeframe: "2020 - 2023",
      },
      {
        name: "Online Learning Platforms",
        description: (
          <>
            Self-learning data science through Dicoding, Digitalent, and other
            online resources.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: (
          <>
            Proficient in Python for data analysis, machine learning, and
            statistical modeling.
          </>
        ),
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Data Analysis",
        description: (
          <>
            Experienced with pandas, numpy, and scikit-learn for data processing
            and analysis.
          </>
        ),
        images: [],
      },
      {
        title: "Teaching",
        description: (
          <>
            Skilled in breaking down complex technical concepts into digestible
            learning materials, with experience mentoring students in
            programming and mathematics.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog/",
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work/",
  label: "Work",
  title: "Sometimes I build things",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery/",
  label: "Gallery",
  title: `Photo gallery - ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/lab.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/lab2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/ceramah.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
