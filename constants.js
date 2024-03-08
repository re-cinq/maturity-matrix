// @flow
import * as d3 from 'd3'

export type TrackId = 'GREEN_STRATEGY' | 'PROCESSES' | 'COMMITMENTS' | 'AWARENESS' |
  'SOFTWARE_OPTIMISATION' | 'DESIGN_PRINCIPLES' | 'SCI' | 'EFFICIENT_LANGUAGE' |
  'INFRA_OPTIMISATION' | 'ENERGY_EFFICIENCY' | 'AUTOSCALING' | 'EXTEND_LIFETIME' |
  'GOVERNANCE' | 'REALTIME_EMISSIONS' | 'POLICIES' | 'PROCUREMENT'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5 

export type MilestoneMap = {
  'GREEN_STRATEGY': Milestone,
  'PROCESSES': Milestone,
  'COMMITMENTS': Milestone,
  'AWARENESS': Milestone,
  'SOFTWARE_OPTIMISATION': Milestone,
  'DESIGN_PRINCIPLES': Milestone,
  'SCI': Milestone,
  'EFFICIENT_LANGUAGE': Milestone,
  'INFRA_OPTIMISATION': Milestone,
  'ENERGY_EFFICIENCY': Milestone,
  'AUTOSCALING': Milestone,
  'EXTEND_LIFETIME': Milestone,
  'GOVERNANCE': Milestone,
  'REALTIME_EMISSIONS': Milestone,
  'POLICIES': Milestone,
  'PROCUREMENT': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0;
    case 1: return 4; // Corresponding to level 2.0
    case 2: return 8; // Corresponding to level 3.0
    case 3: return 12; // Corresponding to level 4.0
    case 4: return 16; // Corresponding to level 5.0
    case 5: return 20; // Corresponding to level 6.0
    default: return 0;
  }
};

export const pointsToLevels = {
  '0': '1.0',
  '40': '2.0',
  '80': '3.0',
  '120': '4.0',
  '160': '5.0',
  '200': '6.0',
  '240': '7.0',
  '280': '8.0',
  '320': '9.0'
};

export const maxLevel = 320

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'GREEN_STRATEGY': Track,
  'PROCESSES': Track,
  'COMMITMENTS': Track,
  'AWARENESS': Track,
  'SOFTWARE_OPTIMISATION': Track,
  'DESIGN_PRINCIPLES': Track,
  'SCI': Track,
  'EFFICIENT_LANGUAGE': Track,
  'INFRA_OPTIMISATION': Track,
  'ENERGY_EFFICIENCY': Track,
  'AUTOSCALING': Track,
  'EXTEND_LIFETIME': Track,
  'GOVERNANCE': Track,
  'REALTIME_EMISSIONS': Track,
  'POLICIES': Track,
  'PROCUREMENT': Track
|}

