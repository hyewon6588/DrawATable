function myFun(){
    
    var tb=document.createElement("table");
    tb.id="tb";
    var table="";
    var rows=document.getElementById("row").value;
    var cols=document.getElementById("col").value;
    rows=parseInt(rows);
    cols=parseInt(cols);
    
    // table+="<table>"
    if(document.getElementById("tb")!=null){
        document.body.firstElementChild.lastElementChild.remove();
    }
    for(var i=1;i<=rows;i++){
        table+="<tr>"
        for(var j=1;j<=cols;j++){
            table+="<td>"+i+"X"+j+"</td>";
        }
        table+="</tr>";
    }
    tb.innerHTML=table;
    document.body.firstElementChild.appendChild(tb);
}

