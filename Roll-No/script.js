var a = document.querySelector("a")
a.addEventListener("click", function () {
    a.remove();
    setTimeout(function () {
        alert(`Download Successful`)
    }, 1)
})
for (rollNo = 1; rollNo < totalStudents; rollNo++) {
    const simple = document.createElement('h1')
    simple.textContent = rollNo + "." + students[rollNo]
    document.body.appendChild(simple)
}