export const loginUser = (emailFromForm, passwordFromForm) => {
    return fetch('http://localhost:8000/users')
        .then(res => res.json())
        .then(users => {
            const user = users.find(user => {
                return user.email === emailFromForm
                    && user.password === passwordFromForm
            })

            if ((!user)) throw new Error("Couldn't find a user")
            localStorage.setItem('authenticatedUser', user.email)
        })
}


export const getUser = () => {
    const user = localStorage.getItem('authenticatedUser');


    if (!user) {
        window.location.href = '/login.html'
    }

    return user;

}