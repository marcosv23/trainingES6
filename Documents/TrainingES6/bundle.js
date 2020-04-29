"use strict";

/*class TodoList
{
    constructor()
    {
      this.todos =[];
    }
    addTodo()
    {
      this.todos.push('Novo Todo');
      console.log(this.todos)
    }

}

const t1 = new TodoList();

document.getElementById("novoTodo").onclick = function()
{
  t1.addTodo();
};
*/
var arr = [0, 1, 2, 3, 4, 5];
arr.map(function (item, index) {
  return item * 2;
});
