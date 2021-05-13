import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(
                    (requestObject) => {
                        return `
                            <div>
                                <input type="checkbox" id="service--${requestObject.id}"
                                Description: ${requestObject.description}
                                Needed By: ${requestObject.neededBy}
                            </div>
                        `
                    }
                )
            }
        </ul>
    `

    return html
}