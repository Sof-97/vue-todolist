var app = new Vue(
    {
        el: '#root',
        data: {
            tasks: [
                {
                    text: 'Questa è una task di prova!',
                    done: false,
                },
                {
                    text: 'Questa è una task di prova!2',
                    done: true,
                },
                {
                    text: 'Questa è una task di prova!3',
                    done: false,
                },
                {
                    text: 'Questa è una task di prova!4',
                    done: false,
                },
                {
                    text: 'Questa è una task di prova!5',
                    done: false,
                },
                {
                    text: 'Questa è una task di prova!6',
                    done: false,
                }
            ],
            inputTask: '',
        },
        methods: {
            removeTask: function (index) {
                this.tasks.splice(index, 1)
            },
            doneToggle: function (index) {
                if (this.tasks[index].done === true) {
                    this.tasks[index].done = false
                } else {
                    this.tasks[index].done = true
                }
            },
            newTask: function () {
                let newObjTask = {
                    text: this.inputTask,
                    done: false,
                }
                if ((this.inputTask != '') && !(this.checkTask(newObjTask) >0) ) {
                    this.tasks.push(newObjTask)
                }
                this.inputTask = ''
            },
            checkTask: function(x){
                let checker = this.tasks.filter(function (task){
                    return task.text == x.text
                })
                return checker.length
            }
        }
    }
)