/* SmtpJS.com - v3.0.0 */
export var Email = {
  send: function (a) {
    return new Promise(function (n, e) {
      a.nocache = Math.floor(1e6 * Math.random() + 1),
        a.Action = "Send";
      var t = JSON.stringify(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
        n(e)
      })
    }
    )
  },
  ajaxPost: function (e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      a.onload = function () {
        var e = a.responseText;
        null != t && t(e)
      }
      ,
      a.send(n)
  },
  ajax: function (e, n) {
    var t = Email.createCORSRequest("GET", e);
    t.onload = function () {
      var e = t.responseText;
      null != n && n(e)
    }
      ,
      t.send()
  },
  createCORSRequest: function (e, n) {
    var t = new XMLHttpRequest;
    return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null,
      t
  }
};

const handleSend = () => {
  Email.send({
    SecureToken: "5d4984a3-3b17-42ed-8bb3-d85adb7b166d",
    To: "farfetchdev@hotmail.com",
    From: "farfandavid34@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
    Attachments: [
      {
        name: "smtpjs.png",
        path: "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png",
      },
    ],
  }).then((message) => alert(message));
};