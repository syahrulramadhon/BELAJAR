const token = ~~[Math.random() * 123456789]

const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username) {
    console.log('processing token user now...')
    return new Promise((succsess, failed) => {
        setTimeout(() => {
            if (username!= "syahrul_ramadan") failed("sorry wrong data")
            succsess({token})
        }, 300)
    })
}

function getUser(token) {
    console.log('processing apikey now...')
    return new Promise((succsess, failed) => {
        if (!token) failed("sorry, no token, cannot accsess")
        setTimeout(() => {
            succsess({ apiKey: "xkey123"})
        }, 500)
    })
}

function getPictures(apiKey) {
    console.log('processing pictures now...')
    return new Promise((succsess, failed) => {
        if (!apiKey) failed("sorry, no apikey, cannot accsess")
        setTimeout(() => {
            succsess({ pic : pictures })
        }, 1500)
    })
}

async function UserDisplay() {
    try {
        const {token} = await login("syahrul_ramadan")
        const {apiKey} = await getUser(token)
        const {pic} = await getPictures(apiKey)

        console.log(`
            token anda adalah: ${token}
            apiKey anda adalah: ${apiKey}
            hasil request gambar anda adalah: ${pic}
        `)
    } catch (err) {
        confirm.log(err)
    }
}

UserDisplay()