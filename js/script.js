$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$("button").click(function(){
    let word = $(input).val();
    if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u") {
        $(".output").text(word + "yay");
    } else {
        $(".output").text();
    }

    console.log(word);
});



});
