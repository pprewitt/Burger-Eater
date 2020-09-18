$(() =>{
    $(".devour").on("click", (event) => {
      event.preventDefault()
      console.log("clicked devour")
      let id = $(this).data("id");
      let eat = $(this).data("eat");
  
      eat = {
        devoured: true
      };
  
 // Sends the update request to devour the burger
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: eat
      }).then(
        () => {
          console.log("burger is now devoured", eat);
          // Reloads the page to update the view
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", (event) => {
      
      event.preventDefault();
      console.log("clicked")
  
      let newBurger = {name: $("#createburger").val().trim(),
        
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        () => {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  