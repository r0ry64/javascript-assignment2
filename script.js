const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');
const usernameInput = document.getElementById('username');

const savedName = localStorage.getItem('username');
if (savedName) {
    displayName.textContent = `Username: ${savedName}`;
} 
else {
    displayName.textContent = 'Your username will appear here!!';
}

saveBtn.addEventListener('click', function() {
    const username = usernameInput.value;
    if (username) {
        localStorage.setItem('username', username);
        const savedName = localStorage.getItem('username');
        displayName.textContent = `Username: ${savedName}`;
    } else {
        alert('Invalid username');
    }
});

clearBtn.addEventListener('click', function() {
    localStorage.removeItem('username');
    usernameInput.value = '';
    displayName.textContent = 'Your username will appear here!!';
});