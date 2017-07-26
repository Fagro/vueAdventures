const todo = new Vue({

    el: '#mytodo',
    data: {
        task: '',
        tasks: [
            { name: 'Tarea ejemplo' }
        ]
    },
    methods: {
        addTask: function () {
            if (!this.task) return;

            this.tasks.push({ name: this.task });
            this.task = '';
        },

        deleteTask: function (index) {
            this.tasks.splice(index, 1);
        }
    }
});

