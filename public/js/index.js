$("#mainDiv").text("your mom");
$("#mainDiv").addClass("fish");

$("#mainDiv").click(function () {
    if($("#secDiv").css("background-color") !== "rgb(0, 0, 255)"){
        $("#secDiv").css({ width: "90px", height: "90px", backgroundColor: "blue" })
        

    }else{
        $("#secDiv").css({ width: "90px", height: "90px", backgroundColor: "red" })

    }
  
    
    
    
    
 
  
});

$("#secDiv").click(() => {
    console.log("aa")
    switch ($("#secDiv").css("display")) {
        

       
        default:
            $("#secDiv").hide()
            setTimeout(() => {
                $("#secDiv").css("display", "block")
                
            }, 5000);
            break;
    }
    
    
    
})

$("<div/>").css({backgroundColor: "black", width: '20px', height: "10px"}).appendTo($("#secDiv"))

$.ajax({
    url: "target",
    data: "your face",
    method: "post"

}).then(res, function(){
    console.log(res)
})
