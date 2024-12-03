export const nav = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: false,
    subs: [],
  },
  {
    id: 2,
    name: "Resources",
    path: "/resources",
    icon: true,
    subs: [
      {
        id: 1,
        name: "AI Tools",
        path: "/ai-tools",
      },
      {
        id: 2,
        name: "Events & Webinars",
        path: "/events-webinars",
      },
      {
        id: 3,
        name: "Prompts Database",
        path: "/prompts-database",
      },
    ],
  },
  {
    id: 3,
    name: "News & Articles",
    path: "/news-articles",
    icon: false,
    subs: [],
  },
  {
    id: 4,
    name: "About",
    path: "/about",
    icon: false,
    subs: [],
  },
  {
    id: 5,
    name: "Contact Us",
    path: "/contact",
    icon: false,
    subs: [],
  },
];

export const aiTools = [
  {
    id: 1,
    name: "Chatgpt",
    desc: "ChatGPT is an AI language model capable of answering questions, generating text, and engaging in conversations across various topics.",
    image: "chatgpt-logo.svg",
  },
  {
    id: 2,
    name: "TensorFlow",
    desc: "TensorFlow is an open-source machine learning framework. It is designed to facilitate the development, training, and deployment of machine learning models.",
    image: "tensor-logo.svg",
  },
  {
    id: 3,
    name: "Khan Academy",
    desc: "Khan Academy is AI-powered tutoring system that offers personalized learning in subjects like math, science, and humanities.",
    image: "khan-logo.svg",
  },
  {
    id: 4,
    name: "Quizlet",
    desc: "Quizlet is an Uses AI for adaptive learning and personalized study sessions, offering flashcards, quizzes, and learning games.",
    image: "quizlet-logo.svg",
  },
  {
    id: 5,
    name: "DALLE",
    desc: "DALL.E is a neural network-based image generation that can create detailed, high-quality images from textual descriptions.",
    image: "dalle-logo.svg",
  },
  {
    id: 6,
    name: "Grammarly",
    desc: "Grammarly is an AI-driven grammar and spell checker that enhances writing. It offers suggestions for sentence simplification and rephrasing.",
    image: "grammarly-logo.svg",
  },
];

export const allTools = [
  ...aiTools,
  {
    id: 7,
    name: "Duolingo",
    desc: "Duolingo is an AI-powered language learning app that adapts to the user's learning pace and provides tailored feedback.",
    image: "duolingo.svg",
  },
  {
    id: 8,
    name: "Cognii",
    desc: "Cognii is an AI-based virtual tutor that uses natural language processing to offer personalized, real-time feedback to students.",
    image: "cognii.svg",
  },
  {
    id: 9,
    name: "EdPuzzle",
    desc: "EdPuzzle is an AI-powered video editing tool for educators to create interactive lessons with embedded quizzes and analytics to track student engagement.",
    image: "edpuzzle.svg",
  },
  {
    id: 10,
    name: "Century Tech",
    desc: "Century Tech is an AI-driven learning platform that offers personalized lesson plans, tracks student progress, and adapts learning materials accordingly.",
    image: "century-tech.svg",
  },
  {
    id: 11,
    name: "Knewton",
    desc: "Knewton is an AI-powered adaptive learning platform that personalizes educational content in real time to optimize learning outcomes.",
    image: "knewton.svg",
  },
  {
    id: 12,
    name: "Carnegie Learning",
    desc: "Carnegie learning Provides AI-powered math tutoring and personalized learning solutions based on cognitive science.",
    image: "carnegie.svg",
  },
  {
    id: 13,
    name: "Gemini",
    desc: "Gemini is an advanced AI model which integrates natural language processing, deep learning, and reinforcement learning.",
    image: "gemini.svg",
  },
  {
    id: 14,
    name: "Claude",
    desc: "Claude is an AI assistant that is safe, ethical, and easy to use. Claude is a large language model for content generation, language understanding,and automation.",
    image: "claude.svg",
  },
  {
    id: 15,
    name: "Leonardo",
    desc: "Leonardo AI is a creative AI tool designed to assist with content generation, particularly in art, game design, and animation. ",
    image: "leonardo.svg",
  },
];

