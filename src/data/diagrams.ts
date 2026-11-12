// Diagrams used on case study and blog pages. Each one is shown by the Diagram component.
// Reference a diagram by its key: in case-studies.ts use  diagram: "key",
// and in posts.ts add a block like  { type: "diagram", key: "key" }.
//
// Types:
//   flow:    { type, title, steps: [{ t, d }], caption }
//   hub:     { type, title, left: { label, items }, centre: { t, d }, right: { label, items }, caption }
//   compare: { type, title, cols: [a, b], rows: [[label, a, b]], caption }
//   map:     { type, title, centre: { t, d }, items: [{ t, d }], caption }
// Keep diagrams factual. Only show what really happened or what is really true.

export const diagrams: Record<string, any> = {
  // ---------- Case studies ----------
  utility: {
    type: "hub",
    title: "How the documentation was organized",
    left: { label: "Who needed documentation", items: ["Several development teams", "Product managers"] },
    centre: { t: "One documentation function", d: "Concepts and workflows explained, UI text clarified, one owner for all of it." },
    right: { label: "What customers got", items: ["Clear explanations of how the product works", "Fewer tickets and escalations"] },
    caption: "Several teams were brought under a single documentation function instead of each staffing its own.",
  },
  rpa: {
    type: "flow",
    title: "From no documentation to a published set",
    steps: [
      { t: "Learn", d: "Hands-on with the application before writing anything." },
      { t: "Write", d: "Documentation, UI text and in-app help." },
      { t: "Explain", d: "Training videos, presentations and call material." },
      { t: "Publish", d: "One MkDocs site the client shares with its own customers." },
    ],
    caption: "Everything lives in one place that the client can keep maintaining.",
  },
  iam: {
    type: "flow",
    title: "How the overhaul ran",
    steps: [
      { t: "Audit", d: "Find exactly where the documentation fell short." },
      { t: "Style guide", d: "A custom guide so every document follows the same standards." },
      { t: "Rewrite", d: "Restructure and rewrite against the style guide." },
      { t: "Migrate", d: "Move all guides into Confluence." },
      { t: "Align", d: "Taglines, UI text and website copy match the documentation." },
    ],
    caption: "The style guide keeps new content consistent after the project ends.",
  },
  vehicle: {
    type: "flow",
    title: "How each instruction was checked",
    steps: [
      { t: "Test", d: "Run the APIs and SDKs hands-on against the real system." },
      { t: "Write", d: "Technical, API and SDK documentation." },
      { t: "Diagram", d: "Technical and architecture diagrams showing how the pieces fit." },
      { t: "Validate", d: "A real consumer uses the documentation and gives feedback." },
    ],
    caption: "Instructions were tested against how the system actually behaves before they were published.",
  },
  ai: {
    type: "flow",
    title: "How each response was evaluated",
    steps: [
      { t: "Review", d: "Model responses to technical writing and documentation tasks." },
      { t: "Rate", d: "Against defined criteria: accuracy, structure, clarity and style." },
      { t: "Correct", d: "Weak responses rewritten to show what a strong answer looks like." },
      { t: "Feed back", d: "Written notes on recurring issues." },
    ],
    caption: "Judgment from working technical writers, applied against clear guidelines.",
  },

  // ---------- Blog ----------
  "embedded-vs-endtoend": {
    type: "compare",
    title: "The two models side by side",
    cols: ["End-to-end documentation", "Embedded writers"],
    rows: [
      ["You buy", "A documentation function that works", "A writer inside your team"],
      ["Who directs the work", "We plan and run it, with you", "You direct it day to day"],
      ["Accountable for quality", "Docifice, for the whole function", "Shared: you set priorities, we stand behind our writers"],
      ["Best for", "Teams that want documentation handled", "Teams that need more writing capacity"],
    ],
    caption: "Both involve working with your team every day. The difference is who directs the work.",
  },
  "api-doc-set": {
    type: "map",
    title: "What an API documentation set usually contains",
    centre: { t: "API documentation set", d: "Decide which of these you need before writing starts." },
    items: [
      { t: "Quickstart", d: "Gets a developer to a first successful call." },
      { t: "Authentication", d: "How to get credentials and use them." },
      { t: "Guides", d: "Task-based walkthroughs of common use cases." },
      { t: "API reference", d: "Every endpoint, parameter and response." },
      { t: "SDK docs", d: "Install, configure and use each SDK." },
      { t: "Changelog", d: "What changed, and what developers must update." },
    ],
    caption: "Most APIs need all six, but a small API can start with the first four.",
  },
  "hiring-steps": {
    type: "flow",
    title: "A way to assess a technical writer",
    steps: [
      { t: "Role", d: "Define what the writer will actually produce." },
      { t: "Samples", d: "Review writing samples and ask what they personally wrote." },
      { t: "Exercise", d: "A short, real task, kept to an hour or two." },
      { t: "Depth", d: "Can they follow your product and ask good questions?" },
      { t: "Interview", d: "Meet the candidate, including a conversation with an engineer." },
    ],
    caption: "Each step shows something a CV cannot.",
  },

  "docs-as-code-flow": {
    type: "flow",
    title: "How a docs-as-code workflow runs",
    steps: [
      { t: "Write", d: "Plain-text files, usually Markdown, kept in a repository." },
      { t: "Review", d: "Changes are proposed in a pull request and reviewed like code." },
      { t: "Build", d: "Automated checks catch broken links and formatting, then the site is built." },
      { t: "Publish", d: "The documentation site updates when the change is merged." },
    ],
    caption: "Documentation follows the same path as the code it describes.",
  },
  "audit-steps": {
    type: "flow",
    title: "A five-step documentation audit",
    steps: [
      { t: "Inventory", d: "List every document, where it lives and who owns it." },
      { t: "Accuracy", d: "Check each one against the current product." },
      { t: "Gaps", d: "Note what users need that does not exist." },
      { t: "Findability", d: "Check whether people can actually locate things." },
      { t: "Prioritize", d: "Rank the fixes by impact and effort." },
    ],
    caption: "The output is a ranked list of fixes with an owner for each.",
  },
  "onboarding-week": {
    type: "flow",
    title: "An embedded writer's first week",
    steps: [
      { t: "Access", d: "Accounts and tools working on day one." },
      { t: "Product", d: "Hands-on time with the product, plus a walkthrough with an engineer." },
      { t: "First task", d: "A small, real document with a clear owner." },
      { t: "Feedback", d: "Comments on structure and tone as well as facts." },
      { t: "Routine", d: "Agree how priorities, reviews and questions will run." },
    ],
    caption: "Most of the delay in a new engagement is missing access, not slow writing.",
  },
  "ai-ready": {
    type: "compare",
    title: "What helps AI tools use your documentation",
    cols: ["Harder to use", "Easier to use"],
    rows: [
      ["Headings", "Vague, such as 'Overview' or 'More'", "Specific, such as 'Reset a user password'"],
      ["Sections", "Depend on text far above, such as 'as mentioned earlier'", "Make sense when read on their own"],
      ["Terminology", "Several names for the same thing", "One agreed name for each concept"],
      ["Structure", "Long, unbroken pages", "Short topics with a single purpose"],
      ["Steps", "Described in paragraphs", "Numbered lists with one action per step"],
    ],
    caption: "These changes also make the documentation easier for people to read.",
  },
  "doc-roles": {
    type: "map",
    title: "Four roles that are often confused",
    centre: { t: "Documentation roles", d: "Start from the problem you need solved." },
    items: [
      { t: "Technical writer", d: "Writes and maintains guides, references and tutorials for a defined audience." },
      { t: "Documentation engineer", d: "Builds the tooling: docs-as-code pipelines, automation, publishing and search." },
      { t: "Content strategist", d: "Plans structure, standards and governance across all of your documentation." },
      { t: "UX writer", d: "Writes the text inside the product interface." },
    ],
    caption: "One person can sometimes cover more than one, but each role has a center of gravity.",
  },
  "doc-types": {
    type: "map",
    title: "Where technical writing shows up",
    centre: { t: "Technical documentation", d: "Different readers, different tasks, different formats." },
    items: [
      { t: "Product documentation", d: "User guides, quickstarts, tutorials and in-product text." },
      { t: "Developer documentation", d: "API references, SDK guides, architecture overviews and READMEs." },
      { t: "Internal documentation", d: "SOPs, runbooks, onboarding guides and policies." },
      { t: "Release communication", d: "Release notes, changelogs and What's New entries." },
      { t: "Training and enablement", d: "Courses, videos, exercises and assessments." },
      { t: "Support content", d: "Knowledge base articles and troubleshooting guides." },
    ],
    caption: "Most organizations need several of these, and each has a different reader.",
  },
  diataxis: {
    type: "compare",
    title: "The four types of documentation in Diátaxis",
    cols: ["Learning", "Working"],
    rows: [
      ["Doing something", "Tutorial: a lesson that builds a small result", "How-to guide: steps to reach a specific goal"],
      ["Knowing something", "Explanation: background and reasoning", "Reference: accurate description of the product"],
    ],
    caption: "Each page should serve one of these four purposes.",
  },
  "style-guide-parts": {
    type: "map",
    title: "What a documentation style guide usually covers",
    centre: { t: "Documentation style guide", d: "Decisions made once, so writers do not re-decide them on every page." },
    items: [
      { t: "Voice and tone", d: "Who is speaking, and how." },
      { t: "Terminology", d: "Product names, preferred words and words to avoid." },
      { t: "Grammar and mechanics", d: "Capitalization, punctuation, numbers and dates." },
      { t: "Formatting", d: "Steps, UI labels, code, warnings and tables." },
      { t: "Structure", d: "Templates for each type of document." },
      { t: "Accessibility", d: "Alt text, link text and heading order." },
    ],
    caption: "Start with the areas where writers disagree most often.",
  },
  "sme-interview": {
    type: "flow",
    title: "Getting more from a short expert conversation",
    steps: [
      { t: "Prepare", d: "Use the product and read what exists before you ask." },
      { t: "Draft", d: "Write what you believe is true, so the expert can correct it." },
      { t: "Ask", d: "One specific question at a time, with the reason." },
      { t: "Review", d: "Send small pieces and say what to check." },
    ],
    caption: "The less the expert has to reconstruct, the faster they answer.",
  },
  "fast-product": {
    type: "compare",
    title: "Where to spend effort when a product changes often",
    cols: ["Changes slowly", "Changes often"],
    rows: [
      ["Examples", "Concepts, workflows, reasons behind design choices", "Button labels, screen layouts, minor options"],
      ["How to document", "In depth, with examples", "Lightly, around the task rather than the layout"],
      ["Where to keep it", "Main guides", "Reusable snippets and a compatibility table"],
    ],
    caption: "Write most about what lasts, and describe the rest in a way that survives small changes.",
  },
  "debt-paydown": {
    type: "flow",
    title: "Paying down documentation debt",
    steps: [
      { t: "Take stock", d: "List every page with its owner and condition." },
      { t: "Rank", d: "Order by traffic, support questions and risk." },
      { t: "Fix or remove", d: "Update what matters. Archive what does not." },
      { t: "Assign owners", d: "A named owner and review date for each page." },
      { t: "Prevent", d: "Add documentation to the definition of done." },
    ],
    caption: "Start with the top fifth of the list and show the effect before moving on.",
  },
};
