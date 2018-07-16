var clockPage = (function(){
    'use strict';

    let clockArea = document.createElement('div');
    document.body.appendChild(clockArea);
    clockArea.style.border = '1px solid black';
    clockArea.style.display = 'inline-block';
    clockArea.style.padding = '6px';


    let h = 12;
    let m = 0;
    let s = 0;

    setInterval(function(){
        clockArea.innerHTML = h + ':' + m + ':' + s;

        s++;
        if(s > 59){
            s = 0;
            m++;
        }
        if(m > 59){
            m = 0;
            h++;
        }
        if(h > 23){
            h = 12;
        }
    }, 1000);

    function createClock(){

        let clockArea2 = document.createElement('div');
        document.body.appendChild(clockArea2);
        clockArea2.style.border = '1px solid black';
        clockArea2.style.display = 'inline-block';
        clockArea2.style.padding = '6px';
        clockArea2.style.margin = '5px';


        let h = 12;
        let m = 0;
        let s = 0;

        setInterval(function(){
            clockArea2.innerHTML = h + ':' + m + ':' + s;

            s++;
            if(s > 59){
                s = 0;
                m++;
            }
            if(m > 59){
                m = 0;
                h++;
            }
            if(h > 23){
                h = 12;
            }
        }, 1000);
    }

    return{
            createClock: createClock
        };
}());
