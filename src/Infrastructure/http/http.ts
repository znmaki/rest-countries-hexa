import axios from "axios"

const headers = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const get = async <T>(url: string) => {
    const { data } = await axios.get(url, headers)
    return data as T
}

export const http = {
    get
}