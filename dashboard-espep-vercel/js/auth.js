function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === 'admin' && pass === 'espep2024') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
}
function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
}