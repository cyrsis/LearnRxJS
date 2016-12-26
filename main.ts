import {Observable,Observer} from "rxjs";

let numbers =[1,5,10] //it is not async source
//let source = Observable.from(number)

let source = Observable.create(  //Different way to create Observable
    observer => {


        let index = 0;
        let produceValue = ()=>{

            observer.next(numbers[index++]);

            if (index<numbers.length)
            {
                setTimeout(produceValue(),2000)
            }
            else
            {
                observer.complete();
            }
        }

        produceValue(); //if this is no here, wont call again

        /*for(let n of numbers)
        {
            if(n=== 5) //Should be before next method
            {
                observer.error("Something went wrong"); //never recieve error message
            }
            observer.next(n);

        }
        */

        observer.complete(); //This control the complete method
    }


)
//let's do a easy arpproach for the arrow function
source.subscribe(

    value =>console.log(`value: soemthing else = ${value}`),
    somethingelse =>console.log(`error: ${somethingelse}`),
    ()=> console.log(`Something else s complete `)


);

class MyObserver implements Observer<number> { //Full blown Class is useful for add additional Api and other things
    //next: (value: number)=>void;
    next(value) {
        console.log(`value: ${value}`);
       // console.log(`value: ${value}`);
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

