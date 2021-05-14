import { sendRequest } from "./dataAccess.js"


export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label__description" for="serviceDescription">Description</label>
            <div></div>
            <input type="text" name="serviceDescription" class="input" />
        </div>
        <div class="field">
            <label class="label__address" for="serviceAddress">Address</label>
            <div></div>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label__budget" for="serviceBudget">Budget</label>
            <div></div>
            <input type="number" name="serviceBudget" class="input" />
        </div>
        <div class="field">
            <label class="label__serviceDate" for="serviceDate">Date needed</label>
            <div></div>
            <input type="date" name="serviceDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})