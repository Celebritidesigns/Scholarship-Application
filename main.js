let fname = document.getElementById("fname"),
    fnameError = document.getElementById("fnameError"),
    lname = document.getElementById("lname"),
    lnameError = document.getElementById("lnameError"),
    age = document.getElementById("age"),
    ageError = document.getElementById("ageError"),
    gender = document.getElementById("gender"),
    genderError = document.getElementById("genderError"),
    phone = document.getElementById("phone"),
    phoneError = document.getElementById("phoneError"),
    school = document.getElementById("school"),
    schoolError = document.getElementById("schoolError"),
    subject = document.getElementById("subject"),
    subjectError = document.getElementById("subjectError"),
    continent = document.getElementById("continent"),
    continentError = document.getElementById("continentError"),

    submitBtnNew = document.getElementById("submitBtnNew"),

    biology = document.getElementById("biology")
biologyError = document.getElementById("biologyError")
chemistry = document.getElementById("chemistry")
chemistryError = document.getElementById("chemistryError")
physics = document.getElementById("physics")
physicsError = document.getElementById("physicsError")
geography = document.getElementById("geography")
geographyError = document.getElementById("geographyError")
economics = document.getElementById("economics")
economicsError = document.getElementById("economicsError")
mathsScore = document.getElementById("mathsScore")
maths = document.getElementById("subject1")
english = document.getElementById("subject2")
engScore = document.getElementById("engScore")
bioScore = document.getElementById("bioScore")
chemScore = document.getElementById("chemScore")
phyScore = document.getElementById("phyScore")
ecoScore = document.getElementById("ecoScore")
geoScore = document.getElementById("geoScore")
crsScore = document.getElementById("crsScore")
agePoint = ""
averageScore = ""
totalScore = ""
averageresult = document.getElementById("averageresult")
bioScoreError = document.getElementById("bioScoreError")
chemScoreError = document.getElementById("chemScoreError")
phyScoreError = document.getElementById("phyScoreError")
ecoScoreError = document.getElementById("ecoScoreError")
geoScoreError = document.getElementById("geoScoreError")
crsScoreError = document.getElementById("crsScoreError")
continent = document.getElementById("continent")
continentPoint = ""
africa = document.getElementById("africa")
asia = document.getElementById("asia")
northAmerica = document.getElementById("northAmerica")
southAmerica = document.getElementById("southAmerica")
others = document.getElementById("others")
grandTotalPoint = ""
totalPoint = ""
final = document.getElementById("final")
user = document.getElementById("user")
resultContainer = document.getElementById("resultContainer")
chartResult = document.getElementById("chartResult")
















submitBtnNew.addEventListener("click", function (f) {
    f.preventDefault()
    validate()
    showChart()
    displayResult()

})



