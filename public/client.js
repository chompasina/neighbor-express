window.addEventListener('load', (event) => {


  $.getJSON("/api/get-cms", function (data) {
    if (data.error) {
      return;
    }

    var template = document.getElementById('template').innerHTML;
    // var rendered = Mustache.render(template, { brand: 'Neighbor Express' });
    let target = document.getElementById('target');
    target.innerHTML = template;

    data.records.forEach(function (record) {
      // const article = document.getElementById(record.key);
      const article = target.querySelector(`#${record.key}`);
      // First, lets check for a title
      if (article) {
        let render = Mustache.render(article.innerHTML, { ...record, image: record.picture.length > 0 && record.picture[0].url });
        article.innerHTML = render;
        body.classList.remove('hidden');
      }
    });
  });

  /*
* Capturing our form submission, and then sending the elements to the backend.
* Right now we're relying on html5 input validation, but that doesn't work in all
* browsers, so we'd probably do validation here
*/
  // const form = document.getElementById("name_form");
  // form.addEventListener("submit", event => {
  //   event.preventDefault();

  //   const data = {
  //     title: form.elements["title"].value,
  //     firstName: form.elements["firstName"].value,
  //     middleName: form.elements["middleName"].value,
  //     lastName: form.elements["lastName"].value
  //   };

  //   $.post("/api/post-cms", data, res => {
  //     document.getElementById(`name_submit`).disabled = true;
  //     document.getElementById(`name_submit`).value = "Submitted!";
  //   });
  // });
});