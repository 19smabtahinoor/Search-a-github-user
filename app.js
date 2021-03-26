//select html references
const searchInput = document.querySelector('.search-bar')
const searchForm = document.querySelector('.user-form')
const main = document.querySelector('.main')
const body = document.querySelector('body')


searchForm.addEventListener('submit',(event) => {
    event.preventDefault()
    getUser(searchInput.value)
})

const apiUrl ="https://api.github.com/users/" //API url

const getUser = (userName) => {
    fetch(apiUrl + userName)
    .then( response => {
        if(response.status != 404 ){
            return response.json()
        }else{
            main.innerHTML = '<h1 style="color: #ffffff;background: red;padding: 20px;border-radius: 10px;"> No user Found</h1>'
        }
    })
       
    .then(data => {
        console.log(data)
        let output =`
        
        <div class="card">
            <div class="user-avatar">
            <a href="${data.html_url}"target="_blank">
                 <img src="${data.avatar_url}"alt="user Avatar"class="avatar_user">
            </a>
               
            </div>

            <div class="user-info">
            <div class="user-data-heading">
                <a href="${data.html_url}"target="_blank"><h2 class="user-name">${data.name} <br><span class="user_login">(${data.login})</span></h2></span></a>

                <p class="user-bio">${data.bio}</p><br>
                <p class="user-loaction">Lives in ${data.location}</p><br>
                <a href="${data.blog}"target="_blank"><p class="user-loaction">${data.blog}</p></a>

            </div>

            <div class="user-follwers-follwing-repos">
                <ul class="list-of-followers-follwing">
                    <li> ${data.followers} <b>Follwers</b></li>
                    <li> ${data.following} <b>Follwing</b></li>
                    <li> ${data.public_repos} <b>Repos</b></li>
                </ul>
            </div>


            <div class="user-repos-details">
                <a href="#"class="repos">AN-Keep</a>
                <a href="#"class="repos">Expanding Image</a>
                <a href="#"class="repos">Brigate Website</a>
                <a href="#"class="repos">Get User Profile</a>
                <a href="#"class="repos">Progess-Step</a>
            </div>
            <span class="projectby">Project By <a title="Follow me on github "class="link-kabid"href="https://github.com/19smabtahinoor"target="_blank">S.M.Abtahi Noor</a></span>

        </div>
        
        `

        main.innerHTML = output

    })
    .catch(error => {
        if(error.response.status == 404){
            main.innerHTML = `<h1>Not Found the user</h1>`
        }
    })
}

