// Create a new post in the user's dashboard 
const newPost = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#titleNewPost').value.trim();
    const post_content = document.querySelector('#contentNewPost').value.trim();

  
    if (post_title && post_content) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ post_title, post_content }),
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
  .querySelector('#new-post-form')
  .addEventListener('submit', newPost);
  