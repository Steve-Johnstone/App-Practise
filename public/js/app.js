document.addEventListener('DOMContentLoaded', function() {
  
    console.log('js script loaded');
    const apiKey = 'hNaKugkLRlMWnhKX0sk0O54n4gI2NXGq';
  
  
    document.getElementById('form').addEventListener('submit', api);
  
    function api(e) {
      e.preventDefault();
      console.log('clicked');
  
      const input = document.getElementsByName('userInput')[0];
      console.log(input.value);
  
      
  
      var xhr = new XMLHttpRequest();
      xhr.open("GET", `http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=${apiKey}&limit=9`, true);
      xhr.onload = function (e) {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
          console.log(JSON.parse(xhr.responseText));
          } else {
          console.error(xhr.statusText);
          }
      }
      
      };
      xhr.onerror = function (e) {
      console.error(xhr.statusText);
      };
      xhr.send(null);
  
      
    };
  
  
  
  });
  