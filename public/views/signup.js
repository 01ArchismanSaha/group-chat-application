document.getElementById('signupform').onsubmit = async (e) => {
    e.preventDefault();

    try {
        const name = document.getElementById('nameField').value;
        const email = document.getElementById('emailField').value;
        const phone = document.getElementById('phoneField').value;
        const password = document.getElementById('passwordField').value;

        let res = await axios.post('http://localhost:3000/user/signup', {name, email, phone, password});

        console.log(res);
        
    } catch (error) {
        console.log(error);
        document.getElementById('error-text').innerHTML += `${error}`;
    }
    
};