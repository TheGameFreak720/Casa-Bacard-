function initMap() {
        var uluru = {lat: 18.4582111, lng: -66.1414532};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

      }
