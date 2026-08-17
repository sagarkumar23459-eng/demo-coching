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
.addEventListener("submit", function(e) {

    e.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const course =
        document.getElementById("course").value;

    const message =
        document.getElementById("message").value.trim();


    const whatsappMessage =
`🎓 New Admission Inquiry

👤 Student Name: ${name}

📱 Mobile: ${mobile}

📧 Email: ${email || "Not Provided"}

📚 Course: ${course}

📝 Message:
${message || "No message"}`;


    const whatsappNumber = "919852658098";

    const url =
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
/* ==========================
   STUDENT RESULT DATABASE
========================== */

const studentResults = [

    {
        roll: "ACC001",
        name: "Rahul Kumar",
        className: "Class 10",
        exam: "Annual Examination 2026",

        subjects: [
            {
                subject: "Mathematics",
                marks: 92,
                maxMarks: 100
            },
            {
                subject: "Science",
                marks: 88,
                maxMarks: 100
            },
            {
                subject: "English",
                marks: 85,
                maxMarks: 100
            },
            {
                subject: "Social Science",
                marks: 90,
                maxMarks: 100
            },
            {
                subject: "Hindi",
                marks: 87,
                maxMarks: 100
            }
        ]
    },


    {
        roll: "ACC002",
        name: "Priya Kumari",
        className: "Class 10",
        exam: "Annual Examination 2026",

        subjects: [
            {
                subject: "Mathematics",
                marks: 95,
                maxMarks: 100
            },
            {
                subject: "Science",
                marks: 91,
                maxMarks: 100
            },
            {
                subject: "English",
                marks: 89,
                maxMarks: 100
            },
            {
                subject: "Social Science",
                marks: 94,
                maxMarks: 100
            },
            {
                subject: "Hindi",
                marks: 92,
                maxMarks: 100
            }
        ]
    },


    {
        roll: "ACC003",
        name: "Aman Kumar",
        className: "Class 9",
        exam: "Annual Examination 2026",

        subjects: [
            {
                subject: "Mathematics",
                marks: 78,
                maxMarks: 100
            },
            {
                subject: "Science",
                marks: 82,
                maxMarks: 100
            },
            {
                subject: "English",
                marks: 75,
                maxMarks: 100
            },
            {
                subject: "Social Science",
                marks: 80,
                maxMarks: 100
            },
            {
                subject: "Hindi",
                marks: 84,
                maxMarks: 100
            }
        ]
    },


    {
        roll: "ACC004",
        name: "Neha Singh",
        className: "Class 9",
        exam: "Annual Examination 2026",

        subjects: [
            {
                subject: "Mathematics",
                marks: 88,
                maxMarks: 100
            },
            {
                subject: "Science",
                marks: 86,
                maxMarks: 100
            },
            {
                subject: "English",
                marks: 90,
                maxMarks: 100
            },
            {
                subject: "Social Science",
                marks: 85,
                maxMarks: 100
            },
            {
                subject: "Hindi",
                marks: 89,
                maxMarks: 100
            }
        ]
    },


    {
        roll: "ACC005",
        name: "Vivek Kumar",
        className: "Class 8",
        exam: "Annual Examination 2026",

        subjects: [
            {
                subject: "Mathematics",
                marks: 72,
                maxMarks: 100
            },
            {
                subject: "Science",
                marks: 76,
                maxMarks: 100
            },
            {
                subject: "English",
                marks: 80,
                maxMarks: 100
            },
            {
                subject: "Social Science",
                marks: 74,
                maxMarks: 100
            },
            {
                subject: "Hindi",
                marks: 81,
                maxMarks: 100
            }
        ]
    }

];


/* ==========================
   SEARCH RESULT
========================== */

function searchResult(){

    const rollInput =
        document
        .getElementById("rollNumber")
        .value
        .trim()
        .toUpperCase();

    const resultContainer =
        document.getElementById("resultContainer");


    /* EMPTY INPUT */

    if(rollInput === ""){

        resultContainer.innerHTML = `

            <div class="result-error">

                ⚠️ Please enter your Roll Number.

            </div>

        `;

        return;

    }


    /* FIND STUDENT */

    const student =
        studentResults.find(
            item => item.roll === rollInput
        );


    /* STUDENT NOT FOUND */

    if(!student){

        resultContainer.innerHTML = `

            <div class="result-error">

                ❌ No result found for Roll Number
                <strong>${rollInput}</strong>.

                <br><br>

                Please check your Roll Number
                and try again.

            </div>

        `;

        return;

    }


    /* ==========================
       CALCULATE RESULT
    ========================== */

    let totalMarks = 0;

    let totalMaxMarks = 0;

    let subjectRows = "";


    student.subjects.forEach(item => {

        totalMarks += item.marks;

        totalMaxMarks += item.maxMarks;


        subjectRows += `

            <tr>

                <td>${item.subject}</td>

                <td>${item.marks}</td>

                <td>${item.maxMarks}</td>

            </tr>

        `;

    });


    const percentage =
        (
            totalMarks /
            totalMaxMarks
        ) * 100;


    const percentageFormatted =
        percentage.toFixed(2);


    let grade;


    if(percentage >= 90){

        grade = "A+";

    }

    else if(percentage >= 80){

        grade = "A";

    }

    else if(percentage >= 70){

        grade = "B+";

    }

    else if(percentage >= 60){

        grade = "B";

    }

    else if(percentage >= 50){

        grade = "C";

    }

    else{

        grade = "D";

    }


    /* ==========================
       DISPLAY RESULT
    ========================== */

    resultContainer.innerHTML = `

        <div class="result-card">

            <div class="result-header">

                <h3>${student.name}</h3>

                <p>${student.exam}</p>

            </div>


            <div class="student-info">

                <div class="info-box">

                    <span>Roll Number</span>

                    <strong>${student.roll}</strong>

                </div>


                <div class="info-box">

                    <span>Class</span>

                    <strong>${student.className}</strong>

                </div>

            </div>


            <table class="result-table">

                <thead>

                    <tr>

                        <th>Subject</th>

                        <th>Marks</th>

                        <th>Maximum</th>

                    </tr>

                </thead>

                <tbody>

                    ${subjectRows}

                </tbody>

            </table>


            <div class="total-result">

                <p>
                    Total Marks
                </p>

                <h3>
                    ${totalMarks} / ${totalMaxMarks}
                </h3>

                <p>
                    Percentage: ${percentageFormatted}%
                </p>

                <p>
                    Grade: ${grade}
                </p>

                <span class="result-status">
                    PASS
                </span>

            </div>

        </div>

    `;

}


/* ==========================
   ENTER KEY SEARCH
========================== */

document
.getElementById("rollNumber")
.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        searchResult();

    }

});