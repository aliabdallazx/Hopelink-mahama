// Health & Hygiene Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initHealthHygienePage();
});

function initHealthHygienePage() {
    // Clinic details
    const clinicDetailBtns = document.querySelectorAll('.view-clinic-details');
    clinicDetailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const clinicItem = this.closest('.clinic-item');
            const clinicName = clinicItem.querySelector('strong').textContent;
            showClinicDetails(clinicName);
        });
    });
    
    // Book appointment
    const bookAppointmentBtn = document.getElementById('book-appointment');
    if (bookAppointmentBtn) {
        bookAppointmentBtn.addEventListener('click', bookMedicalAppointment);
    }
    
    // Emergency walk-in
    const emergencyWalkinBtn = document.getElementById('emergency-walkin');
    if (emergencyWalkinBtn) {
        emergencyWalkinBtn.addEventListener('click', showEmergencyWalkinInfo);
    }
    
    // Medicine search
    const searchMedicineBtn = document.getElementById('search-medicine');
    if (searchMedicineBtn) {
        searchMedicineBtn.addEventListener('click', searchMedicine);
    }
    
    // Hygiene kit request
    const requestKitBtn = document.getElementById('request-hygiene-kit');
    if (requestKitBtn) {
        requestKitBtn.addEventListener('click', requestHygieneKit);
    }
    
    // Hygiene topics
    const hygieneTopicBtns = document.querySelectorAll('.hygiene-topic');
    hygieneTopicBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            showHygieneEducation(topic);
        });
    });
    
    // Child health
    const vaccinationBtn = document.getElementById('vaccination-schedule');
    if (vaccinationBtn) {
        vaccinationBtn.addEventListener('click', showVaccinationSchedule);
    }
    
    const childHealthBtn = document.getElementById('child-health-tips');
    if (childHealthBtn) {
        childHealthBtn.addEventListener('click', showChildHealthTips);
    }
    
    // Water map
    const waterMapBtn = document.getElementById('view-water-map');
    if (waterMapBtn) {
        waterMapBtn.addEventListener('click', viewWaterMap);
    }
    
    // Sanitation reporting
    const reportSanitationBtn = document.getElementById('report-sanitation');
    if (reportSanitationBtn) {
        reportSanitationBtn.addEventListener('click', reportSanitationIssue);
    }
    
    // Water safety
    const waterSafetyBtn = document.getElementById('water-safety-tips');
    if (waterSafetyBtn) {
        waterSafetyBtn.addEventListener('click', showWaterSafetyTips);
    }
    
    // Health education
    const malariaBtn = document.getElementById('learn-malaria');
    if (malariaBtn) {
        malariaBtn.addEventListener('click', showMalariaPrevention);
    }
    
    const choleraBtn = document.getElementById('learn-cholera');
    if (choleraBtn) {
        choleraBtn.addEventListener('click', showCholeraPrevention);
    }
    
    const prenatalBtn = document.getElementById('prenatal-care');
    if (prenatalBtn) {
        prenatalBtn.addEventListener('click', showPrenatalCare);
    }
    
    const postnatalBtn = document.getElementById('postnatal-care');
    if (postnatalBtn) {
        postnatalBtn.addEventListener('click', showPostnatalCare);
    }
    
    const nutritionBtn = document.getElementById('nutrition-guide');
    if (nutritionBtn) {
        nutritionBtn.addEventListener('click', showNutritionGuide);
    }
}