function validate() {


    if (fname.value == "" || fname.value == null) {
        fnameError.innerHTML = "Field Required"

    } else {
        fnameError.innerHTML = ""
        fname.value = ""
    }
    if (lname.value == "" || lname.value == null) {
        lnameError.innerHTML = "Field Required"
    } else {
        lnameError.innerHTML = ""
        lname.value = ""
    }
    if (age.value != "" || age.value != null) {
        let currentYear = new Date().getFullYear()
        let userYear = new Date(age.value).getFullYear()
        let diff = currentYear - userYear
        console.log(diff)
        if (diff <= 24) {
            agePoint = 100
        } else if (diff <= 30) {
            agePoint = 80
        } else if (diff <= 35) {
            agePoint = 50
        } else if (diff <= 40) {
            agePoint = 30
        } else if (diff > 40) {
            agePoint = 10
        } else {
            ageError.innerHTML = "Field Required"
            age.value = ""

        }










    }

    console.log(agePoint)





    if (gender.value == "" || gender.value == null) {
        genderError.innerHTML = "Field Required"
    } else {
        genderError.innerHTML = ""
        gender.value = ""
    }
    if (phone.value == "" || phone.value == null) {
        phoneError.innerHTML = "Field Required"
    } else {
        phoneError.innerHTML = ""
        phone.value = ""
    }
    if (school.value == "" || school.value == null) {
        schoolError.innerHTML = "Field Required"
    } else {
        schoolError.innerHTML = ""
        school.value = ""
    }

    if (continent.value == "" || continent.value == null) {
        continentError.innerHTML = "Select Continent"
    } else {
        continentError.innerHTML = ""
        continent.value = ""
    }
    if (biology.value == "" || biology.value == null) {
        biologyError.innerHTML = "Field Required"
    } else {
        biologyError.innerHTML = ""
        biology.value = ""
    }
    if (chemistry.value == "" || chemistry.value == null) {
        chemistryError.innerHTML = "Field Required"
    } else {
        chemistryError.innerHTML = ""
        chemistry.value = ""
    }
    if (physics.value == "" || physics.value == null) {
        physicsError.innerHTML = "Field Required"
    } else {
        physicsError.innerHTML = ""
        physics.value = ""
    }
    if (geography.value == "" || geography.value == "") {
        geographyError.innerHTML = "Field Required"
    } else {
        geographyError.innerHTML = ""
        geography.value = ""
    }
    if (economics.value == "" || economics.value == "") {
        economicsError.innerHTML = "Field Required"
    } else {
        economicsError.innerHTML = ""
        economics.value = ""
    }
    if (crs.value == "" || crs.value == "") {
        crsError.innerHTML = "Field Required"
    } else {
        crsError.innerHTML = ""
        crs.value = ""
    }
    if (bioScore.value == "" || bioScore.value == null) {
        bioScoreError.innerHTML = "Field Required"

    } else {
        bioScoreError.innerHTML = ""


    }
    if (chemScore.value == "" || chemScore.value == null) {
        chemScoreError.innerHTML = "Field Required"

    } else {
        chemScoreError.innerHTML = ""

    }
    if (phyScore.value == "" || phyScore.value == null) {
        phyScoreError.innerHTML = "Field Required"

    } else {
        phyScoreError.innerHTML = ""

    }
    if (ecoScore.value == "" || ecoScore.value == null) {
        ecoScoreError.innerHTML = "Field Required"

    } else {
        ecoScoreError.innerHTML = ""

    }
    if (crsScore.value == "" || crsScore.value == null) {
        crsScoreError.innerHTML = "Field Required"

    } else {
        crsScoreError.innerHTML = ""

    }
    if (geoScore.value == "" || geoScore.value == null) {
        geoScoreError.innerHTML = "Field Required"

    } else {
        geoScoreError.innerHTML = ""

    }



    if (engScore.value != "" && mathsScore.value != "" && bioScore.value != ""
        && chemScore.value != "" && phyScore.value != "" && geoScore.value != ""
        && ecoScore.value != "" && crsScore.value != "") {
        let totalScore = parseInt(engScore.value) + parseInt(mathsScore.value)
            + parseInt(bioScore.value) + parseInt(chemScore.value) + parseInt(phyScore.value)
            + parseInt(geoScore.value) + parseInt(ecoScore.value) + parseInt(crsScore.value)
        console.log(engScore.value)
        console.log(mathsScore.value)
        console.log(bioScore.value)
        console.log(chemScore.value)
        console.log(phyScore.value)
        console.log(geoScore.value)
        console.log(ecoScore.value)
        console.log(crsScore.value)
        console.log(totalScore)

        averageScore = parseInt(totalScore / 8)
        console.log(averageScore)
        averageresult.innerHTML = "AVERAGE SCORE: " + averageScore
        totalPoint = agePoint + averageScore + continentPoint
        console.log(totalPoint)
        console.log(continentPoint)
        

        if (averageScore >= 90) {
            final.innerHTML = "Total Point Accumulated = 150 Points"

        } else if (averageScore >= 85) {
            final.innerHTML = "Total Point Accumulated = 140 Points"
        } else if (averageScore >= 75) {
            final.innerHTML = "Total Point Accumulated = 120 Points"
        } else if (averageScore >= 65) {
            final.innerHTML = "Total Point Accumulated = 100 Points"
        } else if (averageScore >= 60) {
            final.innerHTML = "Total Point Accumulated = 80 Points"
        } else if (averageScore >= 50) {
            final.innerHTML = "Total Point Accumulated = 50 Points"
        } else {
            final.innerHTML = "Total Point Accumulated = 20 Points"
        }
        
    }
    if (averageScore.value != ""){
        user.innerHTML = "Congratulation! You have been offered a scholarship to study in your preffered institution."
        
    } else{
        user.innerHTML = ""
    }
     
    function showChart(){
        let massChart = new chart (chartResult, {
            type: "pie",
            data: {
                labels: ["agePoint", "continentPoint", "averageScore",],
                datasets: [{
                    label: "Results",
                    data: [
                        agePoint,
                        averagePoint,
                        continentPoint
                    ],
                    backgroundColor: [
                        "red",
                        "blue",
                        "yellow"
                    ],
                    borderWidth: 2,
                    borderColor: "black",
                    hoverBorderWidth: 2,
                    hoverBorderColor: "red"
                }]
            }
        })
    }
     
    












}


continent.addEventListener("change", function (smile) {

    if (continent.value == "africa") {
        africa.style.display = "block"
        asia.style.display = "none"
        northAmerica.style.display = "none"
        southAmerica.style.display = "none"
        others.style.display = "none"
        continentPoint = 50

    } else if (continent.value == "asia") {
        africa.style.display = "none"
        asia.style.display = "block"
        northAmerica.style.display = "none"
        southAmerica.style.display = "none"
        others.style.display = "none"
        continentPoint = 40

    } else if (continent.value == "northAmerica") {
        africa.style.display = "none"
        asia.style.display = "none"
        northAmerica.style.display = "block"
        southAmerica.style.display = "none"
        others.style.display = "none"
        continentPoint = 30
    }
    else if (continent.value == "southAmerica") {
        africa.style.display = "none"
        asia.style.display = "none"
        northAmerica.style.display = "none"
        southAmerica.style.display = "block"
        others.style.display = "none"
        continentPoint = 20
    } else {
        africa.style.display = "none"
        asia.style.display = "none"
        northAmerica.style.display = "none"
        southAmerica.style.display = "none"
        others.style.display = "block"
        continentPoint = 10

    }


}) 

function displayResult() {
    let sex
    if (gender.value == "male") {
        sex = "Mr"
    } else if (gender.value == "female" && age < 30) {
        sex = "Miss"
    } else if (gender.value == "female" && age > 30) {
        sex = "Mrs"
    }
    if (point >= 180) {
        resultContainer.innerHTML =
            `<div class="inner-result-container">
                         <h2>CONGRATULATION</h2>
                         <p> Hello ${sex} ${fname.value} ${lname.value} ,
                              After considering your data,We are pleased to announce to you that
                             you  have qualified for our scholarship programme.
                             Below is your performance Chart.
                         </p>
                         <canvas class="chart-results" id="myChart">
     
                         </canvas>
                         
                     </div>`
    } else {
        resultContainer.innerHTML =
            `<div class="inner-result-container">
                         <h2>SORRY, APPLICATION DECLINED</h2>
                         <p> Hello ${sex} ${fname.value} ${lname.value},
                             You displayed some great personal strength but we have 
                             received aapplications from other candiates whose avg aligned
                             more closely with our requirements. 
                             Below is your performance Chart.
                         <canvas class="chart-results" id="myChart">
     
                         </canvas>
                     </div>`
    }
}

