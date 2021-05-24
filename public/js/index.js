
$("#searchForm").submit(function(event){
    
    event.preventDefault()
   const searchVal = $("#searchInput").val()
    try{
        $.ajax({
            url: `https://www.googleapis.com/books/v1/volumes?q=${searchVal}`,
            method: "GET",
        }).then(res => {
            $(".cardDrop").empty()

            for(let i = 0; i < res.items.length; i++){
                let imgSourc;
                if(res.items[i].volumeInfo.imageLinks === undefined){
                    imgSourc = "https://i.ytimg.com/vi/nWWB_WFtqRg/maxresdefault.jpg"
                }else{
                    imgSourc = imgSourc = res.items[i].volumeInfo.imageLinks.smallThumbnail || res.items[i].volumeInfo.imageLinks.thumbnail
                }
                
                
        //         $(".cardDrop").append(`<div class="row">
        //     <div class="col s12">
        //       <div class="card">
        //         <div class="card-image">
        //           <img src=${imgSourc}>
        //           <span class="card-title">${res.items[i].volumeInfo.title}</span>
        //         </div>
        //         <div class="card-content">
        //           <p>${res.items[i].searchInfo.textSnippet}.</p>
        //         </div>
        //         <div class="card-action">
        //           <a href="#">This is a link</a>
        //         </div>
        //       </div>
        //     </div>
        //   </div>`)

          $(".cardDrop").append(
              $("<div>").addClass("row").append(
                  $("<div>").addClass("card").append(
                  $("<div>").addClass("col s12").append(
                      $("<div>").addClass("card-image").append(
                          $("<img>").attr("src", imgSourc),
                          $("<span>").addClass("card-title").text(res.items[i].volumeInfo.title)
                           ),
                      $("<div>").addClass("card-content").append(
                          $("<p>").addClass("te").text(res.items[i].searchInfo.textSnippet)).click(function(event){
                              console.log("origin")
                          })))))

            }
        })

    }catch(err){
        console.log(err)
    }
})

let counter = 0

$(".row").click(function(event){
   console.log("yogurt")

})
// $(".te").click(function(event){
//     console.log("origin")
// })