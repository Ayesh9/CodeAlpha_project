document.getElementById('calculateBtn').addEventListener('click', function() {
    const input = document.getElementById('birthDate').value;
  
    if (!input) {
      document.getElementById('output').textContent = 'Please select your birth date.';
      return;
    }
  
    const dob = new Date(input);
    const today = new Date();
  
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
  
    document.getElementById('output').textContent = `You are ${age} years old.`;
  });
  