//create the people Array to store the Objects
        var peopleArray = [];

//function to create a new person Object for the Array
        function createPerson(name, city, jobTitle, imageName) {
            return {
                name: name,
                city: city,
                jobTitle: jobTitle,
                imageName: imageName
            };
        }

//Function to add a user data via the HTML FORM elements
        function addUser() {
            var name = document.getElementById("name").value;
            var city = document.getElementById("city").value;
            var jobTitle = document.getElementById("jobTitle").value;
            var imageName = document.getElementById("imageName").value;

            var person = createPerson(name, city, jobTitle, imageName);
            peopleArray.push(person);

            // Update the displayed array
            var output = "";
            for (var i = 0; i < peopleArray.length; i++) {
                output += "Person " + (i + 1) + ":\n";
                output += "Name: " + peopleArray[i].name + "\n";
                output += "City: " + peopleArray[i].city + "\n";
                output += "Job Title: " + peopleArray[i].jobTitle + "\n";
                output += "Image File Name: " + peopleArray[i].imageName + "\n\n";
            }

            //---->> Feed the Object data out to the HTML tag "peopleArrayOutput" for validation
            document.getElementById("peopleArrayOutput").innerText = output;


            // Clear the form
            document.getElementById("userDataForm").reset();

        }


//Render the Object Array as a flexbox grid
function renderGrid() {
    var gridContainer = document.getElementById("gridContainer");

    // Clear existing content
    gridContainer.innerHTML = "";

    // Render each person in the grid
    peopleArray.forEach(function(person) {
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";

        // Image tag for imageName
        var imgTag = document.createElement("img");
        imgTag.src = "images/" + person.imageName;
        imgTag.alt = person.name + "'s Image";
        gridItem.appendChild(imgTag);

        // h2 tags for other properties
        var nameTag = document.createElement("h2");
        nameTag.textContent = person.name;
        gridItem.appendChild(nameTag);

        var cityTag = document.createElement("h2");
        cityTag.textContent = person.city;
        gridItem.appendChild(cityTag);

        var jobTitleTag = document.createElement("h2");
        jobTitleTag.textContent = person.jobTitle;
        gridItem.appendChild(jobTitleTag);

        gridContainer.appendChild(gridItem);
    });
}

// Initial render
renderGrid();