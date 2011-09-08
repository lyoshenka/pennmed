(function(){

var match = /\<script src=\"(http:\/\/mediasite.med.upenn.edu\/UPENNMediasite\/FileServer\/Presentation\/[^"]+)/.exec(document.body.innerHTML);
if (!match)
{
  alert('Could not find URL')
  throw new Error('Could not find URL');
}

var req = new XMLHttpRequest();
req.onreadystatechange = function() {
  if(req.readyState==4 && req.status==200) {
    var match2 = /\"(mms:[^"]+)\"/.exec(req.responseText);
    if (!match2)
    {
      alert('Could not find URL2')
      throw new Error('Could not find URL2');
    }
    window.location=match2[1];

  }
}
req.open("GET",match[1],true)  //true = asyncronous
req.send(null);

})();
