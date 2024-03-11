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
    "description": "Fostering sustainable practices and GreenOps within all technological initiatives.",
    "milestones": [{
      "summary": "Recognition and initial adoption of sustainable guidelines.",
      "signals": [
        "Initial recognition of sustainability as a value in tech projects.",
        "Exploration of basic resources on sustainable software engineering."
      ],
      "examples": [
        "Attendance at a webinar on green computing.",
        "Reading articles on the impact of IT operations on the environment."
      ]
    }, {
      "summary": "Recognition and initial adoption of sustainable guidelines.",
      "signals": [
        "Basic understanding of sustainability in software projects.",
        "Initial efforts to apply eco-friendly practices in development.",
        "Adoption of energy-efficient coding practices."
      ],
      "examples": [
        "Optimization for reduced power consumption in applications.",
        "Integration of eco-friendly libraries."
      ]
    }, {
      "summary": "Leadership in sustainable architecture and practices.",
      "signals": [
        "Innovation in GreenOps methodologies.",
        "Significant contributions to the adoption of green practices across projects."
      ],
      "examples": [
        "Development of energy-efficient algorithms.",
        "Transition to green cloud hosting providers."
      ]
    }, {
      "summary": "Influential frameworks for sustainability that set industry standards.",
      "signals": [
        "Creation of scalable, eco-conscious systems as benchmarks.",
        "Mentorship in advanced GreenOps strategies."
      ],
      "examples": [
        "Design of a zero-emission data center strategy.",
        "Leadership in cross-industry forums on sustainable computing."
      ]  
    }, {
      "summary": "Global leadership in shaping the future of green technology.",
      "signals": [
        "Visionary sustainability goals that mobilize the industry.",
        "Innovation with groundbreaking eco-friendly technologies."
      ],
      "examples": [
        "Keynote speeches at sustainability conferences.",
        "Development of open-source tools for carbon footprint analysis."
      ],
    }],
  },
  
  "PROCESSES": {
    "displayName": "Processes",
    "category": "A",
    "description": "Develops and refines eco-friendly operational processes within software development lifecycle.",
    "milestones": [{
      "summary": "Initial understanding and integration of green processes.",
      "signals": [
        "Awareness of the need for sustainability in development processes.",
        "Beginning to explore green coding standards and tools."
      ],
      "examples": [
        "Introduction of basic eco-friendly guidelines for projects.",
        "Initial discussions on incorporating sustainability into the development lifecycle."
      ]
    }, {
      "summary": "Integration of basic green processes into development.",
      "signals": [
        "Adoption of tools for tracking energy consumption in development and testing.",
        "Implementation of eco-friendly requirements in project planning."
      ],
      "examples": [
        "Use of a linter for sustainable coding practices.",
        "Inclusion of sustainability checkpoints in release checklists."
      ]
    }, {
      "summary": "Optimization of processes for enhanced sustainability.",
      "signals": [
        "Revamping development pipelines for sustainability checks.",
        "Leading green refactoring efforts for efficiency."
      ],
      "examples": [
        "Integration of carbon footprint analysis into CI/CD pipelines.",
        "Establishment of regular energy consumption audits."
      ]
    }, {
      "summary": "Championing sustainable process innovations.",
      "signals": [
        "Development of cutting-edge methodologies for green software lifecycle management.",
        "Influencing adoption of green processes across projects."
      ],
      "examples": [
        "Creation of a zero-waste deployment strategy.",
        "Pioneering new, energy-efficient testing frameworks."
      ]
    },{
      "summary": "Leadership in sustainable development practices.",
      "signals": [
        "Setting new industry standards for eco-friendly development processes.",
        "Mentoring others in sustainable software lifecycle management."
      ],
      "examples": [
        "Formulating comprehensive guidelines for green software engineering.",
        "Leading cross-industry collaborations to promote software optimization."
      ]
    }],
  },

  "COMMITMENTS": {
    "displayName": "Commitments",
    "category": "A",
    "description": "Embeds a culture of responsibility and accountability for sustainability within organizations, ensuring commitments lead to tangible outcomes.",
    "milestones": [{
      "summary": "Awareness of the need for sustainability commitments.",
      "signals": [
        "Beginning to understand the importance of sustainability in organizational practices.",
        "Initial discussions on setting sustainability targets."
      ],
      "examples": [
        "Informal team discussions on the impact of IT operations on the environment.",
        "Review of industry standards for sustainability commitments."
      ]
    }, {
      "summary": "Setting foundational sustainability commitments.",
      "signals": [
        "Identifying specific sustainability targets for projects.",
        "Starting to integrate sustainability considerations into project planning."
      ],
      "examples": [
        "Establishing a baseline for the carbon footprint of IT infrastructure.",
        "Defining energy efficiency goals for new software projects."
      ]
    }, {
      "summary": "Deepening commitment with actionable sustainability goals.",
      "signals": [
        "Projects led with sustainability as a core objective.",
        "Implementation of solutions to achieve and surpass sustainability targets."
      ],
      "examples": [
        "Exceeding carbon reduction targets through cloud optimization.",
        "Initiating a company-wide challenge to foster sustainable habits."
      ]
    }, {
      "summary": "Championing transformative sustainability initiatives.",
      "signals": [
        "Pioneering adoption of groundbreaking green technologies.",
        "Influencing organizational strategy to prioritize sustainability."
      ],
      "examples": [
        "Strategic shift to renewable energy sources for company data centers.",
        "Development and implementation of proprietary green technologies."
      ]
    }, {
      "summary": "Global leadership in sustainability commitments.",
      "signals": [
        "Setting visionary sustainability targets that inspire industry-wide action.",
        "Leveraging influence to advocate for policy changes that promote sustainability."
      ],
      "examples": [
        "Spearheading successful initiatives to achieve corporate carbon neutrality.",
        "Playing a key role in establishing international standards for sustainable software practices."
      ]
    }],
  },
   
  "AWARENESS": {
    "displayName": "Awareness",
    "category": "A",
    "description": "Cultivates and spreads awareness on the importance of sustainability in software engineering, fostering a culture of responsibility and innovation.",
    "milestones": [{
      "summary": "Initial recognition of sustainability in tech.",
      "signals": [
        "Basic understanding of the environmental impact of technology.",
        "Starting conversations about sustainability in technology within immediate circles."
      ],
      "examples": [
        "Sharing articles on green computing with peers.",
        "Engaging in discussions about the importance of eco-friendly practices in software development."
      ]
    }, {
      "summary": "Promoting basic sustainability concepts within teams or organizations.",
      "signals": [
        "Introducing sustainability topics in team meetings or discussions.",
        "Encouraging colleagues to consider environmental impacts in their projects."
      ],
      "examples": [
        "Organizing a lunch-and-learn session on sustainability in IT.",
        "Incorporating green tips in internal newsletters."
      ]
    }, {
      "summary": "Embedding sustainability into organizational culture.",
      "signals": [
        "Leading projects or initiatives with a focus on sustainability.",
        "Mentoring peers on sustainable development practices."
      ],
      "examples": [
        "Launching a green coding challenge within the company.",
        "Facilitating workshops on energy-efficient programming."
      ]
    }, {
      "summary": "Influencing the broader industry towards sustainable practices.",
      "signals": [
        "Speaking at industry events about sustainability in software development.",
        "Contributing to open-source projects focused on green technologies."
      ],
      "examples": [
        "Publishing a case study on a successful sustainability initiative.",
        "Organizing a regional conference on sustainable computing."
      ]
    }, {
      "summary": "Global leadership in promoting sustainability awareness.",
      "signals": [
        "Leading global campaigns or educational programs on tech sustainability.",
        "Shaping industry standards and policies on sustainability."
      ],
      "examples": [
        "Developing a widely adopted curriculum on sustainable software engineering.",
        "Keynote speaking at international forums on the role of technology in achieving sustainability goals."
      ],
    }],
  },  

  "SOFTWARE_OPTIMISATION": {
    "displayName": "Software Optimisation",
    "category": "B",
    "description": "Enhances software for maximum energy efficiency and minimal environmental impact, utilizing cutting-edge sustainable software engineering practices.",
    "milestones": [{
      "summary": "Awareness and initial exploration of software optimization for sustainability.",
      "signals": [
        "Understanding the basics of energy-efficient software development.",
        "Beginning to explore tools and techniques for reducing software’s environmental impact."
      ],
      "examples": [
        "Researching best practices for energy-efficient coding.",
        "Analyzing current software projects for optimization opportunities."
      ]
    }, {
      "summary": "Applying basic optimizations to improve software energy efficiency.",
      "signals": [
        "Adopting straightforward practices for reducing power consumption.",
        "Starting to use tools for analyzing and improving software’s carbon footprint."
      ],
      "examples": [
        "Refactoring code to improve efficiency and reduce energy use.",
        "Integrating an energy efficiency analysis tool into the development process."
      ]
    }, {
      "summary": "Significant software optimization projects demonstrating reductions in energy use.",
      "signals": [
        "Implementing advanced techniques and technologies for energy efficiency.",
        "Advocating for and adopting green coding standards across projects."
      ],
      "examples": [
        "Architecting software solutions that leverage energy-efficient design patterns.",
        "Contributing to or initiating projects focused on reducing software energy consumption."
      ]
    }, {
      "summary": "Leading innovation in sustainable software practices.",
      "signals": [
        "Developing new methodologies or tools for software sustainability.",
        "Influencing the broader software development community towards energy efficiency."
      ],
      "examples": [
        "Creating a widely used open-source tool for energy-efficient software development.",
        "Publishing research or case studies on successful software optimization efforts."
      ]
    }, {
      "summary": "Global authority on software optimization for sustainability.",
      "signals": [
        "Setting global standards for energy-efficient software development.",
        "Leading international efforts to promote sustainable software practices."
      ],
      "examples": [
        "Spearheading the development of international guidelines for software energy efficiency.",
        "Organizing global summits on sustainable software engineering, drawing participants from across the industry."
      ],
    }],
  },

  "DESIGN_PRINCIPLES": {
    "displayName": "Design Principles",
    "category": "B",
    "description": "Emphasizes the adoption and advocacy of sustainable design principles in software development to achieve eco-efficiency and innovation.",
    "milestones": [{
      "summary": "Initial awareness of sustainable design in software development.",
      "signals": [
        "Exploring the impact of design decisions on software sustainability.",
        "Beginning to understand the importance of eco-friendly design principles."
      ],
      "examples": [
        "Researching articles and resources on sustainable design.",
        "Discussing the potential for incorporating green design in current projects."
      ]
    }, {
      "summary": "Integration of basic sustainable design principles into projects.",
      "signals": [
        "Applying eco-friendly design guidelines to new and existing projects.",
        "Considering the environmental impact in the choice of technologies and platforms."
      ],
      "examples": [
        "Choosing lightweight frameworks to reduce energy consumption.",
        "Designing features that encourage users to select energy-saving options."
      ]
    }, {
      "summary": "Advancing the application of sustainable design principles.",
      "signals": [
        "Leading projects that exemplify best practices in eco-friendly design.",
        "Promoting sustainable design practices within the team or organization."
      ],
      "examples": [
        "Implementing advanced features with minimal environmental impact.",
        "Hosting workshops or writing articles on sustainable design techniques."
      ]
    }, {
      "summary": "Pioneering new sustainable design methodologies.",
      "signals": [
        "Developing innovative tools and frameworks that promote eco-friendly design.",
        "Influencing the broader software design community towards sustainability."
      ],
      "examples": [
        "Creating a widely adopted toolkit for assessing software design sustainability.",
        "Leading discussions at industry conferences on green design principles."
      ]
    }, {
      "summary": "Establishing global leadership in sustainable software design.",
      "signals": [
        "Setting industry benchmarks for eco-friendly software development.",
        "Championing global initiatives that promote sustainable design practices."
      ],
      "examples": [
        "Developing international standards for sustainable software design.",
        "Organizing global forums that foster innovation in eco-efficient design."
      ],
    }],
  }, 
  
  "SCI": {
    "displayName": "Carbon-Aware Software",
    "category": "B",
    "description": "Focuses on developing and promoting software that actively reduces its carbon footprint, leveraging data and technology to make informed decisions about energy use.",
    "milestones": [{
      "summary": "Beginning awareness of carbon footprint in software development.",
      "signals": [
        "Exploring the basics of carbon-aware computing.",
        "Understanding the impact of software design and development on carbon emissions."
      ],
      "examples": [
        "Researching tools and practices for measuring software carbon emissions.",
        "Initial discussions on how software choices affect energy consumption and carbon footprint."
      ]
    }, {
      "summary": "Integrating carbon-aware practices into development processes.",
      "signals": [
        "Adopting tools for carbon footprint calculation in software projects.",
        "Making initial changes to software design and development to reduce carbon emissions."
      ],
      "examples": [
        "Optimizing application's data processing to lower energy use.",
        "Incorporating carbon-aware considerations in software design documentation."
      ]
    }, {
      "summary": "Enhancing software solutions with carbon efficiency as a core goal.",
      "signals": [
        "Implementing significant software features or changes aimed at reducing carbon emissions.",
        "Promoting and sharing knowledge on carbon-efficient software development within the organization."
      ],
      "examples": [
        "Developing a feature that minimizes resource use based on real-time carbon intensity data.",
        "Leading a team or project with carbon-aware goals and measuring the impact."
      ]
    }, {
      "summary": "Pioneering advanced carbon-aware software projects and methodologies.",
      "signals": [
        "Creating innovative solutions that significantly lower software’s carbon footprint.",
        "Influencing broader adoption of carbon-aware practices through leadership and advocacy."
      ],
      "examples": [
        "Developing a widely used open-source tool for carbon-aware software development.",
        "Publishing a case study on a project that achieved substantial carbon emission reductions."
      ]
    }, {
      "summary": "Global leadership in carbon-aware software development.",
      "signals": [
        "Setting global standards and leading major initiatives for carbon-aware computing.",
        "Driving the technology industry towards more sustainable practices through innovation and advocacy."
      ],
      "examples": [
        "Spearheading the development of international guidelines for carbon-aware software.",
        "Leading a global consortium focused on reducing the carbon footprint of digital infrastructure."
      ],
    }],
  },


  "EFFICIENT_LANGUAGE": {
    "displayName": "Efficient Programming Languages",
    "category": "B",
    "description": "Advocates for the selection and use of programming languages and frameworks that optimize for energy efficiency, thereby reducing the carbon footprint of software.",
    "milestones": [{
      "summary": "Awareness of the energy impact of programming languages.",
      "signals": [
        "Beginning to explore the energy efficiency of different programming languages.",
        "Understanding the importance of language selection in sustainable software development."
      ],
      "examples": [
        "Comparative study of programming languages for energy consumption.",
        "Initial discussions on energy-efficient programming practices."
      ]
    }, {
      "summary": "Initial adoption of energy-efficient languages in projects.",
      "signals": [
        "Making conscious choices of programming languages based on their energy efficiency for new developments.",
        "Advocating for and implementing parts of projects in more energy-efficient languages."
      ],
      "examples": [
        "Selecting Go for its efficiency in a new backend project.",
        "Experimenting with Rust to optimize performance and energy use in compute-intensive tasks."
      ]
    }, {
      "summary": "Strategic implementation of energy-efficient programming languages.",
      "signals": [
        "Systematic use of energy-efficient languages in projects demonstrating significant energy savings.",
        "Sharing knowledge and promoting the use of efficient languages within the organization."
      ],
      "examples": [
        "Major refactoring of a service to a more efficient language resulting in lower energy consumption.",
        "Leading a workshop on the benefits of energy-efficient programming languages."
      ]
    }, {
      "summary": "Innovation and advocacy for energy-efficient programming practices.",
      "signals": [
        "Pioneering the development of frameworks or tools that facilitate energy-efficient coding.",
        "Influencing the broader tech community towards adopting sustainable programming languages."
      ],
      "examples": [
        "Creating a widely used library that aids in developing energy-efficient software.",
        "Speaking at conferences about the importance of programming language choice on energy consumption."
      ]
    }, {
      "summary": "Global leadership in promoting energy-efficient programming.",
      "signals": [
        "Establishing guidelines and best practices for energy-efficient programming that are adopted internationally.",
        "Leading global initiatives that advocate for the prioritization of energy efficiency in software development."
      ],
      "examples": [
        "Playing a key role in forming a global consortium for sustainable software practices.",
        "Authoring influential research on the impact of programming language efficiency on software’s carbon footprint."
      ],
    }],
  },

  "INFRA_OPTIMISATION": {
    "displayName": "Infrastructure Optimisation",
    "category": "C",
    "description": "Evaluates a company's IT infrastructure to identify opportunities for energy efficiency and carbon footprint reduction, recommending strategies for optimization.",
    "milestones": [{
      "summary": "Initial awareness and assessment of IT infrastructure's energy use.",
      "signals": [
        "Recognizing the importance of energy efficiency in IT infrastructure.",
        "Starting to assess current infrastructure for inefficiencies."
      ],
      "examples": [
        "Basic audit of server utilization and energy consumption.",
        "Identification of underutilized resources that contribute to unnecessary energy use."
      ]
    }, {
      "summary": "Implementing basic optimization strategies for energy efficiency.",
      "signals": [
        "Applying straightforward measures to reduce energy consumption.",
        "Making initial improvements based on the assessments."
      ],
      "examples": [
        "Consolidation of servers to reduce idle power usage.",
        "Upgrading to more energy-efficient cooling solutions."
      ]
    }, {
      "summary": "Systematic optimization of infrastructure for improved sustainability.",
      "signals": [
        "Developing and executing detailed plans for infrastructure overhaul.",
        "Achieving measurable improvements in energy efficiency and carbon reduction."
      ],
      "examples": [
        "Implementation of virtualization to improve server utilization.",
        "Introduction of renewable energy sources for powering data centers."
      ]
    }, {
      "summary": "Leading innovation in sustainable IT infrastructure solutions.",
      "signals": [
        "Pioneering the adoption of cutting-edge technologies for sustainability.",
        "Sharing successful strategies and advocating for sustainable infrastructure practices."
      ],
      "examples": [
        "Deployment of an AI-driven system for dynamic energy management.",
        "Publishing case studies on successful optimization projects."
      ]
    }, {
      "summary": "Global leadership in sustainable IT operations and infrastructure.",
      "signals": [
        "Setting industry benchmarks and influencing policy for green IT operations.",
        "Leading transformative changes that significantly reduce the tech industry's environmental impact."
      ],
      "examples": [
        "Contributing to the development of global standards for energy-efficient data centers.",
        "Spearheading initiatives for the adoption of sustainable practices in IT infrastructure worldwide."
      ],
    }],
  },

  "ENERGY_EFFICIENCY": {
    "displayName": "Energy Efficiency",
    "category": "C",
    "description": "Conducts comprehensive evaluations of a company's energy use across software, hardware, and processes, identifying strategies to enhance efficiency and reduce environmental impact.",
    "milestones": [{
      "summary": "Initial recognition of the importance of energy efficiency.",
      "signals": [
        "Becoming aware of energy consumption patterns and their impacts.",
        "Starting to identify high-energy consumption areas for improvement."
      ],
      "examples": [
        "Basic energy use audits to highlight inefficient systems.",
        "Discussions on the potential for energy saving within current operations."
      ]
    }, {
      "summary": "Implementation of basic measures to improve energy efficiency.",
      "signals": [
        "Applying simple adjustments and optimizations to reduce energy use.",
        "Engaging in energy efficiency training and beginning to track improvements."
      ],
      "examples": [
        "Adoption of energy-efficient lighting and low-power devices.",
        "Introduction of power management settings for computers and servers."
      ]
    }, {
      "summary": "Strategic improvements and adoption of energy-efficient technologies.",
      "signals": [
        "Systematic approach to reducing energy use through technology upgrades and process optimizations.",
        "Monitoring and measuring the impact of implemented energy-saving initiatives."
      ],
      "examples": [
        "Upgrading to energy-efficient server hardware.",
        "Optimizing software and systems for better energy use."
      ]
    }, {
      "summary": "Innovating and leading in energy efficiency measures.",
      "signals": [
        "Developing new strategies and technologies for significant energy savings.",
        "Promoting and sharing successful practices within the industry."
      ],
      "examples": [
        "Implementing a company-wide renewable energy program.",
        "Publishing a case study on a successful energy-saving project."
      ]
    }, {
      "summary": "Global influence and leadership in energy-efficient practices.",
      "signals": [
        "Setting international standards for energy efficiency in technology.",
        "Leading global initiatives and partnerships to promote sustainable energy use."
      ],
      "examples": [
        "Influencing policy changes to support energy efficiency.",
        "Organizing international conferences focused on sustainability in tech."
      ],
    }],
  },

  "AUTOSCALING": {
    "displayName": "Autoscaling",
    "category": "C",
    "description": "Evaluates the effectiveness and efficiency of autoscaling practices within a company's IT infrastructure, aiming to optimize resource use and minimize environmental impact.",
    "milestones": [{
      "summary": "Initial awareness of autoscaling benefits for energy efficiency.",
      "signals": [
        "Understanding basic concepts of autoscaling and its potential to improve energy efficiency.",
        "Identifying opportunities where autoscaling could be applied or optimized."
      ],
      "examples": [
        "Basic research on autoscaling technologies.",
        "Initial discussions about implementing autoscaling in existing projects."
      ]
    }, {
      "summary": "Basic implementation of autoscaling to improve resource efficiency.",
      "signals": [
        "Setting up simple autoscaling for key applications based on demand.",
        "Beginning to measure the impact of autoscaling on resource utilization and energy consumption."
      ],
      "examples": [
        "Introduction of basic autoscaling rules for cloud-based services.",
        "Pilot testing of autoscaling to understand its effects on energy use."
      ]
    }, {
      "summary": "Enhanced application of autoscaling strategies for better efficiency.",
      "signals": [
        "Refining autoscaling policies to dynamically match computing resources with actual demand.",
        "Documenting and analyzing the improvements in energy efficiency and cost savings."
      ],
      "examples": [
        "Optimization of autoscaling triggers to reduce waste during low traffic periods.",
        "Expansion of autoscaling practices across more applications and services."
      ]
    }, {
      "summary": "Pioneering advanced autoscaling solutions and practices.",
      "signals": [
        "Innovating with new technologies and strategies for more effective autoscaling.",
        "Leading the organization or industry in adopting sophisticated autoscaling techniques."
      ],
      "examples": [
        "Development of predictive autoscaling algorithms that anticipate load changes.",
        "Sharing successful case studies on autoscaling at tech conferences."
      ]
    }, {
      "summary": "Global leadership in sustainable autoscaling practices.",
      "signals": [
        "Establishing benchmarks and best practices for autoscaling that prioritize environmental sustainability.",
        "Driving the adoption of advanced autoscaling techniques worldwide."
      ],
      "examples": [
        "Influencing policy and standards on sustainable IT practices through advocacy of effective autoscaling.",
        "Organizing international workshops or webinars to promote energy-efficient autoscaling."
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
