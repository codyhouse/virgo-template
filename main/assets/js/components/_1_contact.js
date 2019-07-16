// File#: _1_contact
/*
	⚠️ Make sure to include the Google Maps API. 
	You can include the script right after the contact.js (before the body closing tag in the index.html file):
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initGoogleMap"></script> 
*/
function initGoogleMap() {
	var contactMap = document.getElementsByClassName('js-contact__map');
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