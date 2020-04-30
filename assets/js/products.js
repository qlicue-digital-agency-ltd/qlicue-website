/* When the user scrolls down 80px from top of the document, resizes logo's width and gives the navbar bottom border */

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('main-header').style.backgroundColor = '#d3d3d3';
        document.getElementById('main-header').style.boxShadow = '0px 0px 5px #d3d3d3';
        document.getElementById('main-header').style.height = '70px';
        document.getElementById('logo').style.width = '80px';
    }

    else{
        document.getElementById('main-header').style.backgroundColor = '#f8f9fa!important';
        document.getElementById('main-header').style.boxShadow = '0px 0px 0px';
        document.getElementById('main-header').style.height = '140px';
        document.getElementById('logo').style.width = '110px';
    }
}
