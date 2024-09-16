async function apicall() {
    let url = `https://randomuser.me/api/?results=3`
    try {
        const response = await fetch(url);
        if (!response.ok) {
            resultDisplay.style.display = "none";
            alert("Invalid Location , Please Enter a valid Location")
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        const results = (json.results);
        results.forEach(user => {

            let name = `${user.name.first} ${user.name.last}`;
            let img_url = `${user.picture.large}`
            let mail = `${user.email}`


            let img_ = document.querySelector('.testi_dp');
            let name_ = document.querySelector('.testi_name');
            let mail_ = document.querySelector('.testi_mail');


            let parent = document.querySelector('.testi_parent');
            let child = document.querySelector('.testi_child');






            let div = document.createElement('div');
            div.innerHTML = `<div
                class="bg-white/20 h-[350px] w-[350px] rounded-3xl flex flex-col justify-evenly items-center testi_child ">
                <img src=${img_url} alt="" m class="h-[130px] w-[130px] rounded-full testi_dp">
                <h1 class="text-[28px] testi_name"> ${name} </h1>
                <p class="text-center text-secondary px-8 testi_mail text-wrap"> ${mail}</p>
                </div>`;


            parent.appendChild(div);
        });

    }
    catch (error) {
        console.log(error);
    }
}


apicall()