# Vendex

Vendex is a powerful yet direct piece of software intended to help small to large scale server companies manage inventory at all levels.

**Link to project:** https://vendex-production.up.railway.app/

![live ux](https://imgur.com/8LAfna4.gif)

## How It's Made:

**Tech used:** HTML, CSS, SCSS, JavaScript, React, Redux, Golang, Gin, OS, PostgreSQL, SQL

Vendex’s frontend is built with React and JavaScript, focusing on a component-based architecture. The initial design phase involved laying out a well-structured component hierarchy using HTML/JSX. Consistency across the UI was a priority, so we employed SCSS/Sass for styling. Each CSS selector is organized by functionality and structured for responsiveness, ensuring that styles scale cleanly from the smallest to largest breakpoints.

The bulk of the UI/UX interactivity is powered by JavaScript and Redux. Key tasks include user authentication, managing local storage, conditional routing based on state, and handling token decoding and HTTP headers. A custom Redux Thunk middleware was implemented to manage asynchronous API requests, allowing us to efficiently handle responses and trigger side effects.

On the backend, Vendex is written entirely in Go, leveraging its simplicity and performance. Go’s minimalist syntax provides excellent readability, while being compiled to machine code offers a significant performance boost compared to other backend languages, making it ideal for performance-critical applications.

The backend API is powered by the Gin web framework, which significantly streamlined the process of handling HTTP requests. Gin’s lightweight nature allowed us to quickly set up routing, handle URL parameters, and return appropriate HTTP status codes to the client. This improved both development speed and the maintainability of our codebase.

For data persistence, Vendex relies on PostgreSQL as the relational database. Go's strong compatibility with PostgreSQL made establishing connections and executing queries straightforward. PostgreSQL's robust support for advanced data types, combined with its powerful constraints, ensures data integrity and provides clear feedback when insertions don’t meet the schema’s requirements. This flexibility and power make it the perfect pairing with Go for handling complex relational data.

## Optimizations:

**1.Reduce Latency**

- Keep-alive or persistent HTTP connections can avoid the overhead of establishing new connections repeatedly.

**2. Caching Strategies**

- Use Redis a fast in-memory cache to store frequently accessed data, which reduces database hits.

**3. Lazy loading**

- Load only the necessary assets when needed (e.g., lazy loading images, code-splitting large JavaScript bundles, style sheets, component files).

## Lessons Learned:

**1. Typing Compatibility between Go and PostgreSQL**

- Early in the project, I encountered multiple issues related to data type mismatches between Go structs and PostgreSQL columns. This led to constraint violations and failed operations when trying to insert data into the database. To resolve this, I conducted in-depth research into both Go’s and PostgreSQL’s data types, ensuring each PostgreSQL column had a matching Go struct field. For example, I aligned int64 in Go with BIGINT in PostgreSQL, and string with VARCHAR. This approach not only resolved the constraint issues but also improved the readability and maintainability of the codebase, allowing for more seamless data insertions.

**2. Handling Asynchronous API Calls with Redux Thunk Middleware**

- While implementing the user authentication flow, I realized React’s Context API couldn’t handle rerenders caused by asynchronous operations like API calls. This led to issues with state updates. I switched to Redux Thunk middleware to manage these asynchronous operations. By dispatching different actions (such as REQUEST, SUCCESS, or FAILURE), I was able to handle API responses dynamically. This allowed me to manage side effects—like updating the UI after an authentication attempt—based on the success or failure of the API call. It also improved the flow of user interactions and significantly reduced code complexity when dealing with async logic.

**3. Version Control and Git Strategy**

- As the project expanded, maintaining a clean and organized commit history became critical. Initially, I made large commits that made tracking changes and debugging difficult. To improve this, I adopted a strategy of smaller, more frequent commits with clear, descriptive messages, ensuring each commit was focused on a single feature or bug fix. Additionally, I began using Git branching more effectively by isolating new features or bug fixes in separate branches, which made code reviews smoother and merging more conflict-free. This structured approach increased my productivity when working in development.

## Examples:

Take a look at these couple examples that I have in my own portfolio:

**Little Brook Learning Center:** https://littlebrooklc.com/

**Drum Machine:** https://kvncrtr.github.io/drum-machine/

**Markdown Previewer:** https://kvncrtr.github.io/markdown-previewer/
