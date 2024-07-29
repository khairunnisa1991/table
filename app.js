var submitTable = document.getElementById('submit-table')

submitTable.addEventListener('click',function(){

    document.getElementById('result').innerHTML = ''
    
    var tableNumber = document.getElementById('table-number').value
    var startFrom = document.getElementById('start-from').value
    var endingOn = document.getElementById('ending-on').value

    for(t=startFrom;t<=endingOn;t++){
        var answer = tableNumber * t;

        document.getElementById('result').innerHTML += '<tr><td>'+tableNumber+' x '+t+' = '+answer+'</td></tr>'
    }
})