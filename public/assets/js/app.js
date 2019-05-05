$(() => {
    $("#makebtn").on("click", function() {
        $("#make").fadeIn().css("display", "grid");
    });

    $("#make #close").on("click", function() {
        $("#make").fadeOut();
    });

    $("#make #bottom button").on("click", function() {
        switch ($(this).attr("id")) {
            case "sau":
                let sa = $(this).attr("data");
                let s = sa;
                s += ".png";
                $("#make #sauce").attr("src", "/assets/img/parts/" + s);
                $("#sauce").attr("data", sa);
                $("#ninja #sauce").val(sa);
                break;
            case "top":
                let ty = $(this).attr("data");
                let t = ty;
                t += ".png";
                $("#make #topping").attr("src", "/assets/img/parts/" + t);
                $("#topping").attr("data", ty);
                $("#ninja #topping").val(ty);
                break;
            case "typ":
                let typ = $(this).attr("data");
                let p = typ;
                p += ".png";
                $("#make #type").attr("src", "/assets/img/parts/" + p);
                $("#type").attr("data", typ);
                $("#ninja #type").val(typ);
                break;
        }
    });

    
    $(".create-form").on("submit", function(e) {
        e.preventDefault();

        $("#ninja #name").val($("#top #namein").val().trim());
        let s = $("#ninja #sauce").val();
        let t = $("#ninja #topping").val();
        let typ = $("#ninja #type").val();
        let n = $("#ninja #name").val().trim();

        let newBurger = {
            name: n,
            sauce: s,
            topping: t,
            type: typ
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("New Burger Created");
            location.reload(forceGet = true);
        });
    });

    $(".change-eaten").on("click", function(e) {
        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: id,
        }).then( () => {
            console.log("Ate The Burger!");
            location.reload(forceGet = true);
        })
    })

});