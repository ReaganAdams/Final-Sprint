
// Fetch JSON data
fetch('./JavaSprint.json')
  .then(response => response.json())
  .then(data => {
    // Create a container to hold the people data
    const container = document.createElement('div');
    container.id = 'peopleContainer';

    // Loop through an array in the JSON data
    data.forEach(person => {
      // Create a new div for each person
      const personDiv = document.createElement('div');
      personDiv.className = 'person';

      // Add the person's data to the div
      personDiv.innerHTML = `
        <h2>${getFullName(person)}</h2>
        <p>Age: ${getAge(person)}</p>
        <p>Birthplace: ${getHometown(person)}</p>
      `;

      // Append the person's div to the container
      container.appendChild(personDiv);

      // Also log the data to the console
      console.log(getFullName(person));
      console.log(getAge(person));
      console.log(getHometown(person));
    });

    // Append the container to the body
    document.body.appendChild(container);
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

function getFullName(person) {
  return `${person.Fname} ${person.Lname}`;
}

function getAge(person) {
  return `${person.Fname} is ${person.Age} years old.`;
}

function getHometown(person) {
  return `${person.Birthplace} is where they were born, not where they grew up.`;
}
  