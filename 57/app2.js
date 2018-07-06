var app = app || {};

app.Counters = {
    x: 0,

    createCounter: function(){
        this.x++;

        return{
            i: 0,

            count: function(){
                this.i++;
            }
        }
    }
};