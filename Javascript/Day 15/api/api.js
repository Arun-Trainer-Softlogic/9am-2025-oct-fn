const container = document.getElementById("followers");

const url = "https://api.github.com/users/arun-trainer-softlogic/followers";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })

  .then((followers) => {
    if (!followers || followers.length === 0) {
      container.innerHTML = "<p>No followers found 😕</p>";
      return;
    }

    followers.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
      <img class="avatar" src ="${user.avatar_url}" >
      <div class="login">${user.login}</div>  
      <a class="profile-link" href="${user.html_url}">View profile</a>
      `;
      container.appendChild(card);
    });
  })

  .catch((error) => {
    container.innerHTML = `<p>failed to fetch : ${error.message}</P>`;
    console.error(error);
  });
