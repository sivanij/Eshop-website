navHeaderTemplate();
footerTemplate();
// contactTemplate();
// loginTemplate();


let loginNavbar = document.getElementById("login-navbar");
let user = document.getElementById("user");

if(sessionStorage.isLogin) {
    loginNavbar.style.display = "none";
    let username = document.getElementById("user-name");
    username.innerHTML = sessionStorage.username.toUpperCase();
    user.style.display = "flex";
} else {
    loginNavbar.style.display = "flex";
    user.style.display = "none";
}

function login() {
    let modal = document.getElementsByClassName("login-modal");
    modal[0].style.display = "block";
}

function closeModal() {
    let modal = document.getElementsByClassName("login-modal");
    modal[0].style.display = "none";
}

function openContactUsModal() {
    let modal = document.getElementsByClassName("contactus-modal");
    modal[0].style.display = "flex";
}

function closeContactUsModal() {
    let modal = document.getElementsByClassName("contactus-modal");
    modal[0].style.display = "none";
}

function userLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === 'admin' && password === 'admin') {
        let errorMsg = document.getElementById('error-msg');
        alert(`Welcome back, ${username}`);
        sessionStorage.username = 'admin';
        sessionStorage.isLogin = true;
        if(errorMsg.style.display === "block") {
            errorMsg.style.display = "none";
        }
        let modal = document.getElementsByClassName("login-modal");
        modal[0].style.display = "none";
        loginNavbar.style.display = "none";
        let navbarUser = document.getElementById("user-name");
        navbarUser.innerHTML = sessionStorage.username.toUpperCase();
        user.style.display = "flex";
    } else {
        let errorMsg = document.getElementById('error-msg');
        errorMsg.style.display = "block";
    }
}

function upArrowClick() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function loginTemplate() {
    let logintemplate = '<div id="login">' +
        '<span class="close" onclick="closeModal()">X</span>' +
        '<img src="assets/images/logo-chefs-table.png" height="50" width="50" />' +
        '<h4>Login</h4>' +
        '<input type="text" placeholder="Username" id="username" />' +
        '<br />' +
        '<input type="password" placeholder="Password" id="password" />' +
        '<br />' +
        '<button id="loginButton">Login</button>' +
    '</div>';
    document.getElementById('login-modal').innerHTML += logintemplate;
}

function contactTemplate() {
    let contacttemplate = '<div id="contactus">' +
    '<span class="close" onclick="closeContactUsModal()">X</span>'+
    '<h4>Contact Us</h4>'+
    '<div class="contact-form">'+
        '<form>'+
            '<label for="name">Name:</label><br />'+
            '<input type="text" id="form-name" name="name" />'+
            '<br />'+

            '<label for="address">Address:</label><br />'+
            '<textarea id="form-address" name="address"></textarea>'+

            '<br />'+

            '<label for="email">Email Address:</label><br />'+
            '<input type="email" id="form-email" name="email" />'+

            '<br />'+

            '<label for="contact">Contact Number:</label><br />'+
            '<input type="number" id="form-phone" name="contact" max="10" />'+

            '<br />'+

            '<label for="birth-date">Date of Birth:</label><br />'+
            '<input type="date" id="form-date" name="birth-date" />'+

            '<br />'+

            '<label for="gender">Gender:</label><br />'+
            '<input type="radio" id="male" name="gender" value="male">'+
            '<label for="male">Male</label>'+
            '<input type="radio" id="female" name="gender" value="female">'+
            '<label for="female">Female</label>'+
            '<input type="radio" id="other" name="gender" value="other">'+
            '<label for="other">Other</label>'+

            '<br />'+

            '<input type="checkbox" id="newsletter-check" name="newsletter-check" />'+
            '<label for="newsletter-check">Subscribe to our newsletter.</label>'+

            '<br />'+

            '<input type="submit" id="submitBtn" />'+
        '</form>'+
    '</div>'+
'</div>';
document.getElementById('contactus-modal').innerHTML += contacttemplate;
}

