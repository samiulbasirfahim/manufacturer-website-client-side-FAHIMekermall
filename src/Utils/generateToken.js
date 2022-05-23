const generateToken = (email, name) => {
    fetch("http://localhost:4000/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: email,
            name: name,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.token) {
                window.localStorage.setItem(
                    "authorization_token",
                    data.token
                )
            }
        })
}

export default generateToken