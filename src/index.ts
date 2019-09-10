import _ from "lodash";
import {Observable} from "Rxjs"
function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["hello rxjs"], " ");
  var observable = Observable
  .create(function(observer) {
      observer.next('Jerry'); // RxJS 4.x 以前的版本用 onNext
      observer.next('Anna');
  })
  
console.log('start');
setTimeout(() => {
    observable.subscribe(function(value) {
        element.innerHTML = value;
    });
}, 1000);
console.log('end');
  return element;
}

document.body.appendChild(component());