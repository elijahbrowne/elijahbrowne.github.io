// Site copy, originally from elijahbrowne.com (spelling fixed Sept 2026).
export const SITE = "https://www.elijahbrowne.com";
export const RESUME = "https://drive.google.com/uc?export=download&id=1kk28Ex7qMb1l8cZj__4m-AYTnP616Ils";
export const EMAIL = "mailto:elijahbrowne48@gmail.com?";
export const LINKEDIN = "https://www.linkedin.com/in/elijahb0509/";
export const TAGLINE = "Educator · Learning Experience Designer";

export const IMG = {
  home: "images/headshot.jpg",
  shoppers: "images/shoppers/slide-1.jpg",
  email: "images/email/cover.jpg",
  payment: "images/payment/cover.jpg",
  microlearning: "images/gemini-microlearning/cover.jpg",
  stuartHall: "images/stuart-hall/cover.jpg",
  taskMonsters: "images/task-monsters/cover.jpg",
  smartphone: "images/smartphone/cover.jpg",
};

export const ABOUT = [
  "I’m an educator and learning experience designer who enjoys bringing together education, technology, and creativity to create meaningful learning experiences.",
  "My experience as an educator has taught me to look at learning from the learner’s perspective—what makes something engaging, intuitive, accessible, and worth their time. I also have a background in instructional technology and multimedia, which allows me to approach design from both an educational and technical perspective.",
  "I’m passionate about designing experiences that don’t just deliver information, but help people understand, explore, and apply what they learn.",
];

export const PUBLICATIONS = [
  { t: "#SEEDTalks: Election 2024", sub: "SEED Coalition · 2024" },
  { t: "The For-Against-Neutral Assignment", sub: "News Literacy Across the Undergraduate Curriculum/ Bloomsbury Publishing · 2024", href: "https://www.bloomsbury.com/us/news-literacy-across-the-undergraduate-curriculum-9798216172130/" },
  { t: "For-Against-Neutral Assignment", sub: "2024 EDUCAUSE Horizon Report | Teaching and Learning Edition · 2024", href: "https://library.educause.edu/resources/2024/5/2024-educause-horizon-report-teaching-and-learning-edition" },
];
export const CERTS = [
  { t: "How to Conduct a Learning Needs Analysis", sub: "Udemy · 2026", href: "https://www.udemy.com/certificate/UC-2a0d90ba-74b5-49ee-b369-a3f7ab8031a2/" },
  { t: "Learning and Development (L&D) with Generative AI", sub: "Udemy · 2026", href: "https://www.udemy.com/certificate/UC-ac92c8cc-e8c6-4563-991c-21dcf7d8d29a/" },
  { t: "xAPI Fundamentals - Track Learning with Greater Detail", sub: "Udemy · 2026", href: "https://www.udemy.com/certificate/UC-ac92c8cc-e8c6-4563-991c-21dcf7d8d29a/" },
  { t: "Let's Create a Course in Articulate Storyline 3 / 360", sub: "Udemy · 2026", href: "https://www.udemy.com/certificate/UC-f3b1b77e-19f1-4108-822e-06e7d4c3c6a4/" },
  { t: "Accessible Elearning in Articulate 360", sub: "LinkedIn Learning · 2026" },
  { t: "Elearning Essentials: Instructional Design", sub: "LinkedIn Learning · 2026" },
];
export const AWARDS = [
  { t: "Student Production Award for Short or Long Form Video Essay", sub: "National Academy of Television Arts & Sciences Upper Midwest Foundation · 2025" },
  { t: "Celebrating Scholarship and Creativity Day Spotlight", sub: "College of Saint Benedict's and Saint John's University · 2024" },
  { t: "Student Production Award for Music Video", sub: "National Academy of Television Arts & Sciences Upper Midwest Foundation · 2023" },
  { t: "Student Production Award for Public Affairs/Community Service", sub: "National Academy of Television Arts & Sciences Upper Midwest Foundation · 2023" },
];

const P = SITE + "/project-page/";
const SKILLS_SHOP = "Skills: Instructional Design, Learning Experience Design, Scenario-Based Learning, AI Simulation Design, Articulate Storyline, Devlin.ai, eLearning Development, Branching Scenarios, Conversational Learning, Learner Assessment, Feedback Design, Just-in-Time Learning, Accessibility, Multimedia Learning, Storyboarding, Canva, JavaScript, AI-Assisted Learning Design";
const SKILLS_MAIL = "Skills: Articulate Storyline 360, Canva, DaVinci Resolve, Instructional Design, E-Learning Development, Scenario-Based Learning, Assessment Design, Accessibility, Adult Learning, Bloom’s Taxonomy, WCAG 2.1";

// Project page cards. `slug` => built-in detail page; `ext` => opens original site page.
export const PROJECTS = [
  { title: "Turning Shoppers into Cardholders", slug: "turning-shoppers-into-cardholders", img: IMG.shoppers, skills: SKILLS_SHOP, blurb: "I designed and developed an AI-powered sales simulation in Articulate Storyline using Devlin.ai to help retail associates practice realistic customer conversations. The experience moves beyond scripted responses by allowing learners to interact directly with an AI customer, assess the customer’s needs, respond to objections, and determine when to continue or back down from the sale.", cta: "Read More" },
  { title: "Sending a Professional Email", slug: "sending-a-professional-email", img: IMG.email, skills: SKILLS_MAIL, cta: "Read More" },
  { title: "Turning Payment Research Into a Gemini Notebook", slug: "turning-payment-research-into-a-gemini-notebook", img: IMG.payment, skills: "Skills: Gemini Notebook, Instructional Design, AI-Assisted Learning, Source Curation, Generative AI, Learner-Centered Design, Educational Technology", cta: "Read More" },
  { title: "Building a Gemini Notebook Microlearning Lesson", slug: "building-a-gemini-notebook", img: IMG.microlearning, skills: "Skills: Microlearning Design, Instructional Design, eLearning Development, Articulate Rise 360, Adult Learning, AI-Assisted Learning, Prompt Design, Learner-Centered Design", cta: "Read More" },
  { title: "Understanding Reception Theory Notebook", slug: "understanding-stuart-hall-gemini-notebook", img: IMG.stuartHall, skills: "Skills: Gemini Notebook, Instructional Design, Learning Experience Design, AI-Assisted Learning, Media Literacy, Source Curation, Generative AI, Learner-Centered Design, Educational Technology", cta: "Read More" },
  { title: "Task Monsters", slug: "task-monsters", img: IMG.taskMonsters, skills: "Skills: JavaScript, Gamification, Interaction Design, Base44, AI-assisted design, Figma", cta: "Read More" },
  { title: "Smartphone Content Creation: Mastering Framing and Audio", slug: "smartphone-content-creation", img: IMG.smartphone, skills: "Skills: Articulate Rise 360, Instructional Design, Video Production, Scenario-Based Learning, User-Centered Design, Assessment Design, Learning Experience Design, ADDIE", cta: "Read More" },
];
export const RESOURCES = [
  { title: "Media Literacy Tools for the Classroom", img: "images/resources/media-literacy.jpg", alt: "Top of the Media Literacy Tools for the Classroom resource, with the heading What is Media Literacy? and an introductory paragraph", text: "This resource introduces key media literacy concepts and provides practical classroom strategies, activities, and resources to help students identify credible information, recognize bias and misinformation, and become more thoughtful consumers and creators of media.", href: "https://canva.link/33i5scxo70mvwf8" },
  { title: "PQ4R Reading Organizer", img: "images/resources/pq4r.jpg", alt: "Preview of the PQ4R Reading Organizer worksheet pages on a pink-to-purple background", href: "https://www.teacherspayteachers.com/Product/PQ4R-Reading-Organizer-16289628" },
  { title: "Financial Literacy Documentary Guide", img: "images/resources/financial-literacy.jpg", alt: "Preview of the Get $mart with Money documentary guide: a 3-page Cornell-notes style worksheet, customizable vocabulary section and lesson plan, for grades 3 to 12", href: "https://www.teacherspayteachers.com/Product/Get-Smart-With-Money-Watchers-Guide-16237306" },
];
export const VIDEOS = ["ISjUmAEKpYQ", "s1KcRdtSc8Q", "uKmxPue6kGI"];

