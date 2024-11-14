const url = "https://api.openf1.org/v1/drivers"



async function getdriver() {
    const response = await fetch(url);
    const data = await response.json();
    const element = document.querySelector('.container')


    for (const driver of data) {
        element.innerHTML += `
    <div class="driver_number">
        <img src="${driver.headshot_url}" alt="">
        <h1>${driver["driver_number"]}</h1>
    </div>
    `
    }

}

getdriver();
