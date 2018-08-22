/*global $*/
(function(){
    'use strict';

    const body = $('body');

    //can't get past a XML parsing error. same problem in HW 63
    $.getJSON('videos.json', loadedData => {
        loadedData.forEach(element => {
        body.append(element);
        }); 
    });
}());