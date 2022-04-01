var app = new Vue(
    {
        el:'#root',
        data:{
            tasks: [
                {
                    text: 'Questa è una task di prova!',
                    done: false,
                },
                {
                    text: 'Questa è una task di prova!2',
                    done: false,
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
        },
        methods: {
            console: function () {
                console.log(tasks)
            }
        }
    }
) 