// Mock authentication function
function authenticate(username, password) {
    // Replace this with your actual authentication logic
    return username === 'ayush' && password === 'ayush';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (authenticate(username, password)) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');

    }
}


// ...


// ...

// Voting function
function vote() {
    const selectedParty = document.getElementById('party').value;
    alert(`Thank you! Your vote for ${selectedParty} has been submitted.`);
    
    // Redirect to the login page
    window.location.href = 'voting_prototype.html';
}
// Function to navigate to the candidates page
function viewCandidates() {
    window.location.href = 'candidates.html';
}
// app.js

// Function to fetch and display party information in a table
function fetchCandidates() {
    // Mock party data (replace with actual data fetching logic)
    const parties = [
        { id: 1, name: 'BJP', head: 'Narendra Modi' },
        { id: 2, name: 'Congress', head: 'Rahul Gandhi' },
        { id: 3, name: 'AAP', head: 'Arvind Kejriwal' },
        { id: 4, name: 'BSP', head: 'Mayawati' },
        // Add more parties as needed
    ];

    const candidatesTable = document.getElementById('candidates-table');
    const candidateList = document.getElementById('candidate-list');
    candidateList.innerHTML = '';

    parties.forEach(party => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const headCell = document.createElement('td');

        nameCell.textContent = party.name;
        headCell.textContent = party.head;

        row.appendChild(nameCell);
        row.appendChild(headCell);
        candidateList.appendChild(row);
    });
}

// Function to navigate back to the dashboard page
function backToDashboard() {
    window.location.href = 'dashboard.html';
}

// Call the fetchCandidates function when the page loads
window.onload = fetchCandidates;

// Voting function
function vote() {
    const selectedParty = document.getElementById('party').value;
    
    // Check if the user has viewed candidates before allowing the vote
    if (hasViewedCandidates) {
        alert(`Thank you! Your vote for ${selectedParty} has been submitted.`);
        // Redirect to the login page
        window.location.href = '/';
    } else {
        alert('Please view the candidates before voting.');
        // You can choose to redirect or perform other actions as needed
    }
}



// Function to navigate to the voting page
function vote() {
    window.location.href = 'vote_page.html';
}

// app.js

// ...

// Mock party data (replace with actual data fetching logic)
const parties = [
    { id: 'bjp', name: 'BJP' },
    { id: 'congress', name: 'Congress' },
    { id: 'aap', name: 'AAP' },
    { id: 'bsp', name: 'BSP' },
    // Add more parties as needed
];

// Function to update the party list
function updatePartyList() {
    const partyListDiv = document.getElementById('party-list');
    partyListDiv.innerHTML = '';

    parties.forEach(party => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="party" value="${party.id}"> ${party.name}<br>`;
        partyListDiv.appendChild(label);
    });
}

// Function to submit the vote
function submitVote() {
    const selectedPartyId = document.querySelector('input[name="party"]:checked');

    if (selectedPartyId) {
        const selectedParty = parties.find(party => party.id === selectedPartyId.value);
        if (confirm(`Are you sure you want to vote for ${selectedParty.name}?`)) {
            alert('Thank you for your vote! Your vote has been submitted.');
            // Redirect to the login page
            window.location.href = 'voting_prototype.html';
        }
    } else {
        alert('Please select a party before submitting your vote.');
    }
}

// ...

// Call the updatePartyList function when the page loads
window.onload = updatePartyList;


// ...

function logout() {
    window.location.href = 'voting_prototype.html';
}
