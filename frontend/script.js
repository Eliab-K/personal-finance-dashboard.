fetch('http://localhost:3000/transactions')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('transactions');
    container.innerHTML = JSON.stringify(data, null, 2);
  });

