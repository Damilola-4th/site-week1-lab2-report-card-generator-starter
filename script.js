/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, 
as well as update the `studentInformation` object with your personal information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, all tests in the report should be passing.
*/

const studentInformation = {
  name: "Daniel Oluwarotimi",
  grade: "Incoming Junior",
  advisor: "Naja Mack",
  major: "Computer Science",
  graduationYear: "2025",
  imageUrl: "https://thumbs.dreamstime.com/b/african-american-graduate-vector-illustration-happy-smiling-cloak-graduation-cap-joyful-celebrating-education-83465579.jpg"
}

let semester = "Spring Semester"

const studentData = {
  "Spring Semester": [
    { code: "LIT 101", name: "English Literature 101", semester: "Spring 2021", credits: 5, grade: "B+" },
    { code: "CS 50", name: "Intro to Computer Science", semester: "Spring 2021", credits: 5, grade: "A-" },
    { code: "WD 140", name: "Modern Web Development", semester: "Spring 2021", credits: 5, grade: "A+" },
    { code: "JS 2.0", name: "Serverside JavaScript", semester: "Spring 2021", credits: 10, grade: "A-" },
  ],
  "Fall Semester": [
    { code: "Math 600", name: "Differential Equations", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "CS 10", name: "Python Programming", semester: "Fall 2020", credits: 5, grade: "A" },
    { code: "History 99", name: "History of Computers", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "MD 00", name: "Meditation and Mindfullness", semester: "Fall 2020", credits: 5, grade: "A+" },
  ],
  "Winter Term": [
    { code: "PHYS ED", name: "Physical Activity", semester: "Winter 2020", credits: 5, grade: "A-" },
    { code: "GEN ED", name: "General Education Requirement", semester: "Winter 2020", credits: 5, grade: "A+" },
  ],
}

const gpaPointsLookup = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
}

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */
const studentNameElement = document.querySelector("#student-name")
console.log(studentNameElement)
const studentAdvisorElement = document.querySelector("#student-advisor")
const studentMajorElement = document.querySelector("#student-major")
const studentGradeLevelElement = document.querySelector("#student-grade-level")
const studentGraduationYearElement = document.querySelector("#student-graduation-year")
const studentImageElement = document.querySelector("#student-image")
console.log(studentImageElement)
const semesterDropdownDivElement = document.querySelector(".semester-dropdown")
const semesterDropdownButtonElement = document.querySelector(".dropdown-button")
const semesterDropdownLabelElement = document.querySelector(".dropdown-label")
const fallSemesterItemElement = document.querySelector("#fall-semester")
const springSemesterItemElement = document.querySelector("#spring-semester")
const winterTermListItemElement = document.querySelector("#winter-term")
const reportCardTableElement = document.querySelector("#report-card-table")
const dropdownEl = document.querySelector(".dropdown")

// ADD more query selectors here

/**
 * SOLUTIONS FOR STUDENT INFO DOM UPDATES
 */

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {
  // code goes here
  studentNameElement.innerHTML = studentName
  console.log(studentNameElement)
}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
  // code goes here
  studentGradeLevelElement.innerHTML = studentGradeLevel
  console.log(studentGradeLevelElement)
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
  // code goes here
  studentAdvisorElement.innerHTML = studentAdvisor
  console.log(studentAdvisorElement)
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
  // code goes here
  studentMajorElement.innerHTML = studentMajor
  console.log(studentMajorElement)
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationyear - the year the student graduates
 */
function updateStudentGraduationYear(graduationYear) {
  // code goes here
  studentGraduationYearElement.innerHTML = graduationYear
  console.log(studentGraduationYearElement)
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {
  // code goes here
  console.log(studentImageElement)
  studentImageElement.setAttribute('src', imageUrl) 
}


/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo(studentInformationObject) {
  updateStudentName(studentInformationObject.name)
  updateStudentGradeLevel(studentInformationObject.grade)
  updateStudentAdvisor(studentInformationObject.advisor)
  updateMajor(studentInformationObject.major)
  updateStudentGraduationYear(studentInformationObject.graduationYear)
  updateStudentImage(studentInformationObject.imageUrl)
}

/**
 * SOLUTION FOR INNER HTML DOM UPDATES
 */

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders(reportCardTableElement) {
  // update the code here
  reportCardTableElement.innerHTML += `
    <div class=table-row table-header>
      <h4>Code</h4>
      <h4>name</h4>
      <h4>semester</h4>
      <h4>credit</h4>
      <h4>letter</h4>
      <h4>points</h4>
    </div>

  `
}

/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(reportCardTableElement, course, rowNum) {
  // update the code here with information about the course passed to this function
  console.log(course)
  reportCardTableElement.innerHTML += `
  <div class="table-row course-row row-${rowNum + 1} ${rowNum % 2 === 1 ? "odd" : "even"}">

  </div>
  <div class=table-row>
    <h4 class=code-col >${course.code}</h4>
    <h4 class=name-col >${course.name}</h4>
    <h4 class=sem-col >${course.semester}</h4>
    <h4 class=cred-col >${course.credits}</h4>
    <h4 class=lett-col >${course.grade}</h4>
  </div>
  `
}

/**
 * This function should add HTML for the totals row in the report card.
 */
function addTotalsRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += ``
}

