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
                                <ul>
                                    <div></div>
                                    Service Request: ${requestObject.id}
                                    <div></div>
                                    Description: ${requestObject.description}
                                    <div></div>
                                    Needed By: ${requestObject.neededBy}
                                </ul>
                            </div>
                        `
                    }
                ).join("")
            }
        </ul>
    `

    return html
}