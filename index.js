function generateCaptcha() {
    var cap = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','1','2','3','4','5','6','7','8','9','0');

    var i;
    for (i = 0; i < 4; i++) {
        var a = cap[Math.floor(Math.random() * cap.length)];
        var b = cap[Math.floor(Math.random() * cap.length)];
        var c = cap[Math.floor(Math.random() * cap.length)];
        var d = cap[Math.floor(Math.random() * cap.length)];
    }

    var code=a+b+c+d;
    document.getElementById("mainCaptcha").value=code;
}

function checkValidCaptcha(){
    var string1=removeSpaces(document.getElementById('mainCaptcha').value);

    var string2=removeSpaces(document.getElementById('textinput').value);

    if(string1 == string2){
        document.getElementById('success').innerHTML="Form is validated  Successfully";

        alert("Form is validated  Successfully");

        window.location="https://chat.openai.com/chat";
        return true;
    }
    else{
        document.getElementById('error').innerHTML="Please Enter a valid Captcha";
        return false;
    }
}
    function removeSpaces(string){
        return string.split('').join('');
    }
