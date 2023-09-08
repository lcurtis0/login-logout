

const createPostFormHandler = async (event) => {
    event.preventDefault();
  
    const Title = document.querySelector('#Title-post').value.trim();
    const description = document.querySelector('#description-post').value.trim();
  
    if (Title && description) {
      const response = await fetch('/api/users/post', {
        method: 'POST',
        body: JSON.stringify({Title, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Could not make a post: Need to fillout title and description');
      }
    }
  };