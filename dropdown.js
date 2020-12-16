function TestsFunction() {
    var T = document.getElementById("TestsDiv"),
        displayValue = "";
    if (T.style.display == "")
        displayValue = "none";

    T.style.display = displayValue;
}