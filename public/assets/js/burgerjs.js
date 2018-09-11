
$(function () {
    $(".new-burger").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            name: $(".burger-name").val().trim(),
            devour: 0
        };
        console.log(newBurger)
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("created new burger");
            location.reload();
        });

    });
    $(".eat").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newDevour = $(this).data("eat");
        var newDevourState = {
            devour: newDevour
        };
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function () {
            console.log("change state to", newDevour);

            location.reload();
        })


    });
    $(".delete").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burger/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });


});