export const news = [
  {
    id: 1,
    title: "Featured Articles",
    subNews: [
      {
        id: "us-mission",
        image: "us-mission-news.jpg",
        title: "US Mission launches AI for educators project in Ebonyi State",
        desc: "US Mission in Nigeria has initiated an innovative project, “AI for Educators,” aimed at revolutionizing the education sector in Ebonyi State. The project, which is part of a broader initiative to enhance learning outcomes in Nigerian schools, was announced during a stakeholders’ engagement meeting at the Ebonyi State Ministry of Education.",
        author: "Tony Okoh",
        content: `US Mission in Nigeria has initiated an innovative project, “AI for Educators,” aimed at revolutionizing the education sector in Ebonyi State. <br /> The project, which is part of a broader initiative to enhance learning outcomes in Nigerian schools, was announced during a stakeholders’ engagement meeting at the Ebonyi State Ministry of Education. <br /> Barrister Lilian Nwachukwu, representing the project implementation team, met with  Commissioner for Education, Professor Paul Awo Nwobasi, and Senior Special Assistant to the Governor on Secondary Education, Chief Honourable Peter Nwogbaga, to discuss the project’s modalities. <br /> The meeting underscored the significance of leveraging artificial intelligence (AI) to bridge learning gaps and improve academic performance among secondary school students. <br /> Nwachukwu who is also the SSA to the Governor on Education and former member representing Ohaozara East Constituency in the Ebonyi State House of Assembly noted that the AI for Educators project seeks to equip educators with the skills and knowledge necessary to effectively integrate AI into their teaching methods. <br /> By doing so, the project aims to enhance student learning outcomes, increase access to quality education, and prepare the next generation of Nigerian leaders for success in an increasingly technology-driven world. <br /> The initial pilot scheme will be implemented in Ebonyi and Kebbi states, with plans for expansion to other states in the future.`,
      },
      {
        id: "ngo-trains-100-teachers-on-artificial-intelligence-in-kebbi",
        image: "featured_news-B.svg",
        title: "NGO trains 100 teachers on Artificial Intelligence in Kebbi",
        desc: "The United States Department’s Alumni Engagement Innovation Fund (AEIF), has commenced the training of 100 secondary school teachers on Artificial Intelligence (AI) to improve educational outcomes in Kebbi. Mrs Adanma Odefa, the AI for Educator Project Lead, said at the commencement of the training in Birnin Kebbi on Monday that it was to make learning better for students with the use of AI.",
        author: "VMT News Ltd",
        content:
          "The United States Department’s Alumni Engagement Innovation Fund (AEIF), has commenced the training of 100 secondary school teachers on Artificial Intelligence (AI) to improve educational outcomes in Kebbi. <br /> Mrs Adanma Odefa, the AI for Educator Project Lead, said at the commencement of the training in Birnin Kebbi on Monday that it was to make learning better for students with the use of AI. <br /> According to Odefa, education is the key to the success of any nation and Nigeria’s young people are its greatest resources and hopes of producing a more prosperous future for this great country. <br /> She said, “We support educational initiatives like this, and we remain committed to strengthening human capital for inclusive Nigerian economic growth and human development. <br /> <br /> ”We know you teachers will take advantage of this great opportunity and acquire the requisite skills on AI for providing quality learning experience for your students.” <br /> Odefa explained that only two states of Ebonyi and Kebbi were chosen for the project in the country, adding that Kebbi was chosen to pilot the project because of its ongoing efforts of teachers’ recruitment. <br /> We thought it is a great opportunity for us to weigh in, to advocate for the importance of using AI responsibly in our teaching as a teaching tool. <br /> That is one of the reasons we have chosen Kebbi, and we are not going to train the teachers and leave them alone; we are going to collate them together in a platform. <br /> We have designed a platform where we are going to be connecting them to several tools as well as mentor them,” she said. <br /> Declaring the training open, Permanent Secretary, State Ministry for Basic and Secondary School Education, Alhaji Abubakar Nayelwa, expressed appreciation to the U.S. government and its partners for collaborating to up-skill teachers in the state. <br /> ”This workshop will further improve educational outcomes in Kebbi,” he said. <br /> The Voice Media Trust (VMT NEWS) reports that the four-day workshop was sponsored by the U.S. Department’s Alumni Engagement Innovation Fund",
      },
      {
        id: "US-exchange-alumni-concludes-ai-training-for-secondary-school-teachers-in-ebonyi",
        image: "featured_news-C.svg",
        title:
          "US Exchange Alumni Conclude AI Training for Secondary School Teachers in Ebonyi State",
        desc: "The United States Exchange Alumni, through the Alumni Engagement Innovation Fund (AEIF), has concluded a four-day training program for educators in Ebonyi State. The project, dubbed “AI for Educators,” aimed to equip teachers with the skills to effectively integrate artificial intelligence into their teaching practices.",
        author: "People's Charter of Needs",
        content:
          "The United States Exchange Alumni, through the Alumni Engagement Innovation Fund (AEIF), has concluded a four-day training program for educators in Ebonyi State. The project, dubbed “AI for Educators,” aimed to equip teachers with the skills to effectively integrate artificial intelligence into their teaching practices.<br /> The program, held at Hotel Geneza in Abakaliki, brought together educators from across the state, to learn the rudiments of Ai as it applies to teaching, were divided into groups to develop school AI policies. <br /> These policies, presented on the final day of the program, provided a framework for schools to adopt AI-powered teaching methods. <br /> Ibiam Ngozi Esther, a participant, noted that she had previously studied artificial intelligence at the undergraduate level, but the concept was purely theoretical. “This project has opened my eyes to appreciate the many things AI is capable of doing in my subject area and career as a whole,” she said. <br /> Stephen Onyemechi, another participant, praised the “magic school” application, which he said had simplified teaching and added significant value. “The application simply summarized and simplified the art of teaching,” he said. <br /> Udu Elizabeth Obasi, a participant, stated that her teaching methodology would change henceforth. “I will embrace student-centered learning rather than the teacher-centered learning I practiced before,” she said. “As a civic educator, my new knowledge of AI tools will help me create teaching aids for my students.” <br /> Onwe Solomon Chinedu, a participant, said the project had revealed the many possibilities of technology. “I pledge to pass the knowledge down via workshops for fellow teachers,” he said. <br /> Certificates were presented to participants by Project Lead Adanma Odefa, Media Lead Aniekeme Finbarr, and Facilitator Olalekan Adeeko. Odefa assured participants that the training would have a ripple effect and charged them to pass down the knowledge to their fellow teachers and never give up on volunteering. <br /> Olalekan Adeeko, the Project Training Lead, took the participants through a thorough hands-on series of modules. <br /> He also introduced the T.E.A program, another U.S. Government exchange program specifically for teachers that promotes teaching excellence. <br /> Odefa supervised the group presentations after she had trained the participants on developing AI policy for schools. <br /> Oluwafemi Boboye, who led various discussions and group activities, advised participants to embrace the new technology in their teaching and other aspects of life. “Don’t be left behind,” he said. <br /> Chinwe Lilian Nwachukwu, SSA to the Governor on Education and project team member, charged the teachers to take full advantage of the program and pledged to further monitor their activities. <br /> Speaking to newsmen, Media Lead, Aniekeme Finbarr hinted that the Project AI for Educators training in Ebonyi is a pilot program, with plans to expand to other states. He said the initiative is expected to have a significant impact on the education sector in Nigeria, promoting AI-powered teaching methods and improving learning outcomes.",
      },
    ],
  },
  {
    id: 2,
    title: "Recent News",
    subNews: [
      {
        id: "1",
        image: "recent-news-A.svg",
        title: "How AI Transformed Teaching in Rural Nigerian Schools",
        desc: "Rural schools in Nigeria often face challenges like limited resources and overcrowded classrooms. This case study explores how AI tools are helping to overcome these barriers, providing teachers with access to personalized learning resources, automated assessments, and even virtual tutors. Follow the journey of two rural schools in Nigeria that adopted AI-powered tools and see how it has impacted both teachers and students.",
        author: "",
        content: "",
      },
      {
        id: "2",
        image: "recent-news-B.svg",
        title: "The Impact of Technology in Urban Classrooms",
        desc: "Technology has become an integral part of education in urban classrooms around the world. Discover how digital tools are revolutionizing teaching methods, enhancing student engagement, and bridging learning gaps. Explore the success stories of schools that have embraced technology to empower both educators and learners.",
        author: "",
        content: "",
      },
      {
        id: "3",
        image: "recent-news-C.svg",
        title: "Enhancing STEM Education Through Virtual Labs",
        desc: "STEM education is taking a leap forward with the integration of virtual labs. Dive into the world of virtual experiments, simulations, and hands-on activities that are reshaping how students learn science, technology, engineering, and mathematics. Witness the impact of immersive learning experiences in preparing the next generation of innovators.",
        author: "",
        content: "",
      },
    ],
  },
  {
    id: 3,
    title: "In-Depth Case Studies",
    subNews: [
      {
        id: "1a",
        image: "case-study-A.svg",
        title: "How AI Transformed Teaching in Rural Nigerian Schools",
        desc: "Rural schools in Nigeria often face challenges like limited resources and overcrowded classrooms. This case study explores how AI tools are helping to overcome these barriers, providing teachers with access to personalized learning resources, automated assessments, and even virtual tutors. Follow the journey of two rural schools in Nigeria that adopted AI-powered tools and see how it has impacted both teachers and students.",
        author: "",
        content: "",
      },
      {
        id: "2a",
        image: "case-study-B.svg",
        title: "Empowering Teachers with AI-Driven Solutions",
        desc: "Rural schools in Nigeria often face challenges like limited resources and overcrowded classrooms. This case study explores how AI tools are helping to overcome these barriers, providing teachers with access to personalized learning resources, automated assessments, and even virtual tutors. Follow the journey of two rural schools in Nigeria that adopted AI-powered tools and see how it has impacted both teachers and students.",
        author: "",
        content: "",
      },
      {
        id: "3a",
        image: "case-study-C.svg",
        title: "Creating AI-Driven Lesson Plans: A Step-by-Step Guide",
        desc: "AI has the potential to revolutionize lesson planning by offering data-driven insights into student learning patterns. This guide walks educators through how to use AI-powered platforms to create adaptive lesson plans that cater to diverse learning needs. Discover how AI can analyze data from past student performance to suggest resources, predict learning challenges, and help teachers build more effective, engaging lesson plans.",
        author: "",
        content: "",
      },
    ],
  },
];

