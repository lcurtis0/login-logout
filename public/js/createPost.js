

const createPostFormHandler = async (event) => {
    event.preventDefault();

    const Title = document.querySelector('#title-post').value.trim();
    const description = document.querySelector('#description-post').value.trim();

    if (Title && description) {
        /*
                var payload = {};
                payload.name = Title;
                payload.title = Title;
                payload.description = description;
                payload.date = new Date();
                 //Replace zero with the dashboard_id here from your datase
                 //Once Workbench is installed. 
                payload.dashboard_id =0 ;
        */

        let payload = {};
        payload.name = Title;
        payload.title = Title;
        payload.description = description;
        payload.date = new Date();
        //Replace zero with the dashboard_id here from your datase
        //Once Workbench is installed. 
        //payload.dashboard_id = dashboard.id;

        const response = await fetch('/api/createpost/write', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }, // can be packaged along with any post or get request moving between clients and servers - credit to The codeing Train
        })
        
        /*
        
        .then(response =>{
            return response.json();
        }).then(data => {
            data.forEach(user =>{
                const insertName = '<li>${payload.name}</li>';

                document.querySelector('section').insertAdjacentHTML('beforeend',insertName);
            })
        });

        */

        if (response.ok) {
            console.log("------------This response is okay------------" + response);
            console.log(payload);
        
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