// Detail pages. Block types: h2 h3 p ul ol. Inline [text](url) links supported.
export const DETAILS = {
  "turning-shoppers-into-cardholders": {
    title: "Turning Shoppers into Cardholders",
    sub: "An AI-powered sales simulation built in Articulate Storyline and Devlin.ai",
    img: "images/shoppers/sim-complete.jpg", heroAlt: "The finished simulation in the Storyline player: the learner says there's no annual fee, and Belle replies Okay, and the $25 comes off today's purchase if I sign up right now? How do I apply?", skills: SKILLS_SHOP,
    tryIt: "#/project-page/turning-shoppers-into-cardholders/lesson",
    lesson: ["Turning Shoppers into Cardholders (Storyline course)", "Turning%20Shoppers%20into%20Cardholders%20(1)/story.html"],
    body: [
      ["h2", "Summary"],
      ["p", "I designed and developed an AI-powered sales simulation in Articulate Storyline using Devlin.ai to help retail associates practice realistic customer conversations. The experience moves beyond scripted responses by allowing learners to interact directly with an AI customer, assess the customer’s needs, respond to objections, and determine when to continue or back down from the sale."],
      ["p", "The project also became an exploration of the instructional and economic considerations of AI simulations. Through testing, I examined how simulation length, AI usage, retries, and learner support affect both the learning experience and scalability. The result reinforced my belief that AI simulations are most effective when they are intentionally designed around the specific conversational skills learners need to practice."],
      ["h2", "The Challenge"],
      ["p", "BroadLane Department Stores is a fictional U.S. retailer preparing to expand into a new market. The provided design brief challenged designers to create eLearning that would help associates sell the BroadLane Preferred Card."],
      ["p", "The performance problem went beyond memorizing card benefits."],
      ["p", "Associates needed to:"],
      ["ul", ["Build rapport with customers.", "Assess whether a purchase presented a good sales opportunity.", "Explain the value of the card.", "Respond to objections.", "Know when to continue the conversation.", "Know when to back down."]],
      ["p", "The brief specifically encouraged scenario-based learning and branching interactions."],
      ["p", "I used the existing challenge brief and assets as a starting point, but this was not built as a competition submission. I developed the finished experience independently in an approximately eight-hour work session."],
      ["h2", "The Learning Problem"],
      ["p", "A traditional quiz could test whether an associate knows what to say."],
      ["p", "It cannot easily test whether they can actually have the conversation."],
      ["p", "That distinction drove my design decision."],
      ["p", "The learner needed to respond in their own words, react to a customer's behavior, and make decisions throughout the interaction."],
      ["p", "I treated the simulation as a form of performance practice rather than another knowledge check."],
      ["h2", "Research Before Design"],
      ["p", "Before building the course, I used [Gemini Notebook](https://notebook.google.com/notebook/569c4cd0-8622-4986-9a23-5534fe341987) to organize resources related to store-card sales and objection handling."],
      ["p", "This helped me move from a broad sales concept to a more specific instructional sequence."],
      ["p", "I then translated the learning objectives into a storyboard and organized the experience around the actual performance:"],
      ["p", "Assess → Build Rapport → Position → Handle Objections → Decide When to Back Down"],
      ["p", "The instructional content introduced several core techniques, including the 4Ps of Pushback:"],
      ["ul", ["Pause — let the customer finish.", "Probe — ask a clarifying question.", "Paraphrase — confirm the concern.", "Provide — connect the response to the customer's situation."]],
      ["p", "The final activity would then require the learner to apply those ideas rather than simply recall them."],
      ["h2", "Designing the Experience"],
      ["h3", "1. Understand the product"],
      ["p", "The learner first learns the core benefits of the BroadLane Preferred Card."],
      ["h3", "2. Understand the customer"],
      ["p", "The learner learns to assess the purchase before immediately delivering a sales pitch."],
      ["p", "A large purchase may create a natural opportunity. A small purchase or a rushed customer may not."],
      ["h3", "3. Build rapport"],
      ["p", "The course establishes a simple rule:"],
      ["p", "Talk to the customer, not at them."],
      ["p", "The learner first engages with what the customer is buying and then looks for an appropriate opportunity to introduce the card."],
      ["h3", "4. Handle objections"],
      ["p", "The learner practices responding to different forms of resistance, including price, lack of need, lack of interest, and lack of information."],
      ["h3", "5. Decide when to stop"],
      ["p", "The final skill is knowing that successful selling does not mean overcoming every objection."],
      ["p", "The learner is taught to proceed when appropriate, pivot when there is another opportunity, and stop after a clear rejection."],
      ["h2", "Why Use an AI Simulation?"],
      ["p", "This was the point where a traditional Storyline interaction started to feel limiting."],
      ["p", "A branching scenario could provide predetermined responses, but every learner would eventually encounter the same conversation."],
      ["p", "An AI simulation allowed the customer to respond to the learner's actual language. That creates a different type of practice. The learner does not select a predetermined response. They have to decide what they would actually say."],
      ["h3", "In-Simulation Support"],
      ["p", "I also did not want the learner to enter the simulation without support."],
      ["p", "During the simulation, the learner can select a Help button to access important information without leaving the interaction."],
      ["p", "The help panel provides a quick reference to:"],
      ["ul", ["The Anatomy of a Good Checkout", "Key information about the customer"]],
      ["p", "The learner is still responsible for deciding what to say, but they can reference the information they need while practicing."],
      ["p", "The goal was to support performance without turning the simulation back into a multiple-choice activity."],
      ["p", "The simulation can then evaluate the interaction and provide feedback specific to the learner's performance."],
      ["p", "That makes the activity closer to conversational practice than a conventional quiz."],
      ["h3", "Building the AI customer"],
      ["p", "I built the customer simulation in [Devlin.ai](http://devlin.ai)."],
      ["p", "The customer, Belle, was designed to behave like a real shopper rather than a character who automatically agrees with the associate."],
      ["p", "I could define her behavior, refine the scenario, and establish her opening message so that the interaction started consistently."],
      ["p", "The simulation was configured with a maximum turn length of 15. A turn is defined as a learner's message + Belle's response. This became an important design variable because longer conversations increase the amount of AI processing required."],
      ["p", "The implementation itself was relatively straightforward."],
      ["p", "The Storyline course contains the simulation as a web object that visually functions like a chat window. Storyline variables and triggers connect the simulation back to the course."],
      ["p", "When the interaction ends, Storyline receives the result and displays:"],
      ["ul", ["Pass/fail status", "Score", "Specific feedback. (I chose to cap the character limit at 500)"]],
      ["p", "If the learner does not meet the required performance level, they can return to the learning experience and try again."],
      ["p", "Devlin.ai lets the designer go in and review the learners session which is helpful for debugging the AI simulation."],
      ["h3", "The Cost of AI Practice"],
      ["p", "The biggest discovery from this project was not technical. It was economic."],
      ["p", "My Devlin.ai account began with 1,500 free credits. During development, I observed an average usage of approximately 43.5 credits per completed training interaction."],
      ["p", "At that rate:"],
      ["p", "1,500 ÷ 43.5 ≈ 34 learners"],
      ["p", "That means the free credits could support roughly 34 completed attempts at the observed usage level."],
      ["p", "But learners do not always succeed on their first attempt."],
      ["p", "I personally needed two attempts to successfully pass the simulation. If every learner required two attempts, the same credit balance would support approximately 17 learners."],
      ["p", "That made the cost of practice part of the instructional design conversation. The question is not only whether an AI simulation can provide a more realistic practice environment, but also how much interaction is necessary to achieve the learning objective and how that interaction scales across a learner population. Of course, Devlin.ai offers paid plans. Their lowest tier offers 5,000 credits at $6/month."],
      ["h2", "Reflection"],
      ["p", "I built this project in roughly eight hours, from storyboard through visual design, Storyline development, AI simulation, integration, and testing."],
      ["p", "The speed was possible because the learning problem was already clearly defined and the BroadLane brief provided a useful set of constraints and assets."],
      ["p", "The more important takeaway was not how quickly I could build an AI simulation. It was learning where an AI simulation actually adds instructional value."],
      ["p", "AI simulations are well suited to scenario-based learning when the learner needs to practice a dynamic interaction. But realism should be intentional. Every additional interaction has a cost, so the simulation should be finely tuned around the performance the learner actually needs to practice."],
      ["p", "For me, that is the difference between using AI because it is available and using AI because it improves the learning experience."],
    ],
  },
  "sending-a-professional-email": {
    title: "Sending a Professional Email",
    sub: "How do you turn a simple classroom handout into an interactive learning experience?",
    img: IMG.email, skills: SKILLS_MAIL,
    tryIt: "#/project-page/sending-a-professional-email/lesson",
    lesson: ["Sending a Professional Email (Storyline course)", "Sending%20a%20Professional%20Email/story.html"],
    body: [
      ["h2", "Summary"],
      ["p", "I originally created [Sending a Professional Email](https://na-9911.reach360.com/share/course/866f4f69-02bb-42ca-995f-7638f7d41b33) as a classroom assignment for 10th-grade students who struggled with the basics of writing professional emails. Students commonly omitted subject lines, incorrectly formatted the body of an email, or did not know how to create a professional email signature."],
      ["p", "The original assignment was a four-page document that explained the components of a professional email before asking students to demonstrate their understanding by emailing their teacher."],
      ["p", "When I revisited the assignment, I saw an opportunity to transform the static resource into a more interactive learning experience while broadening the intended audience beyond high school students."],
      ["p", "I redesigned Sending a Professional Email in Articulate Storyline 360 for new workers developing professional communication skills."],
      ["p", "The result was a self-paced e-learning experience that breaks information into manageable sections, incorporates interactive exploration and scenario-based questions, and provides immediate feedback to learners."],
      ["h2", "Understanding the Learner"],
      ["p", "The biggest change was not the technology. It was how I thought about the learner."],
      ["p", "The original assignment was created for students who needed to understand how to communicate professionally in an academic environment. For the Storyline version, I reframed the experience around new workers who need to communicate professionally in a workplace setting."],
      ["p", "That shift influenced how I approached the content. Instead of simply presenting information, I asked:"],
      ["p", "What does the learner actually need to know to successfully send a professional email?"],
      ["p", "This meant focusing on practical decisions learners would encounter, such as:"],
      ["ul", ["What belongs in the subject line?", "Who belongs in the To, Cc, and Bcc fields?", "What makes an email sound professional?", "What information belongs in a signature?", "Did I attach the correct file?", "How can I check my email before sending it?"]],
      ["p", "This approach also connected to what I have learned through teaching and studying andragogy: adult learners benefit from learning that is relevant, practical, and connected to situations they may actually encounter."],
      ["h2", "Design"],
      ["h3", "Learning Objectives"],
      ["p", "I began the redesign by returning to the original learning objectives and using them as the foundation for the Storyline experience."],
      ["p", "By the end of the lesson, learners should be able to:"],
      ["ol", ["Identify the components of a professional email.", "Write and format a professional email."]],
      ["p", "I used Bloom's Taxonomy to think about how learners would move from recognizing email components toward applying that knowledge in realistic situations."],
      ["h3", "From Static Document to Interactive Experience"],
      ["p", "Rather than copying the original four-page document directly into Storyline, I broke the content into smaller sections and slides."],
      ["p", "This made the information easier to navigate and created opportunities for interaction."],
      ["h3", "Exploring the Anatomy of an Email"],
      ["p", "One of the most interactive sections focuses on the anatomy of an email."],
      ["p", "I used hotspots to connect each part of an email to its explanation. Learners can explore the different sections and discover what each component does."],
      ["p", "This approach allowed the learner to see the relationship between the visual structure of an email and the information being taught, rather than simply reading a list of definitions."],
      ["h3", "Keeping Slides Focused"],
      ["p", "I also used buttons to reveal information rather than displaying every piece of text at once."],
      ["p", "The goal was to prevent slides from becoming saturated with information while still giving learners access to the additional details they needed."],
      ["p", "These interactions were intentionally used to support the content—not simply to make the course feel more interactive."],
      ["h3", "Teaching Technical Processes"],
      ["p", "One part of the original assignment required learners to create a professional email signature."],
      ["p", "For the Storyline redesign, I created a short, step-by-step video demonstrating the process."],
      ["p", "This was one of my most deliberate instructional decisions."],
      ["p", "Creating an email signature is a hands-on, technical task. Rather than explaining the process entirely through written instructions, I could show learners exactly what the process looked like."],
      ["p", "The video includes embedded closed captions to support accessibility and allows learners to follow along as they complete the task themselves. Learners can pause and replay the video as needed, giving them time to keep up with each instruction while creating their own professional email signature."],
      ["h3", "Scenario-Based Assessment"],
      ["p", "The assessment moved beyond simply asking learners to recall definitions."],
      ["p", "I incorporated scenario-based questions that asked learners to apply what they had learned to realistic email situations."],
      ["p", "Learners receive immediate feedback after answering."],
      ["p", "When a learner answers incorrectly, the course first gives them feedback then directs them back to the relevant section so they can review the material before continuing."],
      ["p", "This creates a simple learning loop:"],
      ["p", "Learn → Apply → Receive Feedback → Review → Try Again"],
      ["h3", "Accessibility"],
      ["p", "Accessibility was incorporated throughout the development process rather than treated as a final step."],
      ["p", "I used:"],
      ["ul", ["Alt text for images", "Closed captions for the instructional video", "VoiceOver to test the experience with a screen reader", "Storyline's built-in accessibility checker"]],
      ["p", "I also tested the interactive elements, navigation, feedback, and accessibility features to make sure the experience functioned as intended."],
      ["p", "Testing included checking that buttons and hotspots worked correctly, navigation behaved properly, incorrect answers directed learners to the appropriate instructional content, and accessibility features functioned as expected."],
      ["h2", "Reflection"],
      ["p", "This project changed how I think about the relationship between teaching and instructional design."],
      ["p", "When I created the original classroom assignment, my primary question was essentially:"],
      ["p", "What information do my students need?"],
      ["p", "During the redesign, I began asking a different question:"],
      ["p", "What does the learner need to do with this information?"],
      ["p", "As a teacher, I am constantly making decisions about how information should be presented, how learners might misunderstand something, and what support they need to reach an objective. Building this project in Storyline helped me recognize that these same decisions are at the center of instructional design."],
      ["p", "It also reinforced the importance of designing from the learner's perspective."],
      ["p", "The technology gave me new ways to present the material, but the technology itself was not the instructional strategy. The buttons, hotspots, video, scenarios, and feedback were useful because each one addressed a specific learning need."],
      ["p", "The project ultimately became an exercise in translating what I already do as an educator into a more intentional e-learning design process."],
    ],
  },
};

