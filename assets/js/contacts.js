// When the user scrolls down 80px from top of the document, resizes logo's width and gives the navbar bottom border

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('main-header').style.backgroundColor = '#d3d3d3';
        document.getElementById('main-header').style.boxShadow = '0px 0px 5px #d3d3d3';
        document.getElementById('main-header').style.height = '70px';
        document.getElementById('logo').style.width = '80px';
    }

    else {
        document.getElementById('main-header').style.backgroundColor = '#f8f9fa!important';
        document.getElementById('main-header').style.boxShadow = '0px 0px 0px';
        document.getElementById('main-header').style.height = '140px';
        document.getElementById('logo').style.width = '110px';
    }
}

// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Adding a smooth scroll
$('#main-header a, #Top').on('click', function (e) {
    // Check for hash value
    if (this.hash !== '') {
        // Prevent the default behaviour of a tag
        e.preventDefault();
        // Store hash
        const hash = this.hash;
        // Animate smooth scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            // Add hash to url after scroll
            window.location.hash = hash;
        });
    }
});

// Add smooth scrolling
$('#main-header a, #Bottom, #Top').on('click', function (e) {
    // check for hash value
    if (this.hash !== '') {
        // Prevent default behaviour of an a tag
        e.preventDefault();

        // Store hash
        const hash = this.hash;

        // Animate smooth scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            // Add hash to URL after scroll
            window.location.hash = hash;
        });
    }
});