export const upcomingEvents = [
  {
    id: 1,
    image: "upcoming-events-E.svg",
    date: "25th Dec 2024",
    time: "10:00am- 2:00pm",
    title: "Interactive Tools for Classroom Engagement",
    location: "Tedprimehub, Abeokuta Ogun State, Nigeria",
    isRegistered: false,
  },
  {
    id: 2,
    image: "upcoming-events-A.svg",
    date: "5th Feb 2025",
    time: "9:00am- 1:00pm",
    title: "Empowering Teachers Through Technology",
    location: "SmartEd Institute, Abuja, Nigeria",
    isRegistered: false,
  },
  {
    id: 3,
    image: "upcoming-events-B.svg",
    date: "10th Jan 2025",
    time: "2:00pm- 4:00pm",
    title: "Innovative Strategies for Online Learning",
    location: "Techville Conference Center, Lagos, Nigeria",
    isRegistered: true,
  },
  {
    id: 4,
    image: "upcoming-events-C.svg",
    date: "20th Feb 2025",
    time: "1:00pm- 5:00pm",
    title: "Enhancing Student Creativity with Digital Tools",
    location: "InnovateX Campus, Port Harcourt, Nigeria",
    isRegistered: true,
  },
  {
    id: 5,
    image: "upcoming-events-D.svg",
    date: "15th Mar 2025",
    time: "10:30am- 3:30pm",
    title: "Gamification in Education: A Practical Approach",
    location: "EduTech Hub, Enugu, Nigeria",
    isRegistered: false,
  },
];

