fetch("https://www.scorebat.com/video-api/v3/feed/?token=MTY5OTM5XzE3MjE3MzEwNTJfZDAyNWY3OTMwOWIxODcwYzM4MTMxOGNmZGQ0OWVhNzMyNTZhMmY3Mw==")
.then(res => res.json())
.then ( data => {
    console.log(data.response[0])
    document.querySelector('iframe').src = 'https://www.scorebat.com/embed/v/R0dZR3EzVUt5eEllakRGejJpenQxQT09/?token=MTY5OTM5XzE3MjE3MzE4OTFfOTlkY2I1MjRhOTBmYmZmMTcyMDlkM2Q0NzYyODM2OTEzYWFiMGVkNQ==&utm_source=api&utm_medium=video&utm_campaign=apifd'
})
 