

const createPostFormHandler = async (event) => {
    event.preventDefault();

    const Title = document.querySelector('#title-post').value.trim();
    const description = document.querySelector('#description-post').value.trim();

    // once title and description are entered information can be added to payload and be entered
    if (Title && description) { 

        let payload = {};
        payload.name = Title;
        payload.title = Title;
        payload.description = description;
        payload.date = new Date(); 

        const response = await fetch('/api/createpost/write', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }, // can be packaged along with any post or get request moving between clients and servers - credit to The codeing Train
        })

        if (response.ok) {
            console.log("------------This response is okay------------" + response);
            console.log(payload);
        
            // grabs the id and assigns a new value
            let titleCreate = document.getElementById("createTitle")
            let descriptionCreate = document.getElementById("createDescription")
            let dateCreate = document.getElementById("createDate")
        
            titleCreate.textContent = payload.title;
            descriptionCreate.textContent = payload.description;
            dateCreate.textContent = payload.date;
        }  else {
            alert('Could not make a post: Need to fillout title and description');
        }
    }
};

document
    .querySelector('.createpost-form')
    .addEventListener('submit', createPostFormHandler);