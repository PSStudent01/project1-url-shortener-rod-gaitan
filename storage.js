
//storage.js
const storageKey = "shortenedLinks"

export function saveLink(link) {
        const links = getLinks()
        links.push(link)
        localStorage.setItem(storageKey, JSON.stringify(links))
}

export function getLinks() {
    return JSON.parse( localStorage.getItem(storageKey) || "[]")

}




/*
const storageKey = "shortenedLinks"

export function saveLink(link) {
        const links = getLinks()
        links.push(link)
        localStorage.setItem(storageKey, JSON.stringify(links))
}

export function getLinks() {
    return JSON.parse( localStorage.getItem(storageKey) || "[]")

}
    */