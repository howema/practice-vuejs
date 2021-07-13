/* global Vue */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hellooooooo js",
      showInfo: false,
      fruits: ["not strawberry", "pumpkin", "apple"],
      newFruit: "",
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Heyy";
    },
    addNewFruit: function () {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    },
  },
});

var app2 = new Vue({
  el: '#app2',
  data: {
    message: 'Hello Vue!'
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Fun on a bun.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});


// // Define a new component called todo-item
// Vue.component('todo-item', {
//   template: '<li>This is a todo</li>'
// }),

// var app = new Vue(...);