
export async function sendEmail({name, email, message}) {

    try {
        const res = await fetch("/api/sendEmail", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({name, email, message}), 
        });

        if (!res.ok) {
            throw new Error("Error http: " + res.status);
        }

        const data = await res.json();
        return {success: true, data: data};

    } catch(error) {
        console.error("Error en sendEmail:" + error);
        return {success: false, error: error.message};
    }
}