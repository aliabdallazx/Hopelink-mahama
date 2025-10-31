// Education Access Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initEducationPage();
});

function initEducationPage() {
    // Learning progress animation
    initProgressBars();
    
    // Start learning buttons
    const startLearningBtns = document.querySelectorAll('.start-learning');
    startLearningBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const level = this.getAttribute('data-level');
            startLearningCourse(level);
        });
    });
    
    // Language learning buttons
    const languageBtns = document.querySelectorAll('.language-btn');
    languageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const language = this.getAttribute('data-language');
            startLanguageCourse(language);
        });
    });
    
    // Download buttons
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const resource = this.getAttribute('data-resource');
            downloadResource(resource);
        });
    });
    
    // Video items
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const video = this.getAttribute('data-video');
            playEducationalVideo(video);
        });
    });
    
    // Study group buttons
    document.getElementById('find-study-group')?.addEventListener('click', findStudyGroup);
    document.getElementById('create-study-group')?.addEventListener('click', createStudyGroup);
    
    // Volunteer signup
    document.getElementById('volunteer-signup')?.addEventListener('click', volunteerSignup);
    
    // Upload material form
    const uploadForm = document.getElementById('upload-material-form');
    if (uploadForm) {
        uploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            uploadTeachingMaterial();
        });
    }
    
    // Teacher resources
    document.getElementById('access-teacher-resources')?.addEventListener('click', accessTeacherResources);
}

function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
    });
}

function startLearningCourse(level) {
    const courses = {
        'primary': 'Primary Education Course',
        'secondary': 'Secondary Education Course'
    };
    
    showNotification(`Starting ${courses[level]}... Redirecting to learning portal.`, 'success');
    
    // In a real implementation, this would redirect to the actual course
    setTimeout(() => {
        // Simulate course loading
        const modal = createCourseModal(level);
        document.body.appendChild(modal);
    }, 1000);
}

function startLanguageCourse(language) {
    const languageNames = {
        'english': 'English',
        'french': 'French', 
        'kinyarwanda': 'Kinyarwanda'
    };
    
    showNotification(`Starting ${languageNames[language]} language course...`, 'success');
    
    // Simulate language course interface
    const modal = createLanguageModal(language);
    document.body.appendChild(modal);
}

function downloadResource(resource) {
    const resourceNames = {
        'math-primary': 'Mathematics Workbook (Primary)',
        'science-secondary': 'Science Textbook (Secondary)',
        'language-guide': 'Language Learning Guide'
    };
    
    showNotification(`Downloading ${resourceNames[resource]}...`, 'info');
    
    // Simulate download progress
    simulateDownload(resourceNames[resource]);
}

function playEducationalVideo(video) {
    const videoTitles = {
        'math-basics': 'Mathematics Basics',
        'science-experiments': 'Science Experiments',
        'english-lesson': 'English Lesson'
    };
    
    const modal = createVideoModal(video, videoTitles[video]);
    document.body.appendChild(modal);
}

function findStudyGroup() {
    showNotification('Searching for available study groups in your area...', 'info');
    
    // Simulate search results
    setTimeout(() => {
        const modal = createStudyGroupModal();
        document.body.appendChild(modal);
    }, 1500);
}

function createStudyGroup() {
    const modal = createStudyGroupForm();
    document.body.appendChild(modal);
}

function volunteerSignup() {
    const modal = createVolunteerForm();
    document.body.appendChild(modal);
}

function uploadTeachingMaterial() {
    const title = document.getElementById('material-title').value;
    const type = document.getElementById('material-type').value;
    
    showNotification(`Thank you for uploading "${title}" (${type}). Our team will review it shortly.`, 'success');
    
    // Reset form
    document.getElementById('upload-material-form').reset();
}

function accessTeacherResources() {
    showNotification('Opening teacher resource library...', 'info');
    
    // Simulate resource library
    const modal = createTeacherResourcesModal();
    document.body.appendChild(modal);
}

// Modal creation functions
function createCourseModal(level) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <span class="close-modal">&times;</span>
            <h2>${level === 'primary' ? 'Primary Education' : 'Secondary Education'} Course</h2>
            <div class="course-interface">
                <div class="video-player">
                    <div style="background: #000; color: white; padding: 100px 0; text-align: center;">
                        📹 Educational Video Playing
                    </div>
                </div>
                <div class="course-navigation">
                    <button class="btn btn-outline prev-lesson">Previous</button>
                    <button class="btn btn-primary next-lesson">Next Lesson</button>
                </div>
                <div class="course-progress">
                    <h4>Course Progress</h4>
                    <div class="progress-bar">
                        <div class="progress" style="width: 65%"></div>
                    </div>
                    <p>12 of 20 lessons completed</p>
                </div>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    return modal;
}

function createLanguageModal(language) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close-modal">&times;</span>
            <h2>${language.charAt(0).toUpperCase() + language.slice(1)} Language Learning</h2>
            <div class="language-exercise">
                <div class="exercise-question">
                    <h3>Translate this sentence:</h3>
                    <p>"Hello, how are you?"</p>
                </div>
                <div class="exercise-answer">
                    <input type="text" class="form-control" placeholder="Type your translation...">
                </div>
                <button class="btn btn-primary check-answer">Check Answer</button>
                <div class="exercise-feedback" style="display: none; margin-top: 15px; padding: 10px; background: #e9ecef; border-radius: 4px;">
                    <strong>Correct answer:</strong> "Bonjour, comment allez-vous?" (for French)
                </div>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    
    // Add exercise functionality
    const checkBtn = modal.querySelector('.check-answer');
    const feedback = modal.querySelector('.exercise-feedback');
    
    checkBtn.addEventListener('click', function() {
        feedback.style.display = 'block';
    });
    
    return modal;
}

