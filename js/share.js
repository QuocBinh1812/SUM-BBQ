$('.image-slide').slick({
  prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  autoplaySpeed :3000,
});

$('.images-slide').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
});

$('.slide-tabs').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slide-content',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
$('.slide-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slide-tabs'
});

document.getElementById("ontop").innerHTML = `<button class="back-to-top" id="backtotop" onclick="btt()">
<i class="fa-solid fa-angle-up"></i>
</button>`;

var textmail = document.getElementById("yourEmail");
function actionerr() {
  if (textmail.value == "") {
    document.getElementById("erremail").style.display = 'block';
    document.getElementById("warning").style.display = 'block';
    document.getElementById("promotionImg").style.height = '220px';
    document.getElementById("promotionInfo").style.top = '60%';
    textmail.focus();
  }
}

var textname = document.getElementById("name");
var texttel = document.getElementById("tel");
var textnumber = document.getElementById("number");
var textdate = document.getElementById("date");
var reservationtime = document.getElementsByClassName("reservationTime");
function actionerror() {
  if (textname.value == "") {
    document.getElementById("errName").style.display = 'block';
    document.getElementById("name").style.borderColor = 'red';
    document.getElementById("warningSettable").style.display = 'block';
  }
  if (texttel.value == "") {
    document.getElementById("errTel").style.display = 'block';
    document.getElementById("tel").style.borderColor = 'red';
    document.getElementById("warningSettable").style.display = 'block';
  }
  if (textnumber.value == "") {
    document.getElementById("errNumber").style.display = 'block';
    document.getElementById("number").style.borderColor = 'red';
    document.getElementById("warningSettable").style.display = 'block';
  }
  if (textdate.value == "") {
    document.getElementById("errDate").style.display = 'block';
    document.getElementById("date").style.borderColor = 'red';
    document.getElementById("warningSettable").style.display = 'block';
  }
  let check = false;
  for (let index = 0; index < reservationtime.length; index++) {
    if (reservationtime[index].checked) {
      check = true;
    }
  }
  if (!check) {
    document.getElementById("errTime").style.display = 'block';
    document.getElementById("warningSettable").style.display = 'block';
  }
}

var tencuaban = document.getElementById("tenCuaBan");
var sodienthoai = document.getElementById("soDienThoai");
var songuoian = document.getElementById("soNguoiAn");
var thoigian = document.getElementById("thoiGian");
var giodat = document.getElementById("gioDat");
function btnerr() {
  if (tencuaban.value == "") {
    document.getElementById("errtenCuaBan").style.display = 'block';
    document.getElementById("thongBaoLoi").style.display = 'block';
    document.getElementById("tenCuaBan").style.borderColor = 'red';
  }
  if (sodienthoai.value == "") {
    document.getElementById("errsoDienThoai").style.display = 'block';
    document.getElementById("thongBaoLoi").style.display = 'block';
    document.getElementById("soDienThoai").style.borderColor = 'red';
  }
  if (songuoian.value == "") {
    document.getElementById("errsoNguoiAn").style.display = 'block';
    document.getElementById("thongBaoLoi").style.display = 'block';
    document.getElementById("soNguoiAn").style.borderColor = 'red';
  }
  if (thoigian.value == "") {
    document.getElementById("errthoiGian").style.display = 'block';
    document.getElementById("thongBaoLoi").style.display = 'block';
    document.getElementById("thoiGian").style.borderColor = 'red';
  }
  let check = false;
  for (let i = 0; i < giodat.length; i++) {
    if (giodat.checked[i]) {
      check = true
    }
  }
  if (!check) {
    document.getElementById("errHours").style.display = 'block';
    document.getElementById("thongBaoLoi").style.display = 'block';
  }
}

var contactname = document.getElementById("contactName");
var contactemail = document.getElementById("contactEmail");
var contacttel = document.getElementById("contactTel");
var contactpurpose = document.getElementById("contactPurpose");
var contactcontent = document.getElementById("contactContent");
function buttonerr() {
  if (contactname.value == "") {
    document.getElementById("notificontactName").style.display = 'block';
    document.getElementById("notifilast").style.display = 'block';
    document.getElementById("notificontactName").style.marginBottom = '2px';
    document.getElementById("contactName").style.marginBottom = '2px';
    document.getElementById("br1").style.display = 'none';
    document.getElementById("contact").style.height = '510px';
  }
  if (contactemail.value == "") {
    document.getElementById("notificontactEmail").style.display = 'block';
    document.getElementById("notifilast").style.display = 'block';
    document.getElementById("notificontactEmail").style.marginBottom = '2px';
    document.getElementById("contactEmail").style.marginBottom = '2px';
    document.getElementById("br2").style.display = 'none';
    document.getElementById("contact").style.height = '540px';
  }
  if (contacttel.value == "") {
    document.getElementById("notificontacttel").style.display = 'block';
    document.getElementById("notifilast").style.display = 'block';
    document.getElementById("notificontacttel").style.marginBottom = '2px';
    document.getElementById("contactTel").style.marginBottom = '2px';
    document.getElementById("br3").style.display = 'none';
    document.getElementById("contact").style.height = '570px';
  }
  if (contactpurpose.value == "") {
    document.getElementById("notificontactpurpose").style.display = 'block';
    document.getElementById("notifilast").style.display = 'block';
    document.getElementById("notificontactpurpose").style.marginBottom = '2px';
    document.getElementById("contactPurpose").style.marginBottom = '2px';
    document.getElementById("br4").style.display = 'none';
    document.getElementById("contact").style.height = '600px';
  }
  if (contactcontent.value == "") {
    document.getElementById("notificontactcontent").style.display = 'block';
    document.getElementById("notifilast").style.display = 'block';
    document.getElementById("notificontactcontent").style.marginBottom = '2px';
    document.getElementById("contactContent").style.marginBottom = '-6px';
    document.getElementById("br5").style.display = 'none';
    document.getElementById("contact").style.height = '630px';
  }
}

var authorhref = document.getElementById("author");
var emailhref = document.getElementById("email");
function checkinput() {
  console.log(authorhref.value);
    if (authorhref.value == "") {
      window.location.href = "../html/errormessage.html";
    }
    if (emailhref.value == "") {
      window.location.href = "../html/errormessage.html";
    }
}

var mybutton = document.getElementById("backtotop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function btt() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}