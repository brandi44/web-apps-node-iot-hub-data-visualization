$(document).ready(function() {
  var ws = new WebSocket('wss://' + location.host);

  ws.onopen = function() {
    console.log('Successfully connect WebSocket');
  };
  ws.onmessage = function(message) {
    console.log('Received message ' + message.data);

    try {
      var data = JSON.parse(message.data);
      if(!data.photo) {
        return;
      }

      $('#room').text(data.deviceId);
      $('#photo').attr('src', 'data:image/jpg;base64,' + data.photo);
    } catch(err) {
      console.error(err);
    }
  };
});
