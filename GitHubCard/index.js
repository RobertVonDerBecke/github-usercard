import axios from 'axios'
const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
  .then(resp => {
    console.log(resp.data)
    makeCard(resp.data)
  })
  .catch(err =>{
    console.log(err)
  })
  
})

const domCard = document.querySelector('.cards')
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


function makeCard(obj){
  //create elements and add class and content
  const div = document.createElement('div');
  div.classList.add('card');
  const img = document.createElement('img')
  img.src = `${obj.avatar_url}`
  const divInfo = document.createElement('div')
  divInfo.classList.add('card-info');
  const h3 = document.createElement('h3');
  h3.textContent = `${obj.name}`
  h3.classList.add('name');
  const pUser = document.createElement('p')
  pUser.textContent = `${obj.login}`
  pUser.classList.add('username')
  const pLoc = document.createElement('p');
  pLoc.textContent = `${obj.location}`
  const pPro = document.createElement('p');
  pPro.textContent = 'Profile:'
  const a = document.createElement('a');
  a.href = `${obj.html_url}`;
  const pFollowers = document.createElement('p');
  pFollowers.textContent = `${obj.followers}`;
  const pFollowing = document.createElement('p');
  pFollowing.textContent = `${obj.following}`;
  const pBio = document.createElement('p');
  pBio.textContent = `${obj.bio}`

  //append to page
  domCard.appendChild(div);
  div.appendChild(img);
  div.appendChild(divInfo);
  divInfo.appendChild(h3)
  divInfo.appendChild(pUser)
  divInfo.appendChild(pLoc)
  divInfo.appendChild(pPro)
  pPro.appendChild(a)
  divInfo.appendChild(pFollowers)
  divInfo.appendChild(pFollowing)
  divInfo.appendChild(pBio)
return div;
}



