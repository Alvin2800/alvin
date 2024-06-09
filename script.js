// Liste des patients (exemple de données)
const patients = [
    { id: 1, name: 'John Doe', age: 35, condition: 'Hypertension', record: 'Patient has been experiencing high blood pressure for the past 5 years. Prescribed medication includes Lisinopril.' },
    { id: 2, name: 'Jane Smith', age: 29, condition: 'Diabetes', record: 'Patient diagnosed with type 2 diabetes. Current treatment involves Metformin and lifestyle changes.' },
    // Ajoutez plus de patients ici
];

// Fonction pour afficher la liste des patients
function displayPatients() {
    const patientList = document.getElementById('patient-list');
    patients.forEach(patient => {
        const li = document.createElement('li');
        li.textContent = `${patient.name} (Age: ${patient.age}) - ${patient.condition}`;
        li.onclick = () => displayMedicalRecord(patient);
        patientList.appendChild(li);
    });
}

// Fonction pour afficher le dossier médical d'un patient
function displayMedicalRecord(patient) {
    const medicalRecordDiv = document.getElementById('medical-record');
    medicalRecordDiv.innerHTML = `
        <h3>Dossier Médical de ${patient.name}</h3>
        <p><strong>Âge:</strong> ${patient.age}</p>
        <p><strong>Condition:</strong> ${patient.condition}</p>
        <p><strong>Historique:</strong> ${patient.record}</p>
    `;
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    displayPatients();
});

// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
});
