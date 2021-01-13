<template>
    <div class="demo">
        <h3>Rendering Demo</h3>
        <div id="todo-list-example" class="demo">
            <form v-on:submit.prevent="addNewTodo">
                <label for="new-todo">Add a todo</label>
                <input
                v-model="newTodoText"
                id="new-todo"
                placeholder="E.g. Feed the cat"
                />
                <button>Add</button>
            </form>
            <ul>
                <todoItem
                v-for="(todo, index) in todos"
                v-bind:key="todo.id"
                v-bind:title="todo.title"
                v-on:remove="todos.splice(index, 1)"
                >
                </todoItem>
            </ul>
            <ul class="square" style="color: gray">
                <li>
                    addNewTodo() {
                    this.todos.push({
                        id: this.nextTodoId++,
                        title: this.newTodoText
                    })
                    this.newTodoText = ''
                    }
                </li>
                <li>form v-on:submit.prevent="addNewTodo"</li>
                <li>v-on:remove="todos.splice(index, 1)"</li>
                <li>removeItem data is todos, child components is todoItem.vue</li>
            </ul>
        </div>
    </div>
</template>
<script>
import todoItem from './todoItem'
export default {
  name: 'RenderingDemo',
  data () {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    }
  },
  components: {
    todoItem
  },
  methods: {
    addNewTodo () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
}
</script>
