(function(){
    'use strict';

    let colors = ['blue', 'yellow', 'green', 'red', 'purple', 'brown'];
    let colorsIndex = 6;
    let colorsButton = document.getElementById('colorsButton');
    let timesButtonClicked = 0;
    let run = false;
    let theBody = document.getElementById('theBody');
    let theTable = document.getElementById('colorsTable');

    function setColor(color){
        theBody.style.backgroundColor = color;
        run = false;
    }

    theTable.addEventListener('click', function(event){
        setColor(event.target.innerHTML);
    });

    function addRow(time, color){
        let row = theTable.insertRow();
        let timeCell = row.insertCell();
        let colorCell = row.insertCell();

        timeCell.innerHTML = time;
        colorCell.innerHTML = color;
    }

    function changeColors(){
        if(run === true){
            theBody.style.backgroundColor = colors[colorsIndex % 6];
            addRow(Date(),  colors[colorsIndex % 6]);
            colorsIndex++;
            colorsButton.innerHTML = 'Stop';
        }else{
            colorsButton.innerHTML = 'Start';
        }
        setTimeout(changeColors, 3000);
    }

    colorsButton.addEventListener('click', function(){
        run = !run;
        if(timesButtonClicked === 0){
            changeColors();
            timesButtonClicked++;
        }
    });

}());

/* I was not able to get the eventListener to work on the row, only on the color cell.
   I tried attaching a listener to each row upon creation, but this caused the changeColors function
   to stop (maybe the original click was picked up by listener, I don't know why that should happen).*/
