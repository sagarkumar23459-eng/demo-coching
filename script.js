/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 500);

    }, 500);

});
/* ==========================
   MOBILE MENU
========================== */

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* ==========================
   CLOSE MENU AFTER CLICK
========================== */

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});
/* ==========================
   ADMISSION FORM TO WHATSAPP
========================== */

document
.getElementById("admissionForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let studentClass =
    document.getElementById("studentClass").value;

    let mobile =
    document.getElementById("mobile").value;

    let email =
    document.getElementById("email").value;

    let course =
    document.getElementById("course").value;

    let message =
    document.getElementById("message").value;

    let whatsappMessage =
`🎓 New Admission Inquiry

👤 Student Name: ${name}

🏫 Class: ${studentClass}

📱 Mobile: ${mobile}

📧 Email: ${email}

📚 Course: ${course}

📝 Message:
${message}`;

    let whatsappNumber = "919852658098";

    let url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");

});
/* ==========================
   SUPPORT FORM TO WHATSAPP
========================== */
/* ==========================
   ASK DOUBT SYSTEM
========================== */

const doubtButtons =
document.querySelectorAll(".doubt-btn");

doubtButtons.forEach(button => {

    button.addEventListener("click", () => {

        let currentHour =
        new Date().getHours();

        /* ALLOWED TIME:
           7 PM = 19
           12 AM = 0
        */

        if(currentHour >= 19 || currentHour < 23){

            let teacher =
            button.dataset.teacher;

            let subject =
            button.dataset.subject;

            let number =
            button.dataset.number;

            let messageBox =
            button.parentElement.querySelector(".doubt-message");

            let doubt =
            messageBox.value;

            if(doubt.trim() === ""){

                alert("Please type your doubt.");

                return;

            }

            let whatsappMessage =
`🎓 Student Doubt

👨‍🏫 Teacher: ${teacher}

📚 Subject: ${subject}

❓ Doubt:
${doubt}`;

            let url =
`https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(url,"_blank");

        }

        else{

            alert(
            "Teachers are available only between 7 PM to 12 AM."
            );

        }

    });

});