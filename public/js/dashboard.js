// Create a new post in the user's dashboard 
const newPost = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#titleNewPost').value.trim();
    const postDescription = document.querySelector('#contentNewPost').value.trim();

  
    if (name && postDescription) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ name, postDescription }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };

  document
  .querySelector('.new-post-form')
  .addEventListener('submit', newPost);
  