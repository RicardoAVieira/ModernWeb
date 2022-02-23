const schedule =require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 3', function (){
    console.log('Executando Tarefa1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Tarefa 1 cancelada.')
},20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour =15
regra.hour =30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
