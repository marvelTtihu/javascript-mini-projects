const userCard = document.getElementById('card');
const getUsers = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/0');
    
        if(!response.ok){
            throw new Error(` HTTPS ${response.status}`);
        }
        const user = await response.json();
    
        userCard.innerHTML = `
            <h2 class="user-name">${user.name}</h2>
            <p class="email-card"><strong>Email:</strong> ${user.email}</p>
            <p class="city"><strong>City:</strong> ${user.address.city}</p>
        `;
    } catch(error) {
        userCard.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    } finally {
        console.log("Done.");
    }
}

getUsers();