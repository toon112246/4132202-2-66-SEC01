
    var num = 10;
    let name = "TOO";
    age = 20;

    FRIUT = ["apple","pineapple","watermelon","orange"];
    obj ={name:"Nara",age:30,tel:"123456789"};

    data = {address:["69","jira","Bu",31110],name: "TOOn"};

    console.log(FRIUT[1]);
    console.log(obj.name);
    console.log(data.address[2]);

    document.getElementById("smg").innerHTML = data.address[2];

    let longTxt = data.name + " : " + false[0];

    longTxt = `${data.name} :
            ${FRIUT[1]}`;

    $(function(){
        $("#smg").html(longTxt);
    }); //jQuery ready
