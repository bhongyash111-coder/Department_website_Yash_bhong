// Sample data - In a real application, this would come from a backend
const updates = [
    { title: 'New Study Materials Available', date: '2024-03-20' },
    { title: 'Upcoming Workshop on Web Development', date: '2024-03-25' },
    { title: 'Placement Drive Schedule Released', date: '2024-03-28' }
];

// Load updates
function loadUpdates() {
    const updatesList = document.getElementById('updates-list');
    updates.forEach(update => {
        const updateElement = document.createElement('div');
        updateElement.className = 'update-item mb-2 fade-in';
        updateElement.innerHTML = `
            <h6 class="mb-1">${update.title}</h6>
            <small class="text-muted">${update.date}</small>
        `;
        updatesList.appendChild(updateElement);
    });
}

// Handle attendance form submission
function handleAttendanceSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const attendanceData = {
        studentId: formData.get('studentId'),
        date: formData.get('date'),
        status: formData.get('status')
    };
    
    // In a real application, this would be sent to a backend
    console.log('Attendance submitted:', attendanceData);
    alert('Attendance recorded successfully!');
}

// Handle resource upload
function handleResourceUpload(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const file = formData.get('resourceFile');
    
    // In a real application, this would be sent to a backend
    console.log('Resource uploaded:', file.name);
    alert('Resource uploaded successfully!');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Load updates
    loadUpdates();
    
    // Add event listeners for forms
    const attendanceForm = document.getElementById('attendance-form');
    if (attendanceForm) {
        attendanceForm.addEventListener('submit', handleAttendanceSubmit);
    }
    
    const resourceForm = document.getElementById('resource-upload-form');
    if (resourceForm) {
        resourceForm.addEventListener('submit', handleResourceUpload);
    }
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 