// Alt text. I could not view the photos, so these describe purpose/context — please check them against the real images.
export const ALT = {
  home: "Portrait of Elijah Browne",
  "turning-shoppers-into-cardholders": "Title slide reading Broadlane: Turning Shoppers into Cardholders, beside a photo of a cashier bagging groceries at a checkout",
  "sending-a-professional-email": "Title slide of the Sending a Professional Email course in the Storyline player, with the course menu on the left",
  "turning-payment-research-into-a-gemini-notebook": "Gemini Notebook titled Payment Systems, with a source list on the left and a chat breaking down the Stripe and Braintree price formulas",
  "understanding-stuart-hall-gemini-notebook": "Gemini Notebook titled Understanding Reception Theory, with sources, a chat explaining a flashcard answer, and a Communication Flashcards panel",
  "task-monsters": "Task Monsters start screen with a task input, battle difficulty choices and a pixel-art ghost with 400 HP",
  "smartphone-content-creation": "Rise lesson with a smartphone camera screen framing a dog on a couch, with seven numbered callouts on the camera controls",
  "building-a-gemini-notebook": "Rise lesson card titled Studio Panel, explaining what the Gemini Notebook Studio Panel does, over a notebook screenshot",
};

// Skills parsed from each project's "Skills:" line, with near-duplicates merged so they can be counted.
const NORM = {
  "E-Learning Development": "eLearning Development",
  "Articulate Storyline 360": "Articulate Storyline",
  "AI-Assisted Learning Design": "AI-Assisted Learning",
};
PROJECTS.forEach((p) => {
  p.skillList = p.skills ? p.skills.replace(/^Skills:\s*/, "").split(/,\s*/).map((s) => NORM[s] || s) : [];
});
const counts = {};
PROJECTS.forEach((p) => p.skillList.forEach((s) => (counts[s] = (counts[s] || 0) + 1)));
export const SKILL_COUNTS = Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