/**
 * This function should add HTML for the final row in the report card.
 */
function addGpaRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += ``
}

/**
 * This is the primary function used to update the report card when the semester changes
 *
 * It should call the other functions responsible for creating the necessary HTML
 *
 */
function updateReportCard(reportCardTableElement, currentSemester) {
  // update the dropdown label
  updateDropdownLabel()
  // reset the report card table's inner html to an empty string
  if (reportCardTableElement) reportCardTableElement.innerHTML = ``

  // add your code here
  addReportCardHeaders(reportCardTableElement)
  currentSemesterCourses = studentData[currentSemester]
  console.log(currentSemesterCourses)
  //courseBeingAdded = currentSemesterCourses[0]
  //console.log(courseBeingAdded)
  //  addCourseRowToReportCard(reportCardTableElement,courseBeingAdded, 1)
  currentSemesterCourses.forEach(course => {
    addCourseRowToReportCard(reportCardTableElement,course)
  });
}

/**
 * SOLUTION FOR DROPDOWN EVENT HANDLERS
 */

/**
 * These two functions should be used to toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, the 'openDropdown' function should remove it.
 * If the dropdown classList doesn't contain the "closed" class, 'closeDropdown' function should add it.
 */
function closeDropdown(dropdownElement) {
  // code goes here
  let dropdownElementClasses = dropdownElement.classList;
  dropdownElementClasses.add('closed')

}

function openDropdown(dropdownElement) {
  // code goes here
  let dropdownElementClasses = dropdownElement.classList;
  console.log(dropdownElementClasses)
  dropdownElementClasses.remove('closed')
}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 *
 */
function updateDropdownLabel() {
  // code goes here
}

/**
 * This function should add the proper event listeners to the correct DOM elements
 * responsible for managing the state of the dropdown menu.
 *
 */
function addEventListeners(
  dropdownElement,
  dropdownButtonElement,
  reportCardTableElement,
  fallSemesterElement,
  springSemesterElement,
  winterTermElement
) {
  // Add an event listener for the dropdown button that calls the openDropdown function with the correct DOM element
  // Add 3 event listeners - one for the fall semester option, the spring semester option, and the winter term option
  // Each callback function one should update the `semester` variable,
  // call the `updateReportCard` function, and close the dropdown
  const addingEventListener = () => {
    console.log(dropdownElement)
    openDropdown(dropdownElement)
  }
  const changeSemesterToFall = () => {
    semester = 'Fall Semester'
    updateReportCard(reportCardTableElement, semester)
    closeDropdown(dropdownElement)
  }
  const changeSemesterToSpring = () => {
    semester = 'Spring Semester'
    updateReportCard(reportCardTableElement, semester)
    closeDropdown(dropdownElement)
  }
  const changeSemesterToWinter = () => {
    semester = 'Winter Term'
    updateReportCard(reportCardTableElement, semester)
    closeDropdown(dropdownElement)
  }
  dropdownButtonElement.addEventListener('click', addingEventListener)
  fallSemesterElement.addEventListener('click', changeSemesterToFall)
  springSemesterElement.addEventListener('click', changeSemesterToSpring)
  winterTermElement.addEventListener('click', changeSemesterToWinter)
}

/***************
   CALCULATIONS
****************/

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the credits the student has earned for each course.
 * Add them up and display the total in the proper location.
 *
 * It may be useful to check for the existence of certain elements
 * before updating the DOM.
 *
 */
function addUpStudentCredits(reportCardTableElement) {
  // code goes here
}

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the letter grades for each course and convert them to GPA points using
 * the `pointsLookup` object.
 *
 * That English Literature grade is keeping us from all A's! Let's see if we can't update that to an A-
 * since we definitely deserve it after a hard semester of work.
 *
 * Then perform a quick calculation and update the report card with the total points and
 * cumulative grade point average for the semester.
 *
 */

function calculateSemesterGpa(reportCardTableElement) {
  // code goes here
}


window.onload = function () {
  // execute your functions here to make sure they run as soon as the page loads
  populateStudentInfo(studentInformation)
  updateReportCard(reportCardTableElement,semester)
  addEventListeners(dropdownEl, semesterDropdownButtonElement, reportCardTableElement, fallSemesterItemElement, springSemesterItemElement, winterTermListItemElement )
}
