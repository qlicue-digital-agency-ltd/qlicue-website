/* When the user scrolls down 80px from top of the document, resizes logo's width and gives the navbar bottom border */

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('main-header').style.backgroundColor = '#004bff';
        // document.getElementById('main-header').style.boxShadow = '0px 0px 0px #007bff';
        document.getElementById('main-header').style.height = '70px';
        document.getElementById('logo').style.width = '80px';
        // document.getElementById('logo').style.background = '#f8f9fa';
    }

    else{
        document.getElementById('main-header').style.backgroundColor = '';
        // document.getElementById('main-header').style.boxShadow = '0px 0px 0px';
        document.getElementById('main-header').style.height = '140px';
        document.getElementById('logo').style.width = '110px';
        // document.getElementById('logo').style.background = '#f8f9fa';
    }
}