function navHeaderTemplate() {
    let headertemplate = '<div class="website-title">' +
    '<a href="index.html">' +
        '<span><i class="material-icons">shopping_cart</i></span>'+
        '<span>upGrad Eshop</span>' +
    '</a>' +
    '</div>' +
    '<div class="texts"><input type="search" class="search" placeholder="search"/>'+
     '<a href="#"><i class="material-icons">search</i></a></div>'+
    '<div class="nav-links" data-toggle="modal" data-target="#example-modal">'+ 
    '<span><i class="material-icons">person</i></span>'+
    '<span>Account</span></br>' +
    '</div>'+
    '<div class="modal fade" id="example-modal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">'+
    '<div class="modal-dialog" role="document">'+
     ' <div class="modal-content">'+
        '<div class="modal-header">'+
        '<lable data-toggle="modal" data-target="#example-modal" style="margin-left: 30%;" >Sign In</lable>'+
        '<lable data-toggle="modal" data-target="#example-modal-signup" style="margin-left: 5%;">Sign Up</lable>'+
          '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
            '<span aria-hidden="true">&times;</span>'+
          '</button>'+
        '</div>'+
        
        '<div class="modal-body">'+
                '<form>'+
                    '<div class="form-group">'+
                        '<label for="registerInputEmail1">Username:</label>'+
                        '<input type="email" class="form-control1" id="example-input-email" aria-describedby="emailHelp" placeholder="Enter Username">'+
                    '</div>'+
                    '<div class="form-group">'+
                        '<label for="Password">Password</label>'+
                        '<input type="password" class="form-control2" id="example-input-password" aria-describedby="paswordHelp" placeholder="Password">'+
                    '</div>'+
                    '<div class="modal-footer"></div>'+
                    '<button type="register" style="margin-left: 40%;" class="btn btn-primary" id="example-modal">Sign In</button>'+
                    
                '</form>'+
        '</div>'+
        
      '</div>'+
    '</div>'+
  '</div>'+


  '<div class="modal fade" id="example-modal-signup" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">'+
  '<div class="modal-dialog" role="document">'+
    '<div class="modal-content">'+
      '<div class="modal-header">'+
      '<lable data-toggle="modal" data-target="#example-modal" style="margin-left: 30%;" >Sign In</lable>'+
      '<lable data-toggle="modal" data-target="#example-modal-signup" style="margin-left: 5%;">Sign Up</lable>'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
          '<span aria-hidden="true">&times;</span>'+
        '</button>'+
      '</div>'+
      '<div class="modal-body">'+
              '<form>'+
                   '<div class="form-group">'+
                      '<label for="registerModalname">First Name</label><br/>'+
                      '<input type="text" class="form-control1" id="example-input-name-1" aria-describedby="emailHelp" placeholder="First Name">'+
                  '</div>'+
                  '<div class="form-group">'+
                  '<label for="registerModalname">Last Name</label><br/>'+
                  '<input type="text" class="form-control1" id="example-input-name-1" aria-describedby="emailHelp" placeholder="Last Name">'+
              '</div>'+
                  '<div class="form-group">'+
                      '<label for="registerInputEmail1">Email</label><br/>'+
                      '<input type="email" class="form-control1" id="example-input-email-1" aria-describedby="emailHelp" placeholder="Email">'+
                  '</div>'+
                  '<div class="form-group">'+
                  '<label for="registerModalname">Phone Number</label><br/>'+
                  '<input type="text" class="form-control1" id="example-input-name-1" aria-describedby="emailHelp" placeholder="Phone number">'+
              '</div>'+
              '<div class="form-group">'+
              '<label for="registerModalname">User Name</label><br/>'+
              '<input type="text" class="form-control1" id="example-input-name-1" aria-describedby="emailHelp" placeholder="User Name">'+
          '</div>'+
                  '<div class="form-group">'+
                      '<label for="Password">Enter a Password</label><br/>'+
                      '<input type="password" class="form-control2" id="example-input-password-1" aria-describedby="paswordHelp" placeholder="Password">'+
                  '</div>'+
                   '<div class="form-group">'+
                      '<label for="registerInputpassword">Confirm Password</label><br/>'+
                      '<input type="password" class="form-control1" id="example-input-password-2" aria-describedby="emailHelp" placeholder="Re-enter Password">'+
                  '</div>'+
                  '<button type="register" class="btn btn-primary" id="example-modal-signup">Sign Up</button>'+
                  
              '</form>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>';
    
    document.getElementById('navheader').innerHTML += headertemplate;
}

function footerTemplate() {
    let footertemplate = '<span class="address">' +
        'copride of upgrad'+
    '</span>' +
    '<div class="social-media-icons-container">' +
       
    '<p>Upgtad</p>'+
    '</div>' +
    '<a class="contact-us" onclick="openContactUsModal()"><span>Contact Us</span></a>';
    
    

    document.getElementById('footer').innerHTML += footertemplate;
}