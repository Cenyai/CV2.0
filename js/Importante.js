document.querySelector('input[name="mostrar"]').addEventListener('click', function() {
    fetch('importante.html')
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        var div = document.createElement('div');
        div.innerHTML = html;
        document.body.appendChild(div);
      });
  });