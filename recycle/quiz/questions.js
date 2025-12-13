const quizzes = {
    // --- Previously provided quizzes ---
    'JavaScript': [
        {
            question: "What is the output of this code? `console.log(typeof null);`",
            options: [
                { text: "null" },
                { text: "undefined" },
                { text: "object" }
            ],
            correctAnswer: "object",
            explanation: "This is a famous, long-standing bug in JavaScript. The data type of `null` is officially `object`, even though it represents the absence of an object."
        },
        {
            question: "What does the `===` operator do?",
            options: [
                { text: "It checks for equality without performing type coercion." },
                { text: "It assigns a value to a variable." },
                { text: "It checks for equality after converting both values to a common type." }
            ],
            correctAnswer: "It checks for equality without performing type coercion.",
            explanation: "The strict equality operator (`===`) checks if two values are of the same type and have the same value, preventing unexpected type coercion issues."
        },
        {
            question: "What is a closure in JavaScript?",
            options: [
                { text: "A function that has no access to its outer scope." },
                { text: "A function that remembers the environment in which it was created." },
                { text: "An object that has been closed and cannot be modified." }
            ],
            correctAnswer: "A function that remembers the environment in which it was created.",
            explanation: "A closure gives you access to an outer function's scope from an inner function, even after the outer function has finished executing."
        }
    ],
    'HTML': [
        {
            question: "What is the purpose of the `<!DOCTYPE html>` declaration?",
            options: [
                { text: "It loads a special document type library." },
                { text: "It is a comment and is ignored by the browser." },
                { text: "It informs the browser that the document is an HTML5 document." }
            ],
            correctAnswer: "It informs the browser that the document is an HTML5 document.",
            explanation: "The DOCTYPE declaration is an instruction to the web browser about the version of markup language in which the page is written. `<!DOCTYPE html>` specifies HTML5."
        },
        {
            question: "Which element is used to define a container for an independent, self-contained piece of content?",
            options: [
                { text: "<div>" },
                { text: "<section>" },
                { text: "<article>" }
            ],
            correctAnswer: "<article>",
            explanation: "The `<article>` element is ideal for content that could be distributed independently, like a blog post, forum post, or news story."
        },
        {
            question: "What does the `<a>` tag define?",
            options: [
                { text: "An article" },
                { text: "A hyperlink" },
                { text: "An abbreviation" }
            ],
            correctAnswer: "A hyperlink",
            explanation: "The `<a>` tag, or anchor tag, is used to create hyperlinks to other web pages, files, or locations within the same page."
        }
    ],
    'CSS': [
        {
            question: "What is the difference between `display: none;` and `visibility: hidden;`?",
            options: [
                { text: "There is no difference." },
                { text: "`display: none` removes the element from the document flow, while `visibility: hidden` hides it but leaves the space." },
                { text: "`visibility: hidden` removes the element from the document flow, while `display: none` hides it but leaves the space." }
            ],
            correctAnswer: "`display: none` removes the element from the document flow, while `visibility: hidden` hides it but leaves the space.",
            explanation: "An element with `display: none` does not take up any space. An element with `visibility: hidden` is invisible but still affects the layout."
        },
        {
            question: "What does `box-sizing: border-box;` do?",
            options: [
                { text: "It includes padding and border in the element's total width and height." },
                { text: "It adds a border around the element's box." },
                { text: "It makes the element's box bigger." }
            ],
            correctAnswer: "It includes padding and border in the element's total width and height.",
            explanation: "This property makes layout math more intuitive. A box with `width: 100px` will be 100px wide, regardless of its padding and border."
        },
        {
            question: "Which CSS property is used to control the stacking order of positioned elements?",
            options: [
                { text: "stack-order" },
                { text: "layer" },
                { text: "z-index" }
            ],
            correctAnswer: "z-index",
            explanation: "The `z-index` property specifies the stack order of an element. An element with a greater `z-index` will always be in front of an element with a lower one."
        }
    ],
    'Python': [
        {
            question: "What is the difference between a list and a tuple in Python?",
            options: [
                { text: "Lists are indexed by numbers, and tuples are indexed by strings." },
                { text: "Lists are mutable, while tuples are immutable." },
                { text: "There is no difference; they are interchangeable." }
            ],
            correctAnswer: "Lists are mutable, while tuples are immutable.",
            explanation: "This means you can change, add, and remove items in a list after it has been created, but you cannot change the items in a tuple."
        },
        {
            question: "What keyword is used to define a function in Python?",
            options: [
                { text: "function" },
                { text: "def" },
                { text: "fun" }
            ],
            correctAnswer: "def",
            explanation: "Python functions are defined using the `def` keyword, followed by the function name and parentheses `()`."
        },
        {
            question: "What does 'PEP 8' refer to?",
            options: [
                { text: "The latest version of Python." },
                { text: "A popular third-party library." },
                { text: "The official style guide for Python code." }
            ],
            correctAnswer: "The official style guide for Python code.",
            explanation: "PEP 8 provides coding conventions for writing readable and consistent Python code, covering aspects like naming, layout, and comments."
        }
    ],
    'Java': [
        {
            question: "What is the entry point for any standalone Java application?",
            options: [
                { text: "The first line of the file." },
                { text: "The `start()` method." },
                { text: "The `public static void main(String[] args)` method." }
            ],
            correctAnswer: "The `public static void main(String[] args)` method.",
            explanation: "The Java Virtual Machine (JVM) starts execution by looking for this specific method signature."
        },
        {
            question: "What is the difference between `ArrayList` and `LinkedList`?",
            options: [
                { text: "They are the same." },
                { text: "`ArrayList` is better for frequent insertions/deletions, `LinkedList` is better for random access." },
                { text: "`LinkedList` is better for frequent insertions/deletions, `ArrayList` is better for random access." }
            ],
            correctAnswer: "`LinkedList` is better for frequent insertions/deletions, `ArrayList` is better for random access.",
            explanation: "`ArrayList` uses a dynamic array, making index-based access fast. `LinkedList` uses nodes with pointers, making adding or removing elements from the middle fast."
        },
        {
            question: "Is Java a compiled or interpreted language?",
            options: [
                { text: "Compiled only." },
                { text: "Interpreted only." },
                { text: "It is both compiled and interpreted." }
            ],
            correctAnswer: "It is both compiled and interpreted.",
            explanation: "Java source code is compiled into bytecode, which is then interpreted (or just-in-time compiled) by the Java Virtual Machine (JVM)."
        }
    ],
    'Node.js': [
        {
            question: "What is Node.js?",
            options: [
                { text: "A JavaScript framework for front-end development." },
                { text: "A JavaScript runtime environment that executes JavaScript code outside a web browser." },
                { text: "A database management system." }
            ],
            correctAnswer: "A JavaScript runtime environment that executes JavaScript code outside a web browser.",
            explanation: "Node.js allows developers to use JavaScript for server-side scripting, building scalable network applications."
        },
        {
            question: "What is the primary purpose of `npm`?",
            options: [
                { text: "To run Node.js applications." },
                { text: "To manage and install packages (dependencies) for Node.js projects." },
                { text: "To debug Node.js code." }
            ],
            correctAnswer: "To manage and install packages (dependencies) for Node.js projects.",
            explanation: "npm (Node Package Manager) is the world's largest software registry and the default package manager for Node.js."
        },
        {
            question: "How does Node.js handle concurrency despite being single-threaded?",
            options: [
                { text: "It creates a new thread for every request." },
                { text: "It uses an event loop and non-blocking I/O operations." },
                { text: "It doesn't handle concurrency; it processes requests sequentially." }
            ],
            correctAnswer: "It uses an event loop and non-blocking I/O operations.",
            explanation: "The event loop allows Node.js to perform I/O operations (like reading a file or making a network request) asynchronously, without blocking the main thread."
        }
    ],

    // --- Newly Added Quizzes ---
    'Angular': [
        {
            question: "What is the basic building block of an Angular application?",
            options: [
                { text: "A Service" },
                { text: "A Module" },
                { text: "A Component" }
            ],
            correctAnswer: "A Component",
            explanation: "Components are the fundamental building blocks. Each component consists of an HTML template, a TypeScript class, and a CSS selector."
        },
        {
            question: "Which decorator is used to define a service in Angular?",
            options: [
                { text: "@Component" },
                { text: "@Injectable()" },
                { text: "@NgModule" }
            ],
            correctAnswer: "@Injectable()",
            explanation: "The `@Injectable()` decorator marks a class as one that participates in the dependency injection system, making it a service that can be injected elsewhere."
        },
        {
            question: "How do you bind a property from a parent component to a child component?",
            options: [
                { text: "Using the @Output() decorator." },
                { text: "Using the @Input() decorator." },
                { text: "Using a Service." }
            ],
            correctAnswer: "Using the @Input() decorator.",
            explanation: "The `@Input()` decorator in a child component allows it to receive a value from its parent component through property binding."
        }
    ],
    'Bootstrap': [
        {
            question: "What is the maximum number of columns in the Bootstrap grid system?",
            options: [
                { text: "10" },
                { text: "12" },
                { text: "16" }
            ],
            correctAnswer: "12",
            explanation: "Bootstrap's grid system is based on a 12-column layout, allowing for flexible and responsive designs."
        },
        {
            question: "Which class is used to create a large, prominent button for a primary action?",
            options: [
                { text: "btn btn-primary btn-lg" },
                { text: "button-main" },
                { text: "primary-action-button" }
            ],
            correctAnswer: "btn btn-primary btn-lg",
            explanation: "`btn` is the base class, `btn-primary` provides the color, and `btn-lg` increases the size."
        },
        {
            question: "How do you create a responsive navigation bar that collapses on smaller screens?",
            options: [
                { text: "Using the `.nav-responsive` class." },
                { text: "Using the `.navbar` and `.navbar-expand-lg` classes." },
                { text: "Using the `.menu-collapse` class." }
            ],
            correctAnswer: "Using the `.navbar` and `.navbar-expand-lg` classes.",
            explanation: "The `.navbar` class creates the navbar, and `.navbar-expand-lg` specifies the breakpoint (e.g., large screens) at which the navbar should expand."
        }
    ],
    'C': [
        {
            question: "What is the purpose of the `malloc()` function?",
            options: [
                { text: "To create a new variable." },
                { text: "To allocate a block of memory on the heap." },
                { text: "To free previously allocated memory." }
            ],
            correctAnswer: "To allocate a block of memory on the heap.",
            explanation: "`malloc()` stands for 'memory allocation' and is used for dynamic memory allocation. The memory must be explicitly freed using `free()`."
        },
        {
            question: "What is a pointer in C?",
            options: [
                { text: "A special type of integer." },
                { text: "A variable that stores the memory address of another variable." },
                { text: "A keyword used to reference a function." }
            ],
            correctAnswer: "A variable that stores the memory address of another variable.",
            explanation: "Pointers are a fundamental concept in C, allowing for direct memory manipulation, dynamic data structures, and efficient function arguments."
        },
        {
            question: "What is the difference between `struct` and `union`?",
            options: [
                { text: "They are interchangeable keywords." },
                { text: "`struct` members share the same memory location, while `union` members have separate locations." },
                { text: "`union` members share the same memory location, while `struct` members have separate locations." }
            ],
            correctAnswer: "`union` members share the same memory location, while `struct` members have separate locations.",
            explanation: "A `struct` allocates enough space for all its members, while a `union` allocates space only for its largest member, as only one member can be used at a time."
        }
    ],
    'C++': [
        {
            question: "What is RAII in C++?",
            options: [
                { text: "A design pattern for array initialization." },
                { text: "Resource Acquisition Is Initialization." },
                { text: "A memory allocation function." }
            ],
            correctAnswer: "Resource Acquisition Is Initialization.",
            explanation: "RAII is a core C++ concept where resource management (like memory or file handles) is tied to object lifetime. Resources are acquired in a constructor and released in the destructor."
        },
        {
            question: "What is the purpose of the `virtual` keyword on a member function?",
            options: [
                { text: "It makes the function static." },
                { text: "It allows the function to be overridden by a derived class, enabling polymorphism." },
                { text: "It prevents the function from being called." }
            ],
            correctAnswer: "It allows the function to be overridden by a derived class, enabling polymorphism.",
            explanation: "When a base class pointer holds a derived class object, calling a `virtual` function will execute the derived class's version."
        },
        {
            question: "Which C++ Standard Library container provides a dynamic array?",
            options: [
                { text: "std::list" },
                { text: "std::vector" },
                { text: "std::map" }
            ],
            correctAnswer: "std::vector",
            explanation: "`std::vector` is a sequence container that encapsulates dynamic size arrays, handling memory management automatically."
        }
    ],
    'C#': [
        {
            question: "Who developed the C# programming language?",
            options: [
                { text: "Microsoft" },
                { text: "Google" },
                { text: "Apple" }
            ],
            correctAnswer: "Microsoft",
            explanation: "C# was developed by Microsoft as part of its .NET initiative."
        },
        {
            question: "Which keyword is used to define a constant in C#?",
            options: [
                { text: "const" },
                { text: "final" },
                { text: "static" }
            ],
            correctAnswer: "const",
            explanation: "The keyword `const` is used to declare constants whose value cannot be changed."
        },
        {
            question: "What does CLR stand for in C#?",
            options: [
                { text: "Common Language Runtime" },
                { text: "Common Linkage Receiver" },
                { text: "Code Logic Repository" }
            ],
            correctAnswer: "Common Language Runtime",
            explanation: "CLR is the virtual machine component of the .NET Framework which executes C# programs."
        }
    ],
    'Figma': [
        {
            question: "What is Figma primarily used for?",
            options: [
                { text: "Real-time collaborative interface design" },
                { text: "Video editing" },
                { text: "Database management" }
            ],
            correctAnswer: "Real-time collaborative interface design",
            explanation: "Figma is a popular cloud-based UI/UX design and prototyping tool with real-time collaboration features."
        },
        {
            question: "What are components in Figma?",
            options: [
                { text: "Reusable design elements" },
                { text: "Code snippets" },
                { text: "Binary data files" }
            ],
            correctAnswer: "Reusable design elements",
            explanation: "Components allow designers to reuse UI elements consistently across a project."
        },
        {
            question: "What feature in Figma helps teams collaborate simultaneously?",
            options: [
                { text: "Real-time editing" },
                { text: "Offline file sharing" },
                { text: "Automated coding" }
            ],
            correctAnswer: "Real-time editing",
            explanation: "Figma enables multiple users to work together in real time on the same design file."
        }
    ],
    'Go': [
        {
            question: "Which keyword is used to declare a variable in Go?",
            options: [
                { text: "var x int" },
                { text: "int x" },
                { text: "declare x int" }
            ],
            correctAnswer: "var x int",
            explanation: "The `var` keyword is used in Go for variable declaration, followed by the variable name and its type."
        },
        {
            question: "Which keyword is used to skip the current iteration of a loop in Go?",
            options: [
                { text: "continue" },
                { text: "break" },
                { text: "skip" }
            ],
            correctAnswer: "continue",
            explanation: "The `continue` statement skips the rest of the current loop iteration and proceeds to the next one."
        },
        {
            question: "Does Go support pointer arithmetic?",
            options: [
                { text: "No" },
                { text: "Yes" },
                { text: "Only with the unsafe package" }
            ],
            correctAnswer: "No",
            explanation: "Go does not support pointer arithmetic by default, which enhances memory safety and simplicity."
        }
    ],
    'React': [
        {
            question: "What is JSX?",
            options: [
                { text: "A syntax extension for JavaScript." },
                { text: "A type of database." },
                { text: "A CSS framework." }
            ],
            correctAnswer: "A syntax extension for JavaScript.",
            explanation: "JSX allows writing HTML-like syntax in JavaScript, which React transforms into DOM elements."
        },
        {
            question: "What is the purpose of React Hooks?",
            options: [
                { text: "To manage state and side effects in functional components." },
                { text: "To create classes." },
                { text: "To style components." }
            ],
            correctAnswer: "To manage state and side effects in functional components.",
            explanation: "Hooks like `useState` and `useEffect` let you use state and lifecycle features without writing classes."
        },
        {
            question: "What does the `setState` method do in a class component?",
            options: [
                { text: "Updates the component’s state and triggers a re-render." },
                { text: "Deletes the component." },
                { text: "Sets the style of a component." }
            ],
            correctAnswer: "Updates the component’s state and triggers a re-render.",
            explanation: "Calling `setState` updates a component's state object and schedules a re-render of the component and its children."
        }
    ],
    'React Native': [
        {
            question: "What is React Native used for?",
            options: [
                { text: "Building native mobile apps using JavaScript." },
                { text: "Building websites." },
                { text: "Server-side scripting." }
            ],
            correctAnswer: "Building native mobile apps using JavaScript.",
            explanation: "React Native allows developers to build truly native mobile applications for iOS and Android using JavaScript and React."
        },
        {
            question: "Which component is used for basic text display?",
            options: [
                { text: "ScrollView" },
                { text: "Text" },
                { text: "View" }
            ],
            correctAnswer: "Text",
            explanation: "The `<Text>` component is the fundamental component for displaying text in React Native."
        },
        {
            question: "How do you style components in React Native?",
            options: [
                { text: "Using a `StyleSheet` object" },
                { text: "Using external CSS files directly" },
                { text: "Using inline HTML styles" }
            ],
            correctAnswer: "Using a `StyleSheet` object",
            explanation: "React Native uses JavaScript objects created with `StyleSheet.create` for styling, which provides performance optimizations."
        }
    ],
    'MongoDB': [
        {
            question: "What type of database is MongoDB?",
            options: [
                { text: "Relational (SQL)" },
                { text: "NoSQL document-oriented" },
                { text: "Graph database" }
            ],
            correctAnswer: "NoSQL document-oriented",
            explanation: "MongoDB stores data in flexible, JSON-like documents, which makes it a document-oriented NoSQL database."
        },
        {
            question: "What is a 'document' in MongoDB?",
            options: [
                { text: "A row in a table" },
                { text: "A BSON object" },
                { text: "A text file" }
            ],
            correctAnswer: "A BSON object",
            explanation: "A document is the basic unit of data in MongoDB and is composed of field-and-value pairs, stored in a binary representation of JSON called BSON."
        },
        {
            question: "Which method is used to insert a single document into a collection?",
            options: [
                { text: "db.collection.addOne()" },
                { text: "db.collection.insertOne()" },
                { text: "db.collection.new()" }
            ],
            correctAnswer: "db.collection.insertOne()",
            explanation: "The `insertOne()` method is the standard command to add a single document to a collection in MongoDB."
        }
    ],
    'Kotlin': [
        {
            question: "What is the file extension for Kotlin files?",
            options: [
                { text: ".kt" },
                { text: ".kotlin" },
                { text: ".kts" }
            ],
            correctAnswer: ".kt",
            explanation: "Kotlin source files typically have the .kt extension, while script files use .kts."
        },
        {
            question: "Which keyword is used to declare a variable that can be reassigned?",
            options: [
                { text: "fun" },
                { text: "val" },
                { text: "var" }
            ],
            correctAnswer: "var",
            explanation: "`var` is used for mutable variables, while `val` is used for immutable (read-only) variables."
        },
        {
            question: "What is a primary feature of Kotlin regarding null references?",
            options: [
                { text: "It allows nulls everywhere by default." },
                { text: "It has a built-in null safety system." },
                { text: "It does not support null values." }
            ],
            correctAnswer: "It has a built-in null safety system.",
            explanation: "Kotlin's type system aims to eliminate the 'billion-dollar mistake' by distinguishing between nullable and non-nullable types at compile time."
        }
    ],
    'PHP': [
        {
            question: "What does PHP stand for?",
            options: [
                { text: "PHP: Hypertext Preprocessor" },
                { text: "Personal Home Page" },
                { text: "Private Home Page" }
            ],
            correctAnswer: "PHP: Hypertext Preprocessor",
            explanation: "PHP is a recursive acronym for PHP: Hypertext Preprocessor."
        },
        {
            question: "Which of the following is the correct way to start a PHP code block?",
            options: [
                { text: "<?" },
                { text: "<php>" },
                { text: "<?php" }
            ],
            correctAnswer: "<?php",
            explanation: "Standard PHP code blocks are opened with `<?php` and closed with `?>`."
        },
        {
            question: "Which superglobal variable holds information about headers, paths, and script locations?",
            options: [
                { text: "$_GET" },
                { text: "$_SESSION" },
                { text: "$_SERVER" }
            ],
            correctAnswer: "$_SERVER",
            explanation: "`$_SERVER` is an array containing information such as headers, paths, and script locations created by the web server."
        }
    ],
    'SQL': [
        {
            question: "Which SQL statement is used to retrieve data from a database?",
            options: [
                { text: "SELECT" },
                { text: "INSERT" },
                { text: "UPDATE" }
            ],
            correctAnswer: "SELECT",
            explanation: "The `SELECT` statement is used to query data from one or more tables in a database."
        },
        {
            question: "Which keyword is used to sort the result set in ascending or descending order?",
            options: [
                { text: "WHERE" },
                { text: "ORDER BY" },
                { text: "GROUP BY" }
            ],
            correctAnswer: "ORDER BY",
            explanation: "The `ORDER BY` clause is used to sort the records in your result set, with `ASC` for ascending and `DESC` for descending."
        },
        {
            question: "What does a `JOIN` clause do?",
            options: [
                { text: "Combines rows from two or more tables based on a related column." },
                { text: "Deletes rows from a table." },
                { text: "Creates a new table." }
            ],
            correctAnswer: "Combines rows from two or more tables based on a related column.",
            explanation: "An SQL `JOIN` is used to query data from two or more tables, based on a relationship between certain columns in these tables."
        }
    ],
    'PostgreSQL': [
        {
            question: "Which command lists all tables in the current database via the `psql` interface?",
            options: [
                { text: "\\dt" },
                { text: "SHOW tables" },
                { text: "LIST tables" }
            ],
            correctAnswer: "\\dt",
            explanation: "The `\\dt` command is a meta-command used in the psql command-line utility to list all tables in the current database."
        },
        {
            question: "What is PostgreSQL often referred to as?",
            options: [
                { text: "An Object-Relational Database Management System (ORDBMS)" },
                { text: "A NoSQL database" },
                { text: "An in-memory database" }
            ],
            correctAnswer: "An Object-Relational Database Management System (ORDBMS)",
            explanation: "PostgreSQL is widely known as an ORDBMS because it supports both relational (like a traditional SQL database) and object-oriented features."
        },
        {
            question: "What does the `VACUUM` command do in PostgreSQL?",
            options: [
                { text: "Deletes the entire database." },
                { text: "Reclaims storage occupied by dead tuples." },
                { text: "Backs up the database." }
            ],
            correctAnswer: "Reclaims storage occupied by dead tuples.",
            explanation: "`VACUUM` is essential for database maintenance, as it recovers space taken by updated or deleted rows."
        }
    ],
    'Swift': [
        {
            question: "Which keyword is used to declare a constant in Swift?",
            options: [
                { text: "let" },
                { text: "const" },
                { text: "var" }
            ],
            correctAnswer: "let",
            explanation: "The `let` keyword is used to declare constants whose values cannot be changed after initialization, promoting safety."
        },
        {
            question: "What is an 'optional' in Swift?",
            options: [
                { text: "A variable that has an optional name." },
                { text: "A type that can hold either a value or no value (nil)." },
                { text: "A function that can be optionally called." }
            ],
            correctAnswer: "A type that can hold either a value or no value (nil).",
            explanation: "Optionals are a core feature for handling the absence of a value safely. They are declared with a `?` after the type."
        },
        {
            question: "Which symbol is used for forced unwrapping of an optional in Swift?",
            options: [
                { text: "!" },
                { text: "?" },
                { text: "&" }
            ],
            correctAnswer: "!",
            explanation: "The exclamation mark (`!`) is used to forcibly unwrap an optional value, which should only be used when you are certain the optional contains a non-nil value."
        }
    ],
    'Vue': [
        {
            question: "What is the primary purpose of Vue.js?",
            options: [
                { text: "Building user interfaces and single-page applications." },
                { text: "Backend server development." },
                { text: "Database management." }
            ],
            correctAnswer: "Building user interfaces and single-page applications.",
            explanation: "Vue.js is a progressive JavaScript framework used mainly for building dynamic and interactive user interfaces."
        },
        {
            question: "Which directive is used for conditional rendering in Vue?",
            options: [
                { text: "v-bind" },
                { text: "v-if" },
                { text: "v-on" }
            ],
            correctAnswer: "v-if",
            explanation: "The `v-if` directive conditionally renders an element or a template fragment based on the truthiness of an expression."
        },
        {
            question: "What is a reusable, self-contained unit in a Vue application called?",
            options: [
                { text: "A Directive" },
                { text: "A Component" },
                { text: "A Mixin" }
            ],
            correctAnswer: "A Component",
            explanation: "Components are reusable Vue instances with a name, allowing you to build a large application composed of small, self-contained, and often reusable components."
        }
    ],
    'Tailwind CSS': [
        {
            question: "What is the core principle of Tailwind CSS?",
            options: [
                { text: "It is a utility-first CSS framework." },
                { text: "It is a component-based framework like Bootstrap." },
                { text: "It is a JavaScript-based styling library." }
            ],
            correctAnswer: "It is a utility-first CSS framework.",
            explanation: "Tailwind CSS provides low-level utility classes to build custom designs directly in your HTML without writing custom CSS."
        },
        {
            question: "How does Tailwind CSS handle responsive design?",
            options: [
                { text: "Using breakpoint prefixes like `sm:`, `md:`, and `lg:`." },
                { text: "By requiring separate CSS files for each screen size." },
                { text: "It does not support responsive design." }
            ],
            correctAnswer: "Using breakpoint prefixes like `sm:`, `md:`, and `lg:`.",
            explanation: "Tailwind uses simple breakpoint prefixes that can be added to any utility class to apply styles conditionally at different screen sizes."
        },
        {
            question: "Where can you customize Tailwind's default design system?",
            options: [
                { text: "In the `tailwind.config.js` file." },
                { text: "Directly inside the framework's source code." },
                { text: "Through inline styles in HTML." }
            ],
            correctAnswer: "In the `tailwind.config.js` file.",
            explanation: "The `tailwind.config.js` file is the central place to customize your color palette, spacing, fonts, breakpoints, and more."
        }
    ],
    'Rust': [
        {
            question: "What is Rust's most unique feature for memory management?",
            options: [
                { text: "A garbage collector." },
                { text: "Manual memory allocation and deallocation." },
                { text: "The ownership and borrowing system." }
            ],
            correctAnswer: "The ownership and borrowing system.",
            explanation: "Rust ensures memory safety at compile time through its ownership system, which manages memory without needing a garbage collector."
        },
        {
            question: "How do you declare a variable that can be modified in Rust?",
            options: [
                { text: "All variables are mutable by default." },
                { text: "Using the `mut` keyword." },
                { text: "Using the `var` keyword." }
            ],
            correctAnswer: "Using the `mut` keyword.",
            explanation: "Variables in Rust are immutable by default. The `mut` keyword must be used to make a variable mutable."
        },
        {
            question: "What is the name of Rust's package manager and build tool?",
            options: [
                { text: "npm" },
                { text: "Cargo" },
                { text: "RustPM" }
            ],
            correctAnswer: "Cargo",
            explanation: "Cargo handles a lot of tasks for you, such as building your code, downloading the libraries your code depends on, and building those libraries."
        }
    ],
    'Next.js': [
        {
            question: "What is Next.js?",
            options: [
                { text: "A standalone JavaScript library." },
                { text: "A React framework for production." },
                { text: "A state management library." }
            ],
            correctAnswer: "A React framework for production.",
            explanation: "Next.js is a popular React framework that enables features such as server-side rendering, static site generation, and file-based routing."
        },
        {
            question: "How does Next.js handle routing?",
            options: [
                { text: "By manually configuring a routing file." },
                { text: "Through a file-system based router." },
                { text: "It requires an external routing library." }
            ],
            correctAnswer: "Through a file-system based router.",
            explanation: "Next.js uses a file-system based router where files inside the `pages` directory automatically become routes."
        },
        {
            question: "What is `getStaticProps` used for in Next.js?",
            options: [
                { text: "To fetch data on the client-side." },
                { text: "To fetch data at build time for static generation (SSG)." },
                { text: "To fetch data on each request for server-side rendering (SSR)." }
            ],
            correctAnswer: "To fetch data at build time for static generation (SSG).",
            explanation: "`getStaticProps` is a function that runs at build time to fetch data and pre-render a page, which is great for performance and SEO."
        }
    ]
};
