let eye = document.querySelector(".passimg")
let loginPass = document.querySelector("#loginpass")
eye.addEventListener("click", function(){   
     if(eye.classList.contains("fa-eye-slash")){
        eye.classList.replace("fa-eye-slash","fa-eye")
        loginPass.type ="text"
     }
     else{
         eye.classList.replace("fa-eye", "fa-eye-slash")
         loginPass.type ="password"

     }
});
