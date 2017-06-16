"use strict";

let defaultId = 'default';

function showGroup(id) {
    if (typeof id === 'undefined') {
        showGroup(defaultId);
        return;
    }

    $('.messages-group').each(function() {
        if ($(this).attr('id') === id) {
            $(this).addClass('show');
        } else {
            $(this).removeClass('show');
        }
    });
}

$(document).ready(() => {
    showGroup(defaultId);

    $('.trigger-group').each(function () {
        if ($(this).attr('data') === defaultId) {
            $(this).addClass('selected');
        }
    });

    $(this).addClass('selected');
});

$('.trigger-group').click(function() {
    let id = $(this).attr('data');

    $('.trigger-group').each(function () {
        $(this).removeClass('selected');
    });

    $(this).addClass('selected');

    showGroup(id);
});