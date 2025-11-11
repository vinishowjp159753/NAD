function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === 'admin' && pass === 'admin') {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'dashboard.html';
  } else {
    alert('Usuário ou senha incorretos.');
  }
}
function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'login.html';
}
if (window.location.pathname.includes('dashboard.html')) {
  if (!localStorage.getItem('loggedIn')) {
    window.location.href = 'login.html';
  }
}
