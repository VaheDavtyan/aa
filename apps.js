let d = new Date();
let y = d.getFullYear()
for (let i = y; i > y - 1000; i--) {
    let option = document.createElement("option")
    option.append(i)
    sel.append(option)

}