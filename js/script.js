/* jshint esnext: true */

function splitNumber(content) {
  var str = content.innerHTML;
  if (content.innerHTML.length === 10) {
    content.innerHTML = str.slice(0,2) + "-" + str.slice(2,4) + "-" + str.slice(4, 6) + "-" + str.slice(6, 8) + "-" + str.slice(8, 10);
  }
}


if (document.querySelector('html').baseURI === "app://communications.gaiamobile.org/contacts/index.html") {
  var contactAppDetails = document.querySelector('#view-contact-details');

  var observer = new MutationObserver(function (mutations) {
    var numbers = document.getElementById("details-list");
    for (var number of numbers.children) {
      if (!number.id.search("phone-details-template-")) {
        var content = number.children[1].children[0].children[0].children[0].children[0];
        splitNumber(content);
      }
    }
  });

  observer.observe(contactAppDetails, {
    childList: true, subtree: true
  });

}
else {
  console.log("coucou");
  var messageAppConv = document.querySelector('#messages-subheader');

  var newObserver = new MutationObserver(function (mutations) {
    var number = document.querySelector("#contact-carrier").children[0].children[2];
    splitNumber(number);
  });

  newObserver.observe(messageAppConv, {
    childList: true, subtree: true
  });

}
