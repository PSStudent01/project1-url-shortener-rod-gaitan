//apiService.js
export async function shortenURL(originalURL) { 
    const bitlyToken = "de298a4328d98040f1e8b5571e38ec445a5c2dff";

    try {
        const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
            method: "POST", 
            headers: {
                "Authorization": "Bearer de298a4328d98040f1e8b5571e38ec445a5c2dff",  
                "Content-Type": "application/json"  
            },
            body: JSON.stringify({ long_url: originalURL })  
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Unable to shorten URL");
        }

        return data.link;
    } catch (error) {
        throw error;
    }
}


/*
export async function shortenURL(orginaURL){
    const bitlyToken = "0b11d0335063ce4f25110431a90de9cc2973d1c0"

    try {
        const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
            method: "POST", 
            headers: {
                    "Authorization": `Token ${bitlyToken}`, 
                    "Content-Type": "application/jason"
            },
            bosy: JSON.stringify({long_url: orginaURL})

        })

        const data = await response.json()

        if(!response.ok){
            throw new Error(data.message || "Unable to shorten URL")
        }

        return data.link
    } catch (error){
        throw error;
    }

}
    */