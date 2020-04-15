// header / subheader
const header = "Hotel Booking"
const subheader = "Loading JSON"
document.querySelector('header h1').innerHTML = header
document.querySelector('header h2').innerHTML = subheader

// buttons
const marriotBtn = document.getElementById('marriott')
const sharatonBtn = document.getElementById('sharaton')
const hiltonBtn = document.getElementById('hilton')

// output areas
const name = document.querySelector('#name span')
const address = document.querySelector('#address span')
const rooms = document.querySelector('#rooms span')
const types = document.querySelector('#types span')
const img = document.querySelector('.image')

// getData
async function getData (e) {
    try {
        fetch('./hotels.json')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                // deal with data
                switch (e.target.id) {
                    case 'marriott':
                        outputData(data.hotels, 0)
                        break
                    case 'sharaton':
                        outputData(data.hotels, 1)
                        break
                    case 'hilton':
                        outputData(data.hotels, 2)
                        break
                }
            })
    }
    catch (err) {
        console.log(err)
    }
}

function outputData (data, hotel) {
    name.textContent = data[hotel].name
    address.textContent = data[hotel].address
    rooms.textContent = data[hotel].rooms
    types.textContent = data[hotel].types.join(' ')
    img.innerHTML = `<img src=${data[hotel].img}>`
}

marriotBtn.onclick = getData
sharatonBtn.onclick = getData
hiltonBtn.onclick = getData