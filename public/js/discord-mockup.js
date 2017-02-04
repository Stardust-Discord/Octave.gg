(function($) {
    "use strict"; // Start of use strict
    
    var defaultId = 'default';

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
    };

    $(document).ready(function() {
        showGroup(defaultId);
    });

    $('.trigger-group').click(function() {
        console.log($(this).attr('data-id'));
        var id = $(this).attr('data');
        showGroup(id);
    });
})(jQuery); // End of use strict