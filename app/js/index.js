class Test{
  constructor(){
    this.a = 'test aaa';
  }
}

window.onload = function() {
  console.log('start index page...aaa');
  let test = new Test();
  document.body.innerHTML = test.a;
};