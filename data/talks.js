const talks = [
  {
    id: 1,
    title: 'Logging, Metrics and Events in ASP.NET Core',
    description:
      "Providing decent monitoring of your applications has always been considered the boring part of development, with tons of boilerplate code, and making upfront decisions around how it will be done, or retrofit afterwards.  However, with dotnet core, things have changed, it's never been easier to implement effective visibility into how your application is performing in production.\n\nIn this session I will cover the fundamental differences between Metrics and Logs, and Events and look at where one is useful over the other.\n\nWe’ll look at some of the things Microsoft has done in dotnet core to make logging easier, and some of the third-party libraries and tools that aim to make it easier to navigate.\n\nWe’ll cover tools like Serilog and Log4Net, along with AppMetrics for capturing application information. We’ll then take a quick look at Grafana, and see how we can make some sense of that information.  Finally, we'll look at Honeycomb.io and how they're providing actionable insights for distributed systems using events, enabling testing in production.",
    level: 'Introductory and overview',
    tags: [
      'devops',
      'observability',
      'metrics/dashboarding',
      'monitoring',
    ],
  },
  {
    id: 2,
    title: 'Functional Programming with C#',
    description:
      "Functional Programming is becoming increasingly popular and relevant with each year that goes by.  With so much discussion around languages such as F#, Haskell and Erlang, it can seem as though getting started with Functional programming would mean first learning a whole new syntax...but what if it didn't?\n\nMost .NET developers are familiar with the use of Linq, and basic constructs such as IEnumerable, Func delegates, arrow functions and ternary expressions, but did you know that you can use all of this to implement some of the most powerful patterns and techniques from the world of functional programming?\n\nThis talk will demonstrate how, using only familiar features available in out-of-the-box C#, to write Functional code that is:\n\n* More robust\n* Easier to read\n* Easier to maintain\n\nAs well as these benefits, Functional code is a great enabler for the use of concurrency with Async functions and Serverless applications with technologies such as Azure Functions.  \n\nThis talk might be of interest to anyone looking into moving to a new platform, or in improving the scalability of an existing application, or even just interested in seeing what Functional Programming is all about, but all within the comfort of a familiar language.  \n\nWe might even attempt the impossible, and explain what a Monad is!",
    level: 'Intermediate',
    tags: ['functional programming', '.net'],
  },
  {
    id: 3,
    title: 'IoT with nothing but your laptop',
    description:
      "Although the cost of IoT hardware has reduced dramatically over the last few years, you still need to choose the right IoT option, figure out what accessories it needs, order it all from Amazon and wait for it to arrive. By that point, you’ve moved on to something else entirely, so it sits in a cupboard drawer for a year and a half before you get back around to thinking about it…. Then you realise that you need some components and wires… Back in the drawer, it goes!\n\nWith the advent of HTML 5, so comes the ability to simulate a lot of IoT kit right there in your web browser. We'll walk through a few of the best online simulators for IoT technology, which will give you a head start into the world of IoT. This way you can forgo all the procrastinating, and get to (virtually) creating!",
    level: 'Intermediate',
    tags: ['iot', 'cloud', 'hardware'],
  },
  {
    id: 4,
    title: '27 days latter',
    description:
      "As developers, we have all developed sites, products and services for other people and business, but how many of us develop our own?\n\nFollowing the 'Side Hustle' guide and its 27 day process I will document and report back on what happens for each of these days.   Using free services and my development experience to build something for myself?\n\nThe talk will go through each day, what happened and what I learnt.",
    level: 'Introductory and overview',
    tags: ['softskills/workskills', 'business startup'],
  },
  {
    id: 5,
    title: 'The History of AI',
    description:
      'Nowadays AI is all the hype, but what many might not know is that AI is an established discipline originating from a paper from Alan Turing in the 1950s. In this talk I will present the historical milestones of AI from the originating paper up until present days.  In addition we will look into the crystal ball in order to see what the future might have in store.\n\nWe will start out our journey by looking at what happened in a workshop in Dartmouth in the 1950’s which started it all. Then we’ll be reviewing a number of areas where AI initially was put to use between 1950-1970. We’ll cover the AI winter in the 1980’s and its’ reasons. \n\nIn the second part of the talk we’ll cover applications and milestones from the 1990’s and onwards. Finally we’ll look into the crystal ball and try to see where AI might takes us in the future.',
    level: 'Introductory and overview',
    tags: ['machine learning', 'artificial intelligence'],
  },
  {
    id: 6,
    title: 'Affective Computing - What is it and why should I care?',
    description:
      'Research have shown that emotions play an integral role in decision making, cognition, perception, learning and more. If we want our computers to be intelligent and be able to interact with us we need to ensure that they are able to recognize, understand and express emotions. This is the basic assumption of the field of Affective Computing. In this talk I will give an overview of Affective computing and how it can be applied. \n\nFirst I will give an introduction to the field starting with established findings from the field of psychology on how we best can measure emotions.\n\nThen I will describe how the field of Affective Computing has transformed from its origin in the 90’s until now when it is an established research field. I will highlight some of the technology enablers that has made Affective Computing a hot topic nowadays and give some examples of API and services that we as developers can use as of today. \n\nIn the second part of my talk I will give some examples on application scenarios across various fields (retail, medical, education and social). After that I will be show casing what is in the front line now. I will conclude my presentation with some recommendations on how this affects us as developers going forward.',
    level: 'Introductory and overview',
    tags: ['machine learning', 'artificial intelligence'],
  },
  {
    id: 7,
    title:
      'How to make a multi-lingual chatbot and use it in a Xamarin Forms application',
    description:
      'Chatbots are commonly used in a wide range of user scenarios such as ordering pizzas, product suggestions, schedule meetings or customer support. But how can we as Microsoft developers make our own chatbot? \n\nIn this session I will demonstrate how you can make a chatbot by using the Microsoft Bot Framework together with LUIS (Language Understanding Intelligent Services). The chatbot will be multi-lingual meaning it will adapt in real-time according to the user’s language (i.e. switching from English->Spanish->Norwegian).\n\nFinally we will integrate our chatbot in Xamarin Forms application and demonstrate how we can use this in a mobile scenario.',
    level: 'Introductory and overview',
    tags: ['machine learning', 'mobile'],
  },
  {
    id: 8,
    title:
      'Why you should consider Web Assembly in your next frontend project',
    description:
      'During the last decades a growing trend has been to put more and more functionality into the client by using the latest and greatest JavaScript framework. But what if we could be using native code in the browser in order to run computations faster and potentially reuse code from the backend in the frontend. \n\nEnter Web Assembly. Web assembly is a new web standard which enables you to run native code as part of your current JavaScript framework. This talk will give you a thorough understanding of what web assembly is and how you can use it in your project. \n\nWe will cover a practical example writing our web assembly using Rust. We will go through everything from writing your web assembly code to publish it as a npm package and finally use it in an existing web application.',
    level: 'Intermediate',
    tags: ['web development', 'javascript'],
  },
  {
    id: 9,
    title:
      'Whose Design is it Anyway? - In introduction to inclusive design and research',
    description:
      'As creators of products and services, we’re pretty good at thinking we’ve got it all sussed. We map user journeys, we create roadmaps, we write user stories. We know what we want people to do; what actions we want them to take. But do we really know who these people are? Do we really know what they need? Do we take the time to find out, or are we building products and services based on our own assumptions and biases?\n\nAnd what about those who lack our digital privilege? Digital exclusion is a reality for many people. It’s our responsibility to look out for everyone, not just those who are the most visible or the easiest to design for.\n\nAs technologists, we have the power to massively hinder or improve lives; not those of ‘users’ but of people. This talk looks at what it means to be digitally excluded and how by adopting a practical user research-led attitude to design, we can create products that are not just appealing to us, but life-changing to those who use them.',
    level: 'Introductory and overview',
    tags: ['ux', 'design', 'user research'],
  },
  {
    id: 10,
    title: 'Developer who empathises or empathiser who develops',
    description:
      'Answering an often missed question. Which are you first? A developer with empathy. Or an empathiser who happens to develop. Looking at what the difference is and why empathy is more important than many people think in developing. Whether that’s front end back end Devops full stack or anything else. Covers the Keys to empathy and why planning your code with empathy helps you your colleagues your customers and the end user.',
    level: 'Introductory and overview',
    tags: ['softskills/workskills'],
  },
  {
    id: 11,
    title: 'You should add more Speech API in your bot!',
    description:
      "Your bot is doing well but what if you add some more intelligence to it such as speaking? Or speaking and translating at the same time? Isn't this be great for your clients or your employees?\nCome and see how to add Microsoft Speech API to your bot and what to add more to find your business requirements for speaking and translating bot!",
    level: 'Intermediate',
    tags: ['cloud', 'artificial intelligence'],
  },
  {
    id: 12,
    title: 'Cognitive Services Extravaganza!',
    description:
      'Machine Learning, Data Science, Artificial Intelligence. These all big words we hear coming into our businesses lately - but what does it all really mean?! \nMicrosoft has created a set of simple and scalable tools that any developer can use and integrate into their applications super quickly!!\nThis session will focus on the various Cognitive Service offerings and show you plenty of demos on how to use them in your apps such as ASP.NET Core, SharePoint Framework and Flow.\nCome and learn how to take advantage of these awesome services for your everyday work!',
    level: 'Introductory and overview',
    tags: ['cloud', 'artificial intelligence'],
  },
  {
    id: 13,
    title: 'You don’t need a bot for your organization, Do you?',
    description:
      'Bots are exciting and they can be very helpful tools that you can use to communicate inside your organization or with your clients. They can answer frequently asked questions, create meetings with your co-workers or remind you that you need to follow up with a client.\nDuring this session we will cover how to create a bot using the Microsoft Bot Framework, what development options we have, how to add more intelligence into the bot using various Cognitive Services and then finally, how to install the bot into your environment (SharePoint Online, MS Teams, Skype for Business) and then some general tips for long-term maintenance.\nCome and join the bot revolution! Or at least join this session…',
    level: 'Introductory and overview',
    tags: ['cloud', 'artificial intelligence'],
  },
  {
    id: 14,
    title: 'Hacking C#: Development for the Truly Lazy',
    description:
      "I don't know about you, but I'm a lazy developer.  What do I mean by lazy?  I don't mean I don't want to do my work - far from it - I mean that I hate to write out a great deal of code to get the job done.  I want to accomplish my goals with as little effort as possible.\n\nOne of my pet hates is writing enhancements that involve copying and pasting blocks of code, changing a variable name, then leaving everything else the same.  I hate having to consider each and every possible null reference exception, and adding in a whole ton of boilerplate to handle it.  I hate having to spent ages jumping back and forth in a legacy codebase, trying to understand what it actually does!\n\nWhat's the alternative?  In this talk, I'll demonstrate a way of working that avoids all this unneccesary work, and gives you more time to do something more productive.\n\nWe'll look at:\n* Functional Programming - what benefits does this increasingly popular paradigm bring us to cut down coding effort\n* Linq & Generics - These have been a part of C# for a long time now, and are some of the most powerful features available in the language, but hardly anyone seems to be using them effectively\n* MetaProgramming - break open C# and take it to the next level with code that describes how to generate code\n\nOur goal is to write code in as few lines as possible that provides the greatest amount of impact.  We also want code that's readable, and easily maintainable.   We want to think smart, and think...Lazy.",
    level: 'Advanced',
    tags: [
      'software methodology/process',
      'functional programming',
      '.net',
    ],
  },
  {
    id: 15,
    title: 'Elasticsearch: Mining Metrics from Logs',
    description:
      "With an increasing amount of log data from software & systems it can be hard to see the 'wood for the trees'. Big data has a risk of being overwhelming in size and harder to manipulate. Metrics offer us a chance to digest and see trends at a higher level.\n\nIn this session, we'll learn how features in Elasticsearch has helped unlock numerical insights in log data & we'll share advice on finding an efficient combination of both approaches.",
    level: 'Introductory and overview',
    tags: ['devops', 'software methodology/process'],
  },
  {
    id: 16,
    title: 'Developing with .NET Core on AWS',
    description:
      'In this demonstration-heavy session, we illustrate our latest techniques, tools, and libraries for developing end-to-end applications with .NET Core. We focus on serverless applications, but the techniques are broadly relevant. We start by showing you some useful features and best practices for authoring your serverless application, including debugging locally from the IDE and in production. From there, we demonstrate some helpful tools that make it easy to set up your CI/CD workflow from the start. Finally, we deploy our application with AWS Lambda.',
    level: 'Intermediate',
    tags: ['cloud', 'architecture', 'devops', 'serverless'],
  },
  {
    id: 17,
    title: 'The Secret of Container Island',
    description:
      'Guy Beebs Threepwood arrives on Cloudy Island wanting to be a pirate. After speaking to three old pirate captains, he discovers the only opening is as a Webmaster for Groganddash web store. The pirates set him three trials. During the perilous pirate trials Guy, Modernizes a Legacy ASP.NET 3.5 website and containerises the application, scales the site using AWS and reduces the cost and complication of running the business for the pirates. Things, however, are not simple, the audience through via a real-time voting app will decide how Guy completes the trails in an adventure that would chill the bones of even the most bloodthirsty buccaneer.',
    level: 'Introductory and overview',
    tags: ['cloud'],
  },
  {
    id: 18,
    title: 'Automating AWS Infrastructure with PowerShell',
    description:
      'In this session we will present a deep dive into techniques and services to create and manage AWS cloud infrastructure. We will demonstrate using just the AWS Tools for PowerShell as well as cover approaches using PowerShell in conjunction with other AWS services and technologies such as Systems Manager, CloudFormation and Serverless approaches. Once created, we will also discuss and demonstrate options and best practices for monitoring your infrastructure.',
    level: 'Introductory and overview',
    tags: ['devops'],
  },
  {
    id: 19,
    title: 'Embrace the pitfalls (Our stop start journey to Change)',
    description:
      "As developers we want to work in a modern way, to get fast feedback on what we are building to make sure that we are building the right things in the right way. \n\nHowever, many companies are still at the start of their journey. Things take longer than we would like to get moving, sometimes change can seem to happen at glacial pace and whilst you are ready to try and run, others are finding their feet - or even digging in their heels! \n\nIn this talk I will go over some of the pitfalls that have happened to me, and the lessons that I have learned from them. What I don't really have are magic solutions to make the problems go away, but hopefully you can look at the mistakes I made and go away to make your own new ones to learn from!",
    level: 'Introductory and overview',
    tags: ['softskills/workskills', 'software methodology/process'],
  },
  {
    id: 20,
    title: 'Who Will Test The Tests?',
    description:
      "Do you lack confidence in your tests? Maybe you practice test driven development rigorously but still feel there's something missing?\n\nI know I felt this way, which was why I was intrigued to hear about mutation testing. It's a powerful, yet under-utilised technique that highlights gaps in your testing that code coverage cannot.\n\nJoin me to hear how mutation testing has increased quality across different code-bases and teams. We'll cover the details of how it works under the hood as well as practical tips to get the most out of your mutants.\n\nBy the end I hope that you'll be inspired and ready to give mutation testing a try in your own projects.",
    level: 'Intermediate',
    tags: ['demo', 'software methodology/process', 'testing'],
  },
  {
    id: 21,
    title:
      'Bounded rationality, complex Systems and Agile principles',
    description:
      'Human beings make quite reasonably decisions, but only based on the information they have." This is the concept of bounded rationality, as defined by Nobel prize Herbert Simon. If we look at Agile principles and practices from a systemic perspective, they focus on maximize rationality boundaries related to the product we are building. However, the whole organization and its teams are interacting complex systems which follow the very same principles of Systems Theory. Bounded rationality plays a subtle but fundamental role in every System, beyond just development teams. In this talk I will try to explain how Systems Theory can help organizations and why motivation is the key of success in complex Systems made by human beings.',
    level: 'Intermediate',
    tags: ['systems thinking', 'teamwork'],
  },
  {
    id: 22,
    title: 'Making a noise with F#',
    description:
      'Interest in functional languages, including F#, is growing, but there are still many impediments to its wider adoption. One problem is the (wrong) perception that F# is language for financial applications.\n\nIn this talk I will attempt to dispel that myth, and show that F# is a true general purpose language. I will show how F# can be used to create a simple audio synthesis application, and how the functional approach (single assignment, immutable data, recursion) provides a great way to model the audio domain.',
    level: 'Intermediate',
    tags: ['demo', 'functional programming', 'audio'],
  },
  {
    id: 23,
    title:
      'GraphQL and Dapper : The quick route to flexible and efficient mobile APIs',
    description:
      'GraphQL is alternative to REST for providing powerful, flexible, bandwidth-efficient web APIs. It was originally developed by Facebook, but is now an open standard.\n\nDapper is a lightweight Object/Relational Mapping library for the .NET platform. It combines speed and efficiency with access to native SQL.\n\nIn this talk I will discuss the concepts behind GraphQL, and why you should consider it if you need an efficient, accessible API for you project. I will demonstrate how to design a simple GraphQL API, and how to use the graphql-dotnet and Dapper.GraphQL open-source libraries to implement this API for an existing application database.',
    level: 'Introductory and overview',
    tags: ['mobile', 'design', 'demo'],
  },
  {
    id: 24,
    title: 'The Analytical Engine',
    description:
      'Charles Babbage was a true polymath and the pioneer in the discipline of mechanical (as opposed to human) computing. His Difference Engine could automatically generate error-free mathematical tables, but his greatest achievement would have been the Analytical Engine, possibly the first programmable computing device ever designed.\n\nThis talk will explain the structure of the Analytical Engine, highlight some of the design features that made the machine so innovative, and show how we can start to simulate this ground-breaking machine.',
    level: 'Introductory and overview',
    tags: ['hardware', 'architecture', 'design', 'demo', 'history'],
  },
  {
    id: 25,
    title: 'The Monolith of Microservices',
    description:
      'Microservices are an interesting architectural style, they provide scalability and flexibility in how we deliver software. Yet, there are plenty of monolithic applications out there. \n\nThe microservice architecture emerged out of the pains of the monolith, tightly coupled code, inflexibility of deployments, etc. Yet they can come with their own issues, their own problems from monitoring to versioning to discovery. \n\nI will propose that we can get many of the benefits by building a monolith of microservices. How this can benefit the speed of development, or just be a way-point from a monolithic to microservice architecture.',
    level: 'Intermediate',
    tags: ['architecture'],
  },
  {
    id: 26,
    title: 'Reasonable Code',
    description:
      'In a reasonable a system (i.e. a system that helps me to understand it, to reason about it) I should be able to understand how to make a change without holding the entire system in my head. I should be able to reason where the change needs to be made and reason about the impact it will have.\n\nI want to explore what reasonable means to me, from the processes of the team all the way down to an individual block of code. Along the way, we will encounter existing frameworks, tools, and patterns that our community has developed over the years to help us to reason about our code and processes; I feel that they have often been misused and end up creating the opposite effect, adding unnecessary complexity to how we work.',
    level: 'Intermediate',
    tags: ['software methodology/process'],
  },
  {
    id: 27,
    title: 'An Introduction to CQRS and Event Sourcing Patterns',
    description:
      'Within the DDD domain there is often much discussion about the advantages these patterns bring and how they can be used in conjunction with each other. However, there is not always great guidance on how to implement these patterns in a real world project.\n\nIn this talk I’ll take you through some of the fundementals of these patterns and show you a “first working solution” that you can use as guidance for building your own CQRS/ES based application.',
    level: 'Introductory and overview',
    tags: ['architecture', 'design'],
  },
  {
    id: 28,
    title: 'Building Successful Event Sourced Applications',
    description:
      'In recent years there has been a rise in the popularity of Event Sourcing as a way to persist your applications data. It brings with it many benefits such as:\n\n- Powerful audit logs.\n- The ability to combine it with CQRS to create an architecture performant in both reads and writes.\n- Works will with Domain Driven Design to help drive your application design.\n\nHowever, it won’t be long until the problems some start coming:\n\n- Where to persist the events?\n- How to guarantee consistency?\n- What about managing events in production?\n- What happens when we want to implement a new feature or changing an existing one?\n- How do we deal with eventual consistency?\n\nIn this session I will talk about what Event Sourcing is and go in to detail about how you can deal with the problems you will encountered as you start to use it. All with the aim that at the end of this talk you will be able to go forward and build your own successful Event Sourced application.',
    level: 'Intermediate',
    tags: ['architecture', 'design'],
  },
  {
    id: 29,
    title: 'Creating a Maintainable Codebase',
    description:
      'As software developer it’s not uncommon to start a new job to find the team is currently in the process of rewriting part or the whole of the application. Usually because the current codebase has become unmaintainable for a number of reasons:\n\n- Maybe the team relied too heavily upon frameworks and libraries to structure their codebase.\n- The code adhered to the DRY principle to strictly introducing strong coupling.\n- Poorly structured code where business logic spreads into multiple layers.\n- Simple architecture for a complex problem.\n- It’s become too monolithic and difficult to change.\n\nIn this talk I want to discuss a number of techniques that can help you avoid this constant cycle of rewriting the codebase. About how structuring the code so your business logic is contained. When and when not to conform to the DRY principle. Avoiding the temptation to rely on large frameworks and abandoning three tiered architectures. \n\nWe’ll also discuss how Domain Driven Design and micro services, and how they can be used in conjunction to break your application down into more maintainable modules.',
    level: 'Introductory and overview',
    tags: [],
  },
  {
    id: 30,
    title:
      'Who broke the build? — Using Docker to improve local testing and release faster',
    description:
      'No one wants to be responsible for breaking the build. But what can you do as a developer to avoid being the bad guy? How can project leads enable their teams to reduce the occurrence of broken builds?\n\n\nIn talking within our own teams, we discovered that many developers weren’t running sufficient integration tests in their local environments because it’s too difficult to set up and administer test environments in an efficient way. \n\n\n\nThat’s why at Appfire, we decided to rethink our entire local testing process in hopes of finding a more streamlined approach that would cut down on the headaches, heartaches, and valuable time wasted. Enter Docker. In Docker, we found a solution that empowers our developers to easily configure a development environment locally that accurately matches the final test environment — with minimal investment and without needing to become an expert CI (Jenkins) admin themselves. The result is that our developers are running more tests, more often, in a way that’s more consistent with our CI (Jenkins) environment. \n\n\n\nIn this session, we’ll share a quick history of our testing challenges and what led us to Docker, why this new approach has helped us perform better local integration testing, and how we utilize Docker for more streamlined testing and fewer broken builds.\n\n\n\nThese days, we hear, “Who broke the build?” far less often — and you can too!\n\n\n\n\n\nIn this session, we’ll discuss how we use Docker to achieve more streamlined testing and fewer broken builds. We’ll cover:\n\n\n\nA quick history of our testing challenges and what led us to Docker\n\nThe benefits of our new testing approach — easy to configure and minimal investment\n\nOur experiences running over 50 docker production and testing docker images\n\nSession Key Takeaways:\n\n\n\nWhen and why we decided to rethink our local testing practices and our subsequent discovery of Docker.\n\nWhy Docker has been the perfect tool for our developers to perform better local integration testing without the burden of becoming their own CI administrators.\n\nA detailed account of how we utilize Docker  to set up development environments locally that match our final test environment in order to reduce unnecessary commits and minimize CI build breaks.',
    level: 'Advanced',
    tags: ['devops', 'architecture', 'software methodology/process'],
  },
  {
    id: 31,
    title:
      'Fasten your Seatbelts ! Deployment Automation using Dockers and Ansible',
    description:
      "Early 2015, We at CallidusCloud (Now a SAP company) were building a Single sign-on (SSO) solution to vast majority of our customers from scratch. Our previous datacenter deployments used to take roughly 3~4 hours(scripts+manual) on a maintenance window over the weekend.\n\nOur main idea was to build robust infrastructure which includes High availability (HA) , comprehensive monitoring  solution and completely automate the production deployments and if needed we can deploy to production on daily basis. Secondly, to build a local development environment same as our HA production environment so as to debug production issues on our local DEV environment with ease.We were evaluating different tools...Dockers and Ansible came to our rescue.We started packaging all our software as RPMS , CI (Jenkins) pushing them to Artifactory and using Ansible playbooks to deploy these RPMS/code on docker containers (built using docker files) on DEV environment. Further, we enhanced our DEV setup using Single Click automation and it would setup full stack from scratch on docker containers using Ansible playbooks.\n\nPost using dockers and Ansible , Our Production deployments were completely automated, deterministic and takes less than 20mins compared to 4 hours earlier.\n\nSession Outline :\n\nIn this session, We’ll cover:\n\n* A quick history of our deployment challenges and what led us to Docker.\n* The benefits of our new deterministic deployment approach — easy to Setup and minimal investment\n* Detailed account of monitoring of our  infrastructure using Sensu\n* How we combine Docker, Ansible and the Jfrog's Artifactory for more streamlined continuous integration and deployment",
    level: 'Intermediate',
    tags: ['devops', 'cloud', 'architecture', 'design'],
  },
  {
    id: 32,
    title: 'Saving the World with IoT',
    description:
      "TL;DR Watch the presentation, go home and in 10 minutes build your IoT solution\nYou don't have to be a super hero, to make a difference to our planet. Just a bit of programming skills will suffice. We can't imagine our lives without electricity. We use it to have light and heat, keep our food fresh, we work with computers, use mobile phones, and don't forget entertainment! We need electricity for driving cars, even more now with EVs. Electricity is generated mostly with fossil fuels, we can use nuclear power and hope that nobody makes a mistake and people do make mistakes. That's why we build wind farms, solar panels, hydro power plants, but we can't force them to generate electricity when we want. They are not aware of world cup finals. So how can we make sure, we use green power more? We need to store electricity when they can generate it, and use when they produce less, but storing electricity is hard. We have to change the way we consume energy, but it has to be automatic, so people wouldn't even know. That's what we do at OVO Energy, using IoT devices to change the power usage patterns, create virtual power plant, which can be used when the demand exceeds supply. I will show you how we use Azure IoT Hub to do that, you don't have to be C or C++ developer to work with IoT.",
    level: 'Introductory and overview',
    tags: ['iot', 'cloud', 'energy'],
  },
  {
    id: 33,
    title:
      'Solving microservices challenges on the Kubernetes platform',
    description:
      'Developing microservices based applications is a hot trend in our industry.\n However the journey to microservices is fraught with problems, by trying to solve one problem we often introduce a set of new ones.\n\nThis talk introduces a "journey" to microservices and highlights some new problems that are created by adopting such an architecture.\n\nWe then step through how we can leverage cloud native technologies such as Kubernetes and service meshes such as Istio to try and address some of these new problems.\n\nThis talk along with demos will cover many topics in an area which is rapidly evolving however we\'ll try and focus on the fundamental problems, and demonstrate tools that can help make the experience better or simply easier to manage. \n\nAttendees will learn:\nWhy microservices introduce many new challenges.\nHow cloud native technologies (such as Kubernetes, Azure Dev Spaces, Istio) can try and help address these challenges.\nSome general guidance on microservices architecture.\n\n\nSome knowledge of microservices, containers and Kubernetes is useful but not essential we\'ll cover the basic topics',
    level: 'Introductory and overview',
    tags: ['devops', 'cloud', 'architecture', 'cloud native'],
  },
  {
    id: 34,
    title:
      "PDR's - How to progress your career, get a pay rise and push the business forward",
    description:
      "Personal Development Reports (PDR's) should not be seen as a low priority task done at the last minute. PDR's are a platform to showcase your successes highlight the issues, and a way for any business to learn from there staff and make the changes required.\n\nMy talk goes through the importance of a good PDR, what it should include and practical ways to capture the data required to make it easy to assemble (even if you do leave it till the night before!)",
    level: 'Introductory and overview',
    tags: [
      'softskills/workskills',
      'management',
      'personal development',
    ],
  },
  {
    id: 35,
    title:
      'Azure In Action - CosmosDB, Functions and ServiceBus in Perfect Harmony',
    description:
      "There's so many parts to Azure, it's sometimes hard to decide what to use and when.\n\nDo I use TableStore or CosmosDB? Would BlobStore be better? Should I host a full-fat .Net service in a VM, or stand up an ASP.Net Core WebApi? What about functions? The choices are myriad.\n\nIn this talk I'll describe how at Landmark we made these kind of decisions as we implemented some new features in our product. I'll talk about the questions you need to ask to make those decisions, where we went wrong, and how we succeeded in the end.\n\nI'll describe in detail how we used CosmosDB, Azure Functions and Service Bus together to provide a Compliance Audit trail feature that would scale properly, work reliably, be trivial to use, and that wouldn't break the bank.",
    level: 'Intermediate',
    tags: ['cloud'],
  },
  {
    id: 36,
    title:
      'Building your first dashboard with Azure PowerBI Embedded',
    description:
      "Users love dashboards… Dashboards give them that warm fuzzy feeling that they can see into your software and watch it working perfectly… And dashboards give you the same insight into what's actually going on.\n\nMicrosoft's new Azure PowerBI Embedded product lets you capture data, analyse it and present it on dashboards that live within your application.\n\nIn this session, I'll take an existing instrumented application, pipe the data into Azure and demonstrate just how easy it is to create a rich dashboard to monitor the application.",
    level: 'Introductory and overview',
    tags: [],
  },
  {
    id: 37,
    title:
      "TPL Dataflow - The Best Little Async Library You've Never Heard Of",
    description:
      "From the docs:\n\n> The Task Parallel Library (TPL) provides dataflow components to help increase the robustness of concurrency-enabled applications. \n\nWhat it actually does is give you the tools to create in-process async pipelines in a simple, structured manner.\n\nAnd I'm betting that like me (until recently), this is a library you'll never even have heard of.\n\nI'll cover the basics - Sources, Targets and Blocks - and how to link them together into useful **asynchronous** and **parallel** pipelines within your programs. We'll handle error conditions, cancellation and how to control the degree of parallelism - with samples that give you a bit more than \"Hello World\".",
    level: 'Intermediate',
    tags: [],
  },
  {
    id: 38,
    title: "You're the Tech Lead - *you* fix it!",
    description:
      "Over the last couple of years, I've presented 20 tricks and tips that I've found invaluable as a Tech Lead. But in this session, I want to turn things around and look at applying some of those to solving specific issues that are common within many software development teams.",
    level: 'Introductory and overview',
    tags: ['management', 'softskills/workskills'],
  },
  {
    id: 39,
    title:
      'Solving the Travelling Surveyor problem in .Net using Google OR Tools',
    description:
      "The \"Travelling Salesman\" problem is a computational classic - but firmly grounded in the real world.\n\nIn this session I'll discuss how at Landmark we used Google's Open-Source Optimisation & Routing (OR) Tools to generate recommended routes for hundreds of surveyors and thousands of jobs on a daily basis for one of the largest firms in the country.\n\nWe'll cover the basics of the problem, and some of the classic approaches before moving on to how to use the tools Google OR Tools library. We'll look at some pitfalls and limitations - as well as how we created a fluent API for describing general case routing problems to pass to the Google OR Tools library.",
    level: 'Intermediate',
    tags: [],
  },
  {
    id: 40,
    title: 'Level up your tests with Postman',
    description:
      "While some UI testing will always be needed to verify that elements appear on a page and can be interacted with, API tests are much faster and more reliable than UI-based tests and can offer quicker feedback. \n\nBy pushing tests further down the stack you can gain more confidence in the software you are trying to develop and release, and shorten the feedback loops in order to adapt to change when things don't go quite to plan.\n\nJoin me in this session to learn how to get started testing APIs using Postman. Whether your totally new to Postman or API testing or you've done a little, in this session I will share how to get started as well as various hints and tips to start to hopefully help you find bugs earlier in the development process, often before the UI has been created. \n\nTakeaways:\n* Learn what API testing is and why you should care\n* Discover what Postman is and how to get started testing APIs with it\n* Learn some tips and tricks to take your Postman API testing to the next level",
    level: 'Introductory and overview',
    tags: ['software methodology/process', 'api', 'testing'],
  },
  {
    id: 41,
    title: "Better the 'DevTool' you know",
    description:
      'Despite its name, DevTools isn’t just a tool for developers.\n\nDevTools contains many tools which can help you in your day to day development and testing of web applications. Whether you want to know how to put client validation to the test, gain a better understanding of how to identify, and debug errors, check CSS/JS code coverage or just simply run audits on your web applications, then this session is for you.\n\nPerhaps you’ve heard about DevTools but have never used it? Maybe you’ve used one or two of the tools within a few of the panels but don’t fully understand how some of the tools could help you. Throughout this session I will highlight a handful of useful tools that are available.',
    level: 'Introductory and overview',
    tags: [
      'software methodology/process',
      'ui',
      'testing',
      'tooling',
    ],
  },
  {
    id: 42,
    title: 'Teaching an old dog new tricks',
    description:
      'In this session, we will get down and dirty with clean code. Expanding on Uncle Bob’s teachings this session will give you practical hints and tips to help you practice clean code. We will cover what clean code is, why you should be writing it and how to write it. If you’ve been a victim of “wtf code”, or even guilty of writing it yourself, then this is a must attend talk for you.\n\nThis talk came about after attending Clean code course with Uncle Bob. So not Umbraco related but relates to Umbraco because in Umbraco we write code. Too often we make a mess accrue technical debt and just make life difficult for ourselves. The talk covers some basics things we can all implement to give us a more stable and maintainable code base.\n\nDisclaimer: there may be swearing!',
    level: 'Intermediate',
    tags: ['software methodology/process'],
  },
  {
    id: 43,
    title: "Kubernetes, Azure and .NET - What's it all about?",
    description:
      "Everyone seems to be talking about Kubernetes with companies seemingly tripping over themselves to support or adopt it.\n\nIn this talk we'll introduce Kubernetes, discuss the key concepts of the platform, it's high level architecture and how to get a Kubernetes cluster up and running in minutes in Azure. \n\nWe'll talk about and demo deploying .NET applications to Kubernetes and we'll finish with a discussion of the future where you can deploy both legacy and modern .NET applications to the same platform.\n\nIf you're interested in Kubernetes and you're not a .NET developer this session still has something for you",
    level: 'Introductory and overview',
    tags: ['devops', 'cloud'],
  },
  {
    id: 44,
    title:
      'From layers to vertical slices - simplify your code and focus on your features',
    description:
      'We\'ve all experienced that moment when your boss/customer calls you and says;\n\n"This is just a small change, I can\'t imagine it would take more than half an hour or so"\n\nAnd your heart sinks, because you know what these "small" tweaks actually entail.\n\nYou have to find the code, which means navigating all the "layers" of your application.\n\nIf you\'re lucky, you can locate the relevant ASP.NET controller, but you know that\'s only the start.\n\n3 hours later, you\'re knee-deep in your Data Access Layer, desperately trying to figure out where this "small tweak" needs to be made, wondering if it\'s lunchtime yet.\n\nIt doesn\'t have to be this way!\n\nYou can skip a lot of this pain by leveraging the idea of "vertical slices".\n\nWhen you build and architect your application around individual features, magical things start to happen;\n\nYou always know exactly where to look for the code that makes any given feature tick.\n\nYou can use tests to be confident your feature actually does what the user/customer wants it to do (imagine that!).\n\nYou get to work with (and write) simple code.\n\nYou can get all your work done in a few hours and bunk off early (OK, maybe not, but we can dream...).\n\nSo join me as we explore what vertical slices are, how you can approach any feature and specific tips and techniques for making this come to life using ASP.NET Core and MediatR.',
    level: 'Intermediate',
    tags: ['architecture', 'software methodology/process'],
  },
  {
    id: 45,
    title: 'Confessions of a Tech Lead',
    description:
      "Almost all technology companies around the globe have a the concept of a Tech Lead. But there’s no definition of the position in the Agile Manifesto and (at least as far as I know) I’ve never met one with an industry certification! In this talk we’ll answer the key questions. How do you become a Tech Lead? Why would you want to? And what do they actually do all day!?\n\nOnce I've convinced you that it's a great job I'll take you on a whirlwind tour of a Tech Lead's toolbox by introducing topics like Delivering Business Value, DevOps Practices, and People Skills. We'll discuss each of these and talk about why they're all important to a great team.",
    level: 'Introductory and overview',
    tags: [
      'devops',
      'softskills/workskills',
      'software methodology/process',
      'management',
    ],
  },
  {
    id: 46,
    title:
      'Save money and reduce risk by deploying your applications as Immutable Servers to EC2 Spot Instances',
    description:
      'Have you ever deployed an application only to have it fail? Have you then discovered that the issues were caused by a manual configuration change on the server?\n\nEphemeral environments are increasingly becoming a popular solution to challenges such as configuration drift. Whilst containerising applications may be one solution, this has the overheads of managing container hosts and clusters, which can also become victims of configuration drift.\n\nWhat if every time you built your application, you provisioned a new server image from the ground up as a first-class citizen of your build process? Fully automated, fully version controlled, tested and immutable. Deploying your application becomes a straightforward process of launching a new server image and retiring the old server.\n\nThe immutable server pattern is a practical alternative to containerising applications. In this talk, we’ll look at the benefits of using immutable servers as part of an immutable infrastructure paradigm and look at a practical example of packaging a Rails application into an immutable server.\n\nWe’ll take this a step further and look at how an Immutable Server is an ideal candidate for running as an EC2 Spot Instance on AWS, saving you up to 90% of the on-demand costs.',
    level: 'Intermediate',
    tags: [
      'cloud',
      'devops',
      'software methodology/process',
      'architecture',
    ],
  },
  {
    id: 47,
    title: 'Jump into SQL Server Query Performance',
    description:
      "You sometimes have to write SQL Server queries and you can get what you want out of the database but sometimes it's not as fast as you would like.\n\nIn this session we'll go through the start of checking the performance of your queries and look at quick wins when it comes to making those queries run faster.\n\nWe'll cover Execution Plans and Query Statistics to give you the tools to be able to make those queries faster.",
    level: 'Introductory and overview',
    tags: ['database performance'],
  },
  {
    id: 48,
    title:
      'Getting Started with Unity and AR/VR for the .NET Developer',
    description:
      "We all see the cool demos of how augmented and virtual reality are going to be the future of our interaction with devices, but it often feels like there’s a significant barrier to getting started in building these types of apps.\n \nThis session is here to help. If you’ve ever thought about developing for Oculus Rift, HTC Vive or the Windows Mixed Reality headsets, but haven’t known where to start, this is the session for you.\n \nAt DDD, I will present what I learned building a small game, set in a mysterious dungeon using Unity and the SteamVR plugin. We'll explore how to import assets from the Unity store, how to implement locomotion techniques and interactions using the motion/touch controllers, including some tips for optimising performance and avoid motion sickness.\n \nCome along, there’ll be .NET code, demos and we’ll have some fun looking at how you can get started on your first VR/AR project.",
    level: 'Intermediate',
    tags: ['augmented reality/virtual reality'],
  },
  {
    id: 49,
    title:
      "All the mistakes I've made trying to implement Microservices",
    description:
      "We're now entering the next age of Microservices. For about a decade now we've been doing battle with the pointy haired bosses of the world to convince them of what seems so painfully obvious to us; that there are many varied virtues of microservices architecture. \n\nNow that they all have Netflix accounts and they've seen the benefits first hand we now seem to have those same bosses bursting into the office waving their trade magazine and asking us if we've heard about this \"micro-system\" thing. Flustered, we're having coming to terms now with how we actually deliver on our lofty promises without Amazon's finances and resources. \n\nSome people have been getting it right the first time they've tried which is great! Other people, like me, have got it right as well.....but....not before getting it wrong repeatedly for oh so many different reasons! So, I guess that makes me an expert, right?! \n\nCome listen as I shamefully regale you with all ways in which I've ham-fisted the most elegant architecture currently known to humanity in hopes that I might save you from the same sleepless nights.",
    level: 'Intermediate',
    tags: [
      'architecture',
      'software methodology/process',
      'microservices',
    ],
  },
  {
    id: 50,
    title: 'I can Vim and so can you',
    description:
      "For at least a couple of years Vim was something that I was interested in attempting to use but I was hopelessly intimidated by the prospect of going up against what seemed like the \"end boss\" of writing code. You've probably guessed that I did finally find the courage to take on the Vim monster and by the end of this talk I think you will to.\n\nThe focus of this talk won't necessarily be for me to espouse the value of vim although you can see if you can try and stop me from doing that anyway! I also won't be giving you a history lesson from vi in the 70's right up to vim 8 now. I will assume that if you're attending that you've already seen the youtube videos that I had when I started looking into vim and you're more or less convinced that vim is something you'd like to take on the challenge of learning but don't really know how to take the first step.\n\nSo, with that in mind, during this talk I will be walking you through getting vim setup and ready for work on a machine and getting it ready for actual coding. At the end of this talk we will have a machine setup with vim along with some helpful plugins and it will be ready to be used as a real Javascript development environment. We'll build all this actually in vim so you'll also get some of your first lessons in using vim and I'll be happy to try and point out some pitfalls to avoid when you're beginning your vim journey.\n\nAt the end I can share with you a repo with the dot files we create so you can go home and set the same environment up yourself!",
    level: 'Introductory and overview',
    tags: ['demo', 'vim'],
  },
  {
    id: 51,
    title:
      'Unicorns, fairies, formal specification languages and other mythical beasts',
    description:
      "Was it just your imagination? Or do you have a vague memory of once hearing about a mythical beast called 'formal specification languages', which would one day save the world?\n\nLet’s step back a bit.\n\nWhen is the best time to catch a design flaw? Clearly it’s during the design stage, before a line of code has been written. But in reality, all too often design flaws come to light late in the development lifecycle (and this is why any self-respecting team invests in first-rate QA practices). Worse still, design flaws can emerge when the system is in live operation. If you’re building control software for aeroplanes, self-driving cars or nuclear power plants, then a simple design flaw can have catastrophic consequences.\n\nLuckily, for most of us, lives don’t depend on us getting our code right first time. But livelihoods might. If you’re a startup, you’ve typically got one shot at capturing the imagination of your target customers. If your system has a design flaw that ruins their experience, chances are that’s your opportunity missed. And as more teams adopt microservices, for all the benefits of that architectural style, one of the downsides is that it is very hard for our brains to reason about the complex operational states of distributed, concurrent systems. Potential race conditions, deadlocks and cascading failures are hard to spot in system design, and equally hard to test for. How do we reduce the risk of introducing such flaws when the system consists of large numbers of interacting, independent services?\n\nGetting better at system specification is a problem for our whole profession, whether we’re building business applications or control systems for nuclear submarines. In this talk, I will give an introduction to a formal specification language called TLA+,  which has broken out of the Computer Science lab and is now being used for real world projects at Amazon, Microsoft… and at our little Nottingham-based startup. I’ll explain why formal specification matters, even for us non-eggheads working on everyday software problems. I’ll describe how to use it alongside the other tools in your toolbox, and I’ll attempt to demystify it with a worked example.",
    level: 'Advanced',
    tags: ['software methodology/process', 'design', 'architecture'],
  },
  {
    id: 52,
    title: 'Developing Communication',
    description:
      'Few would argue the importance of good communication in modern software development. Creating a safe, creative environment is vital if we want our teams to do their best work.\n\nIn this session we will look at why communication is so important, how to encourage high quality discussion, and how to have those tough conversations we’ve all been avoiding.',
    level: 'Intermediate',
    tags: ['softskills/workskills', 'management'],
  },
  {
    id: 53,
    title: 'Docker, Kubernetes, Raspberry Pis, and more!',
    description:
      "In this session, we'll be installing Kubernetes from scratch on a cluster of Raspberry Pis (yes, real hardware!). Then we'll create a basic ASP.NET Core webapp; RabbitMQ instance; and a subscribing console app to demonstrate how easy it is to spin-up this kind of 'messaging' architecture in Kubernetes. Along the way, I'll explain some of the core concepts and benefits of Docker, Kubernetes, and message queues. This talk is suitable for both those who have never used Docker or Kubernetes before; those who have and are interested in installing Kubernetes on bare-metal; or those who just like Raspberry Pis and shiny things!",
    level: 'Intermediate',
    tags: ['docker', 'kubernetes', 'containers'],
  },
  {
    id: 54,
    title: 'Azure Machine Learning for Developers',
    description:
      "As a developer I want to understand what machine learning is all about but I'm not a mathematician. This talk introduces some of the machine learning concepts without the maths and shows you how to use the tools provided by Azure Machine Learning to build Machine Learning web services. It also discusses the role the developer can play in Machine Learning to help the mathematicians and analysts integrate their machine learning models with business applications",
    level: 'Introductory and overview',
    tags: [],
  },
  {
    id: 55,
    title: 'Easy Integration with Flow and Logic Apps',
    description:
      'Historically integrating different systems has been challenging and you have needed experts to help you build even the simplest integration. Microsoft has introduced its Azure based offerings to help take some of the complexity out of integrating to allow you to build your own personal workflows. This talk will introduce both Flow and Logic apps, show you where to use each and how you can migrate from Flow to Logic Apps.',
    level: 'Introductory and overview',
    tags: [],
  },
  {
    id: 56,
    title: 'BBC Micro:Bit - It does (way) more than you think!',
    description:
      "This diminutive device may be affordable and have the perception of being aimed at children... But we'll spend the evening changing your mind!\n\nWe'll start by introducing the basics of the Micro:Bit including how to create our first program.\n\nNext we'll move on to how to use the built in sensors and I/O.\n\nOnce we've got that sorted, we can start looking at the Radio and Serial Communications.\n\nFinally we'll cover more advanced topics including how to extend the Micro:Bit's capabilities with our own Extensions.",
    level: 'Intermediate',
    tags: ['iot', 'hardware', 'demo'],
  },
  {
    id: 57,
    title: 'Is your loft cold? (Azure IoT Hubs with Raspberry Pi)',
    description:
      'Do you want to put your Raspberry pi to use and remotely monitor the temperature in your loft (Why??)? Or perhaps send a tweet out when someone comes into your office? Anything is possible with Azure IoT hubs, a little Node.js, a Raspberry Pi and a few electronic components.\n\nUsing a Raspberry Pi and a really basic circuit containing a switch, some LEDs and a Simulated Temperature / Humidity Sensor, and  NodeJS… We’ll go about connecting the whole thing to an Azure Event Hub and getting Messaging working between the two!',
    level: 'Intermediate',
    tags: ['cloud', 'iot', 'hardware', 'big data', 'demo'],
  },
  {
    id: 58,
    title: 'Event Driven Collaboration',
    description:
      'When we move from a monolith to microservices we abandon integrating via a shared database, as each service must own its own data to allow them it to be autonomous. But now we have a new problem, our data is distributed. What happens if I need one service needs to talk to another about a shared concept such as a product, a hotel room, or an order? Does every service need to have a list of all our users? Who knows what users have permissions to the entities within the micro service? What happens if my REST endpoint needs to include data from a graph that includes other services to make it responsive? And I am not breaking the boundary of my service when all of this data leaves my service boundary in response to a request?\n\nNaive request-based solutions result in chatty calls as each service engages with multiple other services to fulfil a request, or in large message payloads as services add all the data required to process a message to each message. Neither scale well.\n\nIn 2005, Pat Helland wrote a paper ‘Data on the Inside vs. Data on the Outside’ which answers the question by distinguishing between data a service owns and reference data that it can use. Martin Fowler named the resulting architectural style; Event Driven Collaboration. This style is significant because it shifts the pattern from request to receiver-driven flow control. \n\nIn this presentation we will explain how events help us integrate our service architectures. We’ll provide examples in C#, Python and Go as well as using RMQ and Kafka.',
    level: 'Advanced',
    tags: ['architecture'],
  },
  {
    id: 59,
    title: 'How to Escape The Distributed Monolith',
    description:
      'Microservices were all the rage, so you broke up your monolith. The services talk to each other by gRPC, you use a service mesh to route and load balance, and provide reliability oriented computing, you are fully buzzword compliant.\n\nYet something seems to be wrong.\n\nYou can\'t easily release software from one team, without coordinating with teams creating other. Testing has to be end-to-end to flush out problems or risk your team creating breaking changes for another team. Your \'heavy-lifters\', whether you call the principals or architects seem to spend all their time on Docker, K8s, Istio and a whole slew of infrastructure technologies. Your system won\'t run without them, and you feel locked in.\n\nWhat happened?\n\nIn this talk we look at the emerging world of "smart proxies and dumb endpoints" and ask whatever happened to the vision of "smart endpoints and dumb pipes", and what you can do to change course and deliver on the original promises of microservices to allow your teams to release frequently and independently of each other. And become masters of your tech stack, not its servants.',
    level: 'Advanced',
    tags: ['architecture'],
  },
  {
    id: 60,
    title:
      'CTO secrets: How to get the best companies fighting to hire you',
    description:
      'As a CTO, I spend a lot of my time hiring talent and building high performance development teams. I have hired hundreds of software professionals over the years, and I still insist on interviewing every candidate personally. I think I’ve got a pretty good hit rate: my teams have all had great reputations in their local tech community, and I would rehire - in a heartbeat - almost everyone I’ve hired in the past.\n\nIt’s never been a better time to be working in the software industry. Your skills are in demand, but that doesn’t mean that everyone gets to work on the coolest tech in the most forward thinking companies. How do you set yourself apart from the crowd and get those companies falling over themselves to hire you?\n\nIn this session, I’ll share some of my secrets about what I look for in candidates. What is it that makes a candidate stand out? What do I look for in their CV? What is it about how they approach the interview or the technical assessment that impresses me? How important is formal education? What do I look for in how the candidate spends their spare time?\n\nOne myth to clear up right here: not everyone has to be a “rockstar developer”. I look for a balanced mix of skills in every candidate, and I’m often much more impressed by the quiet one who has demonstrated great judgment, insight or a capacity to learn. To continue the rockstar analogy, I’d much rather hire the reliable drummer or the skilful backing singer over the egotistical and unpredictable frontman!\n\nThis session will offer clear, practical advice on how you can maximise your personal value in the industry. Some of it will be quick and easy to achieve, while some of it will require you to make longer term changes to your mindset. But whether you are an old hand eyeing your next career move, or you are looking for your first job in the industry, there will be something in this talk for you.',
    level: 'Introductory and overview',
    tags: ['softskills/workskills', 'career development'],
  },
  {
    id: 61,
    title: 'Ditching the test pyramid in a microservices era',
    description:
      "We have all heard tales of the infamous test pyramid. Some of us have scaled the pyramid, some camped halfway and some dare not even attempt. Time and time again, I've heard of the test pyramid in multiple talks, test articles and blog posts, but not many have dared stray away from it. Why do we often return to the same solution for every test problem? \n\nWhat if we had another way forward; one that did not involve a pyramid. I once too advocated for the test pyramid in the good old times of monoliths. Times have changed.\nWe are now in the era of microservices and like many others, I found myself on shaky grounds with the test pyramid. It baffles me how little effort has been made to redefine or re-evaluate our quality assurance strategies. Whilst advances and breakthroughs are ripe in software development, our quality assurance processes and strategies often trail behind. \n\nSo why had I found myself on shaky grounds with a test strategy that stood the test of time for so long? In this session, we unravel why the onset of microservices shook the pyramid and we explore how we could succeed without having to scale the pyramid.\n\nIf you, like me started off with the search for a better test strategy that has been tried and tested in the microservices furnace and ended up unsatisfied with the answers; let me introduce you to a new era.",
    level: 'Intermediate',
    tags: ['software methodology/process', 'architecture', 'testing'],
  },
  {
    id: 62,
    title: 'The Evolution of DevOps',
    description:
      "This talk describes the evolution of DevOps from about 1700 to now :) \nFrom the scientific method, the industrial revolution, Taylorism, Ford's production line, Deming and Lean, Goldratt, the Toyota way, to the tech revolution, Agile and Scrum, Nicholas Carr saying technology is a commodity, the first SRE team at google, to the appearance of DevOps (with DuBois and Shafer), Gene Kim, the phoenix project, CI (Dave Farley et al), cloud tech, Nicole Forsgren and DORA, and even ITIL v4 (which by then we'll know if it's BS or not...)\nIt examines what devops really is, what it consists of and what we've learned from other industries (such as manufacturing) and where it might go in the future and who we might learn from to take it to the next stage.",
    level: 'Intermediate',
    tags: [
      'devops',
      'cloud',
      'softskills/workskills',
      'software methodology/process',
      'management',
      'architecture',
      'security',
    ],
  },
  {
    id: 63,
    title: 'A Developer Primer on Blockchain',
    description:
      'Come find out how developers can use Blockchain to build software.  Understand through code how to create “smart contracts” and "chain code" and develop a different type of application that establishes trust, accountability and transparency, while streamlining business processes.',
    level: 'Introductory and overview',
    tags: ['blockchain'],
  },
  {
    id: 64,
    title:
      'Infrastructure as code, but following your business rules',
    description:
      "Developers want autonomy to deploy resources to the cloud as and when we need them.\nIn Business there are often policy, security or legislation requirements those resources have to adhere to\nAs we scale the team and the number of stacks, ensuring those requirements can get more difficult and lead to additional learning and process. This can slow down or even stop devs deploying directly\n\nIn this talk we're going to look at the Cloud Development Kit ( CDK ), a code library from Amazon.\nWe'll see how it allows developers to create, maintain and deploy their AWS resources as easily readable code, while ensuring even your newest hire can create resource that adheres to business requirements - be that structure, process or even permissions.",
    level: 'Introductory and overview',
    tags: [
      'cloud',
      'devops',
      'software methodology/process',
      'architecture',
    ],
  },
  {
    id: 65,
    title: "I want you logged in, I don't want your email address",
    description:
      "It seemed like a simple requirement.\nI needed my users to be logged in, I needed to know who they were, but on day one I didn't want to send them an email.\nAnd if I don't plan to send them an email - I don't want their email. Anywhere.\nIn AWS that's absolutely possible, but it's not the expected route. In this talk we look at my journey into creating a GraphQL API, asking my users to log in to use it, giving them their data, and never seeing their email address the whole time.",
    level: 'Intermediate',
    tags: ['security', 'cloud'],
  },
  {
    id: 66,
    title: 'Writing better textual requirements with EARS',
    description:
      'Whenever a customer engages with a supplier, there must be some sort of contract to define what is needed. This defines the requirements for the activity, whether this is verbal, a set of user stories, or written requirements. Requirements in whatever form are all too often ambiguous. The Easy Approach to Requirements Syntax (EARS) approach is a simple mechanism to gently constrain textual requirements. EARS has been shown to drastically reduce or even eliminate the main problems usually found in textual requirements.',
    level: 'Introductory and overview',
    tags: [
      'softskills/workskills',
      'software methodology/process',
      'management',
    ],
  },
  {
    id: 67,
    title: 'This is a talk about Nothing.',
    description:
      "NULL, None, 0, nullptr, nil, NaN. Every programming language\nrepresents the concept of nothing, zero or just 'not a thing' in a different way.\n\nThis talk looks at the various different representations\nof 'nothing' in programming languages, exploring how the concept\nhas developed over time, how representations differ and what each method has\nover another one.",
    level: 'Intermediate',
    tags: ['programming languages'],
  },
  {
    id: 68,
    title: 'Freedom to choose: Free Software Licensing made simple.',
    description:
      'Free Software licensing is a minefield which most in technology avoid\nnavigating until they really must.\n\nWhy are Open Source licenses not Free Software Licenses, apart from when they\nare? How do all these licenses differ? How might the GPL affect me as a user,\ndeveloper or business? How can I make a choice on which to use?\n\nThis talk aims to educate attendees so that they may make informed decisions\nabout the licenses of the Free Software they use, contribute to and create.\n\nWe will dispel your concerns, increase your confidence and give you the\nability to participate in and understand Free Software licensing conversations.\n\nThis talk is for those who want to learn their GPL from their MIT and comes\nwith 100% no legalese guarantee.\n\nThe speaker delivers the knowledge they learned through years of being a\npassionate Free Software creator, contributor and user.\n\nThis talk is about Free Software; Free as in Freedom, not gratis software.',
    level: 'Introductory and overview',
    tags: ['software licensing', 'free software'],
  },
  {
    id: 69,
    title: "D: It's an option.",
    description:
      "The D programming language is little used in comparison to it's competitors in\nC++, Rust and Go.\nHowever, D is a real, modern language, with a good ecosystem, great tools and a lively community.\n\nThis talk aims to inspire and excite attendees into exploring the D programming language.\nWe'll visit all of D's best features and discuss how it might be an option for\nyour next software project, whatever the scale.\n\nD is a language which can be easily picked up today by users of C-like languages,\nRust, Go and Python.",
    level: 'Intermediate',
    tags: ['programming languages'],
  },
  {
    id: 70,
    title: 'Mind Hacking for Sustainable Health & Wellness',
    description:
      'Whether we like it or not, the mind and body operate on automation. With this automation, we pick up habits all the way through our lives that can be positive and negative. As a society, we are riddled with negative habitual patterns that take control of our lives.\n\nWith chronic diseases and obesity rates significantly increasing, and mental health issues on the rise, we face a challenge that goes far deeper than simply getting a prescription from the pharmacist.\n\nInstead, we must understand how our minds and bodies work at a fundamental level so that we can understand habit formation, habit reformation and how to construct a healthy lifestyle that works on an individual level.\n\nDuring my talk, I will dive into how our automatically minds form habits, the most common negative habits and how a simple formula can begin to shift old patterns. From there, I will depict how mind hacking can be used to develop a healthy lifestyle that is long-lasting and sustainable.',
    level: 'Intermediate',
    tags: [],
  },
  {
    id: 71,
    title:
      'Ad-blockers & the ad supported internet; technology, economics, & ethics',
    description:
      "Would you be okay with someone following you around every place you visited in town, noting what you looked at, how long you spent looking at anything, who you spoke to, and what you ate? (is this even an apt analogy to use for online trackers?)\nIs it okay to consume content for free while blocking the main (or only) monetisation strategies of the creators?\n\nThe ad-supported internet has changed a lot since the times of the Million Dollar Homepage, with online advertising worth over $85bn a year in the United States alone, and now carries serious security & privacy concerns with it.\n\nIn this talk I'll discuss the technology, economics and ethics of online adverts, and the various blockers that people use to avoid them.",
    level: 'Introductory and overview',
    tags: ['security', 'privacy'],
  },
  {
    id: 72,
    title:
      'Run your ASP.NET Core solution in AKS and survive production',
    description:
      'Thanks to Azure Kubernetes Service, it only takes a few minutes to have your fully managed Kubernetes cluster up and running on Azure. You can quickly start experimenting with what is considered the de-facto standard to orchestrate containers solutions and understand how to leverage it and integrate it with the rest of the Azure ecosystem.\n\nHowever, this is just a first step: going to production requires an in-depth look at several aspects which we have to take into account. How do I safely roll out an update after the initial deploy? How can I bring my custom domain, and expose my website in HTTPS? How do I ensure that my cluster stays healthy over time and how do I monitor it?\n\nThese are some of the topics we are going to explore during the talk, together with some useful best practices that will guide you when productionising your first container-based application.',
    level: 'Advanced',
    tags: [
      'security',
      'cloud',
      'devops',
      'demo',
      'kubernetes',
      'containers',
    ],
  },
  {
    id: 73,
    title: 'Distilling claims based security in ASP.NET Core',
    description:
      "ASP.NET Core brings, among the others, a completely revised security model, which has profound implications on how we deal with authentication, authorisation and resource management in our applications.\n\nHow do we support different identity providers? How do we implement a resource-based authorisation policy? How do we leverage multiple security protocols at the same time? \n\nDiring this talk we'll do a deep dive into the ASP.NET Core security infrastructure, answering the above questions and many more",
    level: 'Advanced',
    tags: ['security', 'cloud', 'demo'],
  },
  {
    id: 74,
    title:
      'Integrate containers and Kubernetes into your Azure DevOps build and release model',
    description:
      'Docker has become a first class citizen in Visual Studio 2017 and porting your applications to containers is easier than ever. The advantages of this technology become really evident in Azure DevOps, when we can easily leverage the flexibility of containers in a number of areas.\n\nThis talk will showcase how Docker makes possible to build our code in Azure DevOps by using the most up-to-date SDKs, to create a fully working temporary environment to run our integration tests and to even use containers in order to run UI tests.\n\nThen we will present a possible approach to distribute the images in Azure Container Registry, isolating development images from the production ones. \n\nAs a last step, we are going to explore how Azure Kubernetes Service fits into the loop, and how PaaS services in Azure can be created on the fly, integrated with our application in Kubernetes, and monitored altogether when live.',
    level: 'Intermediate',
    tags: ['devops', 'cloud', 'demo'],
  },
  {
    id: 75,
    title:
      'Use ASP.NET Core to build your API microservices infrastructure',
    description:
      "When it comes to building an API layer, ASP.NET Core is one of the most modern platforms in the industry.\n\nDuring this talk we'll explore the most interesting peculiarities of the framework, such as ensuring resilient communications, managing security, worldwide-scale caching or the support to OpenAPI.",
    level: 'Introductory and overview',
    tags: ['cloud', 'demo', 'api'],
  },
  {
    id: 76,
    title: 'Bring your ASP.NET Core solutions to Kubernetes in Azure',
    description:
      "Containers are one of the major breakthrough in IT of the past few years, and promise to revolutionise the way software is developed and deployed. Thanks to the support in Visual Studio 2019, time has never been more favourable to adopt them in our technological stack.\n\nThis talk will showcase a possible approach to port an existing ASP.NET Core solution to Docker, demonstrating how seamlessly Visual Studio integrates them in the development experience, while still embracing the advantages of dependency management that containers make possible.\n\nAfter executing the solution locally on the development machine, we'll explore which options we have in order to deploy it on Azure Kubernetes Service. We'll show a possible example for a CI/CD pipeline in Azure DevOps and demonstrate how we can integrate it with the PaaS offering in Azure, such as Cosmos DB and Redis Cache.",
    level: 'Introductory and overview',
    tags: ['devops', 'demo', 'cloud'],
  },
  {
    id: 77,
    title: "Help I'm your manager!",
    description:
      "Well done, you've been promoted and tomorrow you'll be managing your first ever team. Wait, what on earth do you do?! Management is a whole new skill, which all of you can be great at. But like any skill it needs to be learned and starting this learning halfway through a career can be daunting. As an experienced manager, and former engineer, benefit from my experience of the highs and lows of taking the next step. By the end of this talk you'll be ready to face your next career challenge.",
    level: 'Intermediate',
    tags: ['management', 'softskills/workskills'],
  },
  {
    id: 78,
    title: 'High Performance DevOps',
    description:
      'Adopting DevOps can enable you, your team or your company to reach performance heights you never dreamed of! Join me in a deep-dive into the cultural practices that can get you delivering harder and faster. First we define high performance. Then we built the ties to DevOps. Hear my hilarious anecdotes of this going right, and very, very wrong. Finally, get some practical tips on implementing these approaches at your company (especially against a resistive management).',
    level: 'Intermediate',
    tags: [
      'devops',
      'softskills/workskills',
      'software methodology/process',
    ],
  },
  {
    id: 79,
    title: 'How to write a Virtual Machine in PHP',
    description:
      'A completely ridiculous idea; join me on a whirlwind demo on how to design and build a Virtual Machine, a toy language and compiler. As well as being a fun and detailed introduction to  the concept of Virtual Machines this talk examines the phenomena of our passion for (and against) different programming languages. Perfect for anyone who has thought about writing their own compiled languages or who just passionately loves (and hates) PHP.',
    level: 'Intermediate',
    tags: ['software methodology/process', 'demo'],
  },
  {
    id: 80,
    title:
      "Why you shouldn't really need to write a DSL and how to do it anyway.",
    description:
      "If you feel the need to write a Domain Specific Language for your next project then, well, you likely don't. But it's so much fun lets do it anyway! This is a detailed talk about how to design domain languages and tips on how to implement it in Python. Obviously after I've warned you not to bother in the first place....",
    level: 'Intermediate',
    tags: ['software methodology/process', 'demo', 'dsl'],
  },
  {
    id: 81,
    title: 'IoT in your Home?  Consequences and Countermeasures',
    description:
      "So, you've heard of the amazing things you can do with Internet of Things devices, and can't live without an internet-enabled toaster that toasts today's weather forecast on one side and the news headlines on the other.  Good for you!  But...like Jeff Goldlum said in Jurassic Park, could it be we were too busy asking whether we *could*, to consider whether or not we *should*!\n\nWhat are the consequences of allowing an IoT device unfettered access to your home network?  Would you be surprised to hear that they could extend from stealing the data in your laptop, all the way to threatening the very infrastructure of the internet itself!  This is no conspiracy theory either - it has already happened, and most likely will again.\n\nNaturally, we don't want to have to abandon our IoT toaster out of sheer panic, we want to know what we can do to still have our weather-patterned bread and be safe. \n\nThis talk will look into the threats that exist our there to you - the home IoT user,  and what steps you can do to mitigate them.  We'll be covering simple steps that nearly anyone can implement, as well as briefly looking at some of the more advanced steps for experts.",
    level: 'Introductory and overview',
    tags: ['security', 'iot'],
  },
  {
    id: 82,
    title: 'Beginning your Infrastructure as Code journey in Azure',
    description:
      "Infrastructure as Code allows you to consistently deploy and configure your cloud infrastructure without human interaction and the errors that come along with that. \n\nIf you're deploying into Microsofts Azure cloud there are a variety of different ways you can deploy using IaC, ARM Templates, Terraform, PowerShell DSC, Chef, Puppet, Ansible etc. In this session, we will take a look at why you might want to make use of some of these tools, when to use which tools, and what the benefits (and downsides) are for these tools.\n\nYou'll come away from this session with an overview of how to start your Infrastructure as Code journey in Azure, what tools are available, and which are best for you.",
    level: 'Introductory and overview',
    tags: ['cloud', 'devops'],
  },
  {
    id: 83,
    title: 'Pick a Platform - Hosting Containers in Azure',
    description:
      "If your looking to run container-based applications in Azure, the number of choices can be overwhelming. Azure offers a wide array of options for hosting containers in the cloud. AKS, ACI, Web Apps, Service Fabric, Functions and more. In this session, we'll look at what options are available for container hosting and explore when you would, and would not, use them. We'll look at the advantages and disadvantages of each platform and the use cases that fit them.",
    level: 'Introductory and overview',
    tags: ['cloud'],
  },
  {
    id: 84,
    title:
      'Building for the Google Assistant: Voice First vs. Screen First',
    description:
      "Learn to build for voice first so you can easily surprise and delight your users on hundreds of millions of devices through the Google Assistant. Let’s be honest: it's quite easy to be tempted to take an existing visual-based experience and simply convert it to voice. In this talk, we’ll cover five key ways voice-first development differs from screen-first development. You’ll learn how to create engaging experiences for voice, the next major disruption in computing. By the end of this session, you should have a better understanding of what types of use cases transfer well to voice interactions and why.",
    level: 'Introductory and overview',
    tags: ['artificial intelligence', 'cloud'],
  },
  {
    id: 85,
    title: '10+1 Things Every Google Assistant App Should Do',
    description:
      'Learn to build for voice first so you can easily surprise and delight customers on hundreds of millions of devices through the Google Assistant. In this talk, we’ll cover ten key things every Action on Google should do in order to deliver a truly engaging voice experience including best practices, useful resources, high level voice design concepts, and technical tips on making Actions on Google multilingual and designing for multiple device types (think smart displays) at the same time. You’ll also learn about three most common mistakes to avoid when building for the Google Assistant to keep your users happy.',
    level: 'Introductory and overview',
    tags: ['artificial intelligence', 'cloud'],
  },
  {
    id: 86,
    title: 'Tech for Good: Making a Difference with Google Assistant',
    description:
      "It takes a little help from everyone — activists, engineers, and designers — to make the world a better place. Every day, there are new examples of how voice technology is being used to solve the world's problems. Companies around the world are bringing attention to social issues and using technology to fix them. In this talk, we’ll explore various ways to use the power of the Google Assistant for the benefit of people and society to solve the world’s most enduring challenges and generate positive social impact, and how you too can start building apps that make a difference.",
    level: 'Introductory and overview',
    tags: ['artificial intelligence', 'cloud'],
  },
  {
    id: 87,
    title:
      'Crafting a Character: Create a Persona for your Google Assistant App',
    description:
      'Do you want to build an awesome Google Assistant app that people will not only use rather out of necessity but actually love to talk to? It all starts with creating a persona; think of it as the front end of your Action on Google, the conversational partner you design to interact directly with users. Defining a clear system persona is vital to ensuring a consistent user experience that builds user trust. In this talk, you’ll learn about useful tools, get tips, and see a few examples of how well-designed personas can completely transform voice-enabled interfaces and boost user engagement.',
    level: 'Introductory and overview',
    tags: ['artificial intelligence', 'cloud'],
  },
  {
    id: 88,
    title:
      'Zero to App: Introduction to Building Apps for the Google Assistant',
    description:
      'Actions on Google are an exciting way to interact with your users through the Google Assistant. They provide a conversational interface between you and your user, and they are super simple to build with Dialogflow. Not sure how to start developing your very first Action on Google? In this talk, we’ll cover everything from understanding the business use case and the high level voice user interface (VUI) design best practices to implementation, testing, and, finally, publishing your app. By the end of this session, you should have a better understanding of the Assistant service ecosystem and how to get started.',
    level: 'Introductory and overview',
    tags: ['artificial intelligence', 'cloud'],
  },
  {
    id: 89,
    title:
      'Beyond Smart Speakers: Get Your Google Assistant Apps Ready for Smart Displays',
    description:
      'In an ever-expanding world of devices for the Google Assistant (smart speaker, smartphone, tablet, smartwatch, earphones, smart TV, car, smart display, and the list goes on and on), developers face today completely new challenges in creating effective and consistent experiences for users. In this talk, we’ll take a closer look at our user’s daily journey as they’re moving from one device to another and cover some key considerations for designing Actions on Google across surfaces - with useful tips to understand when and how to leverage visuals alongside voice interactions, to create rich, delightful conversational experiences for smart displays and more.',
    level: 'Intermediate',
    tags: ['artificial intelligence', 'cloud'],
  },
  {
    id: 90,
    title:
      'Google Assistant: Thriving in a New Age of Brand Engagement',
    description:
      'Machines are finally adapting to our conversational way of communication and people are adopting smart speakers faster than they adopted smartphones 10 years ago. At the same time, voice puts us into a whole new world, almost making obsolete years of visual UX knowledge and best practices related to screen first interactions. How do you create a brand experience when you take away visuals, imagery, colors — everything you crafted so carefully for your brand’s online presence —and make your brand available through a virtual voice assistant? In this session, we’ll discuss the challenges and opportunities that different kinds of organizations are facing when it comes to creating successful voice first experiences.',
    level: 'Introductory and overview',
    tags: ['artificial intelligence', 'cloud'],
  },
  {
    id: 91,
    title:
      'Designing Your Career: Explore a Career Change and Do What You Love',
    description:
      'A bioorganic chemistry turned quantum chemist turned community manager & digital marketer at Google turned women in tech advocate & UK STEM Ambassador (focused on teaching kids how to code) turned international speaker & Google Assistant developer. As a conference-speaking code-writing world-traveling breastfeeding mom, I’ll trace my career path as a woman in tech all the way from the first steps into STEM on up to being named as one of the NEXT 100 Top Influencers of the European Digital Industry and beyond and share 10 things I learned along the way to help you overcome your fears and make it happen. So if you’re still wondering, ‘Is it too late to change careers?’, the answer is no.',
    level: 'Introductory and overview',
    tags: ['softskills/workskills'],
  },
  {
    id: 92,
    title:
      'A Culture of Flexible Working as Key to Keeping More Women in Tech',
    description:
      'Women in tech are leaving the field at alarming rates and many of them cite not having flexibility in their jobs as the main reason. That’s why work flexibility is so important to help keep women in tech engaged in the workforce. As a woman in tech who just had her child, having the ability to work remotely has been incredibly valuable to me. It allows me to spend more time with my child while still staying connected to my career. I want to be able to show my daughter the importance of working hard but also the value of spending time with your family. By not making it an either/or choice, we can expect better results at work and happier families at home.',
    level: 'Introductory and overview',
    tags: ['softskills/workskills'],
  },
  {
    id: 93,
    title:
      'Leaving No One Behind: Building Apps for The Next Billion Users',
    description:
      'The future of the Internet is in the hands of the next billion users — the latest generation of internet users to come online on smartphones in places like Brazil, China, India, Indonesia and Nigeria. As time goes on, the average internet user will be more like these “next billion users” than the first billion who started on PCs. That means we need to look not just at Silicon Valley or London but to places like Sao Paulo, Bangalore, Shanghai, Jakarta and Lagos to truly understand where the internet is going.\nPeople in these countries are facing very different constraints to accessing the internet. In this talk, we’ll cover best practices, guidelines, and applied examples of how mobile developers can build their apps to be truly global and inclusive. Some things to consider: the next billion users have a mobile-only mindset, an instinct for ubiquitous computing, a demand for localized content; the Internet access in emerging markets is still slow and intermittent; 80% of people with disabilities live in emerging markets. Come and learn how to create great experiences that work well for billions of users around the world.',
    level: 'Introductory and overview',
    tags: ['mobile', 'cloud', 'architecture', 'ux'],
  },
  {
    id: 94,
    title:
      'Cache me outside - Caching Methodologies and Architectures',
    description:
      'Caching can be your best-friend or your worst best-friend. A poor cache implementation can mean the difference between experiencing blazing fast performance or unexplained random slowness, or both! It can even result in random stale (out of date) content which you can’t explain.\n\nIn this presentation we will demo and compare different caching methodologies, and their perceived real world uses. We will discuss Donut cache, Memory cache, Redis, Varnish, CDNs, and many more. We will dive into demos of real world implementations which can cause unpredictable problems. Some of these are horrible, and some are face-palm.\n\nAt the end of this presentation you will be aware of the different trade-offs with each caching methodology, and which might best for your situation.',
    level: 'Intermediate',
    tags: ['architecture'],
  },
  {
    id: 95,
    title: 'Office 365 as a development platform',
    description:
      "The services that Office 365 provides are so much more than managed SharePoint and Exchange. These days there's a whole ecosystem of Office services with new lo/no code tools like Flow and PowerApps to provide the connective tissue. Not only that, but when you can't do what you want in Office 365, it's easy to reach out and consume the richness of Azure's many services to fill the gaps. What might have taken weeks to achieve in a bespoke application can be built in hours if you take full advantage of the platform.\n\nThe talk will introduce some of the key concepts behind Office 365 as a development platform, outline the tools available, and discuss some of our experiences both good and bad in doing development this way for a variety of customers. The talk will end on a discussion on the far bigger topic of how platforms like Office 365 which are made for automation and AI are not just tools we as developers can use, but also potentially represent an existential threat to the way we work as developers.",
    level: 'Introductory and overview',
    tags: ['cloud'],
  },
  {
    id: 96,
    title: 'Nailing down distributed workflows with microservices',
    description:
      'Workflows are present in every business. These bring up different challenges such as integration with different systems, long-lived transactions, failure recovery and more.\nIn this session we’ll learn how to address these issues with a distributed, event-driven architecture based on microservices that I’ve been using successfully in the last three years across different projects. We also learn how to implement this architecture with MassTransit and Automatonymous and run it on containers with Kubernetes.\n \nThe session broken down into three parts. In the first part of the session we’ll brush up some DDD patterns and microservices patterns such as sagas, orchestration and different communication patterns. \nOn the second part we’ll put those patterns in practice by building up the sample architecture for an imaginary business, which requires integration with external systems with different communication protocols and built with different technologies (Python, Node, …).\nOn the final part we’ll see how to implement the architecture.',
    level: 'Advanced',
    tags: ['architecture'],
  },
  {
    id: 97,
    title:
      'Artificial intelligence highlights of 2019. Spot, verify, implement!',
    description:
      'With so much technological change, the state of AI has been difficult at times to fully grasp. How to differentiate what is progress, and what is merely hype? What has to be taken into account in the development of business strategy around AI 2019 onward? This talk has 2 goals. First, to identify the most important advancements in AI within the last 12 months. Second, to simultaneously presents factors and authorities that shape the current state of AI. Bonus: remarks and the most critical metrics from reports published by a variety of institutions including MIT, Harvard, as well as key business influencers such as OpenAI. This talk will benefit everyone interested in AI top stories and stimulate businesses to seek for robust AI driven solutions.',
    level: 'Introductory and overview',
    tags: [
      'artificial intelligence',
      'softskills/workskills',
      'big data',
    ],
  },
  {
    id: 98,
    title:
      "Is Sophia - the World's First Robot Citizen - really a super robot? Data science driven explantion.",
    description:
      "Sophia is considered one of the most sophisticated AI with a humanoid body designed to develop human-equivalent intelligence. It attracts controversy not only because of Audrey Hepburn resemblance, but also to be granted with a full citizenship of Saudi Arabia. Its creator- Hanson Robotics - describes the machine as being designed to use artificial intelligence to see people, understand conversations, form relationships and improve all the above based on humans body language, gestures, facial expressions, or eye contact it captures. The goal of this talk is to explain how the robot processes data (by showing parts of its open source code) and to define its status between self-conscious and being a pre-programmed chat bot with a human face. It will also include the most interesting and controversial footage from Sophia's public appearances. Suitable for everyone interested in the 'scientific mechanics' behind artificial intelligence.",
    level: 'Introductory and overview',
    tags: [
      'artificial intelligence',
      'design',
      'machine learning',
      'big data',
      'blockchain',
    ],
  },
  {
    id: 99,
    title: 'Turbo Charging your Mob Programming Sessions.',
    description:
      'So you’ve heard of Mob Programming! Maybe you’ve tried it. \n\nBut even still you’re not sure how it applies to your workplace?\nOr perhaps you would like to learn what it is about or solidify your knowledge?\n\nThis talk is for you! After 60 minutes you will: \n\n* Know the rules of mob programming.\n* Be more effective working in a mob.\n* Know how to encourage others into Mob Programming.\n* Understand how Mob Programming can boost the learning of your team.\n* Use Mob Programming to turbocharge your productivity.',
    level: 'Introductory and overview',
    tags: ['software methodology/process', 'softskills/workskills'],
  },
  {
    id: 100,
    title: 'Design Thinking Dad*: Why I take my work home',
    description:
      "Over the last year, Design Thinking Dad has been on a transformational personal journey — from a 'Digital Designer' trapped by Waterfall delivery, to a 'Design Thinker' working in a fast-paced Agile environment.\n\nIn this talk, he'll share what he learned and show how, armed with only an abundant supply of post-it notes, he's using Design Thinking at work to empower creative teams and in his personal life to tackle the everyday challenges of being a parent.\n\nThis refreshing and light-hearted talk will help you to:\n\n- identify your everyday ‘pain-points’ and generate creative solutions to overcome them\n- quickly and easily co-create awesome experiences with your colleagues, family and friends  \n- understand the human skills you’ll need to ensure you’re ‘robot proof’ and prepaid for the 4th Industrial Revolution...\n\n...but perhaps most importantly, he’ll attempt to answer the ultimate question — how should you respond when your kids ask \"are we nearly there yet?\"\n\nYou don’t have to be a Dad or even a parent to enjoy this talk. Design Thinking Dad will share practical tips on how you can use Design Thinking mindsets and methods to lead a more meaningful, creative and joy filled life (it just so happens that his biggest pain-points are his kids.)\n\n*Dad jokes and dancing will be kept to a minimum.",
    level: 'Introductory and overview',
    tags: [
      'softskills/workskills',
      'design',
      'software methodology/process',
    ],
  },
  {
    id: 101,
    title: 'Draw UX (or how to get your visual thinking groove on)',
    description:
      "Working visually is a super power. It increases your ability to understand and share complex information, think creatively and collaborate effectively. But for lots of adults drawing at work is a huge step outside of their comfort zone.\n\nI'm a business visualiser who draws, writes and trains. \n\nIn this session I will show you how to use visual skills throughout the UX journey, transforming your engagement and problem solving skills, and how you already have the functional drawing ability you need, even if you can barely draw a stick. Honest.\n\nBy the end of this session you will understand WHY working visually is so effective, but more importantly you'll get to see HOW it works by trying out visual exericises yourself.\n\ntestimonial: \"they are enthusiastic, knowledgable, funny, clear and articulate in their delivery, and bring everyone in the room along with them. They would be an asset to any event!",
    level: 'Introductory and overview',
    tags: ['softskills/workskills', 'design', 'ux'],
  },
  {
    id: 102,
    title: 'Debugging with Visual Stduio',
    description:
      'Many times when debugging the F10 and F11 keys get worked overtime, and maybe the occasional breakpoint. However Visual Studio has many functions to help with debugging. In this talk I will go through the debugging features from basic breakpoints to thread and processes windows, showing how these can be used to speed up the beginning, by getting quickly to the problem code.',
    level: 'Introductory and overview',
    tags: ['debugging'],
  },
  {
    id: 103,
    title: 'Alert Fatigue: Tips to avoid cacophony',
    description:
      "You've monitored all the things, you've turned on all the alerts to make sure you don't miss a thing. You're ready to take on the world. Get the balance wrong and you might end up being deafened. Drawing on over a decade of experience of supporting software systems, we look at how the DevOps race to produce metrics from everything could lead to decision paralysis.  How much is enough? How do you empower your teams to swim not drown?",
    level: 'Introductory and overview',
    tags: ['devops', 'monitoring', 'observability'],
  },
  {
    id: 104,
    title: 'Dungeons, Dragons & Developers',
    description:
      'You enter the dungeon, as the echoes of your footsteps sound around you, something catches your eye - is that… oh, oh no.\n\nYou grab your trusty sword and with your fellow adventurers, you seek to overcome the mighty challenge that lays ahead of you: building software.\n\nThis talk is a look at some of the parallels between Dungeons and Dragons, and software development.\n\nWe’ll see how lessons learned through delving into dungeons and fighting monsters with a party of adventurers can help teams of developers when building software in the real world.\n\nAre you ready to join me in a mighty quest for better software?',
    level: 'Introductory and overview',
    tags: [
      'software methodology/process',
      'management',
      'softskills/workskills',
    ],
  },
  {
    id: 105,
    title: "Content Security Policies: Let's Break Stuff",
    description:
      "Content Security Policies are another tool we should have in our security toolbelt to help protect users of our sites. In this session you'll learn what they are, why they're needed, how they work and the limitations on what they can & cannot do to protect users.\n\nYou'll see a demo of attacks a CSP will block, you'll see a site broken by a CSP, show what the different CSP directives & options will do and be introduced to some of the tools available to help with implementing a CSP on your sites!",
    level: 'Introductory and overview',
    tags: ['security'],
  },
  {
    id: 106,
    title: 'Think like a hacker',
    description:
      "Much in the same way that to secure a house it helps to know how to break in, knowing how to attack our systems will help us secure them. You have a lot of data in your organisations. Whether you think it's sensitive or not, it has value. Whether an attacker wants data for profit, a grudge, or just for fun we need to ensure that we don't just leave the door open for them to take what they want.\n\nIn this session we'll start to think like a hacker. The what, why, who, where and how of an attacking mindset will leave you with practical steps you can take away and use to start protecting your systems a little better.",
    level: 'Introductory and overview',
    tags: ['security'],
  },
  {
    id: 107,
    title:
      'How to be a better developer - without learning another JavaScript framework',
    description:
      'It’s increasingly important to make time for self-improvement and career development, but it’s hard to know where to focus your efforts. As developers we’re often attracted to learning new technologies and languages, however I’d like to make the case for a number of non-technical areas of development that I believe can give you a huge advantage in your career.\n\nIn this talk, I’ll share a number of skills that I’ve found compliment a technical toolbelt, such as generating and maintaining momentum within your team and looking beyond requirements to identify opportunities for your business. I’ll also share some tips to help fast track your progress, exploring why it’s important to seek out and identify the gaps in your skill set, and how to seize opportunities to strengthen these areas.\n\nIt’s my hope that this talk will give you a different perspective of what makes a great developer, as well as the tools and motivation to broaden your expertise so that you can make a bigger impact in your organisation.',
    level: 'Introductory and overview',
    tags: ['softskills/workskills'],
  },
  {
    id: 108,
    title: 'Tales of an app-y developer',
    description:
      "In this talk, I will discuss what it's like to be an app developer. Come and experience the highs and lows of this fast paced, constantly evolving area of tech. I will talk about the lessons I have learned, and suggest how app users can help developers to improve their apps.",
    level: 'Introductory and overview',
    tags: ['mobile', 'softskills/workskills'],
  },
  {
    id: 109,
    title: 'From Big Data to Impact in Telematics Industry',
    description:
      'Europe’s leading provider of telematics solutions to the technology and logistics industry. Discover how with over 450,000 connected assets generating billions of messages a day, worldwide, we are evolving our platform to bring real-time analytics to our customers to improve safety, security and efficiency outcomes.\n\nIn this presentation, we are aiming to get you through the big data journey in transport industry by addressing issues in data storage and management, a distributed environment, stream data processing and machine learning. Technologies such as Kafka, HDFS, Spark and .Net Core Micro Services will be discussed using case studies.',
    level: 'Intermediate',
    tags: [
      'iot',
      'big data',
      'software methodology/process',
      'machine learning',
      'artificial intelligence',
    ],
  },
  {
    id: 110,
    title: 'Handing IoT Data at Scale',
    description:
      'Europe’s leading provider of telematics solutions to the technology and logistics industry. Discover how with over 450,000 connected assets generating billions of messages a day, worldwide, we are evolving our platform to bring real-time analytics to our customers to improve safety, security and efficiency outcomes.\n\nThe talk will cover ingesting data at high volume and high velocity using Apache Kafka (Streaming), data handling and processing using .net Core, Big Data with HDFS and Flexible data storage with Couchbase and performing analytics to provide insight.',
    level: 'Introductory and overview',
    tags: [
      'iot',
      'software methodology/process',
      'architecture',
      'big data',
    ],
  },
  {
    id: 111,
    title: 'Big Data, Big Testing',
    description:
      'Europe’s leading provider of telematics solutions to the technology and logistics industry. Discover how with over 450,000 connected assets generating billions of messages a day, worldwide, we are evolving our platform to bring real-time analytics to our customers to improve safety, security and efficiency outcomes.\n\nThe talk will cover Coordinating load from multiple endpoints, Stream vs Batch throughput testing, testing Spark and C# microservices.\nCovering testing data with GDPR in mind, obfuscation, ensuring quality and correct data types flow through big data solutions.',
    level: 'Intermediate',
    tags: ['big data', 'testing'],
  },
  {
    id: 112,
    title: 'Using Big Data for Real World Application',
    description:
      'Europe’s leading provider of telematics solutions to the technology and logistics industry. Discover how with over 450,000 connected assets generating billions of messages a day, worldwide, we are using Big Data to provide assistance to our customers with award-winning innovations and improving road safety for all.\n\nThe talk will cover combining data from external sources with IoT data to improve road safety. We will discuss the logic and intelligence behind mapping real world events to real time telematics and delivering this to the user via edge devices on the move.',
    level: 'Introductory and overview',
    tags: ['iot', 'big data', 'architecture'],
  },
  {
    id: 113,
    title: "What's In A Game?",
    description:
      'In a videogame, anything and everything in the world has been made from scratch and is a wonderful collaboration between many different disciplines. In this talk, we’ll take just one small feature – a TV screen that breaks and sparks electricity when you hit it – and look in detail at what goes into making it. What code systems are required for its functionality? What art, visual effects and audio are needed? How do you combine it all into something you can place in the game? And how can you make sure you don’t have to reinvent the wheel if you want another, similar, electrical item?\n\nYou’ll never look at a videogame in the same way again.',
    level: 'Introductory and overview',
    tags: ['gaming'],
  },
  {
    id: 114,
    title: 'Securing the web with AI',
    description:
      'In today’s web not a week goes by without a large data breach or a website being hacked. Unlawful access to our online information can be prevented by encryption, 2FA and IP detection, but often this isn’t enough. Additionally tools like 2FA can be difficult to configure or understand for the initiated, leaving many at a disadvantage - security should be a right, not a privilege.\n\nThis session explores some interesting and experimental ways that AI could be used to improve security and protect users on the web.\n\nUsing existing AI tools like Azure Cognitive Services we’ll look at ways facial or voice recognition could be used as part of 2FA to make security more accessible to end users, including code examples in .NET and JavaScript. Then we’ll investigate some simple methods to find patterns in user behaviour, such as login times and mouse behaviour, to detect anomalies and take action.\n\nFinally, we’ll see how machine learning can be used to identify fraudulent text or photoshopped images within webpages and warn users of scams before it becomes an issue.',
    level: 'Intermediate',
    tags: [
      'security',
      'machine learning',
      'artificial intelligence',
      '.net',
      'javascript',
    ],
  },
  {
    id: 115,
    title: 'Cross-platform headless .NET apps',
    description:
      'This session aims to demonstrate how we can use "Headless" hosted services and .NET to quickly build cross-platform applications – from backend systems in .NET Core, to mobile apps built with Xamarin, to website front-ends with the experimental Blazor framework...\n\nWith the way the .NET ecosystem has evolved in recent years, it\'s never been easier to wire up our code to work just about anywhere. .NET Standard makes it super simple to write our core libraries once and integrate them into whatever shell we choose, be it a mobile app, website, IoT device or something else. At the same time the infrastructure landscape has shifted from costly cloud systems towards "serverless" and hosted SaaS offerings, paving the way for more developers adopting off-the-shelf "Headless" / API consumed services to power their backend systems.\n\nWe\'ll look at real-world examples using a Headless CMS "Umbraco" to manage our system\'s data and tying it into a .NET Core Azure Function, an iOS app built with Xamarin, and even a single-page Blazor website to prove just how quick and easy it can be to reshape one codebase into many different end products.',
    level: 'Introductory and overview',
    tags: ['cloud', 'mobile', 'demo', '.net', 'xamarin'],
  },
  {
    id: 116,
    title: 'Resilient global applications with Azure Front Door',
    description:
      "Delivering maximum uptime and the fastest response to our end users all over the world is very important... So we deploy our application to multiple regions and route traffic to the nearest available servers. But managing and visualising each component of our infrastructure, how it everything hangs together, detecting and handling failure, as well as deployments, can all be a challenge.\n\nFor over 5 years \"Front Door\" has been the public gateway powering some much loved Microsoft services – including Bing, Office, Skype, and the Azure Portal – handling routing, load balancing, failover, and giving product teams painless control of services at scale. Recently released, Azure Front Door Service cost-effectively brings the same power to our own applications with little effort.\n\nThis session will dive in to the world of using AFD (and related Azure services) to add enterprise-grade resilience to a globally distributed application.\n\nWe'll see how easy it is to visualise and control traffic across a geo-redundant multi-cloud setup, and the performance improvements AFD can make on end users through configurable routing, caching, and SSL termination at the edge.\n\nFinally, we'll configure our failover setup to ensure our application is rarely unavailable before putting it through it's paces by simulating a range of system failures (500 errors, cold starts, DoS) to watch AFD gracefully handle it with minimal impact on end users.",
    level: 'Introductory and overview',
    tags: ['cloud', 'demo'],
  },
  {
    id: 117,
    title: 'The Power of the Feedback Loop',
    description:
      "From how the body knows when to stop growing to saving lives from speeding cars, the feedback loop is a mechanism that secretly underlies every corner of our existence. The concept spans schools of thought in psychology, economics, biology and neuroscience and is now emerging in the intersection of technology and behavioural science. \n\nAs technologists we are always looking to build products that are engaging and effective, and as people we strive to reach our full personal and working potential. Could the feedback loop be the piece we're all missing?\n\nIn this talk we'll dive into the structure of the feedback loop, some impressive examples of how powerful they can be and we'll explore how you can harness their power in your work and personal life.",
    level: 'Introductory and overview',
    tags: [
      'softskills/workskills',
      'design',
      'ux',
      'behavioural science',
    ],
  },
  {
    id: 118,
    title: 'An IoT MOT - Let’s DDD it Live!',
    description:
      'In this session, we’ll explore various Internet of Things platforms and the challenges of maintaining IoT devices and systems themselves (“Maintenance of Things”). Covering aspects such as Design, Testing, Continuous Integration and Deployment. Also includes live on stage demos.',
    level: 'Intermediate',
    tags: [
      'iot',
      'hardware',
      'cloud',
      'architecture',
      'demo',
      'security',
      'testing',
    ],
  },
  {
    id: 119,
    title:
      'Count your steps, count your blessings: A Citical Look at Self-Care Tech',
    description:
      'People meditate with their phones, practise yoga with their gaming consoles and let their personalised fitness tracker comment on their quality of sleep – technology-facilitated self-care is everywhere. Somewhere in between the mountains of personal data being collected, analysed and displayed to people, lies a small question: What does this actually mean for us?\n\nThis (slightly experimental & very personal) talk will explore ideas about the quantified self from a critical standpoint. It aims to shine a light on the complex implications found within self-care tech and explore the underlying research and design assumptions. Conceptualising empathy, compassion and what it means to help in/outside/through technology will form the very baseline of this talk.\n\nThis talk will draw on the speaker’s personal artistic practise and their academic research in Human Computer Interaction. It will present a range of ideas on how to engage with therapeutic technologies on a deeper, personal level, but also from a societal, justice-oriented stance.',
    level: 'Introductory and overview',
    tags: [
      'software methodology/process',
      'design',
      'ux',
      'ui',
      'healthcare',
    ],
  },
  {
    id: 120,
    title: 'Put some Wifi in my Toaster (and Call it a Day?)',
    description:
      'With a single tap on your phone, you can activate your washing machine remotely, have your smoke alarm tell you if your house is on fire (or not!) and use your fridge to organise your calendar meetings: Ubiquitous computing and internet-connected technology is everywhere. Gone are the days of duct-taping a battery pack and a modem to your couch: Sleekly designed products that claim to make everyday easier are being released at a fast pace. \n\nHowever, a lot of these products are very “solution-first” and do not take into account how people actually use technology – often leading to complaints and ridicule from the community down the line. This talk will explore what it means to use technology and how we can challenge and test our own assumptions about the world.\n\nDrawing on methods found in Human Computer Interaction research, this talk will introduce a toolkit to discover and test design assumptions about technology that are grounded in everyday life. It will also discuss what it means to create technology from a wider perspective and offer some ideas to develop best practises within your own work environment.',
    level: 'Introductory and overview',
    tags: [
      'software methodology/process',
      'iot',
      'ui',
      'ux',
      'design',
    ],
  },
  {
    id: 121,
    title: 'Appsolutely Fabulous',
    description:
      'Whilst there is a very good cross platform client application (app) development story for .NET, its also very much built on OO patterns.\n\nFabulous is a functional first approach using F# - built on Xamarin forms that does away with the view model.\n\nThis talk aims to show just enough Fabulous to be dangerous - with a little bit of background and a little bit of live code to illustrate the possibilities - in the hope of inspiring further investigation.',
    level: 'Introductory and overview',
    tags: ['functional programming', 'mobile'],
  },
  {
    id: 122,
    title: 'Deep Learning in the world of little ponies',
    description:
      'In this talk, we will discuss computer vision, one of the most common real-world applications of machine learning. We will deep dive into various state-of-the-art concepts around building custom image classifiers - application of deep neural networks, specifically convolutional neural networks and transfer learning. We will demonstrate how those approaches could be used to create your own image classifier to recognise the characters of "My Little Pony" TV Series [or Pokemon, or Superheroes, or your custom images].',
    level: 'Introductory and overview',
    tags: ['machine learning', 'artificial intelligence'],
  },
  {
    id: 123,
    title:
      'Bring your ML models to life (and production) using DevOps practices',
    description:
      'So your data science teams have been running ML experiments for some time using local or cloud environment and found some great insights? And the question now is how to take it further and bring those to the production by using known and proven DevOps practices. At this session we will look at how to build and scale such ML DevOps pipelines using various approaches.',
    level: 'Intermediate',
    tags: ['machine learning', 'devops'],
  },
  {
    id: 124,
    title:
      'So what is this GraphQL thing anyway and why should I care?',
    description:
      'For some time the default method for access an API has been REST (or more usually CRUD over http). This can be an effective solution but its not without challenges, so what if there were another way...\n\nGraphQL is an alternative way to provide an API to your clients that addresses some of the issues commonly found with Rest.\n\nThis talk aims to provide an introduction to the GraphQL query language and to show the code needed to create a GraphQL server (in .NET).',
    level: 'Introductory and overview',
    tags: [],
  },
  {
    id: 125,
    title:
      'How I won £500 at Royal Ascot And What That Can Teach You About Data Science',
    description:
      'Machine Learning is simple when you have lots of labelled data, but what do you do when the system you’re trying to predict is mostly stochastic in nature? In this fascinating talk I’ll explain how we can combine data science techniques to tame the stochastic nature of horse racing and make some remarkably accurate racing predictions. I’ll use these techniques to live predict the result of a race running on the day, and we’ll make a small bet on the outcome.',
    level: 'Intermediate',
    tags: ['machine learning', 'artificial intelligence'],
  },
];

export default talks;
