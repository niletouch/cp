

// alert("ddddddd");
//import { myVariable } from 'maindata.js';

// alert(mainsitting.test);
var mainDomain = 'https://apiseo.niletouch.org/public/';

function testfun(){
  alert("myVariable");
}

function loginapi(){
    var apiUrl = mainDomain + 'login_user';
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    $.post(apiUrl,
    {
        user_name: username,
        password: password
    },
    function(data,status){
      
      // alert(data["token"]);
      if(data["success"] == true){
        alert(data);
        localStorage.setItem("token", data.token);
        alert(localStorage.getItem("token"));
        //document.cookie =  "token="+data["token"]+";path=/";
        //alert(getCookie("token"));
       window.location.href = "./index.html";
      }else{
        alert(data.message);
      }
    });

}
function test(){
    const dataElement = document.getElementById("layout-menu").value;
    alert(dataElement)
}