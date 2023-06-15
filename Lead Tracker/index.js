// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     // Push the value from the inputEl into the myLeads array 
//     // instead of the hard-coded "www.awesomeleads.com" value
//     // Google -> "get value from input field javascript"
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    // Clear out the input field
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {

         // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
             listItems += `
             <li>
                 <a target='_blank' href='${myLeads[i]}'>
                     ${myLeads[i]}
                 </a>
             </li>
             `
             
    }
    ulEl.innerHTML = listItems  
}




