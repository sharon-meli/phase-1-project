// document.addEventListener("DOMContentLoaded" ,()=>{
//     fetchAllPatients()
// })
// // GET
function patientsDetails(data){
fetch("http://localhost:3000/patientDetails")
.then(response=>response.json())
.then(data=>console.log(data))
}
//  function fetchAllPatients(){
//     return fetch("http://localhost:3000/patientDetails")
//     .then(response=>response.json())
//     .then(patientData=>patientData.forEach(data=>{
//         displayEachPatient(data)
    
//     })) 
// }
// // POST
// function displayEachPatient(data){
//     const divBody = document.getElementById("displayPatients")
//     const name =document.createElement('p')
//     name.textContent=data.name
//     const id = document.createElement('p')
//     id.textContent=data.id
//     const gender =document.createElement('p')
//     gender.textContent=data.gender
//     const age=document.createElement('p')
//     age.textContent=data.age
//     const residence =document.createElement('p')
//     residence.textContent=data.residence
//     const date =document.createElement('p')
//     date.textContent = data.date
//     const weight =document.createElement('p')
//     weight.textContent = data.weight
//     divBody.appendChild(id)
//     divBody.appendChild(name)
//     divBody.appendChild(gender)
//     divBody.appendChild(age)
//     divBody.appendChild(residence)
//     divBody.appendChild(date)
//     divBody.appendChild(weight) 

// }
// let form = document.querySelector("#patientForm")
// form = document.addEventListener("submit", postingData)

// function postingData(event){
//     event.preventDefault()
//     let patientDetails = {
//         id: event.target.idInput.value,
//         name: event.target.nameInput.value,
//         gender: event.target.genderInput.value,
//         age: event.target.ageInput.value,
//         residence: event.target.residenceInput.value,
//         date:event.target.dateInput.value,
//         weight: event.target.weightInput.value
    
// }
// console.log(patientDetails)
// postingDetails(patientDetails)
// }
// function postingDetails(patientDetails){
//     fetch("http://localhost:3000/patientDetails",{
//     method :"POST",
//     headers:{
//         "Content-Type" :"application/json", 
//         Accept:"application/json"
//     },
//      body:JSON.stringify(patientDetails)
// })
// .then(response=>response.json())
// .then(data=>console.log(data))
// }


// // DELETE
// function deleteDatabase(id){
//     fetch(`http://localhost:3000/patientDetails/$(id)`),{
//         method:"Delete",
//         headers:{
//             "Content-Type":"application/json"
//         },
// }
// .then(response=>response.json)
// .then(data=>console.log(data))
// }