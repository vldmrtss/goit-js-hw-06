function formSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    alert("Wszystkie pola powinny być wypełnione!");
  } else {
    const formData = {
      email: email,
      password: password,
    };

    console.log(formData);

    form.reset();
  }
}
