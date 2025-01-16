
//The slide bar elements 
const menuIcon = document.getElementById("list");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("visible");
});


//Course array

const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];




//  necessary DOM elements
const courseContainer = document.querySelector(".courses");
const filterButtons = document.querySelectorAll(".class-category");

// Function to display courses dynamically
function displayCourses(courseList) {
  
    // Clear current courses
  courseContainer.innerHTML = "";

  // Populate courses based on the array
  courseList.forEach((course) => {
    const courseDiv = document.createElement("div");
    courseDiv.textContent = `${course.subject} ${course.number}`;

    // Add `courses-selected` class and a ✅ icon if the course is completed
    if (course.completed) {
      courseDiv.classList.add("courses-selected");
      const icon = document.createElement("span");
      icon.textContent = " ✅";
      courseDiv.appendChild(icon);
    }

    courseContainer.appendChild(courseDiv);
  });
}

// Function to filter courses
function filterCourses(filter) {
  if (filter === "all") {
    displayCourses(courses);
  } else {
    const filteredCourses = courses.filter(
      (course) => course.subject === filter
    );
    displayCourses(filteredCourses);
  }
}

// Adding  event listeners to the filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterCourses(filter);
  });
});

displayCourses(courses);



//footer date update

const yearElement = document.querySelector("#year");
const lastModifiedElement = document.querySelector("#lastModified");

const currentDate = new Date();

const formattedDate = currentDate.toLocaleString("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h24",
});

yearElement.innerHTML = `
  <span class="highlight">
    ${currentDate.getFullYear()} &copy; Elisha Sunday ✅ Software Engineer ✅ Nigeria
  </span>`;

lastModifiedElement.innerHTML = `
  <span class="lastmodified">
    Last Modification: ${formattedDate}
  </span>`;