function showClinicDetails(clinicName) {
    const clinicInfo = {
        'Main Health Center': {
            services: ['Emergency Care', 'General Consultations', 'Maternal Health', 'Child Health', 'Laboratory Tests'],
            hours: '24/7',
            contact: '+250 788 555 456',
            location: 'Sector A, Block 5 (near administration)'
        },
        'Mobile Health Unit': {
            services: ['Basic Consultations', 'Vaccinations', 'Health Education', 'First Aid'],
            hours: 'Monday-Friday, 8 AM - 4 PM',
            contact: '+250 788 555 457',
            location: 'Rotates between Sectors B and C'
        }
    };
    
    const info = clinicInfo[clinicName];
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>${clinicName}</h2>
            <div class="clinic-details">
                <p><strong>📍 Location:</strong> ${info.location}</p>
                <p><strong>⏰ Hours:</strong> ${info.hours}</p>
                <p><strong>📞 Contact:</strong> ${info.contact}</p>
                <div class="services-list">
                    <h4>Services Offered:</h4>
                    <ul>
                        ${info.services.map(service => `<li>${service}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <button class="btn btn-primary get-directions">Get Directions</button>
        </div>
    `;
    
    setupModalClose(modal);
    
    const directionsBtn = modal.querySelector('.get-directions');
    directionsBtn.addEventListener('click', function() {
        showNotification(`Directions to ${clinicName} sent to your device.`, 'info');
    });
    
    document.body.appendChild(modal);
}

function bookMedicalAppointment() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Book Medical Appointment</h2>
            <form id="appointment-form">
                <div class="form-group">
                    <label for="patient-name">Patient Name</label>
                    <input type="text" id="patient-name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="patient-age">Age</label>
                    <input type="number" id="patient-age" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="appointment-type">Type of Appointment</label>
                    <select id="appointment-type" class="form-control" required>
                        <option value="">Select type</option>
                        <option value="general">General Consultation</option>
                        <option value="followup">Follow-up Visit</option>
                        <option value="vaccination">Vaccination</option>
                        <option value="prenatal">Prenatal Care</option>
                        <option value="child">Child Health</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="preferred-clinic">Preferred Clinic</label>
                    <select id="preferred-clinic" class="form-control" required>
                        <option value="main">Main Health Center</option>
                        <option value="mobile">Mobile Health Unit</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="symptoms">Symptoms or Reason for Visit</label>
                    <textarea id="symptoms" class="form-control" required></textarea>
                </div>
                <div class="form-group">
                    <label for="preferred-date">Preferred Date</label>
                    <input type="date" id="preferred-date" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="contact-info">Contact Information</label>
                    <input type="text" id="contact-info" class="form-control" required placeholder="Phone number">
                </div>
                <button type="submit" class="btn btn-primary">Book Appointment</button>
            </form>
        </div>
    `;
    
    setupModalClose(modal);
    
    const form = modal.querySelector('#appointment-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Appointment booked successfully! You will receive confirmation within 24 hours.', 'success');
        modal.style.display = 'none';
    });
    
    document.body.appendChild(modal);
}

function showEmergencyWalkinInfo() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Emergency Walk-in Information</h2>
            <div class="emergency-info">
                <div class="alert alert-emergency">
                    <h4>🚨 For Life-Threatening Emergencies:</h4>
                    <p>Go directly to Main Health Center - Sector A</p>
                    <p>Open 24/7 for emergencies</p>
                </div>
                <div class="what-constitutes-emergency">
                    <h4>What is considered an emergency?</h4>
                    <ul>
                        <li>Difficulty breathing</li>
                        <li>Chest pain</li>
                        <li>Severe bleeding</li>
                        <li>Loss of consciousness</li>
                        <li>Severe burns</li>
                        <li>Broken bones</li>
                        <li>Severe allergic reactions</li>
                    </ul>
                </div>
                <div class="emergency-contact">
                    <p><strong>Emergency Contact:</strong> +250 788 555 456</p>
                    <button class="btn btn-emergency call-emergency">Call Emergency Now</button>
                </div>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    
    const callBtn = modal.querySelector('.call-emergency');
    callBtn.addEventListener('click', function() {
        window.location.href = 'tel:+250788555456';
    });
    
    document.body.appendChild(modal);
}

function searchMedicine() {
    const searchTerm = document.getElementById('medicine-search').value;
    if (!searchTerm) {
        showNotification('Please enter a medicine name to search.', 'error');
        return;
    }
    
    showNotification(`Searching for "${searchTerm}" in medicine database...`, 'info');
    
    // Simulate search
    setTimeout(() => {
        const medicines = {
            'paracetamol': { available: true, location: 'Main Pharmacy', notes: 'Available in 500mg tablets' },
            'antibiotics': { available: true, location: 'Main Pharmacy', notes: 'Various types available - consult doctor' },
            'insulin': { available: false, location: '', notes: 'Currently out of stock - expected next week' }
        };
        
        const result = medicines[searchTerm.toLowerCase()];
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'block';
        
        if (result && result.available) {
            modal.innerHTML = `
                <div class="modal-content" style="max-width: 400px;">
                    <span class="close-modal">&times;</span>
                    <h2>Medicine Available</h2>
                    <div class="medicine-result available">
                        <h4>${searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}</h4>
                        <p><strong>✅ Available at:</strong> ${result.location}</p>
                        <p><strong>📝 Notes:</strong> ${result.notes}</p>
                        <button class="btn btn-primary get-medicine">Get Directions to Pharmacy</button>
                    </div>
                </div>
            `;
        } else {
            modal.innerHTML = `
                <div class="modal-content" style="max-width: 400px;">
                    <span class="close-modal">&times;</span>
                    <h2>Medicine Search Result</h2>
                    <div class="medicine-result unavailable">
                        <h4>${searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}</h4>
                        <p><strong>❌ Currently unavailable</strong></p>
                        <p>${result ? result.notes : 'Please check back later or consult with healthcare staff for alternatives.'}</p>
                        <button class="btn btn-outline request-medicine">Request This Medicine</button>
                    </div>
                </div>
            `;
        }
        
        setupModalClose(modal);
        document.body.appendChild(modal);
    }, 1500);
}

function requestHygieneKit() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Request Hygiene Kit</h2>
            <form id="hygiene-kit-form">
                <div class="form-group">
                    <label for="requester-name">Your Name</label>
                    <input type="text" id="requester-name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="family-size">Family Size</label>
                    <input type="number" id="family-size" class="form-control" required min="1" max="20">
                </div>
                <div class="form-group">
                    <label for="location">Your Location</label>
                    <input type="text" id="location" class="form-control" required placeholder="Sector and block">
                </div>
                <div class="form-group">
                    <label for="special-needs">Special Needs</label>
                    <select id="special-needs" class="form-control">
                        <option value="">No special needs</option>
                        <option value="baby">Baby care items needed</option>
                        <option value="sanitary">Extra sanitary pads</option>
                        <option value="elderly">Elderly care items</option>
                    </select>
                </div>
                <div class="kit-contents-info">
                    <h4>Kit Contains:</h4>
                    <ul>
                        <li>Soap (2 bars)</li>
                        <li>Toothpaste & toothbrush</li>
                        <li>Shampoo</li>
                        <li>Sanitary pads (if applicable)</li>
                        <li>Washing powder</li>
                    </ul>
                </div>
                <button type="submit" class="btn btn-primary">Submit Request</button>
            </form>
        </div>
    `;
    
    setupModalClose(modal);
    
    const form = modal.querySelector('#hygiene-kit-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Hygiene kit request submitted! You can pick it up at the distribution center in 24 hours.', 'success');
        modal.style.display = 'none';
    });
    
    document.body.appendChild(modal);
}

