// all forms first input box--------
function showPassword(x, y, z) {
    var passwordBox = document.getElementById(x);
    var visibleOn = document.getElementById(y);
    var visibleOff = document.getElementById(z)
    if (passwordBox.type === 'password') {
        passwordBox.type = 'text';
        visibleOn.style.display = 'none';
        visibleOff.style.display = 'block';
    }
    else {
        passwordBox.type = 'password';
        visibleOn.style.display = 'block';
        visibleOff.style.display = 'none';
    }
}

function edValueKeyPress(inputid, PlaceHoldData) {

    let email = document.getElementById(inputid);
    let emailValue = email.value;


    if (emailValue.length > 0) {
        document.getElementById(PlaceHoldData).style.display = "inline";
    } else {

        document.getElementById(PlaceHoldData).style.display = "none";
    }
}
  



//   window.addEventListener('orientationchange',function(){
//       if(window.innerHeight>window.innerWidth){
//           document.getElementsByTagName('body')[0].style.transform="rotate(-90deg)"
//       }else{
//         document.getElementsByTagName('body')[0].style.transform="rotate(0deg)"
//       }
//   })


    document.getElementById("btn").disabled = true;
// all forms first input box--------







