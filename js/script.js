/* jshint esnext: true */

function splitNumber(content) {
  var str = content.innerHTML;
  var step = 2;
  var offset = 0;

  if (content.innerHTML.length === 10) {
    offset = 0;
  }
  else {
    if (content.innerHTML[0] === "(") {
      offset = 5;
    }
    else if (content.innerHTML[0] === "+") {
      offset = 3;
    }
  }
  content.innerHTML = str.slice(0 + offset, step + offset) + "-" + str.slice(offset + step, offset + step * 2) + "-" + str.slice(offset + step * 2, offset + step * 3) + "-" + str.slice(offset + step * 3, offset + step * 4) + "-" + str.slice(offset + step * 4, offset + step * 5);
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
