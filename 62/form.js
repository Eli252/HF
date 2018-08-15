/*global $*/
(function(){
    'use strict';

    let theForm = $('#theForm');

    $('#submitButton').click(function(){
        let name = $('#name').val();
        let address = $('#address').val();

        if(name.length > 0 && address.length > 0){ theForm.append(
                `<div>${name}<br>
                ${address}</div>`
            );
        }
        
        $('#name').val('');
        $('#address').val('');
    });
}());
