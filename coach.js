document.addEventListener('DOMContentLoaded', () => {
    // Mock data for coach's athletes
    const myAthletes = [
        { name: 'Dipa Karmakar', photo: 'dipa.png' },
        { name: 'Hima Das', photo: 'hima.png' },
        { name: 'Neeraj Chopra', photo: 'niraj.jpg' }
    ];

    const athleteList = document.getElementById('athlete-list');
    myAthletes.forEach(athlete => {
        const card = document.createElement('div');
        card.className = 'athlete-card';
        card.innerHTML = `<img src="${athlete.photo}" alt="${athlete.name}"><p><strong>${athlete.name}</strong></p>`;
        athleteList.appendChild(card);
    });

    // Handle form submission
    const uploadForm = document.getElementById('upload-form');
    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('video-title').value;
        alert(`Training video "${title}" has been successfully uploaded for your athletes!`);
        uploadForm.reset();
    });
});