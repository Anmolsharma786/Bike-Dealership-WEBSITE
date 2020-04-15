// JavaScript Document

/* This code inspired by:
https://developers.google.com/maps/documentation/javascript/adding-a-google-map
*/
function initMap(){
  let georgian = {
    lat:44.4121054,
    lng:-79.6689532
  };
  let WorldGym = {
    lat:44.4049337,
    lng:-79.7082314
  }
  //create mew map object
let div1 = document.querySelector('div');
let map = new google.maps.Map(div1,{
  zoom: 13,
  center: georgian,
  // I TRIED TO ADD NIGHT LIGHT MODE TO MY MAP BUT I THINK I HAVE TO BUT THE GOOGLE MAP ACCESS
  // WHICH I DON'T WANT TO BUY BUT YOU CAN SEE MY EFFORT HERE, PROFESSOR. :)
  styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]

});


var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          info: {
            name: 'Dealerships',
            icon: iconBase + 'info-i_maps.png'
          }
        };
        var features = [
                   {
                    position: new google.maps.LatLng(44.4074951,-79.6754332),
                    type: 'info'
                  }, {
                    position: new google.maps.LatLng(44.4049293,-79.6570403),
                    type: 'info'
                  }, {
                    position: new google.maps.LatLng(44.4109047,-79.7133818),
                    type: 'info'
                  }, {
                    position: new google.maps.LatLng(44.4088827,-79.7073338),
                    type: 'info'
                  }
                ];

                // Create markers.
       features.forEach(function(feature) {
         var marker = new google.maps.Marker({
           position: feature.position,
           icon: icons[feature.type].icon,
           map: map
         });
       });

       var legend = document.getElementById('legend');
       for (var key in icons) {
         var type = icons[key];
         var name = type.name;
         var icon = type.icon;
         var div = document.createElement('div');
         div.innerHTML = '<img src="' + icon + '"> ' + name;
         legend.appendChild(div);
       }

       map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);





}

// JavaScript Document
let p3 = document.createElement('p');
p3.textContent = " ";
var link = "https://anmolsharma786.github.io/Module4/bike.json";
fetch(link)
     .then(function(response) {
         return response.json();
     })
     .then(function(json) {


			let bikeTypes = json.bikeTypes;
		 	for (let i = 0; i < bikeTypes.length; i++) {
				//build HTML elements for the content
				let article = document.createElement('article');
				let h2 = document.createElement('h2');
				let img = document.createElement('img');
				let p1 = document.createElement('p');
				let p2 = document.createElement('p');
				let list = document.createElement('ul');
        //store a reference to the section element in var section
        let section = document.querySelector('section');
        //set the image src attribute
				img.setAttribute('src', 'https://anmolsharma786.github.io/LAB4/' + bikeTypes[i].image);
        //set the image alt attribute
				img.setAttribute('alt', bikeTypes[i].name);
        //set the text content of the h2 to name
				h2.textContent = bikeTypes[i].name;
        //set the text contenxt of the first paragraph
				p1.textContent = 'price: ' +
        bikeTypes[i].price;
				//Build a loop for the details array in the JSON
				let details = bikeTypes[i].details;
				for (let j = 0; j < details.length; j++) {
					let listItem = document.createElement('li');
					// Set text for each list item
					listItem.textContent = details[j];
					list.appendChild(listItem);
				}
				// append each of the above HTML elements to the ARTICLE element, then append the article element to the section
				article.appendChild(img);
				article.appendChild(h2);
				article.appendChild(p1);
				article.appendChild(p2);
				article.appendChild(list);
				section.appendChild(article);
				}
			});
