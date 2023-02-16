const form = document.querySelector("form"),
statusTxt = document.querySelector(".button-area span");

// form.onsubmit = (e) =>{
//     e.preventDefault(); //preventing form from submitting
//     statusTxt.style.display = "block";

//     let xhr = new XMLHttpRequest(); //creating new xml object
//     xhr.open("POST", "messagee.php" ,true); //sending with post request to message.php file
//     xhr.onload = () => { //once ajax loaded
//     if(xhr.readyState == 4 && xhr.status == 200){
//         let response = xhr.response;
//         console.log(response);
//     }else{
//         console.log("he");
//     }
            
//     }

// }

form.onsubmit = (e) => {
    e.preventDefault();
    statusTxt.style.display = "block";
    let xhr = new XMLHttpRequest();
    xhr.open("POST","messagee.php",true);
    xhr.onload = () =>{
        let response = xhr.response;
        console.log(response);
        if(response.indexOf("Email and Message field is required") !=-1 || response.indexOf("Enter a valid email address") !=-1 || response.indexOf("Sorry , Fail to send your message") !=-1){
            statusTxt.style.color = "red";
        }else{
            form.reset();
            statusTxt.style.color = "#0D6FED";
            setTimeout(() => {
                statusTxt.style.display = "none";
            }, 3000)
        }
        statusTxt.innerText = response;
    }
    let formData = new FormData(form);
    xhr.send(formData);
    
}