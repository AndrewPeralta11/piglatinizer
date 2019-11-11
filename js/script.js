$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$("button").click(function() {
    let word = $("input").val();
    if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u") {
        $(".output").text(word + "-" +"yay");
    } else if (word[0] === "b" || word[0] === "c" || word[0] === "d" || word[0] === "f" || word[0] === "g" || word[0] === "h" || word[0] === "j" || word[0] === "k" || word[0] === "l" || word[0] === "m" || word[0] === "n" || word[0] === "p" || word[0] === "q" || word[0] === "r" || word[0] === "s" || word[0] === "t" || word[0] === "v" || word[0] === "w" || word[0] === "x" || word[0] === "y" || word[0] === "z") {
        let firstLetter = word[0].charAt(0);
        let rtw = word.slice(1, word.length);
        $(".output").text(rtw + "-" + firstLetter + "ay");
    } else {
    }
});



});