function showHygieneEducation(topic) {
    const educationContent = {
        'handwashing': {
            title: 'Proper Hand Washing',
            content: `
                <h4>When to wash hands:</h4>
                <ul>
                    <li>Before eating or preparing food</li>
                    <li>After using the toilet</li>
                    <li>After cleaning or handling waste</li>
                    <li>After caring for someone who is sick</li>
                </ul>
                <h4>Proper technique:</h4>
                <ol>
                    <li>Wet hands with clean water</li>
                    <li>Apply soap</li>
                    <li>Rub hands together for 20 seconds</li>
                    <li>Rinse thoroughly</li>
                    <li>Dry with clean cloth or air dry</li>
                </ol>
            `
        },
        'food-safety': {
            title: 'Food Safety Practices',
            content: `
                <h4>Keep food safe:</h4>
                <ul>
                    <li>Wash hands before handling food</li>
                    <li>Keep raw and cooked foods separate</li>
                    <li>Cook food thoroughly</li>
                    <li>Store food at safe temperatures</li>
                    <li>Use safe water for cooking</li>
                </ul>
                <h4>Prevent food poisoning:</h4>
                <p>Discard food that smells bad or looks spoiled. Keep cooking areas clean.</p>
            `
        },
        'menstrual': {
            title: 'Menstrual Hygiene',
            content: `
                <h4>Safe menstrual practices:</h4>
                <ul>
                    <li>Use clean sanitary pads or clean cloth</li>
                    <li>Change regularly (every 4-6 hours)</li>
                    <li>Wash reusable materials with soap and dry in sun</li>
                    <li>Maintain personal cleanliness</li>
                    <li>Dispose of used materials properly</li>
                </ul>
                <h4>Free sanitary pads available at:</h4>
                <p>Women's Center and Health Clinic</p>
            `
        }
    };
    
    const content = educationContent[topic];
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close-modal">&times;</span>
            <h2>${content.title}</h2>
            <div class="hygiene-education">
                ${content.content}
            </div>
            <button class="btn btn-primary close-education">Close</button>
        </div>
    `;
    
    setupModalClose(modal);
    
    const closeBtn = modal.querySelector('.close-education');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    document.body.appendChild(modal);
}

function showVaccinationSchedule() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close-modal">&times;</span>
            <h2>Child Vaccination Schedule</h2>
            <div class="vaccination-schedule">
                <div class="vaccine-item">
                    <h4>At Birth</h4>
                    <ul>
                        <li>BCG (Tuberculosis)</li>
                        <li>Polio (OPV0)</li>
                    </ul>
                </div>
                <div class="vaccine-item">
                    <h4>6 Weeks</h4>
                    <ul>
                        <li>DPT-HepB-Hib (Pentavalent)</li>
                        <li>Polio (OPV1)</li>
                        <li>Pneumococcal (PCV)</li>
                    </ul>
                </div>
                <div class="vaccine-item">
                    <h4>10 Weeks</h4>
                    <ul>
                        <li>DPT-HepB-Hib (Pentavalent)</li>
                        <li>Polio (OPV2)</li>
                        <li>Pneumococcal (PCV)</li>
                    </ul>
                </div>
                <div class="vaccine-item">
                    <h4>14 Weeks</h4>
                    <ul>
                        <li>DPT-HepB-Hib (Pentavalent)</li>
                        <li>Polio (OPV3)</li>
                        <li>Pneumococcal (PCV)</li>
                    </ul>
                </div>
                <div class="vaccine-item">
                    <h4>9 Months</h4>
                    <ul>
                        <li>Measles-Rubella</li>
                    </ul>
                </div>
            </div>
            <div class="vaccination-notes">
                <p><strong>📍 Where:</strong> Main Health Center or Mobile Health Unit</p>
                <p><strong>⏰ When:</strong> Monday-Friday, 8 AM - 3 PM</p>
                <p><strong>📋 Bring:</strong> Child's health card if available</p>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    document.body.appendChild(modal);
}

// Additional health functions would continue here...
// (Child health tips, water map, sanitation reporting, etc.)

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