/* ===== Layout helpers + the four new project pages (text from the PDFs) =====
   Block types: h2 h3 p ul ol quote dl table fig figs side carousel.  Figures take `src` (image) or `video`; a fig with neither renders as a placeholder.
   TODO: the PDFs did not include link targets, so the "Try it out!" URLs below are empty; those buttons stay hidden until you fill them in. */
const isHead = (b) => b[0] === "h2" || b[0] === "h3";
const sectionEnd = (body, i) => { let j = i + 1; while (j < body.length && !isHead(body[j])) j++; return j; };
function attach(slug, heading, side, fig) { // put a figure beside the text of one section
  const body = DETAILS[slug].body, i = body.findIndex((b) => isHead(b) && b[1] === heading), j = sectionEnd(body, i);
  body.splice(i + 1, j - i - 1, ["side", side, fig, body.slice(i + 1, j)]);
}
function figAfter(slug, heading, block) { // add a full-width block at the end of a section
  const body = DETAILS[slug].body, i = body.findIndex((b) => isHead(b) && b[1] === heading);
  body.splice(sectionEnd(body, i), 0, block);
}
const F = (alt, cap, src) => ({ alt, cap, src });

DETAILS["turning-payment-research-into-a-gemini-notebook"] = {
  img: IMG.payment,
  title: "Turning Payment Research Into a Gemini Notebook",
  sub: "What if Gemini Notebook could streamline your business' research phase?",
  heroAlt: "Screenshot of a Gemini Notebook titled Payment Systems, with a source list on the left, a chat comparing Stripe and Braintree pricing formulas in the center, and generated notes on the right",
  skills: "Skills: Gemini Notebook, Instructional Design, AI-Assisted Learning, Source Curation, Generative AI, Learner-Centered Design, Educational Technology",
  body: [
    ["h2", "The Challenge"],
    ["p", "Researching payment processors can quickly become overwhelming."],
    ["p", "As the payment-streams researcher for a Startup, Rebecca Harris needed to research and compare Stripe, Braintree, and Adyen to help the team understand which solutions could support the project. Her research needed to cover practical considerations such as cost, advantages and disadvantages, and technical implementation."],
    ["p", "The challenge wasn't simply finding information. There was too much of it."],
    ["p", "Payment processor websites contained valuable documentation alongside marketing material, making it difficult to quickly distinguish substantive information from advertisements and promotional content. Technical documentation was also spread across different formats and locations."],
    ["p", "She needed a way to bring these resources together, understand them efficiently, and give the rest of the team a reliable way to verify the information."],
    ["p", "When I noticed that she was struggling to organize and analyze the research, I helped her build a Gemini Notebook around the project. My role was to support the setup of the research environment and help structure the sources so she could use the notebook more effectively."],
    ["quote", "“Before this notebook, I would have spent hours, or even days, gathering and analyzing these resources. This notebook summarized the information for me and provided precise citations, so I could easily go back and verify the source.”"],
    ["h2", "Researching with the Sources"],
    ["p", "Once the notebook was established, Rebecca used it as an interactive research partner."],
    ["p", "Rather than manually reading through every document to find an answer, she could ask targeted questions about the payment processors and have Gemini Notebook synthesize information across the collected sources."],
    ["p", "The important difference was traceability."],
    ["p", "When Gemini Notebook provided an answer, it could point back to the relevant source so she could verify the information herself."],
    ["p", "This allowed her to move between two levels of research:"],
    ["dl", [["Synthesis:", "Understand the answer without manually searching through every document."], ["Verification:", "Return to the original source and check the information when necessary."]]],
    ["p", "That combination was especially useful when researching technical implementation details, where an unsupported or inaccurate answer could create additional work for the development team."],
    ["h2", "From Research to Technical Understanding"],
    ["p", "The Gemini Notebook became more than a comparison tool."],
    ["p", "Rebecca used it to better understand how the payment systems worked and how their APIs could be implemented. It helped break down technical documentation and answer questions that arose during the research process."],
    ["p", "The Gemini Notebook could also compare cost structures across the payment processors, helping organize information that would otherwise require manually moving between multiple sources."],
    ["p", "It even helped surface less obvious edge cases that might not have been considered during the initial research."],
    ["p", "This shifted the role of the Gemini Notebook from simply summarizing documents to helping the researcher interrogate the research itself."],
    ["h2", "The Learning Experience"],
    ["p", "The value of the Gemini Notebook wasn't simply that it made information faster to find."],
    ["p", "It changed how the researcher interacted with information."],
    ["p", "Rather than navigating dozens of sources individually, Rebecca could ask questions across a curated collection, compare information, investigate technical details, and verify answers against the original documentation."],
    ["p", "The experience followed a continuous cycle:"],
    ["p", "Gather → Curate → Question → Synthesize → Verify → Share → Build Upon"],
    ["p", "This made the research process more repeatable and gave the team a shared foundation for continuing their investigation."],
    ["h2", "Reflection"],
    ["p", "This project demonstrated that AI can be most useful in a corporate research environment when it isn't treated as the source of truth."],
    ["p", "My contribution was not to replace Rebecca's research expertise, but to help her create a more effective environment for carrying out that research. I noticed that she needed help managing the volume and variety of information, helped build the notebook, and supported the organization of the sources so she could use the Gemini Notebook as a practical research tool."],
    ["p", "Rebecca still decided which sources mattered, which additional sources to approve, what questions to ask, and when an answer needed to be verified."],
    ["p", "The Gemini Notebook handled much of the work involved in organizing and synthesizing information, while Rebecca remained responsible for evaluating the information and determining how it should be used."],
    ["p", "The result was not just a faster way to research Stripe, Braintree, and Adyen."],
    ["p", "It became a shared, source-grounded knowledge system that could support the team's research, technical understanding, and onboarding as the app project continued to evolve."],
  ],
};
attach("turning-payment-research-into-a-gemini-notebook", "Researching with the Sources", "right", F("Screenshot of a Gemini Notebook answering a question about documentation and technical support for the Stripe Ruby library, with numbered citations linking back to sources", 'Prompt: "What is the level of documentation and technical support."', "images/payment/docs.jpg"));
attach("turning-payment-research-into-a-gemini-notebook", "From Research to Technical Understanding", "left", F("Screenshot of a Gemini Notebook showing a side-by-side table of Stripe and Braintree fees for sale amounts from $10 to $250", 'Prompt: "In a simple table, breakdown the price calculation for Stripe vs Brain Tree."', "images/payment/fee-table.jpg"));

