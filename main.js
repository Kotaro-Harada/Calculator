let result = document.getElementById("result")

function calc(){
    result.value = new Function("return " + result.value)();
}



function edit(elem){
    result.value = result.value + elem.value;
    if (elem.className == "symbol"){
        for(i=1; i<=5; i++){
            document.getElementById("symbol" + i).disabled = true;
        }
    }else{
        for(i=1; i<=5; i++){
            document.getElementById("symbol" + i).disabled = false;
        }
    }
    
    if (result.value.slice(0,1) == "0"){
        for(i=1; i<=9; i++){
            document.getElementById("number" + i).disabled = true;
        }
    }else{
        for(i=1; i<=9; i++){
            document.getElementById("number" + i).disabled = false;
        }
    }

    if (result.value.slice(0,1) == "0" && result.value != "0" && result.value.slice(1,2) != "0"){
        for(i=1; i<=11; i++){
            document.getElementById("number" + i).disabled = false;
        }
    }
}

$("#AC").click(function(){
    for(i=1; i<=11; i++){
        document.getElementById("number" + i).disabled = false;
    }
    for(i=1; i<=5; i++){
        document.getElementById("symbol" + i).disabled = false;
    }
})

$(".symbol").click(function(){
    for(i=1; i<=11; i++){
        document.getElementById("number" + i).disabled = false;
    }
})



