    //Cambio de tema
    const setTheme = (theme) => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }

    const getTheme = () => {
        const theme = localStorage.getItem('theme');
        theme && setTheme(theme);
    }

    getTheme();

//Toggler

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle(setTheme('dark'));
});



//Formulario
    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
