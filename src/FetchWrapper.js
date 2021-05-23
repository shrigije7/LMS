import React from "react"

class FetchWrapper
{
    constructor(baseURL)
    {
        this.baseURL=baseURL;
    }
   get(endpoint)
   {
    return   fetch(this.baseURL+endpoint).then(Response=>Response.json())
   }
}

export default FetchWrapper;