export const resourcesFilter = [
  {
    id: 1,
    name: "Productivity & Communication",
  },
  {
    id: 2,
    name: "Content Creation & Writing Tools",
  },
  {
    id: 3,
    name: "Image & Video Generation",
  },
  {
    id: 4,
    name: "Audio & Video Editing",
  },
  {
    id: 5,
    name: "SEO & Marketing Optimization",
  },
];

export const prompts = [
  {
    id: 1,
    name: "‘Generate a personalized study plan for a student struggling with algebra concepts’",
  },
  {
    id: 2,
    name: "Design an interactive art project to engage students in creative expression",
  },
  {
    id: 3,
    name: "Create a math challenge incorporating real-world problem-solving scenarios",
  },
  {
    id: 4,
    name: "Develop a reading comprehension exercise focused on classic literature",
  },
  {
    id: 5,
    name: "Organize a science experiment demonstrating key principles in action",
  },
  {
    id: 6,
    name: "Craft a writing assignment exploring different forms of poetry",
  },
  {
    id: 7,
    name: "Integrate a history lesson through interactive multimedia presentations",
  },
  {
    id: 8,
    name: "Plan a music appreciation session introducing diverse genres and artists",
  },
  {
    id: 9,
    name: "Invite students to explore geography through virtual field trips",
  },
  {
    id: 10,
    name: "Facilitate a drama workshop to enhance communication and creativity skills",
  },
];

