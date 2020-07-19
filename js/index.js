function animatedForm(){
    const arrows = document.querySelectorAll(".fa-arrow-right");

    arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
          const input= arrow.previousElementSibling;
          const parent = arrow.parentElement;
          const nextForm= parent.nextElementSibling;

          //validation check
          if(input.type === "text" && validateUser(input)) {
            nextSlide(parent,nextForm)
          }else if(input.type === "date" && validateUser(input)) {
            nextSlide(parent,nextForm);
          }else{
               parent.style.animation = "shake 0.5s ease";
          }
          parent.addEventListener("animationend", () => {
              parent.style.animation = "";
          });
      });
    });
}

function validateUser(user){
    if(user.value.length < 1){
        console.log('not enough characters'); 
        error('rgb(189,87,87)')
    }else{
        error('rgb(87, 189, 130)')
        return true;
    }
}

function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color){
    document.body.style.backgroundColor = color
}

function getAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === ""){
        document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Didn't Submit a Valid Date!</div>";
        $('#message').addClass("animated shake");
    }
    else {
        for(var i=0;i<myGender.length;i++){
            if(myGender[i].checked){
                if(myGender[i].value === "Male"){
                    document.getElementById('message').innerHTML = "<span><i class=\"fa fa-male\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
                    $('#message span:first-child').addClass("animated fadeInDown");
                    $('#message span:last-child').addClass("animated fadeInUp");
                }
                else {
                    document.getElementById('message').innerHTML = "<span><i class=\"fa fa-female\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
                    $('#message span:first-child').addClass("animated fadeInDown");
                    $('#message span:last-child').addClass("animated fadeInUp");
                }
                break;
            }    
            else {
                document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Should Select a Gender Too Determine Your Akan Name!</div>";
                $('#message').addClass("animated shake");
            }
        }
    }
}

function clearAkanMessage(){
    document.getElementById('message').innerHTML = "";
}




animatedForm();