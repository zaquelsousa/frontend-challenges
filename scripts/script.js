const thumbnailsContainer = document.getElementById('ChallengeConteiner');


fetch('../desafios.json')
    .then(response => response.json())
    .then(data => {
        //iterar sobre os dados do json usando forEach
        data.forEach(challenge => {
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('thumbnail');

            const img = document.createElement('img');
            img.src = challenge.thumbnail;
            thumbnail.appendChild(img);

            const title = document.createElement('h4');
            title.textContent = challenge.title
            thumbnail.appendChild(title);

            const date = document.createElement('p');
            date.textContent = challenge.date
            thumbnail.appendChild(date);

            const description = document.createElement('p');
            description.textContent = challenge.description
            thumbnail.appendChild(description);

            const link = document.createElement('a');
            link.href = challenge.liveDemoUrl
            link.textContent = 'live Demo';
            thumbnail.appendChild(link);

            thumbnailsContainer.appendChild(thumbnail);
        })

    });