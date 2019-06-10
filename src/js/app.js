    
document.addEventListener('DOMContentLoaded', function() {
  
    const apiKey = 'hNaKugkLRlMWnhKX0sk0O54n4gI2NXGq';
    const place = document.getElementById('giphy');
  
  
    document.getElementById('form').addEventListener('submit', api);
  
    function api(e) {
      e.preventDefault();
  
      const input = document.getElementsByName('userInput')[0];

      fetch(`http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=${apiKey}`)
      .then((res) => {
        console.log(res.json());
        return res.json();

      })
      .then((res) => {
        let result = '<h2> Here are your gifs</h2>';

        res.data.forEach(elem => {

          result +=
                  `<div>
                   <h3> Title: ${elem.title} </h3>
                   <h4> source: ${elem.source} </h4> 
                   <img src="${elem.images.original.url}" />
                    </div>`;
          place.innerHTML = result;
        });
      });
  }

  
  });
  