function createVideoModal(video, title) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <span class="close-modal">&times;</span>
            <h2>${title}</h2>
            <div class="video-player">
                <div style="background: #000; color: white; padding: 150px 0; text-align: center;">
                    🎬 Now Playing: ${title}
                </div>
            </div>
            <div class="video-controls" style="margin-top: 15px; display: flex; gap: 10px;">
                <button class="btn btn-outline">Previous</button>
                <button class="btn btn-primary">Pause</button>
                <button class="btn btn-outline">Next</button>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    return modal;
}

function createStudyGroupModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close-modal">&times;</span>
            <h2>Available Study Groups</h2>
            <div class="study-group-list">
                <div class="study-group-item" style="padding: 15px; border: 1px solid #ddd; margin-bottom: 10px; border-radius: 4px;">
                    <h4>Mathematics Study Group</h4>
                    <p><strong>When:</strong> Mondays & Wednesdays, 3-4 PM</p>
                    <p><strong>Where:</strong> Community Center, Sector B</p>
                    <p><strong>Members:</strong> 8 students</p>
                    <button class="btn btn-primary join-group">Join Group</button>
                </div>
                <div class="study-group-item" style="padding: 15px; border: 1px solid #ddd; margin-bottom: 10px; border-radius: 4px;">
                    <h4>Science Study Group</h4>
                    <p><strong>When:</strong> Tuesdays & Thursdays, 2-3 PM</p>
                    <p><strong>Where:</strong> Education Tent, Sector A</p>
                    <p><strong>Members:</strong> 12 students</p>
                    <button class="btn btn-primary join-group">Join Group</button>
                </div>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    
    // Add join group functionality
    const joinBtns = modal.querySelectorAll('.join-group');
    joinBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showNotification('You have successfully joined the study group!', 'success');
            modal.style.display = 'none';
        });
    });
    
    return modal;
}

function createStudyGroupForm() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Create New Study Group</h2>
            <form id="study-group-form">
                <div class="form-group">
                    <label for="group-subject">Subject</label>
                    <input type="text" id="group-subject" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="group-schedule">Meeting Schedule</label>
                    <input type="text" id="group-schedule" class="form-control" placeholder="e.g., Mondays 3-4 PM" required>
                </div>
                <div class="form-group">
                    <label for="group-location">Meeting Location</label>
                    <input type="text" id="group-location" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="group-description">Description</label>
                    <textarea id="group-description" class="form-control"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Create Study Group</button>
            </form>
        </div>
    `;
    
    setupModalClose(modal);
    
    const form = modal.querySelector('#study-group-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Study group created successfully!', 'success');
        modal.style.display = 'none';
    });
    
    return modal;
}

function createVolunteerForm() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Volunteer Teacher Application</h2>
            <form id="volunteer-form">
                <div class="form-group">
                    <label for="volunteer-name">Full Name</label>
                    <input type="text" id="volunteer-name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="volunteer-email">Email</label>
                    <input type="email" id="volunteer-email" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="volunteer-subject">Subject(s) You Can Teach</label>
                    <input type="text" id="volunteer-subject" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="volunteer-experience">Teaching Experience</label>
                    <textarea id="volunteer-experience" class="form-control"></textarea>
                </div>
                <div class="form-group">
                    <label for="volunteer-availability">Availability</label>
                    <input type="text" id="volunteer-availability" class="form-control" placeholder="e.g., Weekdays 2-4 PM" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit Application</button>
            </form>
        </div>
    `;
    
    setupModalClose(modal);
    
    const form = modal.querySelector('#volunteer-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Thank you for your volunteer application! We will contact you soon.', 'success');
        modal.style.display = 'none';
    });
    
    return modal;
}

function createTeacherResourcesModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <span class="close-modal">&times;</span>
            <h2>Teacher Resource Library</h2>
            <div class="resource-categories">
                <div class="category-card" style="padding: 15px; border: 1px solid #ddd; margin-bottom: 15px; border-radius: 4px;">
                    <h4>Lesson Plans</h4>
                    <p>Pre-made lesson plans for various subjects and grade levels.</p>
                    <button class="btn btn-outline browse-resources" data-category="lesson-plans">Browse</button>
                </div>
                <div class="category-card" style="padding: 15px; border: 1px solid #ddd; margin-bottom: 15px; border-radius: 4px;">
                    <h4>Teaching Guides</h4>
                    <p>Comprehensive guides for effective teaching in challenging environments.</p>
                    <button class="btn btn-outline browse-resources" data-category="teaching-guides">Browse</button>
                </div>
                <div class="category-card" style="padding: 15px; border: 1px solid #ddd; margin-bottom: 15px; border-radius: 4px;">
                    <h4>Classroom Activities</h4>
                    <p>Interactive activities and games for engaging students.</p>
                    <button class="btn btn-outline browse-resources" data-category="activities">Browse</button>
                </div>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    
    const browseBtns = modal.querySelectorAll('.browse-resources');
    browseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showNotification(`Opening ${category.replace('-', ' ')}...`, 'info');
        });
    });
    
    return modal;
}

function simulateDownload(resourceName) {
    // Simulate download progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        if (progress <= 100) {
            showNotification(`Downloading ${resourceName}... ${progress}%`, 'info', true);
        } else {
            clearInterval(interval);
            showNotification(`${resourceName} downloaded successfully!`, 'success');
        }
    }, 300);
}

function setupModalClose(modal) {
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Enhanced notification for downloads
function showNotification(message, type, persistent = false) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            ${!persistent ? '<button class="notification-close">&times;</button>' : ''}
        </div>
    `;
    
    document.body.appendChild(notification);
    
    if (!persistent) {
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);
        
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', function() {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        });
    }
    
    return notification;
}