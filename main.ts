import {Observable} from "rxjs";

let number =[1,5,10] //it is not async source
let source = Observable.from(number)

class MyObserver {

    next(value) {
        console.log(`value: ${value}`);

    }


    error(e) {
        console.log(`Error :  ${e}`);

    }

    complete() //Not every observable can complete, maybe something can be forever
    {
        console.log(`Complete`);
    }
}

source.subscribe(new MyObserver())

