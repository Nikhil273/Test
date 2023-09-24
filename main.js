function saveFormData() {
    // Get the form data
    var name = document.getElementById('Name').value;
    var dob = document.getElementById('dob').value;
    var Fname = document.getElementById('Fname').value;
    var Mname = document.getElementById('Mname').value;
    var mobilenumber = document.getElementById('mobilenumber').value;
  
    // Create a string with the form data
    var data = 'Name: ' + name + '\nEmail: ' + email + '\nFather: ' + Fname+ '\nMname: ' + Mname + '\nmobilenumber: ' +mobilenumber;
  
    // Create a Blob with the data
    var blob = new Blob([data], { type: 'text/plain' });
  
    // Create a temporary link element
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'form_data.txt';
  
    // Programmatically click the link to trigger the download
    link.click();
  }
  