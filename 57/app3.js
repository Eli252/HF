for( ;app.counter.i < 10; ){
    app.counter.count();
}

counter1 = app.Counters.createCounter();
counter2 = app.Counters.createCounter();

for( ;counter1.i < 5; ){
    counter1.count();
}

for( ;counter2.i < 15; ){
    counter2.count();
}

console.log(app.counter.i);
console.log(counter1.i);
console.log(counter2.i);
console.log(app.Counters.x);