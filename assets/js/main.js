console.log("***** Multi Calculator *****")
$(document).ready(
    $("#gradCalBox").css({ "display": "none" }),
    $("#heiCalBox").css({ "display": "none" }),
    $("#curnCalBox").css({ "display": "none" }),

    // simple calculator 
    $("#simpleCalculator").click(() => {
        $("#simCalBox").slideDown("slow"),

        $("#gradCalBox").css({ "display": "none" }),
        $("#heiCalBox").css({ "display": "none" }),
        $("#curnCalBox").css({ "display": "none" })
    }),
    // grade calculator
    $("#gradeCalculator").click(() => {
        $("#gradCalBox").slideDown("slow"),

        $("#simCalBox").css({ "display": "none" }),
        $("#heiCalBox").css({ "display": "none" }),
        $("#curnCalBox").css({ "display": "none" })
    }),
    // height calculator
    $("#lengthCalculator").click(() => {
        $("#heiCalBox").slideDown("slow"),

        $("#simCalBox").css({ "display": "none" }),
        $("#gradCalBox").css({ "display": "none" }),
        $("#curnCalBox").css({ "display": "none" })
    }),
    // currency calculator
    $("#currencyCalculator").click(() => {
        $("#curnCalBox").slideDown("slow"),

        $("#simCalBox").css({ "display": "none" }),
        $("#gradCalBox").css({ "display": "none" }),
        $("#heiCalBox").css({ "display": "none" })
    }),

    $("#secondaryClassBox").css({ "display": "none" }),
    // for 1 to 10 class student
    $("#primaryClass").click(() => {
        $("#primaryClassBox").fadeIn("slow"),
        $("#secondaryClassBox").css({ "display": "none" })
    }),
    $("#secondaryClass").click(() => {
        $("#secondaryClassBox").fadeIn("slow"),
        $("#primaryClassBox").css({ "display": "none" })
    })
)

/*
    Grade Calculator
*/
// primary classes result
function primaryResult() {
    var totalMarks = 0
    var percentage = 0
    var grade = null
    var hindi = document.getElementById("hindiMarks").value
    var english = document.getElementById("englishMarks").value
    var maths = document.getElementById("mathsMarks").value
    var science = document.getElementById("scienceMarks").value
    var ss = document.getElementById("socialScienceMarks").value
    var thirdLang = document.getElementById("thirdLangMarks").value

    // total marks
    totalMarks = parseFloat(hindi) + parseFloat(english) + parseFloat(maths) + parseFloat(science) + parseFloat(ss) + parseFloat(thirdLang)
    document.getElementById("totalMarks").value = totalMarks

    // percentage
    percentage = ((totalMarks / 600) * 100)
    document.getElementById("percent").value = percentage

    // grade
    if (33 <= percentage && percentage < 45) {
        grade = "D"
    } else if (45 <= percentage && percentage < 60) {
        grade = "C"
    } else if (60 <= percentage && percentage < 75) {
        grade = "B"
    } else if (75 <= percentage && percentage < 100) {
        grade = "A"
    } else {
        grade = "Failed"
    }
    document.getElementById("grade").value = grade

    console.log(" Total Marks = " + totalMarks)
    console.log(" Percentage = " + percentage + "%")
    console.log(" Grade = " + grade)
}
// secondary classes results
function secondaryResult() {
    var totalMarks = 0
    var percentage = 0
    var grade = null
    var hindi = document.getElementById("secHindiMarks").value
    var english = document.getElementById("secEnglishMarks").value
    var maths = document.getElementById("secMathsMarks").value
    var physics = document.getElementById("secPhysicsMarks").value
    var chemistry = document.getElementById("secChemistryMarks").value

    // total marks
    totalMarks = parseFloat(hindi) + parseFloat(english) + parseFloat(maths) + parseFloat(physics) + parseFloat(chemistry)
    document.getElementById("secTotalMarks").value = totalMarks

    // percentage
    percentage = ((totalMarks / 500) * 100)
    document.getElementById("secPercent").value = percentage

    // grade
    if (33 <= percentage && percentage < 45) {
        grade = "D"
    } else if (45 <= percentage && percentage < 60) {
        grade = "C"
    } else if (60 <= percentage && percentage < 75) {
        grade = "B"
    } else if (75 <= percentage && percentage < 100) {
        grade = "A"
    } else {
        grade = "Failed"
    }
    document.getElementById("secGrade").value = grade

    console.log(" Total Marks = " + totalMarks)
    console.log(" Percentage = " + percentage + "%")
    console.log(" Grade = " + grade)
}

/* 
    Length Calculator
*/
var selectedValue = document.getElementById("selectedValue")
var inputValue = document.getElementById("inputValue")
var changedValue = document.getElementById("changedValue")
var resultValue = document.getElementById("resultValue")

