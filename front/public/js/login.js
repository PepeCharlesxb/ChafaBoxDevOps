document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('usuario').value;
  const password = document.getElementById('contrasena').value;

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert('Login exitoso');
      // Redirigir a otra página
      window.location.href = '/Alumnos';
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Error en login:', error);
  }
});
