(function(){
  var urlParts = /peid=(.*)&authTicket=(.*)/.exec(window.location);
  var ticket = urlParts[2];
  var filenameParts = /(.{8})(.{4})(.{4})(.{4})(.{12})/.exec(urlParts[1]);
  var filename = filenameParts[1] + '-' + filenameParts[2] + '-' + filenameParts[3] + '-' + filenameParts[4] + '-' + filenameParts[5];
  var url = 'mms://mediasite2.med.upenn.edu/mediasiteupload/' + filename + '.wmv?playbackTicket=' + ticket + '&site=mediasite.med.upenn.edu';
  window.location = url;
})();