function changeLength() {
    if (((selectedValue.value == "0" && changedValue.value == "0") || (selectedValue.value == "0" && changedValue.value)) || (selectedValue.value && changedValue.value == "0")) {
        alert("Please select a specific degit type.")
    } else {
        if (selectedValue.value == changedValue.value) {
            alert("Both selected degit type should not same.")
        } else {
            if (selectedValue.value == "Feet" && changedValue.value == "Inch") {
                var result = inputValue.value * 12
                resultValue.value = result
            } else if (selectedValue.value == "Feet" && changedValue.value == "Centimeter"){
                var result = inputValue.value * 30.48
                resultValue.value = result
            } else if (selectedValue.value == "Feet" && changedValue.value == "Meter"){
                var result = inputValue.value * 0.3048
                resultValue.value = result
            } else if (selectedValue.value == "Inch" && changedValue.value == "Feet"){
                var result = inputValue.value / 12
                resultValue.value = result
            } else if (selectedValue.value == "Inch" && changedValue.value == "Centimeter"){
                var result = inputValue.value * 2.54
                resultValue.value = result
            } else if (selectedValue.value == "Inch" && changedValue.value == "Meter"){
                var result = inputValue.value * 0.0254
                resultValue.value = result
            } else if (selectedValue.value == "Centimeter" && changedValue.value == "Feet"){
                var result = inputValue.value * 0.0328084
                resultValue.value = result
            } else if (selectedValue.value == "Centimeter" && changedValue.value == "Inch"){
                var result = inputValue.value * 0.3937008
                resultValue.value = result
            } else if (selectedValue.value == "Centimeter" && changedValue.value == "Meter"){
                var result = inputValue.value / 100
                resultValue.value = result
            } else if (selectedValue.value == "Meter" && changedValue.value == "Feet"){
                var result = inputValue.value * 3.28084
                resultValue.value = result
            } else if (selectedValue.value == "Meter" && changedValue.value == "Inch"){
                var result = inputValue.value * 39.37008
                resultValue.value = result
            } else if (selectedValue.value == "Meter" && changedValue.value == "Centimeter"){
                var result = inputValue.value * 100
                resultValue.value = result
            } else {
                console.error("Error")
            }
        }
    }
}

/*
    Currency Calculator
*/
var currSelectedValue = document.getElementById("currSelectedValue")
var currInputValue = document.getElementById("currInputValue")
var currChangedValue = document.getElementById("currChangedValue")
var currResultValue = document.getElementById("currResultValue")

function changeCurrency(){
    if (((currSelectedValue.value == "0" && currChangedValue.value == "0") || (currSelectedValue.value == "0" && currChangedValue.value)) || (currSelectedValue.value && currChangedValue.value == "0")) {
        alert("Please select a specific currency.")
    } else {
        if (currSelectedValue.value == currChangedValue.value) {
            alert("Both selected currency should not same.")
        } else {
            if (currSelectedValue.value == "INR" && currChangedValue.value == "USD") {
                var result = currInputValue.value / 73.14
                currResultValue.value = result
            } else if (currSelectedValue.value == "INR" && currChangedValue.value == "RUB") {
                var result = currInputValue.value / 0.99
                currResultValue.value = result
            } else if (currSelectedValue.value == "INR" && currChangedValue.value == "XBT") {
                var result = currInputValue.value / 840946.97
                currResultValue.value = result
            } else if (currSelectedValue.value == "USD" && currChangedValue.value == "INR") {
                var result = currInputValue.value * 73.14
                currResultValue.value = result
            } else if (currSelectedValue.value == "USD" && currChangedValue.value == "RUB") {
                var result = currInputValue.value * 74.08
                currResultValue.value = result
            } else if (currSelectedValue.value == "USD" && currChangedValue.value == "XBT") {
                var result = currInputValue.value * 0.00008700
                currResultValue.value = result
            } else if (currSelectedValue.value == "RUB" && currChangedValue.value == "INR") {
                var result = currInputValue.value * 0.99
                currResultValue.value = result
            } else if (currSelectedValue.value == "RUB" && currChangedValue.value == "USD") {
                var result = currInputValue.value / 74.08
                currResultValue.value = result
            } else if (currSelectedValue.value == "RUB" && currChangedValue.value == "XBT") {
                var result = currInputValue.value * 0.00000100
                currResultValue.value = result
            } else if (currSelectedValue.value == "XBT" && currChangedValue.value == "INR") {
                var result = currInputValue.value * 840946.97
                currResultValue.value = result
            } else if (currSelectedValue.value == "XBT" && currChangedValue.value == "USD") {
                var result = currInputValue.value * 11497.60
                currResultValue.value = result
            } else if (currSelectedValue.value == "XBT" && currChangedValue.value == "RUB") {
                var result = currInputValue.value * 851684.90
                currResultValue.value = result
            } else {
                console.error("Error")
            }
        }
    }
}