/**
 * CT Mobile Menu
 *
 * @package WP Serenity
 * @subpackage JavaScript
 */

jQuery(function ($) {
    $(document).ready(function () {

        $("<ul id='mobile-nav'>").appendTo("#primary-nav-wrap nav");

        $("<a href='#' class='show-hide'><i class='icon-reorder'></i>", {
        }).appendTo("#primary-nav-wrap nav");

        $("#primary-nav-wrap nav a").each(function () {
            var el = $(this);
            if (el.parents('.sub-menu').length >= 1) {
                $('<a>', {
                    'href': el.attr("href"),
                    'text': '- ' + el.text()
                }).appendTo("#primary-nav-wrap nav ul#mobile-nav").wrap('<li></li>');
            }
            else if (el.parents('.sub-menu .sub-menu').length >= 1) {
                $('<a>', {
                    'href': el.attr('href'),
                    'text': '-- ' + el.text()
                }).appendTo("#primary-nav-wrap nav ul#mobile-nav").wrap('<li></li>');
            }
            else {
                $('<a>', {
                    'href': el.attr('href'),
                    'text': el.text()
                }).appendTo("#primary-nav-wrap nav ul#mobile-nav").wrap('<li></li>');
            }
        });

        $("#mobile-nav").hide();
        $(".show-hide").show();

        $('.show-hide').click(function () {
            $("#mobile-nav").slideToggle();
        });

    });
});