export const tracks: Tracks = {
  "GREEN_STRATEGY": {
    "displayName": "Green Strategy",
    "category": "A",
    "description": "Develops expertise in sustainable software engineering and GreenOps, integrating eco-friendly practices across IT operations.",
    "milestones": [{
      "summary": "Adopts fundamental sustainable and GreenOps practices within projects, following eco-friendly guidelines.",
      "signals": [
        "Incorporates basic sustainability principles in software design",
        "Applies energy-efficient coding practices for minimal environmental impact",
        "Utilizes existing green components and frameworks effectively"
      ],
      "examples": [
        "Optimized code for reduced energy consumption in a web app",
        "Integrated an existing low-power library for data processing",
        "Implemented automated carbon footprint tracking for project deployments"
      ]
    }, {
      "summary": "Enhances projects with advanced sustainable design and operational efficiency, contributing to broader green initiatives.",
      "signals": [
        "Designs solutions with a focus on reducing electronic waste",
        "Develops features that significantly lower server resource demands",
        "Advises on eco-friendly alternatives for project requirements"
      ],
      "examples": [
        "Redesigned a feature to extend hardware lifespan",
        "Created a more efficient data caching strategy to reduce server load",
        "Conducted a workshop on sustainable software practices for the team"
      ]
    }, {
      "summary": "Leads in the innovation and implementation of green architecture, setting standards for sustainability.",
      "signals": [
        "Pioneers new methodologies in GreenOps and sustainable engineering",
        "Influences the adoption of green practices across multiple projects",
        "Balances performance, cost, and environmental impact at scale"
      ],
      "examples": [
        "Developed a novel algorithm reducing energy use in high-traffic systems",
        "Led the transition to a green cloud hosting provider",
        "Authored company-wide guidelines for sustainable software development"
      ]
    }, {
      "summary": "Establishes frameworks for sustainability that influence the industry, advocating for eco-conscious tech development.",
      "signals": [
        "Creates scalable, sustainable systems that serve as benchmarks",
        "Mentors others in advanced GreenOps strategies",
        "Drives significant reductions in carbon footprint and IT costs"
      ],
      "examples": [
        "Designed a zero-emission data center strategy",
        "Spearheaded a cross-industry forum on sustainable computing",
        "Implemented a company-wide, green software framework adopted by peers"
      ]
    }, {
      "summary": "Becomes a global thought leader in sustainable software engineering, shaping the future of green technology.",
      "signals": [
        "Sets visionary sustainability goals and mobilizes the industry towards them",
        "Innovates with groundbreaking eco-friendly technologies",
        "Champions global initiatives for sustainable computing"
      ],
      "examples": [
        "Keynote speaker at a leading conference on sustainability in tech",
        "Developed a widely adopted open-source tool for carbon footprint analysis",
        "Led a successful international campaign for reducing software-induced emissions"
      ],
    }],
  },
  
  "PROCESSES": {
    "displayName": "Processes",
    "category": "A",
    "description": "Develops and refines eco-friendly operational processes within software development lifecycle.",
    "milestones": [{
      "summary": "Integrates basic green processes into the software development lifecycle, promoting initial sustainability efforts.",
      "signals": [
        "Incorporates eco-friendly requirements in project planning stages",
        "Adopts green coding standards",
        "Utilizes tools for tracking energy consumption in development and testing environments"
      ],
      "examples": [
        "Implemented a linter for eco-friendly coding practices",
        "Adopted a low-energy consumption testing protocol",
        "Included sustainability checkpoints in the software release checklist"
      ]
    }, {
      "summary": "Optimizes existing processes for enhanced sustainability, contributing to reduced carbon footprint and operational costs.",
      "signals": [
        "Revamps development pipelines to include automated sustainability checks",
        "Leads green refactoring efforts for existing codebases",
        "Institutes a policy for regular energy consumption audits"
      ],
      "examples": [
        "Integrated automated carbon footprint analysis in CI/CD pipelines",
        "Reduced server usage by optimizing continuous integration pipelines",
        "Established a quarterly review process for assessing the environmental impact of projects"
      ]
    }, {
      "summary": "Champions innovative, sustainable process frameworks, establishing new industry standards for eco-friendly development.",
      "signals": [
        "Develops cutting-edge methodologies for sustainable software lifecycle management",
        "Influences broader adoption of green processes across projects and teams",
        "Balances high-performance demands with environmental sustainability requirements"
      ],
      "examples": [
        "Created a zero-waste deployment strategy adopted company-wide",
        "Pioneered a new, energy-efficient testing framework",
        "Hosted workshops on sustainable development practices for external developers"
      ],
    }, {
      "summary": "Leads the digital transformation towards green practices, optimizing every phase of the software development lifecycle for sustainability.",
      "signals": [
        "Integrates sustainable development goals (SDGs) into project management frameworks",
        "Automates sustainability reporting within development cycles",
        "Innovates process improvements that significantly lower the environmental impact"
      ],
      "examples": [
        "Implemented a DevOps pipeline that automatically calculates and reports on the carbon footprint of each deployment",
        "Developed a sustainability dashboard for real-time tracking of software projects' environmental impact",
      ]
    },{
      "summary": "Pioneers revolutionary process methodologies that become industry benchmarks for sustainable software development.",
      "signals": [
        "Establishes global collaborations to define sustainable process standards",
        "Leads industry-wide initiatives to adopt green software development practices",
        "Advocates for regulatory changes that promote sustainability in technology"
      ],
      "examples": [
        "Founded an international consortium for sustainable software practices.",
        "Organized a global conference on green technology processes, setting the stage for widespread industry transformation",
      ]
    }],
  },

  "COMMITMENTS": {
    "displayName": "Commitments",
    "category": "A",
    "description": "Embeds a culture of responsibility and accountability for sustainability within organizations, ensuring commitments lead to tangible outcomes.",
    "milestones": [{
      "summary": "Embeds initial sustainability commitments into project goals, ensuring a foundation for eco-friendly practices.",
      "signals": [
        "Identifies and sets specific sustainability targets for projects",
        "Begins integrating sustainable considerations into project planning",
        "Commits to regular review and reporting on sustainability progress"
      ],
      "examples": [
        "Defined energy efficiency goals for a new software development project",
        "Incorporated environmental impact assessment in the project lifecycle",
        "Established a baseline for carbon footprint for current IT infrastructure"
      ]
    }, {
      "summary": "Elevates commitment by driving projects to not just meet, but exceed sustainability goals, embedding deeper green practices.",
      "signals": [
        "Leads projects with sustainability as a core objective, beyond mere compliance",
        "Implements innovative solutions to achieve greater sustainability outcomes",
        "Engages stakeholders across the organization to align on and support sustainability efforts"
      ],
      "examples": [
        "Exceeded initial carbon reduction targets through innovative cloud optimization strategies",
        "Deployed a company-wide sustainability challenge, resulting in significant energy savings",
        "Initiated a partnership with suppliers to reduce the environmental impact of hardware procurement"
      ]
    }, {
      "summary": "Champions transformative sustainability initiatives, setting new standards within the industry for environmental responsibility.",
      "signals": [
        "Pioneers adoption of groundbreaking green technologies and practices",
        "Influences organizational strategy to prioritize long-term sustainability",
        "Cultivates a network of sustainability champions within and outside the organization"
      ],
      "examples": [
        "Led the development and implementation of a proprietary green algorithm, drastically reducing computational energy use",
        "Formulated and executed a strategic shift to renewable energy sources for all company data centers",
        "Founded an industry-wide consortium focused on sustainable software practices"
      ]
    }, {
      "summary": "Establishes and fulfills ambitious, industry-leading sustainability commitments, driving significant impact on global environmental goals.",
      "signals": [
        "Sets visionary sustainability targets that inspire action within and beyond the organization",
        "Leads by example in achieving breakthrough results in sustainability",
        "Leverages influence to advocate for policy changes and standards that promote sustainability in technology"
      ],
      "examples": [
        "Spearheaded a successful initiative to make the company’s operations carbon negative",
        "Published a breakthrough study on the impact of sustainable software practices on reducing global carbon emissions",
        "Played a key role in establishing a new international standard for environmental sustainability in software development"
      ]
    }, {
      "summary": "Becomes a global thought leader in organizational sustainability, shaping the future of corporate responsibility towards the environment.",
      "signals": [
        "Drives innovative sustainability research and practices that set global benchmarks",
        "Mobilizes a global movement towards integrating sustainability deeply into business models",
        "Influences global policy and strategy on sustainability, setting new norms for corporate environmental stewardship"
      ],
      "examples": [
        "Delivered a keynote at the UN Climate Action Summit, highlighting the role of corporate commitments in achieving sustainability targets",
        "Led a global corporate coalition to commit to net-zero emissions, influencing policy changes in several countries",
        "Developed and shared an open-source platform for tracking and reporting on sustainability metrics, widely adopted across industries"
      ]
    }],
  },
   
  "AWARENESS": {
    "displayName": "Awareness",
    "category": "A",
    "description": "Cultivates and spreads awareness on the importance of sustainability in software engineering, fostering a culture of responsibility and innovation.",
    "milestones": [{
      "summary": "Raises basic awareness of sustainability challenges and opportunities within the team or organization.",
      "signals": [
        "Shares information and resources on sustainable practices",
        "Initiates discussions on the environmental impact of software projects",
        "Encourages team members to consider sustainability in their work"
      ],
      "examples": [
        "Organized a team meeting to discuss the company's sustainability goals",
        "Shared articles and case studies on green computing in the team's communication channel",
        "Introduced a 'green tip of the week' in team standups to promote sustainable habits"
      ]
    }, {
      "summary": "Elevates awareness by embedding sustainability into team or organizational culture, leading by example and initiating projects with a sustainability focus.",
      "signals": [
        "Leads sustainability-focused projects or initiatives",
        "Mentors colleagues on integrating sustainable practices into their work",
        "Organizes workshops or talks on sustainability topics"
      ],
      "examples": [
        "Launched a green coding initiative within the development team",
        "Mentored a junior developer on creating energy-efficient algorithms",
        "Hosted a guest speaker session on sustainability in the tech industry"
      ]
    }, {
      "summary": "Champions broader awareness efforts, influencing the industry and community by advocating for sustainable software engineering practices.",
      "signals": [
        "Speaks at conferences and events on the importance of sustainability in software development",
        "Contributes to or initiates open-source projects with a focus on sustainability",
        "Engages with external organizations to promote sustainability in the tech community"
      ],
      "examples": [
        "Presented on sustainable development practices at a major tech conference",
        "Led an open-source project focused on reducing software energy consumption",
        "Partnered with a non-profit to run a coding bootcamp for developing green apps"
      ]
    }, {
      "summary": "Establishes and leads major awareness campaigns or educational programs, setting new standards for sustainability education in the tech sector.",
      "signals": [
        "Creates comprehensive resources or curricula on sustainable software engineering",
        "Influences policy or curriculum changes at educational institutions",
        "Receives recognition for contributions to sustainability awareness in the tech industry"
      ],
      "examples": [
        "Developed an online course on sustainable software practices adopted by multiple universities",
        "Advised a government body on integrating sustainability into IT education standards",
        "Awarded for outstanding contribution to raising sustainability awareness in the tech community"
      ]
    }, {
      "summary": "Becomes a global leader in sustainability awareness, driving significant shifts in how the tech industry and society at large perceive and implement sustainable practices.",
      "signals": [
        "Innovates in sustainability communication, reaching a wide and diverse audience",
        "Leads global initiatives that significantly increase engagement with sustainable tech practices",
        "Shapes public and industry opinion on the importance of sustainability in technology"
      ],
      "examples": [
        "Organized a global sustainability in tech summit, bringing together leaders from across industries",
        "Published a landmark book on the role of technology in achieving a sustainable future",
        "Led a successful campaign advocating for global standards in sustainable software development"
      ],
    }],
  },  

  "SOFTWARE_OPTIMISATION": {
    "displayName": "Software Optimisation",
    "category": "B",
    "description": "Enhances software for maximum energy efficiency and minimal environmental impact, utilizing cutting-edge sustainable software engineering practices.",
    "milestones": [{
      "summary": "Identifies and applies initial optimizations in software design and development for improved energy efficiency.",
      "signals": [
        "Reviews and optimizes existing code for energy efficiency",
        "Implements best practices for reducing the environmental impact of software",
        "Leverages tools to analyze and reduce software carbon footprint"
      ],
      "examples": [
        "Refactored a resource-intensive module to reduce its energy consumption",
        "Adopted a more efficient algorithm that decreased server load times",
        "Utilized a code analysis tool to identify and remedy energy-inefficient patterns"
      ]
    }, {
      "summary": "Drives significant software optimization projects, leading to substantial reductions in energy use and carbon emissions.",
      "signals": [
        "Designs and architects low-energy software solutions from the ground up",
        "Innovates with new technologies and practices for sustainability",
        "Advocates for and implements green coding standards across projects"
      ],
      "examples": [
        "Architected a new feature leveraging serverless technology to minimize energy use",
        "Introduced a novel compression technique reducing data transfer energy costs",
        "Led a team initiative to rewrite high-traffic services for greater efficiency"
      ]
    }, {
      "summary": "Pioneers breakthrough optimizations and technologies, setting new industry standards for software sustainability.",
      "signals": [
        "Develops or contributes to open-source projects focused on energy efficiency",
        "Collaborates with academic and research institutions on sustainable software solutions",
        "Speaks at conferences, sharing knowledge on advanced optimization strategies"
      ],
      "examples": [
        "Created an open-source library popularly used for developing energy-efficient applications",
        "Partnered with a university to research into AI-driven optimizations for reducing software energy consumption",
        "Presented a paper on sustainable software practices at a leading technology conference"
      ]
    }, {
      "summary": "Establishes comprehensive optimization frameworks that are widely adopted, significantly advancing the field of sustainable software engineering.",
      "signals": [
        "Leads the development of industry-wide guidelines for energy-efficient software",
        "Mentors and trains other engineers in sustainable software development practices",
        "Drives cross-industry collaborations to promote software optimization"
      ],
      "examples": [
        "Formulated and disseminated a widely accepted set of practices for green software engineering",
        "Organized a series of workshops for engineers on eco-friendly coding practices",
        "Initiated a coalition of tech companies focused on reducing the software industry’s carbon footprint"
      ]
    }, {
      "summary": "Becomes a global leader in software optimization for sustainability, influencing policy, education, and industry practices.",
      "signals": [
        "Sets visionary goals for software sustainability and leads global efforts to achieve them",
        "Innovates with sustainable technologies that transform software development",
        "Champions global initiatives that set new benchmarks for environmental stewardship in software"
      ],
      "examples": [
        "Led the formulation of international standards for software energy efficiency",
        "Developed a groundbreaking sustainable computing platform adopted by governments and corporations",
        "Keynote speaker at global summits, advocating for urgent action on software sustainability"
      ],
    }],
  },

  "DESIGN_PRINCIPLES": {
    "displayName": "Design Principles",
    "category": "B",
    "description": "Emphasizes the adoption and advocacy of sustainable design principles in software development to achieve eco-efficiency and innovation.",
    "milestones": [{
      "summary": "Integrates basic sustainable design principles into projects, prioritizing eco-efficiency from the initial stages.",
      "signals": [
        "Adopts guidelines for energy-efficient software design",
        "Considers environmental impact in the choice of technologies and platforms",
        "Incorporates user feedback to enhance sustainable usability"
      ],
      "examples": [
        "Chose a lightweight framework to reduce energy consumption for a new web app",
        "Designed a feature with user-configurable settings to minimize data usage and prolong device battery life",
        "Conducted usability testing to ensure eco-friendly features met user needs effectively"
      ]
    }, {
      "summary": "Advances the application of sustainable design principles, leading projects that exemplify eco-innovation.",
      "signals": [
        "Leads design efforts that significantly lower software's environmental footprint",
        "Innovates in the application of green UX/UI principles",
        "Promotes the adoption of sustainable design practices across teams"
      ],
      "examples": [
        "Developed a user interface that encourages energy-saving modes of operation",
        "Implemented a novel approach to data presentation that reduces screen time and energy use",
        "Organized a company-wide green design challenge to foster innovation in sustainable design"
      ]
    }, {
      "summary": "Pioneers new sustainable design methodologies, setting industry benchmarks for eco-friendly software development.",
      "signals": [
        "Develops cutting-edge sustainable design frameworks and tools",
        "Influences industry standards through advocacy and thought leadership in green design",
        "Mentors designers and developers in sustainable practices"
      ],
      "examples": [
        "Created a widely used open-source tool for assessing design sustainability",
        "Authored influential articles on the future of eco-friendly software design",
        "Led a workshop series at major design conferences on sustainability in digital products"
      ]
    }, {
      "summary": "Establishes comprehensive sustainable design paradigms that are adopted globally, significantly impacting software development for environmental good.",
      "signals": [
        "Champions the development of global standards for sustainable software design",
        "Collaborates with international organizations to promote eco-friendly design education",
        "Drives significant advancements in software design that reduce global carbon emissions"
      ],
      "examples": [
        "Played a key role in creating an international certification for sustainable software design",
        "Partnered with educational institutions to incorporate sustainable design principles into their curricula",
        "Launched a global initiative that resulted in the adoption of green design practices by leading software companies"
      ]
    }, {
      "summary": "Becomes a world-renowned expert in sustainable design, shaping the direction of eco-friendly software development and influencing policy and standards.",
      "signals": [
        "Sets visionary sustainability goals for software design and mobilizes the global community to achieve them",
        "Innovates with eco-friendly design technologies that set new industry standards",
        "Leads global policy discussions on incorporating sustainability into software design practices"
      ],
      "examples": [
        "Keynote speaker at global sustainability and design summits, presenting pioneering work in sustainable design",
        "Developed a revolutionary design philosophy that greatly minimizes software’s environmental impact",
        "Influenced the adoption of sustainable design standards by technology firms and governmental bodies worldwide"
      ],
    }],
  }, 
  
  "SCI": {
    "displayName": "Carbon-Aware Software",
    "category": "B",
    "description": "Focuses on developing and promoting software that actively reduces its carbon footprint, leveraging data and technology to make informed decisions about energy use.",
    "milestones": [{
      "summary": "Begins incorporating carbon-aware principles into software design and development, understanding the impact of computing on carbon emissions.",
      "signals": [
        "Identifies key areas where software can be optimized for lower carbon emissions",
        "Starts to use carbon footprint calculators for software projects",
        "Implements initial changes to reduce the carbon footprint of software applications"
      ],
      "examples": [
        "Optimized an application's data processing to reduce server time and energy use",
        "Incorporated a carbon calculator tool into the software development lifecycle",
        "Adjusted application's sleep and wake cycles to minimize energy consumption"
      ]
    }, {
      "summary": "Advances in creating carbon-aware software solutions, significantly reducing the carbon footprint of projects and promoting sustainability standards.",
      "signals": [
        "Designs software with carbon efficiency as a core requirement",
        "Evaluates new projects for their potential environmental impact",
        "Shares knowledge on carbon-aware practices within the organization"
      ],
      "examples": [
        "Developed a feature that dynamically adjusts resource use based on renewable energy availability",
        "Led a project review focused on identifying opportunities to reduce its carbon footprint",
        "Conducted a seminar on carbon-aware software development for the department"
      ]
    }, {
      "summary": "Leads innovative projects in carbon-aware software, setting new benchmarks for sustainability in the industry.",
      "signals": [
        "Pioneers the use of advanced technologies to minimize software’s environmental impact",
        "Influences the adoption of carbon-aware practices across multiple teams and projects",
        "Engages with external stakeholders to promote carbon-aware software development"
      ],
      "examples": [
        "Implemented a cloud-based solution that optimizes energy consumption across data centers",
        "Initiated a cross-functional task force to integrate carbon awareness into all software projects",
        "Collaborated with industry partners to develop a standard for measuring software carbon emissions"
      ]
    }, {
      "summary": "Establishes frameworks and policies that advocate for carbon-aware software development on a global scale, driving industry-wide adoption.",
      "signals": [
        "Creates scalable, carbon-aware software frameworks adopted by the industry",
        "Mentors others in the field, spreading awareness and knowledge of carbon-efficient software practices",
        "Drives significant reductions in the tech industry’s carbon emissions through leadership and innovation"
      ],
      "examples": [
        "Developed a widely used framework for carbon-aware computing, reducing emissions for numerous applications",
        "Organized a global conference on sustainable software practices, featuring carbon-aware development",
        "Led a campaign for the inclusion of carbon awareness in software engineering curricula"
      ]
    }, {
      "summary": "Becomes a world-leading authority in carbon-aware software development, influencing policy, shaping educational standards, and pioneering technological breakthroughs.",
      "signals": [
        "Sets global standards for carbon-aware software development",
        "Leads groundbreaking research in carbon-efficient computing",
        "Influences international policy on technology and sustainability"
      ],
      "examples": [
        "Keynote speaker at a UN conference on technology and sustainability",
        "Published influential research on reducing software-induced carbon emissions",
        "Played a pivotal role in forming an international agreement on carbon-aware technology standards",
      ],
    }],
  },


  "EFFICIENT_LANGUAGE": {
    "displayName": "Efficient Programming Languages",
    "category": "B",
    "description": "Advocates for the selection and use of programming languages and frameworks that optimize for energy efficiency, thereby reducing the carbon footprint of software.",
    "milestones": [{
      "summary": "Begins to evaluate and select programming languages based on their energy efficiency for new projects.",
      "signals": [
        "Researches and compares the energy efficiency of programming languages",
        "Advocates for the use of energy-efficient languages in project planning",
        "Implements small projects or components in energy-efficient languages to assess impact"
      ],
      "examples": [
        "Conducted a comparative study on the energy consumption of Python vs. Rust for data processing tasks",
        "Advocated for the adoption of Go for a new microservices project due to its efficiency",
        "Rewrote a high-load component in Rust to reduce server energy consumption"
      ]
    }, {
      "summary": "Leads the development of projects utilizing energy-efficient programming languages, demonstrating significant reductions in carbon emissions.",
      "signals": [
        "Designs and architects systems that are optimized for energy efficiency from the ground up",
        "Shares best practices and findings on energy-efficient programming with the wider team",
        "Contributes to or initiates open-source projects focusing on energy efficiency"
      ],
      "examples": [
        "Led a project that utilized Elixir for its low-energy footprint, achieving a 30% reduction in energy use",
        "Presented a case study on the benefits of energy-efficient programming at a tech conference",
        "Contributed energy efficiency improvements to an open-source project"
      ]
    }, {
      "summary": "Pioneers innovative approaches to energy-efficient programming, setting new industry standards for sustainable software development.",
      "signals": [
        "Innovates in the application of programming languages for maximum energy efficiency",
        "Influences the selection of programming languages based on sustainability criteria in significant projects",
        "Engages with the academic community to research and promote energy-efficient programming practices"
      ],
      "examples": [
        "Developed a novel framework in Swift focused on reducing energy consumption for mobile apps",
        "Influenced a major open-source project to adopt Kotlin for Android development due to its efficiency",
        "Collaborated with a university on a research project investigating the energy efficiency of various programming paradigms"
      ]
    }, {
      "summary": "Establishes comprehensive guidelines and frameworks that advocate for the global adoption of energy-efficient programming languages.",
      "signals": [
        "Creates scalable guidelines for selecting and using energy-efficient programming languages",
        "Mentors and educates developers and organizations on the benefits of energy-efficient programming",
        "Leads cross-industry initiatives to promote the adoption of sustainable programming practices"
      ],
      "examples": [
        "Authored a widely adopted guide on energy-efficient programming languages and frameworks",
        "Launched an educational series on sustainable software development, highlighting programming choices",
        "Spearheaded a tech industry coalition focused on reducing carbon emissions through efficient programming"
      ]
    }, {
      "summary": "Becomes a global thought leader in energy-efficient programming, influencing educational, policy, and technological advancements towards sustainable software development.",
      "signals": [
        "Sets visionary goals for the tech industry's adoption of energy-efficient programming languages",
        "Leads groundbreaking research that redefines software development practices for sustainability",
        "Influences policy and educational standards on a global scale to prioritize energy efficiency in programming"
      ],
      "examples": [
        "Keynote speaker at global conferences on sustainability in tech, advocating for energy-efficient programming",
        "Led a landmark study on the carbon footprint of programming languages, influencing curriculum development worldwide",
        "Played a key role in establishing international standards for energy-efficient software development practices",
      ],
    }],
  },

  "INFRA_OPTIMISATION": {
    "displayName": "Infrastructure Optimisation",
    "category": "C",
    "description": "Evaluates a company's IT infrastructure to identify opportunities for energy efficiency and carbon footprint reduction, recommending strategies for optimization.",
    "milestones": [{
      "summary": "Conducts initial assessment to identify quick wins and areas for improvement in IT infrastructure energy efficiency.",
      "signals": [
        "Reviews current infrastructure setup and identifies inefficiencies",
        "Measures baseline energy consumption and carbon emissions",
        "Suggests immediate actions for reducing energy usage and emissions"
      ],
      "examples": [
        "Identified underutilized servers contributing to unnecessary energy consumption",
        "Conducted an audit of data center cooling systems to find efficiency gaps",
        "Recommended consolidation of services to fewer, more energy-efficient servers"
      ]
    }, {
      "summary": "Develops and implements detailed plans for infrastructure optimization, leading to measurable improvements in energy efficiency and carbon reduction.",
      "signals": [
        "Designs a comprehensive strategy for infrastructure overhaul focused on sustainability",
        "Leads the execution of optimization projects, ensuring targets are met",
        "Tracks and reports on energy savings and emissions reduction post-implementation"
      ],
      "examples": [
        "Implemented virtualization to maximize server utilization and reduce energy needs",
        "Upgraded to energy-efficient cooling systems, significantly lowering data center temperatures and energy use",
        "Retrofitted older equipment with more energy-efficient models, achieving substantial carbon savings"
      ]
    }, {
      "summary": "Pioneers innovative solutions and technologies in infrastructure optimization, setting new benchmarks for sustainability in the industry.",
      "signals": [
        "Investigates and adopts cutting-edge technologies for sustainable infrastructure",
        "Publishes case studies and reports on successful optimization projects",
        "Advocates for industry-wide adoption of best practices in infrastructure sustainability"
      ],
      "examples": [
        "Deployed an AI-driven system for dynamic energy management across data centers",
        "Authored a white paper on the impact of renewable energy sources in IT infrastructure",
        "Hosted a webinar series on sustainable infrastructure practices, drawing participants from across the industry"
      ]
    }, {
      "summary": "Establishes and leads a strategic vision for achieving a zero-carbon IT infrastructure, influencing policy and standards both within and outside the organization.",
      "signals": [
        "Formulates long-term goals and strategies for carbon-neutral IT operations",
        "Collaborates with external bodies to set new standards for green IT infrastructure",
        "Mentors other organizations in adopting sustainable infrastructure practices"
      ],
      "examples": [
        "Led the transition to a fully renewable-powered data center, setting a model for the industry",
        "Played a key role in developing industry certification for green data centers",
        "Provided consultancy to other companies on achieving energy efficiency and carbon neutrality in their IT operations"
      ]
    }, {
      "summary": "Achieves global leadership in IT infrastructure sustainability, driving transformative changes that significantly reduce the tech industry's environmental impact.",
      "signals": [
        "Champions global initiatives aimed at reducing the carbon footprint of IT infrastructure",
        "Influences international policy and corporate standards on sustainable IT operations",
        "Leads groundbreaking research into sustainable infrastructure technologies and practices"
      ],
      "examples": [
        "Keynote speaker at a UN conference on sustainability in technology, showcasing successful infrastructure optimization",
        "Collaborated with global tech leaders to launch a green data center alliance",
        "Directed a multinational research project on next-generation cooling technologies, significantly advancing the field",
      ],
    }],
  },

  "ENERGY_EFFICIENCY": {
    "displayName": "Energy Efficiency",
    "category": "C",
    "description": "Conducts comprehensive evaluations of a company's energy use across software, hardware, and processes, identifying strategies to enhance efficiency and reduce environmental impact.",
    "milestones": [{
      "summary": "Performs an initial review to identify basic energy inefficiencies and potential areas for improvement.",
      "signals": [
        "Assesses current energy usage patterns and identifies high-consumption areas",
        "Evaluates the energy efficiency of deployed software and hardware",
        "Recommends straightforward adjustments to reduce immediate energy consumption"
      ],
      "examples": [
        "Analyzed server utilization rates to identify and decommission underused servers",
        "Reviewed application performance metrics to pinpoint inefficient code",
        "Suggested shifts in work patterns to optimize energy use during peak and off-peak hours"
      ]
    }, {
      "summary": "Develops targeted strategies for optimizing energy use, implementing solutions that lead to significant efficiency gains.",
      "signals": [
        "Crafts and executes a plan for comprehensive energy optimization across IT operations",
        "Monitors and measures the impact of implemented changes on energy consumption",
        "Institutes best practices in software development and infrastructure management for ongoing energy savings"
      ],
      "examples": [
        "Upgraded to more energy-efficient server hardware, reducing data center energy use",
        "Optimized major software applications for energy efficiency, resulting in lower server demand",
        "Implemented a company-wide policy for energy-efficient procurement and use of IT equipment"
      ]
    }, {
      "summary": "Leads advanced initiatives for energy efficiency, incorporating innovative technologies and methodologies to set new standards.",
      "signals": [
        "Evaluates and integrates cutting-edge energy-saving technologies and practices",
        "Publishes findings and case studies on successful energy reduction initiatives",
        "Advocates within the industry for widespread adoption of energy efficiency measures"
      ],
      "examples": [
        "Introduced an AI-based system for dynamic power management across computing resources",
        "Led a successful pilot for solar-powered cooling in data centers, dramatically reducing energy costs",
        "Organized a series of industry talks on the role of software in achieving energy efficiency"
      ]
    }, {
      "summary": "Establishes a strategic framework for achieving and maintaining industry-leading energy efficiency levels, influencing broader market practices.",
      "signals": [
        "Sets ambitious long-term energy efficiency goals, aligning them with broader sustainability targets",
        "Works with external stakeholders to advocate for and develop green energy standards",
        "Mentors organizations on implementing effective energy efficiency strategies"
      ],
      "examples": [
        "Developed a scalable model for zero-net-energy IT operations adopted by peers in the industry",
        "Contributed to the development of international standards for energy-efficient computing",
        "Advised multiple companies on strategies for reducing energy use, leveraging insights from own successful initiatives"
      ]
    }, {
      "summary": "Achieves global recognition as a leader in energy efficiency, driving transformative change and significantly advancing the pursuit of sustainability in technology.",
      "signals": [
        "Champions global initiatives focused on reducing the technology sector's energy consumption",
        "Influences policy, standards, and practices at a global level to promote energy efficiency",
        "Leads groundbreaking research and development efforts in energy-efficient technologies"
      ],
      "examples": [
        "Presented at global forums on sustainable technology, showcasing model energy efficiency programs",
        "Played a pivotal role in a UN-backed initiative to promote energy efficiency in technology companies worldwide",
        "Headed a research consortium focused on next-generation energy-saving technologies, resulting in widely adopted solutions",
      ],
    }],
  },

  "AUTOSCALING": {
    "displayName": "Autoscaling",
    "category": "C",
    "description": "Evaluates the effectiveness and efficiency of autoscaling practices within a company's IT infrastructure, aiming to optimize resource use and minimize environmental impact.",
    "milestones": [{
      "summary": "Identifies opportunities for implementing or optimizing autoscaling to enhance energy efficiency and resource utilization.",
      "signals": [
        "Assesses current infrastructure and application scalability",
        "Identifies underutilized resources that can be optimized through autoscaling",
        "Recommends initial autoscaling strategies to match demand without overprovisioning"
      ],
      "examples": [
        "Analyzed cloud resource usage to identify patterns and opportunities for autoscaling",
        "Proposed a basic autoscaling setup for a high-traffic web application to adjust resources dynamically",
        "Evaluated existing autoscaling configurations for optimization to reduce idle compute time"
      ]
    }, {
      "summary": "Develops and implements advanced autoscaling strategies, leveraging technology to dynamically and efficiently allocate resources.",
      "signals": [
        "Designs sophisticated autoscaling policies based on detailed usage analytics",
        "Integrates autoscaling with deployment pipelines for seamless scalability",
        "Measures and reports on the carbon footprint reduction achieved through improved autoscaling"
      ],
      "examples": [
        "Implemented a container orchestration system with custom autoscaling rules to minimize resource wastage",
        "Optimized autoscaling triggers and thresholds based on real-time demand and energy consumption data",
        "Conducted an impact analysis to quantify energy savings and carbon reduction from enhanced autoscaling practices"
      ]
    }, {
      "summary": "Pioneers innovative autoscaling solutions that serve as industry benchmarks, significantly improving energy efficiency and operational sustainability.",
      "signals": [
        "Innovates with new autoscaling technologies and frameworks for cloud infrastructure",
        "Leads cross-functional initiatives to embed sustainability into autoscaling practices",
        "Shares expertise through case studies, publications, or speaking engagements"
      ],
      "examples": [
        "Developed a predictive autoscaling algorithm that anticipates demand spikes, optimizing resource allocation",
        "Authored a white paper on the environmental benefits of intelligent autoscaling practices",
        "Spoke at a technology conference about integrating green computing principles with autoscaling"
      ]
    }, {
      "summary": "Establishes a comprehensive approach to sustainable autoscaling, influencing policy and standards while mentoring others to adopt best practices.",
      "signals": [
        "Creates guidelines and best practices for sustainable autoscaling in various environments",
        "Works with industry groups to set standards for environmentally friendly autoscaling",
        "Mentors other organizations in the adoption of green autoscaling methodologies"
      ],
      "examples": [
        "Led the formulation of an industry-wide standard for green autoscaling practices",
        "Implemented a mentorship program to help startups adopt sustainable autoscaling techniques",
        "Collaborated with cloud service providers to offer greener autoscaling options"
      ]
    }, {
      "summary": "Achieves global leadership in sustainable autoscaling, driving the adoption of practices that significantly reduce the IT sector's carbon footprint.",
      "signals": [
        "Champions global initiatives aimed at promoting sustainable autoscaling",
        "Influences international standards for energy-efficient computing",
        "Leads breakthrough research in autoscaling technologies that optimize for environmental sustainability"
      ],
      "examples": [
        "Headed a UN-backed project to promote sustainable autoscaling in developing countries",
        "Organized a global summit on sustainable cloud computing, with a focus on autoscaling",
        "Conducted a landmark study proving the effectiveness of autoscaling in reducing global data center energy use",
      ],
    }],
  },

  "EXTEND_LIFETIME": {
    "displayName": "Extend Hardware Lifetime",
    "category": "C",
    "description": "Evaluates strategies and practices to extend the operational lifetime of servers, focusing on reducing electronic waste and promoting sustainability in IT infrastructure.",
    "milestones": [{
      "summary": "Identifies initial practices and upgrades that can extend the life of existing servers without compromising performance.",
      "signals": [
        "Assesses current server utilization and operational efficiency",
        "Identifies servers at risk of early retirement and evaluates potential for upgrades",
        "Recommends basic hardware and software updates to prolong server lifespan"
      ],
      "examples": [
        "Performed an audit to identify underperforming servers with potential for memory upgrades",
        "Proposed a schedule for regular maintenance and firmware updates to extend server reliability",
        "Analyzed workload distribution and recommended consolidation to reduce strain on older hardware"
      ]
    }, {
      "summary": "Implements comprehensive strategies for lifecycle management, ensuring servers operate efficiently and sustainably for longer periods.",
      "signals": [
        "Designs and enforces a robust server lifecycle management policy",
        "Leads initiatives for hardware refurbishment and efficient workload management",
        "Tracks and quantifies the impact of extended server lifetimes on carbon footprint reduction"
      ],
      "examples": [
        "Initiated a server refurbishment program, replacing components instead of entire units",
        "Deployed virtualization technology to maximize the use of older servers",
        "Reported on the environmental benefits realized through extended server operation and reduced e-waste"
      ]
    }, {
      "summary": "Pioneers innovative approaches to server maintenance and optimization, setting new industry benchmarks for extending server lifetimes.",
      "signals": [
        "Researches and applies cutting-edge technologies for server efficiency and longevity",
        "Shares knowledge and best practices with the IT community on sustainable server management",
        "Evaluates the lifecycle impact of servers from procurement to decommissioning"
      ],
      "examples": [
        "Developed a predictive maintenance tool to preemptively address server issues, extending their useful life",
        "Authored a case study on successful server lifecycle extension, influencing industry practices",
        "Led a cross-industry workshop on sustainable practices for server management and optimization"
      ]
    }, {
      "summary": "Establishes comprehensive, sustainable server management frameworks that are widely adopted, drastically reducing the industry's environmental impact.",
      "signals": [
        "Creates scalable policies and frameworks for server lifecycle extension adopted by peers",
        "Mentors organizations in adopting sustainable server management practices",
        "Leads cross-industry initiatives to standardize eco-friendly server lifecycle management"
      ],
      "examples": [
        "Formulated a green computing standard for server management, leading to widespread industry adoption",
        "Implemented a mentorship program for companies looking to adopt green server technologies",
        "Collaborated with manufacturers to design servers optimized for longer lifespans and easier refurbishment"
      ]
    }, {
      "summary": "Achieves global recognition as a leader in sustainable server management, influencing policy, technology development, and operational practices towards significantly extended server lifetimes.",
      "signals": [
        "Champions global initiatives focused on reducing electronic waste through extended server use",
        "Influences international standards and policies for sustainable server lifecycle management",
        "Leads groundbreaking research into technologies and methodologies for server longevity"
      ],
      "examples": [
        "Keynoted at a UN conference on technology and sustainability, presenting a model for server lifecycle extension",
        "Directed a multinational research project on next-generation server design, focusing on durability and maintenance",
        "Played a pivotal role in forming an international agreement on standards for eco-friendly server production and decommissioning",
      ],
    }],
  },

  "GOVERNANCE": {
    "displayName": "Established Green Governance",
    "category": "D",
    "description": "Evaluates the effectiveness of governance structures in embedding sustainability principles across all levels of an organization, ensuring accountability and driving continuous improvement.",
    "milestones": [{
      "summary": "Assesses current governance frameworks to identify gaps and opportunities for integrating sustainability.",
      "signals": [
        "Reviews existing policies and procedures for sustainability inclusion",
        "Identifies lack of sustainability goals within governance structures",
        "Recommends initial steps for embedding sustainability into governance frameworks"
      ],
      "examples": [
        "Conducted a gap analysis on current governance practices against sustainability benchmarks",
        "Outlined a plan for including sustainability metrics in corporate governance reporting",
        "Suggested the formation of a sustainability committee within the board of directors"
      ]
    }, {
      "summary": "Implements changes to governance structures, incorporating clear sustainability targets and responsibilities.",
      "signals": [
        "Integrates sustainability objectives into corporate governance documents",
        "Establishes roles and responsibilities for sustainability within the organization",
        "Monitors and reports on sustainability performance to governance bodies"
      ],
      "examples": [
        "Revised company bylaws to include sustainability as a core component of business strategy",
        "Implemented a sustainability reporting mechanism for the executive team",
        "Defined KPIs for sustainability and integrated them into executive and departmental scorecards"
      ]
    }, {
      "summary": "Leads the development of advanced governance models that prioritize sustainability, setting industry standards for responsible business practices.",
      "signals": [
        "Pioneers innovative governance structures that fully integrate sustainability",
        "Shares insights and models with peers and industry bodies to promote wider adoption",
        "Evaluates and iterates on governance models to continually enhance sustainability integration"
      ],
      "examples": [
        "Developed a model for dual governance structures focused on sustainability and business performance",
        "Presented a case study at an industry conference on effective sustainability governance",
        "Led a review and refinement cycle for the governance model, incorporating stakeholder feedback for continuous improvement"
      ]
    }, {
      "summary": "Establishes comprehensive, effective governance frameworks that serve as a benchmark for sustainability integration in the industry, driving systemic change.",
      "signals": [
        "Creates governance frameworks that are recognized and adopted by other organizations",
        "Engages in policy development and advocacy to promote sustainability governance standards",
        "Mentors other companies in developing and implementing sustainability governance practices"
      ],
      "examples": [
        "Authored a guide on sustainability governance that became a reference in the industry",
        "Played a leading role in a working group developing a new standard for sustainability in corporate governance",
        "Consulted for multiple organizations, helping them establish their own sustainability governance frameworks"
      ]
    }, {
      "summary": "Achieves global leadership in sustainability governance, influencing policies, standards, and practices worldwide, and setting new norms for corporate responsibility.",
      "signals": [
        "Is recognized as a thought leader in sustainability governance, with significant influence on global standards",
        "Leads international initiatives to embed sustainability in corporate governance across industries",
        "Contributes to groundbreaking research and policy development for sustainability governance"
      ],
      "examples": [
        "Delivered a keynote address at a global summit on corporate sustainability, outlining a vision for governance integration",
        "Contributed to the development of an international guideline for sustainability governance recognized by governments and corporations",
        "Facilitated a series of roundtable discussions with global leaders on enhancing sustainability through governance",
      ],
    }],
  },

  "REALTIME_EMISSIONS": {
    "displayName": "Real-Time Emissions Data",
    "category": "D",
    "description": "Evaluates the implementation and effectiveness of systems for tracking and reporting real-time emissions data, facilitating immediate actions and long-term strategy adjustments for sustainability.",
    "milestones": [{
      "summary": "Initiates the integration of real-time emissions tracking systems to provide foundational data for sustainability efforts.",
      "signals": [
        "Identifies suitable technologies and platforms for emissions monitoring",
        "Sets up basic real-time emissions tracking for key operations",
        "Begins to use emissions data to inform simple sustainability decisions"
      ],
      "examples": [
        "Implemented a pilot program using IoT devices to monitor energy consumption and emissions in real-time",
        "Integrated emissions tracking into the company’s data dashboard for easy access",
        "Analyzed real-time emissions data to identify peak usage times and adjust operations accordingly"
      ]
    }, {
      "summary": "Enhances real-time emissions monitoring capabilities, using data to drive more significant sustainability initiatives and operational changes.",
      "signals": [
        "Expands the scope of emissions monitoring to cover broader operational areas",
        "Leverages advanced analytics to interpret emissions data and identify reduction opportunities",
        "Incorporates emissions insights into strategic planning and performance reporting"
      ],
      "examples": [
        "Upgraded the emissions tracking system to cover all data centers, significantly improving data accuracy",
        "Developed a dashboard feature that correlates emissions data with operational metrics, highlighting efficiency gains",
        "Used emissions data to justify the transition to renewable energy sources for several facilities"
      ]
    }, {
      "summary": "Leads the development and implementation of state-of-the-art real-time emissions tracking, setting benchmarks for sustainability in the industry.",
      "signals": [
        "Pioneers the adoption of next-generation technologies for granular emissions monitoring",
        "Shares expertise and findings with the industry to promote wide-scale adoption of emissions tracking",
        "Evaluates and optimizes the carbon footprint of products and services based on real-time data"
      ],
      "examples": [
        "Implemented a blockchain-based system for transparent and verifiable emissions tracking across the supply chain",
        "Published a white paper on the impact of real-time emissions data on corporate sustainability strategies",
        "Hosted a seminar on innovative emissions monitoring technologies, attended by industry leaders"
      ]
    }, {
      "summary": "Establishes comprehensive systems for real-time emissions tracking and reporting that influence global standards and drive significant environmental improvements.",
      "signals": [
        "Creates a scalable framework for emissions monitoring that is adopted by peers and across industries",
        "Engages with regulatory bodies to influence policy-making based on real-time emissions data",
        "Mentors organizations in developing and implementing effective emissions tracking systems"
      ],
      "examples": [
        "Developed an open-source platform for real-time emissions monitoring, widely adopted across sectors",
        "Played a pivotal role in establishing a new global standard for emissions reporting in the tech industry",
        "Launched a consultancy service to help other companies implement and benefit from real-time emissions tracking"
      ]
    }, {
      "summary": "Achieves global leadership in the field of real-time emissions monitoring, driving technological innovation and policy changes that significantly reduce the environmental impact of business operations.",
      "signals": [
        "Leads international collaborations to innovate and implement cutting-edge emissions tracking technologies",
        "Influences significant policy shifts and sustainability standards globally based on real-time emissions insights",
        "Directs groundbreaking research into new methods for reducing emissions through immediate data-driven action"
      ],
      "examples": [
        "Spearheaded a global initiative to use AI and IoT for dynamic emissions tracking and reduction",
        "Influenced the UN's adoption of real-time emissions monitoring in their sustainability reporting guidelines",
        "Conducted a landmark study demonstrating the effectiveness of real-time data in achieving carbon neutrality",
      ],
    }],
  },

  "POLICIES": {
    "displayName": "Policy Framework",
    "category": "D",
    "description": "Evaluates the development and implementation of policy frameworks within an organization to support sustainable practices, ensuring they align with environmental goals and compliance requirements.",
    "milestones": [{
      "summary": "Assesses the current state of policy frameworks in supporting sustainability goals and identifies areas for improvement.",
      "signals": [
        "Reviews existing policies for sustainability alignment",
        "Identifies gaps in policies that could better support environmental objectives",
        "Recommends foundational policies to start aligning operations with sustainability goals"
      ],
      "examples": [
        "Conducted a review of the company’s procurement policies to identify lack of environmental considerations",
        "Outlined a plan for integrating sustainability criteria into existing operational policies",
        "Suggested the introduction of a remote work policy to reduce commuting-related carbon emissions"
      ]
    }, {
      "summary": "Develops and implements comprehensive policy frameworks that explicitly support and drive sustainability initiatives across the organization.",
      "signals": [
        "Drafts and integrates sustainability-focused policies into corporate governance",
        "Establishes accountability structures for sustainability policy adherence",
        "Monitors the impact of policy changes on sustainability outcomes"
      ],
      "examples": [
        "Implemented a green IT policy mandating the use of energy-efficient devices and practices",
        "Established a sustainability committee responsible for overseeing policy compliance",
        "Reported on the environmental and operational benefits realized from new sustainability policies"
      ]
    }, {
      "summary": "Leads the advancement of innovative policy frameworks that set new standards for sustainability in the industry.",
      "signals": [
        "Pioneers policy innovations that significantly reduce environmental impact",
        "Shares successful policy frameworks with the wider industry to encourage adoption",
        "Assesses the long-term impact of sustainability policies on business and environmental performance"
      ],
      "examples": [
        "Developed a zero-waste policy for all company operations, significantly reducing landfill contributions",
        "Published a case study on the company’s successful sustainable procurement policy",
        "Organized a conference panel to discuss policy-driven sustainability transformations in businesses"
      ]
    }, {
      "summary": "Establishes a strategic vision for policy-driven sustainability, influencing industry-wide adoption and promoting global environmental standards.",
      "signals": [
        "Creates scalable and replicable policy frameworks that become industry benchmarks",
        "Works with external bodies to advocate for and develop global sustainability standards",
        "Mentors other organizations in developing and executing effective sustainability policies"
      ],
      "examples": [
        "Played a key role in forming an industry coalition to standardize sustainability policies",
        "Consulted for international organizations on incorporating sustainability into policy frameworks",
        "Led a task force that published a widely adopted guide on sustainability policies for businesses"
      ]
    }, {
      "summary": "Achieves global recognition as a leader in sustainability policy development, driving significant changes in corporate practices and regulatory standards.",
      "signals": [
        "Champions global initiatives aimed at establishing sustainable policies in businesses",
        "Influences significant policy and regulatory changes at the governmental level",
        "Leads cutting-edge research into policy impacts on sustainability, setting new directions for global practices"
      ],
      "examples": [
        "Keynoted at a UN conference on the role of corporate policy in achieving sustainability targets",
        "Contributed to the development of international guidelines for corporate sustainability practices",
        "Directed a global research project on the effectiveness of policy measures in reducing corporate carbon footprints",
      ],
    }],
  },


  "PROCUREMENT": {
    "displayName": "Green Procurement ",
    "category": "D",
    "description": "Evaluates the adoption and effectiveness of green procurement practices, focusing on sourcing environmentally friendly products and services to reduce the organization's carbon footprint and promote sustainability.",
    "milestones": [{
      "summary": "Initiates the integration of green procurement practices, identifying opportunities to adopt more sustainable purchasing decisions.",
      "signals": [
        "Assesses current procurement policies for environmental impact considerations",
        "Identifies key suppliers and products for sustainability improvement",
        "Recommends initial steps towards greener procurement practices"
      ],
      "examples": [
        "Conducted an audit of existing suppliers to evaluate their sustainability credentials",
        "Implemented a pilot program to prioritize eco-friendly office supplies",
        "Developed criteria for assessing the environmental impact of purchased goods and services"
      ]
    }, {
      "summary": "Enhances procurement strategies to prioritize sustainability, demonstrating a commitment to reducing environmental impacts through purchasing decisions.",
      "signals": [
        "Adopts comprehensive green procurement policies across the organization",
        "Engages with suppliers to encourage and facilitate more sustainable practices",
        "Measures and reports on the environmental benefits achieved through green procurement"
      ],
      "examples": [
        "Transitioned to a fully renewable energy supplier for company facilities",
        "Organized a supplier sustainability workshop to share best practices and expectations",
        "Reported annual reductions in carbon emissions achieved through sustainable procurement decisions"
      ]
    }, {
      "summary": "Leads innovative approaches in green procurement, setting new standards for environmental responsibility in supply chain management.",
      "signals": [
        "Pioneers the development of industry-leading sustainable procurement frameworks",
        "Influences broader market demand for sustainable products and services",
        "Shares knowledge and resources to promote green procurement practices widely"
      ],
      "examples": [
        "Developed a sustainability rating system for evaluating and selecting suppliers",
        "Played a leading role in a consortium aimed at increasing demand for recycled materials",
        "Published a white paper on the impact of green procurement on reducing supply chain emissions"
      ]
    }, {
      "summary": "Establishes comprehensive green procurement programs that serve as benchmarks for the industry, driving significant reductions in environmental impact.",
      "signals": [
        "Creates scalable and replicable green procurement strategies adopted by peers",
        "Engages with policy makers to advocate for regulatory support of green procurement",
        "Mentors other organizations in implementing effective green procurement practices"
      ],
      "examples": [
        "Launched an open-source platform for sharing information on sustainable suppliers",
        "Contributed to the development of a national policy on green procurement for public sector organizations",
        "Provided consultancy to several Fortune 500 companies on establishing green procurement processes"
      ]
    }, {
      "summary": "Achieves global leadership in green procurement, influencing supply chains and procurement practices worldwide towards greater sustainability.",
      "signals": [
        "Champions global initiatives focused on transforming procurement practices to prioritize environmental sustainability",
        "Influences international standards and agreements on sustainable procurement",
        "Leads groundbreaking research and development in sustainable procurement methodologies"
      ],
      "examples": [
        "Keynoted at a global summit on sustainable development, presenting a model for green procurement",
        "Played a pivotal role in establishing an international agreement on green supply chain standards",
        "Directed a multinational project on innovative procurement practices, significantly reducing the carbon footprint of participating companies",
      ],
    }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
