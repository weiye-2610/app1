'use strict';
{
    var TotalCount = document.getElementById("totalCount");
    var WinCount = document.getElementById("winCount");
    var LoseCount = document.getElementById("loseCount");
    var Parcent = document.getElementById("Parcent");

    var btn0 = document.getElementById("btn0");
    var btn1 = document.getElementById("btn1");
    var count0 = 0;
    var count1 = 0;

    btn0.addEventListener('click',function(){
        count0 += 1;
        TotalCount.innerHTML = count0+count1;
        WinCount.innerHTML = count0;
        Parcent.innerHTML = Math.round(count0/(count0+count1)*1000)/10;
    })
    btn1.addEventListener('click',function(){
        count1 += 1;
        TotalCount.innerHTML = count0+count1;
        LoseCount.innerHTML = count1;
        Parcent.innerHTML = Math.round(count0/(count0+count1)*1000)/10;
    })
}
