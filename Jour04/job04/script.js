function updateUserTable() {
    fetch('users.php')
      .then(response => response.json())
      .then(data => {
        const userTableBody = document.querySelector('#userTable tbody');
        userTableBody.innerHTML = '';
  
        data.forEach(user => {
          const row = document.createElement('tr');
          const idCell = document.createElement('td');
          const nomCell = document.createElement('td');
          const prenomCell = document.createElement('td');
          const emailCell = document.createElement('td');
  
          idCell.textContent = user.id;
          nomCell.textContent = user.nom;
          prenomCell.textContent = user.prenom;
          emailCell.textContent = user.email;
  
          row.appendChild(idCell);
          row.appendChild(nomCell);
          row.appendChild(prenomCell);
          row.appendChild(emailCell);
  
          userTableBody.appendChild(row);
        });
      })
      .catch(error => console.error(error));
  }  