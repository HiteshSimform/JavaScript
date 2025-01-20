console.log("Hello")
// alert("Hello")

// Scope & Lexical Environment

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}

a();
// console.log(b);
