 document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dovodForm');
    const hintButton = document.getElementById('hintButton');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const login = document.getElementById('login').value;
      const password = document.getElementById('password').value;
      const database = document.getElementById('database').value;
      const host = document.getElementById('host').value;
      
      if (login === 'admin123' && password === 'password123' && database === 'bd_dovod' && host === 'localhost') {
        alert('ПОДСКАЗКА В ФИЛЬМЕ ДОВОД');
      } else {
        alert('Неверные данные');
      }
    });
    
    const loginField = document.getElementById('login');
    let isReversed = false;
    
    loginField.addEventListener('input', function() {
      const login = loginField.value;
      const password = document.getElementById('password').value;
      const database = document.getElementById('database').value;
      const host = document.getElementById('host').value;
      
      if (login === '321nimda' && password === '321drowssap' && database === 'dovod_db' && host === 'localhost') {
        alert('Вы прошли игру');
      }
    });
    
    hintButton.addEventListener('click', function() {
      isReversed = true;
    });
  });