DETAILS["smartphone-content-creation"] = {
  img: IMG.smartphone,
  title: "Smartphone Content Creation: Mastering Framing and Audio",
  sub: "What if your smartphone could become the only content-creation tool you need?",
  heroAlt: "Smartphone camera screen in landscape orientation showing a brown and white dog on a couch, with seven numbered callouts marking the camera controls",
  skills: "Skills: Articulate Rise 360, Instructional Design, Video Production, Scenario-Based Learning, User-Centered Design, Assessment Design, Learning Experience Design, ADDIE",
  tryIt: "#/project-page/smartphone-content-creation/lesson",
  lesson: ["Smartphone Content Creation (Rise 360 lesson)", "Smartphone%20content%20creation/index.html"], // own page, reachable only via the Try it Yourself buttons
  body: [
    ["h2", "Summary"],
    ["p", "Smartphones have become powerful content-creation tools, but having access to advanced camera features does not necessarily mean knowing how or when to use them."],
    ["p", "Smartphone Content Creation: Mastering Framing and Audio is a three-lesson, scenario-based learning experience designed for learners with little to no experience creating content with a smartphone. The course introduces learners to smartphone camera settings, aspect ratios, framing and composition, and audio recording techniques before bringing those skills together in a final simulated content-creation task."],
    ["p", "The course places the learner in the role of a newly hired Content Creator at Gary's Dog Photography Agency. Rather than presenting smartphone photography as a collection of isolated technical features, the experience asks learners to consider why and when they would use those features while creating content."],
    ["p", "The project was developed in Articulate Rise 360 using the ADDIE instructional design model as the framework for analysis, design, development, implementation, and evaluation."],
    ["h2", "Analysis"],
    ["p", "The course was designed for a learner with little or no prior experience creating smartphone content."],
    ["p", "Several assumptions guided the design:"],
    ["ul", ["The learner owns or regularly uses a smartphone.", "The learner is familiar with basic smartphone functions.", "The learner may have little formal knowledge of photography, composition, or audio production."]],
    ["p", "The course therefore focuses on moving the learner from simply using a smartphone camera to making intentional content-creation decisions."],
    ["h2", "Design"],
    ["h3", "Learning Objectives"],
    ["p", "I established the learning objectives before developing the instructional content. The objectives were derived from the skills learners would ultimately need to demonstrate in the final content-creation scenario."],
    ["p", "By the end of the course, learners will be able to:"],
    ["ul", ["Select appropriate smartphone camera settings based on the intended content and shooting conditions.", "Choose appropriate aspect ratios and orientations based on where and how content will be used.", "Apply fundamental framing and composition techniques, including the rule of thirds, leading lines, symmetry, balance, and intentional subject placement.", "Identify and address common smartphone audio problems, including background noise and improper microphone positioning.", "Select appropriate recording setups for interviews, narration, and ambient sound.", "Apply camera, composition, and audio techniques to realistic content-creation scenarios."]],
    ["p", "These objectives became the filter for the rest of the design: if a piece of content did not help the learner achieve one of these outcomes, it did not need to be in the course."],
    ["h3", "Backward Design"],
    ["p", "One of the most important design decisions was made before the lessons were built: I created the final assessment first."],
    ["p", "Rather than developing lessons and then creating a quiz to test what had already been taught, I started by identifying what I wanted the learner to be able to do and decide at the end of the experience."],
    ["p", "I then worked backward to determine:"],
    ["p", "Desired performance → Assessment → Learning objectives → Instruction → Practice"],
    ["p", "The final assessment asks learners to make decisions in situations such as:"],
    ["ul", ["Correcting exposure when photographing a backlit dog.", "Determining when 4K resolution is appropriate.", "Identifying the rule of thirds in an actual composition.", "Selecting the correct aspect ratio for an Instagram profile image.", "Diagnosing excessive background noise in a recording.", "Identifying smartphone camera controls.", "Selecting the appropriate orientation for vertical social media content."]],
    ["p", "This backward-design approach helped ensure that the instructional content supported the performance expected at the end of the course rather than simply accumulating information about smartphone cameras."],
    ["h2", "Scenario-Based Learning"],
    ["p", "The central design decision was to make the course scenario-based."],
    ["p", "Instead of beginning with a traditional tutorial such as “Here are the buttons on your smartphone camera,” the learner receives a job:"],
    ["quote", "You've been hired at Gary's Dog Photography Agency. Your role: Content Creator. Your tool? Your smartphone!"],
    ["p", "The fictional workplace gives the learner a reason to use each skill they encounter."],
    ["p", "For example, aspect ratio is not introduced only as a technical definition. The learner must eventually decide which format makes sense for different types of content. Composition techniques are connected to photographing Gary's clients. Audio instruction prepares the learner for interviews, narration, and social media recordings."],
    ["p", "This approach was intentional. Scenario-based learning places learners in realistic situations where they must make decisions, solve problems, and apply their knowledge in context. Research on scenario-based learning in online and asynchronous environments suggests that this approach can support learner preparedness, engagement, and self-efficacy by giving learners opportunities to practice responding to situations that resemble real-world experiences."],
    ["h3", "Building the Learning Experience"],
    ["p", "The course was developed in Articulate Rise 360."],
    ["p", "I developed the three lessons around the learning objectives:"],
    ["ol", ["Exploring Smartphone Camera Features and Settings", "Fundamentals of Camera Framing and Composition", "Capturing Clear Audio with Your Smartphone"]],
    ["p", "The lessons progress from foundational knowledge toward application. Learners first explore camera controls and settings, then composition, then audio, before being asked to combine those skills during the final shoot."],
    ["p", "I used Rise's built-in interactions, including flashcards, tabs, sorting activities, knowledge checks, and scenario-based questions. These interactions were selected to give learners opportunities to identify, compare, and apply concepts rather than relying exclusively on passive reading."],
    ["h3", "Developing the Visuals"],
    ["p", "The visual design combines photographs of Gary, my real dog, with imagery from the Articulate Content Library."],
    ["p", "For Gary-specific examples, I edited photographs in Canva and added visual overlays to demonstrate concepts such as framing, eye lines, and composition. This allowed me to turn ordinary photographs into instructional examples rather than relying solely on stock imagery."],
    ["p", "I also used some of Rise's generated text as a starting point during development. However, much of that content required editing and restructuring to better align with the learning objectives, instructional sequence, and scenario."],
    ["h2", "Reflection"],
    ["p", "I’m most proud of the scenario-based learning approach. Building a course around Gary's Dog Photography Agency gave the content a practical context—and I got to put Gary in an instructional design project, so that's a win."],
    ["p", "The biggest challenge was deciding which Rise interaction best supported each learning objective rather than choosing an interaction just because it looked interesting."],
    ["p", "This project reinforced for me that effective learning design starts with the learner and the objective, not the technology."],
    ["p", "At around 50 minutes, the course is also longer than I want it to be. For the next iteration, I would reduce it to approximately 30 minutes to better respect learners' time and keep the experience focused."],
    ["p", "Most importantly, this project showed me that scenario-based learning is an area of instructional design I want to continue developing."],
  ],
};
attach("smartphone-content-creation", "Scenario-Based Learning", "right", F("Rise course lesson card titled Photo Mode, with a photo of two dogs sitting beside a stone column", "Rise lesson content in the Photo Mode section.", "images/smartphone/photo-mode.jpg"));
attach("smartphone-content-creation", "Building the Learning Experience", "right", F("Rise lesson showing a smartphone camera screen framing a dog, with seven numbered callouts, above a section titled Camera App Icons: Flashcards", "A labeled graphic leads into a flashcard activity.", "images/smartphone/flashcards.jpg"));
attach("smartphone-content-creation", "Developing the Visuals", "left", F("Canva editor showing a slide of a phone camera screen framing Gary, with a row of slide thumbnails below", "Building the Gary visuals in Canva.", "images/smartphone/canva.jpg"));
figAfter("smartphone-content-creation", "Developing the Visuals", ["figs", [
  F("Rise labeled-graphic editor with seven markers placed on the camera controls of a phone photographing Gary", "Placing markers on the camera screen in Rise.", "images/smartphone/labeled-graphic.jpg"),
  F("Rise labeled-graphic editor with markers on seven camera settings: Flash, Live, Timer, Exposure, Styles, Aspect and Night Mode", "A second labeled graphic for the camera settings.", "images/smartphone/camera-controls.jpg"),
]]);

