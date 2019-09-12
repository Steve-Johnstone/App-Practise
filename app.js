    document.addEventListener('click', function () {

      const apiKey = 'hNaKugkLRlMWnhKX0sk0O54n4gI2NXGq';
      const place = document.getElementById('giphy');


      document.getElementById('form').addEventListener('submit', api);

      function api(e) {
        e.preventDefault();

        const input = document.getElementsByName('userInput')[0];

        fetch(`http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=${apiKey}`)
          .then((res) => {
            return res.json();

          })
          .then((res) => {

            let result = '<h2> Here are your gifs</h2>';

            for (let i = 0; i < 10; i++) {
              result +=
                `<div>
               <h3> Title: ${res.data[i].title} </h3>
               <img src="${res.data[i].images.original.url}" />
                </div>`;

            }
            place.innerHTML = result;

          });

        document.getElementById('button1').addEventListener('click', apiMore);

        function apiMore(e) {

          e.preventDefault();

          fetch(`http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=${apiKey}`)
            .then((res) => {
              return res.json();

            })
            .then((res) => {

              for (let i = 10; i < 20; i++) {

                result +=
                  `<div>
                   <h3> Title: ${res.data[i].title} </h3>
                   <img src="${res.data[i].images.original.url}" />
                    </div>`;
                console.log(res.data[i])

              }
              place.innerHTML = result;


            });
        }
      }

    });