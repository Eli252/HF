var pcs = pcs || {};

pcs.tools = (function () {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(elem, property, value) {
        elem.style[property] = value;
    }

    function getCss(elem, property) {
        return elem.style[property];
    }

    return {
        wrap: function (id) {
            const elem = get(id);

            return {
                css: function (property, value) {
                    if (arguments.length < 2) {
                        return getCss(elem, property);
                    }
                    setCss(elem, property, value);
                    return this;
                },
                hide: function () {
                    setCss(elem, 'display', 'none');
                },
                show: function () {
                    setCss(elem, 'display', 'block');
                },
                click: function (callback) {
                    elem.addEventListener('click', callback);
                    return this;
                },
                color: function(x){
                    let colors = ['blue', 'yellow', 'green', 'red', 'purple', 'brown'];
                    let colorsIndex = 6;

                    setInterval(function(){
                        setCss(elem, 'backgroundColor', colors[colorsIndex++ % 6]);
                     }, x);

                    /* setInterval(setCss(elem, 'backgroundColor', colors[colorsIndex++ % 6]), x);
                    This does not work. I don't know why.*/

                },
                data: function(key, value){
                    if (arguments.length < 2) {
                        return elem.key;
                    }
                    elem.key = value;
                }
            };
        }
    };
}());

// I was not able to refactor to just use pcs(id)