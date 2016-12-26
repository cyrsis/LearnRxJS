"use strict";
var rxjs_1 = require("rxjs");
var number = [1, 5, 10]; //it is not async source
var source = rxjs_1.Observable.from(number);
var MyObserver = (function () {
    function MyObserver() {
    }
    //next: (value: number)=>void;
    MyObserver.prototype.next = function (value) {
        console.log("value: " + value);
        // console.log(`value: ${value}`);
    };
    MyObserver.prototype.error = function (e) {
        console.log("Error :  " + e);
    };
    MyObserver.prototype.complete = function () {
        console.log("Complete");
    };
    return MyObserver;
}());
source.subscribe(new MyObserver());
//# sourceMappingURL=main.js.map