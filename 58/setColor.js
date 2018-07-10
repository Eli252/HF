(function(){
    'use strict';
    
    let thePage = document.getElementById('theBody');

    let colorSelector = document.getElementById('colorSelector');

    colorSelector.addEventListener('click', function(){
        thePage.style.backgroundColor = document.getElementById('backgroundColorSelected').value;
        thePage.style.color = document.getElementById('textColorSelected').value;
    });
}());