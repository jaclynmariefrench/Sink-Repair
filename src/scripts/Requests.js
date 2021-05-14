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
                                    <button class="request__delete" id="request--${requestObject.id}">Delete</button>
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

// return `
//     <li>
//         ${request.description}
//         <button class="request__delete"
//                 id="request--${request.id}">
//             Delete
//         </button>
//     </li>
// `