DETAILS["task-monsters"] = {
  img: IMG.taskMonsters,
  title: "Task Monsters",
  sub: "What if your to-do list was a monster?",
  heroAlt: "Task Monsters app start screen with a task input, four battle difficulty cards named Easy, Medium, Hard and Custom, and a pixel-art ghost monster with 400 HP",
  skills: "Skills: JavaScript, Gamification, Interaction Design, Base44, AI-assisted design, Figma",
  tryIt: "https://task-monsters.base44.app/",
  body: [
    ["h2", "Summary"],
    ["p", "Task Monsters is a Pomodoro-based productivity tool designed to support executive function through gamification. Prototyped in Base44, it combines structured work intervals with playful, visual feedback, turning everyday tasks into challenges users can work toward completing."],
    ["p", "For years, when I had something I needed to accomplish, I would pull out a journal, draw a monster, and treat the task as something I needed to defeat. I would pair that with a Pomodoro timer on my laptop and work toward completing the session."],
    ["p", "The system gave me something I needed: structure."],
    ["p", "Without a clear outline and defined work periods, I can have difficulty getting started and staying focused. Breaking work into manageable intervals made the process feel more achievable."],
    ["p", "Eventually, I asked:"],
    ["p", "What if I combined these two systems into one interactive experience?"],
    ["p", "That question became Task Monsters."],
    ["h2", "Understanding the User"],
    ["p", "Task Monsters is designed for users age 12 and older who are looking for additional structure when managing tasks that require sustained attention. The experience is not intended for a specific educational level or professional context; it can be applied to academic, professional, or personal tasks."],
    ["p", "The initial user assumptions were developed from the original use case and informed the design of the MVP. These assumptions describe the anticipated needs, behaviors, and characteristics of the intended user population. They are treated as design assumptions rather than validated findings and would require user research and usability testing to confirm."],
    ["h3", "Assumptions of the User"],
    ["ul", ["The user has access to a computer.", "The user is capable of independent work.", "The user understands or has used the Pomodoro method before."]],
    ["p", "The largest barrier to entry is the assumption that users already understand the Pomodoro method. Because it is central to the experience, unfamiliar users may not understand the purpose of the timed intervals and breaks. Future iterations should introduce the method without requiring prior knowledge."],
    ["h2", "User Interaction Model"],
    ["p", "The Task Monsters experience follows a linear task-to-completion sequence designed to minimize unnecessary decision-making during a work session. The flow separates task planning, focused work, and completion into distinct stages."],
    ["p", "The experience begins when the user identifies a task. Defining the task before starting the timer establishes a specific objective for the upcoming work period."],
    ["p", "The user then selects a work interval based on the amount of time they want to commit. Easy, Medium, and Hard correspond to 15-, 25-, and 30-minute intervals, while Custom allows the user to define their own duration."],
    ["p", "Once an interval is selected, the system introduces the corresponding monster and health state and begins the work session. During this stage, the primary interaction is intentionally limited: the user works on the task while the timer runs and the monster's health decreases."],
    ["p", "When the timer reaches zero, the system transitions the monster into its defeated state, providing immediate confirmation that the work interval has been completed."],
    ["p", "The user then reaches a decision point: begin another task or end the session. Selecting another task returns the user to the task-identification stage, creating a repeatable cycle. Ending the session concludes the current workflow."],
    ["h2", "Design Choices"],
    ["p", "The design of Task Monsters was guided by the goal of reducing the cognitive load associated with starting and sustaining a task. Each interaction was designed to provide a clear next step while maintaining user control over the length and pace of a work session."],
    ["h3", "Time-based difficulty"],
    ["p", "The difficulty system is based on sustained attention rather than task complexity. Users can select Easy, Medium, Hard, or create a Custom interval based on their individual attention span and needs. A 13-year-old user, for example, may benefit from shorter work periods and more frequent breaks, while another user may be comfortable with longer intervals; different tasks may also require different amounts of sustained focus."],
    ["h3", "Distraction-free Design"],
    ["p", "Task Monsters uses minimal visual and auditory stimulation during active work periods to support sustained attention. The interface avoids flashy graphics and ongoing sounds, while color changes and a brief sound cue are used only when the experience transitions between work and break modes to bring the user's attention back to the application."],
    ["h3", "Gamification Mechanics"],
    ["table", ["Game Mechanic", "Function in the Experience"], [
      ["Monster", "Represents the user's current task and provides a visual object for the work session."],
      ["Health", "Represents the remaining work time within the selected session."],
      ["Health Reduction", "Provides continuous visual feedback as time passes during the work interval."],
      ["Difficulty Levels", "Establish different work intervals and allow users to select an appropriate duration for sustained focus."],
      ["Defeat State", "Provides a clear visual endpoint when the selected work interval is completed."],
      ["New-Task Prompt", "Allows the user to continue the task cycle or end the session after completing an interval."],
    ]],
    ["h2", "Features to Come"],
    ["h3", "Pomodoro Explanation"],
    ["p", "Add an optional introduction explaining the Pomodoro method, including how work intervals and breaks function within Task Monsters. This would reduce the barrier to entry for users who are unfamiliar with the technique."],
    ["h3", "Session history and analytics"],
    ["p", "Track completed work sessions, total focused time, and tasks completed over time. This could allow users to identify patterns in their work habits."],
    ["h3", "Progress tracking"],
    ["p", "Provide longer-term visualizations of completed sessions and time spent working beyond the individual monster encounter."],
    ["h3", "Expanded monster system"],
    ["p", "Introduce additional monster designs and potentially allow users to encounter different monsters across sessions."],
    ["h3", "Accessibility and personalization"],
    ["p", "Expand customization of timers, visual presentation, notifications, and interaction preferences to accommodate different user needs."],
    ["h2", "Reflection"],
    ["p", "I am most proud of turning an idea I have been developing for years into an interactive experience that other people can actually use. What began as a paper-and-pencil system has now become a functional web application."],
    ["p", "Building the MVP also required me to move beyond the design process and work directly with the technology. While Base44 accelerated development, I had to use my programming knowledge to achieve the interactions I wanted."],
    ["p", "The digital version is also still an evolving translation of the original concept. The paper version included a D20 mechanic, where I would roll after completing a task to determine how much damage I dealt to the monster. I am still exploring how that mechanic could be incorporated into the digital experience while maintaining a clear and intuitive user flow."],
    ["p", "Ultimately, this project demonstrated the value of moving an idea from concept to prototype. Building the experience has given me a functional foundation to test, evaluate, and continue developing rather than leaving the concept on paper."],
  ],
};
attach("task-monsters", "Summary", "right", F("Hand-drawn journal sketch titled Task Demon, dated 2.12.2023: a fluffy monster with large round eyes saying meep meep, above a progress bar marked in tens with the word Tasks below", "The original paper Task Demon, 2023.", "images/task-monsters/sketch.jpg"));
attach("task-monsters", "User Interaction Model", "right", F("Flowchart of the Task Monsters user flow. The user starts a session, identifies a task, and chooses a monster sprite. They choose a Pomodoro length: Easy (15-minute sessions), Medium (25 minutes), Hard (30 minutes), each with a 5-minute short break and 4 cycles, or Custom. The monster appears with the timer, and the user works on the task until the timer is complete. A defeated-monster animation plays, and the user is prompted to start a new task: yes returns to identifying a task, no ends the session.", "The user flow wireframe.", "images/task-monsters/wireframe.png"));
figAfter("task-monsters", "User Interaction Model", ["p", "[View the wireframe in Figma](https://www.figma.com/board/U3qfmojUac8lUoHbXcLmq7/Task-Monsters?node-id=0-1)"]);
figAfter("task-monsters", "User Interaction Model", ["figs", [
  { video: "images/task-monsters/demo.mov", alt: "Screen recording of a Task Monsters session: the user enters a task, picks a battle length, and the monster's health drains as the timer counts down", cap: "A battle in progress." },
  F("Task Monsters battle screen for the task Write the case study!, showing a pixel-art ghost at 328 of 400 HP, a 06:50 timer, and Round 1 of 4 marked Focus", "Focus round: the monster loses health as you work.", "images/task-monsters/focus.jpg"),
  F("Task Monsters battle screen during a break, with a blue background, the ghost at 300 of 400 HP, a 04:58 timer, and Round 2 of 4 marked Break", "Break round: the background changes color to signal the switch.", "images/task-monsters/break.jpg"),
]]);

