import { text } from '@components/Text';
import './index.scss';

console.log(text ? 'a' : 'b');

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    function a(test: string) {
      console.log(test + test);
    }
    a('eergddf');
    resolve('foo');
  }, 300);
});

promise1.then(console.log);

class A {
  static age = 12;
  test: string;

  constructor(test: string) {
    this.test = test;
  }

  #test() {
    console.log('private');
  }

  test2() {
    this.#test();
  }
}

const n = new A('hello');

console.log(n.test, A.age);
