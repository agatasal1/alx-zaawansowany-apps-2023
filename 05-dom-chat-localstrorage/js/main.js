const messageForm = document.querySelector('#messageForm');
const authorInput = document.querySelector('#authorInput');
const messageInput = document.querySelector('#messageInput');
const postsList = document.querySelector('#postsList');
const searchingForm = document.querySelector('#searchingForm');
const searchInput = document.querySelector('#searchInput');

// ES9 Nullish operator
let posts = JSON.parse(localStorage.getItem('posts') ?? []);

////renderowanie listy
const renderPosts = (postsToRender) => {
    postsList.innerHTML = '';

    postsToRender.forEach(post => {
        postsList.innerHTML += `
<li>Author: <strong>${post.author}</strong> wrote: ${post.message} </li>
`
    })
}

//////////////walidacja

const validate = () => {

    if (authorInput.value.length < 1) {
        alert('Pole autor nie może być puste.')
        return false
    }

    if (messageInput.value.length <= 2) {
        alert('Pole message musi mieć więcej niż 2 znaki.')
        return false
    }

    return true
}




const handleSubmit = (event) => {
    event.preventDefault()

    const newPost = {
        author: authorInput.value,
        message: messageInput.value
    }

    const isValid = validate(newPost)

    if (!isValid) return

    const newPosts = [newPost, ...posts];
    posts = newPosts;
    localStorage.setItem('posts', JSON.stringify(newPosts));
    renderPosts(newPosts)

    // searchInput.value = '';
    // authorInput.value = '';
    // messageInput.value = '';


    ////////////////wbudowana funkcja do resetowania formularza
    messageForm.reset();
}


const handleSearchPosts = (event) => {
    event.preventDefault()

    // filter
    const searchedPosts = posts.filter(post => post.message.toUpperCase().includes(searchInput.value.toUpperCase()))


    //forEach
    // let searchedPosts = [];
    // posts.forEach(post => {
    //     if (post.message.toUpperCase().includes(searchInput.value.toUpperCase())) {
    //         searchedPosts.push(post)
    //     }
    // })

    renderPosts(searchedPosts)
}


renderPosts(posts)
messageForm.addEventListener('submit', handleSubmit);
searchingForm.addEventListener('submit', handleSearchPosts)