DETAILS["understanding-stuart-hall-gemini-notebook"] = {
  img: IMG.stuartHall,
  title: "Understanding Reception Theory Notebook",
  sub: "What if students could have a conversation with the theory instead of just reading about it?",
  heroAlt: "Gemini Notebook titled Understanding Reception Theory, with a source list, a chat explaining why a true-or-false question about Stuart Hall's Encoding/Decoding model is false, and a Communication Flashcards panel",
  skills: "Skills: Gemini Notebook, Instructional Design, Learning Experience Design, AI-Assisted Learning, Media Literacy, Source Curation, Generative AI, Learner-Centered Design, Educational Technology",
  tryIt: "https://notebook.google.com/notebook/e34b57e2-1097-4182-9f3a-0708175f5843",
  body: [
    ["h2", "Summary"],
    ["p", "Understanding Stuart Hall’s Reception Theory is an AI-supported learning experience designed to help learners explore Hall’s Encoding/Decoding Model and develop a deeper understanding of how audiences interpret media."],
    ["p", "Built in Gemini Notebook, the experience uses a curated collection of sources as the foundation for an interactive, conversational learning environment. Rather than asking AI to replace instruction, the project explores how it can give learners another way to engage with material they have already encountered in the classroom."],
    ["h2", "Understanding the Learner"],
    ["p", "This experience is designed for learners who are being introduced to Stuart Hall’s Reception Theory within a media studies context."],
    ["p", "The learner is not expected to encounter the Gemini Notebook as their first introduction to the theory. Instead, the educator provides the learner with the source materials in advance and uses class time to introduce and discuss each source in depth before the learner interacts with the AI tool."],
    ["p", "This distinction is intentional. Gemini Notebook is not designed to replace the educator or serve as the learner’s initial source of instruction. The educator establishes the foundational knowledge, context, and expectations first. The tool then provides an additional environment where learners can revisit and explore that material independently."],
    ["h3", "Assumptions of the User"],
    ["ul", ["The learner has been introduced to the basic concepts of Stuart Hall’s Reception Theory.", "The learner has access to the source materials used in the Gemini Notebook project.", "The learner has participated in educator-led discussion of the sources.", "The learner is capable of independently asking questions and exploring unfamiliar concepts."]],
    ["h2", "Reflection"],
    ["p", "I am most proud of taking an existing lesson and rethinking how learners could interact with the material. I previously taught Stuart Hall’s Reception Theory and enjoyed using scholarly articles to help students practice research and analysis skills. However, the language and structure of those articles were often written far above a high school reading level, creating a barrier between the learner and the ideas I wanted them to explore."],
    ["p", "This project allowed me to rethink that barrier without removing the scholarly material itself. My goal was to give learners a way to engage with complex sources at a level they could understand, freeing up more time to move beyond simply understanding the theory and into deeper analysis and application."],
    ["p", "One of the most important design decisions was keeping the educator at the center of the experience. Gemini Notebook can respond to questions and generate resources dynamically, but it cannot understand the individual learners in a classroom the way an educator can. A teacher can recognize when a student needs a different explanation, adjust instruction based on the class, and provide context that an AI tool cannot fully replicate."],
    ["p", "Rather than treating AI as the learning experience itself, I see it as a tool that can extend an intentionally designed learning experience. Gemini Notebook's ability to dynamically create resources from a limited, educator-selected source base makes it particularly useful for this purpose while keeping the educator in control of the content learners engage with."],
    ["p", "Ultimately, this project demonstrated that AI does not have to replace an existing lesson to make it better. Sometimes, the most valuable use of a new tool is to take something that already works and create new opportunities for learners to engage with it."],
  ],
};

