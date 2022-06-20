import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
class Todo {
    @tracked text = '';
    @tracked isCompleted = false;
  
    constructor(text) {
      this.text = text;
    }
  }
import { action } from '@ember/object';

export default class TodoDataService extends Service {
    @tracked todos = [];
    get all() {
        return this.todos;
      }
    
    get incomplete() {
        return this.todos.filterBy('isCompleted', false);
      }

    get completed() {
        return this.todos.filter(todo => todo.isCompleted);
      }

  @action
  add(text) {
    let newTodo = new Todo(text) ;
    this.todos.pushObject(newTodo);
  }

  @action
clearCompleted() {
  this.todos = this.incomplete;
}
 @action
toggleCompletion(todo) {
  todo.isCompleted = !todo.isCompleted;
}
}
