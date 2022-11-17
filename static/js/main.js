class TxtType {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }
    tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    }
}


window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

var toTopButton = document.querySelector("#totopbtn");
var aboutSection = document.querySelector("#about");

function scrollFunction() {
    if (document.body.scrollTop > aboutSection.scrollTop) {
        toTopButton.style.display = "block";
    }
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    console.log("scrolled");
    console.log(aboutSection.scrollTop);
    scrollFunction()
};

var enlargedImageDev = document.getElementById("enlargeimgdev");
var enlargedImageContent = document.getElementById("enlargeimgcontent");
var enlargedImagePers = document.getElementById("enlargeimgpers")

var imageDev = document.getElementById("aboutdevelopmentimg");
var imageContent = document.getElementById("aboutcontentimg");
var imagePers = document.getElementById("aboutpersonalimg");

var imgToEnlargeDev = document.getElementById("enlargedabtdevimg");
var imgToEnlargeContent = document.getElementById("enlargedabtcontentimg");
var imgToEnlargePers = document.getElementById("enlargedabtpersimg");

var descriptionTextDev = document.getElementById("descabtimgdev");
var descriptionTextContent = document.getElementById("descabtimgcontent");
var descriptionTextPers = document.getElementById("descabtimgpers");

imageDev.onclick = function () {
    enlargedImageDev.style.display = "block";
    imgToEnlargeDev.src = this.src;
    descriptionTextDev.innerHTML = this.alt;
};
imageContent.onclick = function () {
    enlargedImageContent.style.display = "block";
    imgToEnlargeContent.src = this.src;
    descriptionTextContent.innerHTML = this.alt;
}
imagePers.onclick = function () {
    enlargedImagePers.style.display = "block";
    imgToEnlargePers.src = this.src;
    descriptionTextPers.innerHTML = this.alt;
}

var spanDev = document.getElementById("close-dev");
var spanContent = document.getElementById("close-content");
var spanPers = document.getElementById("close-pers");

spanDev.onclick = function () {
    enlargedImageDev.style.display = "none";
}
spanContent.onclick = function () {
    enlargedImageContent.style.display = "none";
}
spanPers.onclick = function () {
    enlargedImagePers.style.display = "none";
}