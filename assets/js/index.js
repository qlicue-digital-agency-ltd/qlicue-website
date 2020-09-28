/* When the user scrolls down 80px from top of the document, resizes logo's width and gives the navbar bottom border */

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('main-header').style.backgroundColor = '#006bff';
        // document.getElementById('main-header').style.boxShadow = '0px 0px 0px #007bff';
        document.getElementById('main-header').style.height = '70px';
        document.getElementById('logo').style.width = '80px';
        // document.getElementById('logo').style.background = '#f8f9fa';
    }

    else {
        document.getElementById('main-header').style.backgroundColor = '';
        // document.getElementById('main-header').style.boxShadow = '0px 0px 0px';
        document.getElementById('main-header').style.height = '140px';
        document.getElementById('logo').style.width = '110px';
        // document.getElementById('logo').style.background = '#f8f9fa';
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

// Initiating tooltip
$('[data-toggle]').tooltip();

// Changing the images and the paragraphs of hero section as you click on indicators
// On clicking blue indicator
$(document).ready(function () {
    $('#blue-circle').on('click', function () {
        $('#img, #para').fadeOut(500, function () {
            $('#img').attr('src', 'assets/icons/icon-7.svg');
            document.getElementById('para').innerHTML = "Scalable and robust software designs and developement under the highly skilled professional software developers.";
        });
        $(this).css('color', '#006bff');
        $('#black-circle').css('color', '#f8f9fa');
    });

    $('#blue-circle').on('click', function () {
        $('#img, #para').fadeIn(500, function () {
            $('#img').attr('src', 'assets/icons/icon-7.svg');
            document.getElementById('para').innerHTML = "Scalable and robust software designs and developement under the highly skilled professional software developers.";
        });
        $(this).css('color', '#006bff');
        $('#black-circle').css('color', '#f8f9fa');
    });

});

// On clicking black indicator
$(document).ready(function () {
    $('#black-circle').on('click', function () {
        $('#img, #para').fadeOut(500, function () {
            $('#img').attr('src', 'assets/icons/icon-5.svg');
            document.getElementById('para').innerHTML = "We are software development company with highly qualified professional software developers.";
        });
        $(this).css('color', '#006bff');
        $('#blue-circle').css('color', '#f8f9fa');
    });

    $('#black-circle').on('click', function () {
        $('#img, #para').fadeIn(500, function () {
            $('#img').attr('src', 'assets/icons/icon-5.svg');
            document.getElementById('para').innerHTML = "We are software development company with highly qualified professional software developers.";
        });
        $(this).css('color', '#006bff');
        $('#blue-circle').css('color', '#f8f9fa');
    });

});