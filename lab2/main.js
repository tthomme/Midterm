$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount = topic.length;
    //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時
    let millisecsPerDay = 24*60*60*1000;
    var option = { day: 'short', month: 'short' };
    function SetTableRowColor(){//雙色函式
        $("#courseTable tr:odd").css("background-color", "#e6e6fa");
        $("#courseTable tr:even").css("background-color", "#fff0fa");
    }
    function changedate(){
        var testdate = document.getElementById('start').value;
        setMonthAndDay(testdate.getMonth()+1, testdate.getDate());
    }
    for(var x=0;x<topicCount;x++){
        str = (new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString();
        str = str.substring(5);
        $("#courseTable").append(
            "<tr>"+
            `<td>${x+1}</td>`+
            `<td>${str}</td>`+
            `<td>${topic[x]}</td>`+
            "</tr>");
        /*if(topic[x]=="國定假日"){
            $("td").css("background-color", "gray")
        }*/
        SetTableRowColor();//單數與雙數列不同顏色
    }
    
});