

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

        var payload = {};
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
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log("------------This response is okay------------" + response);
            //document.location.replace('/');

            const titleCreate = document.getElementById("createTitle")
            const descriptionCreate = document.getElementById("createDescription")
            const dateCreate = document.getElementById("createDate")

            titleCreate = payload.title;
            descriptionCreate = payload.description;
            dateCreate = payload.date;

        } else {
            alert('Could not make a post: Need to fillout title and description');
        }
    }
};

document
    .querySelector('.createpost-form')
    .addEventListener('submit', createPostFormHandler);