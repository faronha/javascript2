const video = document.querySelector("video")
const filtro = document.querySelector("#filtro")
const caputar = document.querySelector("#capturar")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

navigator.mediaDevices.getUserMedia({video : true})
    .then(stream=> {
        video.srcObject = stream
    })
    .cath(err => {
        alert("Não foi possivel acessar a camera")
    })
filtro.addEventListener("change", () => {
    video.style.filter = filtro.value
})

caputar.addEventListener("click", () => {
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    ctx.filter = filtro.value
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    const image = canvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.href = image
    link.download = 'font.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
})