DETAILS["building-a-gemini-notebook"] = {
  embed: ["Building a Gemini Notebook (Rise 360 lesson)", "Building%20a%20Gemini%20Notebook/index.html"], // shown in place of the hero image
  tryIt: "https://na-9911.reach360.com/share/course/6588b4ce-5c0b-4b2d-965b-3c339e57dc63",
  title: "Building a Gemini Notebook",
  sub: "A microlearning lesson on setting up a shared Gemini Notebook for team research",
  skills: PROJECTS.find((p) => p.slug === "building-a-gemini-notebook").skills,
};

// Images beside the text on desktop; they stack under the text on phones.
attach("sending-a-professional-email", "Summary", "right", F("Page from the original classroom handout titled Anatomy of an Email: a real email with red boxes labeling the subject, sender and recipients, greeting, body, sign off, signature and attachments", "Where it started: the original four-page classroom handout.", "images/email/original-handout.jpg"));
attach("sending-a-professional-email", "Exploring the Anatomy of an Email", "right", F("Published course slide titled Anatomy of an Email: a phone showing an email with each section outlined in yellow, and a callout explaining what the subject line is for", "Hovering over a section of the email reveals what it does.", "images/email/anatomy.jpg"));
attach("sending-a-professional-email", "Keeping Slides Focused", "left", F("Articulate Storyline editing the To, CC and BCC slide: a phone showing an email, three buttons, and the text for the To field, with the triggers and slide layers panels on the right", "Each button reveals its own layer instead of putting all the text on the slide at once.", "images/email/to-cc-bcc.jpg"));
attach("sending-a-professional-email", "Teaching Technical Processes", "right", F("Course video slide showing Gmail settings where an email signature is created, with a closed caption at the bottom", "The signature walkthrough video, with closed captions.", "images/email/signature-video.jpg"));
attach("sending-a-professional-email", "Scenario-Based Assessment", "left", F("Course question slide asking which information would normally be appropriate for a professional email signature, with four multiple-choice options", null, "images/email/question.jpg"));
figAfter("sending-a-professional-email", "Scenario-Based Assessment", ["figs", [
  F("Articulate Storyline editing the Anatomy of an Email slide, with a hotspot over each section of the email and the hover triggers listed on the right", "Behind the scenes: hotspots and hover triggers.", "images/email/storyline-hotspots.jpg"),
  F("Articulate Storyline showing the base layer of the To, CC and BCC slide with the timeline of buttons below", "Behind the scenes: the button layers on the timeline.", "images/email/storyline-buttons.jpg"),
]]);
figAfter("turning-shoppers-into-cardholders", "Summary", ["carousel", "Course slides", [
  F("Title slide reading Broadlane: Turning Shoppers into Cardholders, beside a photo of a cashier bagging groceries at a checkout", "Title slide", "images/shoppers/slide-1.jpg"),
  F("Purpose slide: associates are expected to sell at least 2 Broadlane Preferred Cards per day, followed by six lesson objectives", "Purpose and objectives", "images/shoppers/slide-2.jpg"),
  F("Slide titled What is the Broadlane Preferred Card?, listing $25 off when you sign up, cash back, exclusive coupons, special sales and no annual fee, beside a red Broadlane card", "The product", "images/shoppers/slide-3.jpg"),
  F("Slide titled Anatomy of a Good Checkout: five arrows reading Assess, Rapport, Position, Objections and Close", "Anatomy of a good checkout", "images/shoppers/slide-4.jpg"),
  F("Slide titled Assessing the Customer with three cards: Big Ticket Items, Full Cart and Quick Trip, each with a motivation and a strategy", "Assessing the customer", "images/shoppers/slide-5.jpg"),
  F("Slide titled Rapport First, Pitch Second: Talk to the customer, not at them. An Engage column (notice, ask, listen) points to a Pivot column (connect the purchase to a benefit, make it relevant)", "Rapport first, pitch second", "images/shoppers/slide-6.jpg"),
  F("Slide titled Handling Objections with five tabs: Price/Value, Lack-of-Need, Lack-of-Urgency, Trust/Information and Resistance/Trust. Trust/Information is selected", "Handling objections", "images/shoppers/slide-7.jpg"),
  F("Slide titled 4P's of Pushback: a loop of Pause, Probe, Paraphrase and Provide around the words The Objection Loop", "The 4Ps of pushback", "images/shoppers/slide-8.jpg"),
  F("Slide titled When to Sell the Card and When to Back Down: a traffic light with Proceed, Pivot and Stop, each paired with customer signals and an action", "When to back down", "images/shoppers/slide-9.jpg"),
]]);
attach("turning-shoppers-into-cardholders", "Why Use an AI Simulation?", "right", F("The simulation in Storyline: Belle says I'm just grabbing a few things today, and the learner types Did you find everything ok? into a chat box, with a Help button below", "The learner types what they would actually say.", "images/shoppers/sim-chat.jpg"));
attach("turning-shoppers-into-cardholders", "In-Simulation Support", "right", F("Help panel from the simulation showing the customer Belle, a frequent shopper with $400 of gardening supplies in checkout, and a five-step process: Assess, Rapport, Position, Objections, Close", "The Help panel, available without leaving the conversation.", "images/shoppers/help-panel.jpg"));
figAfter("turning-shoppers-into-cardholders", "Building the AI customer", ["figs", [
  F("Devlin.ai screen for configuring the customer character's strategy, opening line and scenario", "Defining Belle's behavior in Devlin.ai.", "images/shoppers/devlin-setup.jpg"),
  F("Storyline results slide showing Status: Pass, Score: 75, and scrolling written feedback, with Try Again and Continue buttons", "The result passed back into Storyline.", "images/shoppers/storyline-feedback.jpg"),
  F("Devlin.ai conversation detail showing a Pass result with a score of 100 out of 120 and feedback on each scoring criterion", "Reviewing a learner's session in Devlin.ai.", "images/shoppers/devlin-score.jpg"),
]]);
