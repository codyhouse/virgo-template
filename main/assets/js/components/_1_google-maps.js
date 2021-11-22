// File#: _1_google-maps
// Usage: codyhouse.co/license
function initGoogleMap() {
  var contactMap = document.getElementsByClassName('js-google-maps');
  if(contactMap.length > 0) {
    for(var i = 0; i < contactMap.length; i++) {
      initContactMap(contactMap[i]);
    }
  }
};

function initContactMap(wrapper) {
  var coordinate = wrapper.getAttribute('data-coordinates').split(',');
  var map = new google.maps.Map(wrapper, {zoom: 10, center: {lat: Number(coordinate[0]), lng:  Number(coordinate[1])}});
  var marker = new google.maps.Marker({position: {lat: Number(coordinate[0]), lng:  Number(coordinate[1])}, map: map});
};