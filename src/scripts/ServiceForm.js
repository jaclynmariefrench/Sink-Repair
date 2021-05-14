

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