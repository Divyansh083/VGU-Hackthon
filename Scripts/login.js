const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signup = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

    /* code to hide and show the eye icon for password */
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", () => {
            pwFields.forEach(pwfield =>{
                if (pwfield.type === "password") {
                    pwfield.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash","uil-eye")
                    })
                }
                else{
                    pwfield.type = "password";
                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye","uil-eye-slash")
                    })
                }
            })
        })
    })

    // code to hide and show login and register form
    signup.addEventListener("click",()=>{
        container.classList.add("active");
    });
    login.addEventListener("click", () =>{
        container.classList.remove("active");
    })