"use strict";

let defaultId = 'default';

function showGroup(id) {

    if (typeof id == 'undefined') {
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
});

$('.trigger-group').click(function() {
    let id = $(this).attr('data');
    showGroup(id);
});