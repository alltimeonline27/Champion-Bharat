document.addEventListener('DOMContentLoaded', () => {
    // Mock data for the government dashboard
    const mockAthletes = [
        { id: 'CB12345', name: 'Neeraj Chopra', sport: 'Javelin Throw', score: 85, risk: 'Low', status: 'Flagged for Review' },
        { id: 'CB67890', name: 'Hima Das', sport: '200m Sprint', score: 92, risk: 'Low', status: 'Top Performer' },
        { id: 'CB11223', name: 'Dipa Karmakar', sport: 'Gymnastic', score: 88, risk: 'Medium', status: 'Monitored' },
        { id: 'CB44556', name: 'Saanvi Gupta', sport: 'Swimming', score: 79, risk: 'Low', status: 'Active' },
        { id: 'CB77889', name: 'Vikram Singh', sport: 'Weightlifting', score: 95, risk: 'High', status: 'Injury Prone' }
    ];

    const tableBody = document.querySelector('#athlete-table tbody');
    
    // Populate the table with mock data
    mockAthletes.forEach(athlete => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${athlete.id}</td>
            <td>${athlete.name}</td>
            <td>${athlete.sport}</td>
            <td>${athlete.score}</td>
            <td>${athlete.risk}</td>
            <td>${athlete.status}</td>
        `;
        tableBody.appendChild(row);
    });
});