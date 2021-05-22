$("#mainDiv").text("your mom");
$("#mainDiv").addClass("fish");

$("#mainDiv").click(function () {
    if($("#secDiv").css("background-color") !== "rgb(0, 0, 255)"){
        $("#secDiv").css({ width: "90px", height: "90px", backgroundColor: "blue" })
        

    }else{
        $("#secDiv").css({ width: "90px", height: "90px", backgroundColor: "red" })

    }
  
    
    
    
    
 
  
});
