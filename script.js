document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('dovodForm');
  const loginField = document.getElementById('login');
  const passwordField = document.getElementById('password');
  const databaseField = document.getElementById('database');
  const hostField = document.getElementById('host');
  let hintGiven = false;
  let isReversed = false;

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const login = loginField.value;
    const password = passwordField.value;
    const database = databaseField.value;
    const host = hostField.value;

    if (!hintGiven && login === 'admin123' && password === 'password123' && database === 'bd_dovod' && host === 'localhost') {
      alert('ПОДСКАЗКА В ФИЛЬМЕ ДОВОД');
      hintGiven = true;
    } else if (isReversed && login === '321nimda' && password === '321drowssap' && database === 'dovod_db' && host === 'tsohlacol') {
      alert('Вы прошли игру');
    } else {
      alert('Неверные данные');
    }
  });

  form.addEventListener('click', function() {
    if (hintGiven) {
      isReversed = true;
    }
  });

  hostField.addEventListener('input', function() {
    if (isReversed) {
      checkReversed();
    }
  });

  databaseField.addEventListener('input', function() {
    if (isReversed) {
      checkReversed();
    }
  });

  passwordField.addEventListener('input', function() {
    if (isReversed) {
      checkReversed();
    }
  });

  loginField.addEventListener('input', function() {
    if (isReversed) {
      checkReversed();
    }
  });

  function checkReversed() {
    const login = loginField.value;
    const password = passwordField.value;
    const database = databaseField.value;
    const host = hostField.value;

    if (login === '321nimda' && password === '321drowssap' && database === 'dovod_db' && host === 'tsohlacol') {
      alert('Вы прошли игру');
    }
  }
});
