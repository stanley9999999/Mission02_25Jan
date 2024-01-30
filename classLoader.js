//create the people Array to store the Objects
const peopleArray = [];


//Define PERSON Class
class Person {
    constructor(firstName, lastName, jobDesc, jobArea, imageName = 'default_avatar.jpg') {
      this.firstName = firstName;
      this.lastName = lastName;
      this.jobDesc = jobDesc;
      this.jobArea = jobArea;
      this.imageName = imageName;
    }
  }

//add input data from HTML FORM
function addUser() {

//add user data via the HTML FORM elements
const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const jobDesc = document.getElementById('jobDesc').value;
const jobArea = document.getElementById('jobArea').value;
const imageName = document.getElementById('imageName').value;

//function to create a new person Object for the Array
const employee = new Person(firstName,lastName,jobDesc, jobArea, imageName);

//Push EMPLOYEE OBJECT with DATA LOADED into the ARRAY (peopleArray)
peopleArray.push(employee);

//Render peopleArray as TEXT
textOutPeopleArray();
}

        function textOutPeopleArray(){
            // Update the displayed array
            var output = "";
            for (var i = 0; i < peopleArray.length; i++) {
                output += "Person " + (i + 1) + ":\n";
                output += "First name: " + peopleArray[i].firstName + "\n";
                output += "Last name: " + peopleArray[i].lastName + "\n";
                output += "Position: " + peopleArray[i].jobDesc + "\n";
                output += "Area: " + peopleArray[i].jobArea + "\n";
                output += "Image Name" + peopleArray[i].imageName + "\n\n";
            }

            //---->> Feed the Object data out to the HTML tag "peopleArrayOutput" for validation
            document.getElementById('peopleArrayOutput').innerText = output;

            // Clear the form
            document.getElementById('userDataForm').reset();

        }


//Render the peopleArray as a flexbox grid
function renderGrid() {
    var gridContainer = document.getElementById('gridContainer');

    // Clear existing content
    gridContainer.innerHTML = "";

    // Render each person in the grid
    peopleArray.forEach(
        function(person) {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";

        // Image tag for imageName
        const imgTag = document.createElement("img");
        imgTag.src = "images/" + person.imageName;
        imgTag.alt = person.firstName + person.lastName + "'s Image";
        gridItem.appendChild(imgTag);

        // h2 tags for other properties        
        const NameTag = document.createElement("h2");
        NameTag.textContent = "Name: " + person.firstName + " " + person.lastName;
        gridItem.appendChild(NameTag);

        const JobAreaTag = document.createElement("h2");
        JobAreaTag.textContent = "Area: " + person.jobArea;
        gridItem.appendChild(JobAreaTag);

        const jobDescTag = document.createElement("h2");
        jobDescTag.textContent = "Position: " + person.jobDesc;
        gridItem.appendChild(jobDescTag);

        gridContainer.appendChild(gridItem);
    });
}

// Initial render
//renderGrid();