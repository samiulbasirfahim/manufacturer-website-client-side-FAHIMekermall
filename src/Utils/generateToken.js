const generateToken = (email, name) => {
    fetch("https://manufacturer-website-server.herokuapp.com/user", {
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
                window.localStorage.setItem(
                    "email",
                    email
                )
            }
        })
}

export default generateToken