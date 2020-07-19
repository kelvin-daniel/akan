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
          }else if(input.type === "date" && validateDate(input)) {
            nextSlide(parent,nextForm)
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

function validateDate(date){
    if(date.value.length < 8){
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
    let maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    let femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let myBirthday = document.getElementById("birth").value;
    let Gender = document.getElementsByName("gender");
    let dateOfBirth = new Date(myBirthday);
    let dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === ""){
        console.log('inalid date'); 
        error('rgb(189,87,87)')
    }else {
        for(let i=0;i<Gender.length;i++){
            if(Gender[i].checked){
                if(Gender[i].value === "Male"){
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