export const promptsFilter = [
  {
    id: 1,
    name: "Subjects",
    subFilter: [
      {
        id: 1,
        name: "Maths",
        sub: [],
      },
      {
        id: 2,
        name: "Science",
        sub: [],
      },
      {
        id: 3,
        name: "English Language",
        sub: [],
      },
      {
        id: 4,
        name: "Social Studies & History",
        sub: [],
      },
      {
        id: 5,
        name: "Technology & Computer Science",
        sub: [],
      },
      {
        id: 6,
        name: "Arts & Music",
        sub: [],
      },
      {
        id: 7,
        name: "Physical Education & Health",
        sub: [],
      },
      {
        id: 8,
        name: "Life Skills & Career Education",
        sub: [],
      },
    ],
  },
  {
    id: 2,
    name: "Grades",
    subFilter: [],
  },
  {
    id: 3,
    name: "Images",
    subFilter: [],
  },
  {
    id: 4,
    name: "Videos",
    subFilter: [],
  },
];

export const faqs = [
  {
    id: 1,
    ques: "What is AI for Educators NG?",
    ans: "AI for Educators NG is a platform designed to help educators, researchers, and other education stakeholders explore the role of Artificial Intelligence (AI) in transforming teaching and learning. We provide AI-driven tools, resources, and training to empower teachers and improve student outcomes.",
    list: false,
    listItems: [],
  },
  {
    id: 2,
    ques: "Whats  Ai for learning",
    ans: "Our platform is tailored for:",
    list: true,
    listItems: [
      "K-12 Teachers",
      "Higher Education Lecturers",
      "Curriculum Designers",
      "Education Researchers",
      "School Administrators",
    ],
  },
  {
    id: 3,
    ques: "Is the platform free to use?",
    ans: "Yes, our platform is free to use for accessing basic resources like news, articles, and some AI tools. However, certain features, such as premium AI tools or advanced webinars, may require a subscription or one-time payment.",
    list: false,
    listItems: [],
  },
  {
    id: 4,
    ques: "How can AI help improve teaching and learning?",
    ans: "AI enhances teaching and learning by:",
    list: true,
    listItems: [
      "Personalizing education: Tailoring lessons to individual student needs.",
      "Increasing engagement: Using interactive tools like virtual tutors and gamified learning.",
      "Providing instant feedback: Helping students correct mistakes in real time.",
      "Supporting inclusivity: Offering accessibility tools for diverse learners.",
      "Streamlining teacher tasks: Automating grading and lesson planning, giving teachers more time to focus on students.",
    ],
  },
];

export const submittedPrompts = [
  {
    id: 1,
    name: "Generate a personalized study plan for a student struggling with algebra concepts’",
    status: "approved",
  },
  {
    id: 2,
    name: "Offer one-on-one tutoring sessions to address specific problem areas",
    status: "pending",
  },
  {
    id: 3,
    name: "Provide online resources for additional practice and review",
    status: "approved",
  },
  {
    id: 4,
    name: "Encourage the student to seek help from classmates or study groups",
    status: "pending",
  },
  {
    id: 5,
    name: "Break down complex problems into smaller, more manageable steps",
    status: "pending",
  },
  {
    id: 6,
    name: "Track progress and adjust study plan as needed based on performance",
    status: "pending",
  },
  {
    id: 7,
    name: "Reward effort and improvement to motivate continued learning",
    status: "approved",
  },
];

export const keyTakeways = [
  "Learn how to integrate AI tools that enhance classroom interaction.",
  "Discover platforms and apps designed to increase student engagement.",
  "Explore real-time feedback mechanisms for tracking student progress.",
  "Gain practical strategies for creating an interactive and collaborative learning environment.",
];

export const whoShouldJoin = [
  "K-12 Teachers",
  "College and University Educators",
  "Curriculum Designers",
  "School Administrators",
  "Educational Technologists",
];
