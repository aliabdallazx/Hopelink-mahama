// Women Safety Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initWomenSafetyPage();
});

function initWomenSafetyPage() {
    // Quick Exit button
    const quickExitBtn = document.getElementById('quick-exit');
    if (quickExitBtn) {
        quickExitBtn.addEventListener('click', quickExit);
    }
    
    // GBV Report button
    const gbvReportBtn = document.getElementById('start-gbv-report');
    if (gbvReportBtn) {
        gbvReportBtn.addEventListener('click', openGBVReport);
    }
    
    // Safety issue reporting
    const safetyIssueBtn = document.getElementById('report-safety-issue');
    if (safetyIssueBtn) {
        safetyIssueBtn.addEventListener('click', reportSafetyIssue);
    }
    
    // Check report status
    const checkStatusBtn = document.getElementById('check-status');
    if (checkStatusBtn) {
        checkStatusBtn.addEventListener('click', checkReportStatus);
    }
    
    // Safe spaces map
    const safeSpacesBtn = document.getElementById('view-safe-spaces-map');
    if (safeSpacesBtn) {
        safeSpacesBtn.addEventListener('click', viewSafeSpacesMap);
    }
    
    // Download safety guide
    const safetyGuideBtn = document.getElementById('download-safety-guide');
    if (safetyGuideBtn) {
        safetyGuideBtn.addEventListener('click', downloadSafetyGuide);
    }
    
    // Learn about rights
    const learnRightsBtn = document.getElementById('learn-rights');
    if (learnRightsBtn) {
        learnRightsBtn.addEventListener('click', learnAboutRights);
    }
    
    // Support groups
    const supportGroupBtn = document.getElementById('find-support-group');
    if (supportGroupBtn) {
        supportGroupBtn.addEventListener('click', findSupportGroup);
    }
    
    // Safety planning
    const safetyPlanBtn = document.getElementById('create-safety-plan');
    if (safetyPlanBtn) {
        safetyPlanBtn.addEventListener('click', createSafetyPlan);
    }
    
    // GBV Report form
    const gbvReportForm = document.getElementById('gbv-report-form');
    if (gbvReportForm) {
        gbvReportForm.addEventListener('submit', submitGBVReport);
    }
    
    // Modal close functionality
    const modal = document.getElementById('gbv-report-modal');
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function quickExit() {
    // Immediately redirect to a neutral website
    window.open('https://www.google.com', '_blank');
    // Also hide the current page content
    document.body.innerHTML = '<div style="padding: 50px; text-align: center;"><h1>You have safely exited the page</h1><p>Close this tab to ensure your safety.</p></div>';
}

function openGBVReport() {
    const modal = document.getElementById('gbv-report-modal');
    modal.style.display = 'block';
    
    // Add additional safety measures
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
}

function reportSafetyIssue() {
    const modal = createSafetyIssueModal();
    document.body.appendChild(modal);
}

function checkReportStatus() {
    const caseId = document.getElementById('case-id').value;
    if (!caseId) {
        showNotification('Please enter your case ID', 'error');
        return;
    }
    
    // Simulate checking status (in real implementation, this would query a secure database)
    showNotification(`Checking status for case ${caseId}...`, 'info');
    
    setTimeout(() => {
        // Simulate random status
        const statuses = ['Under Review', 'Action Taken', 'Referred to Services', 'Case Closed'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        const modal = createStatusModal(caseId, randomStatus);
        document.body.appendChild(modal);
    }, 2000);
}

function viewSafeSpacesMap() {
    const modal = createSafeSpacesMap();
    document.body.appendChild(modal);
}

function downloadSafetyGuide() {
    showNotification('Downloading Safety Guide...', 'info');
    
    // Simulate download
    setTimeout(() => {
        showNotification('Safety Guide downloaded successfully!', 'success');
    }, 1500);
}

function learnAboutRights() {
    const modal = createRightsInformation();
    document.body.appendChild(modal);
}

function findSupportGroup() {
    const modal = createSupportGroupsModal();
    document.body.appendChild(modal);
}

function createSafetyPlan() {
    const modal = createSafetyPlanWizard();
    document.body.appendChild(modal);
}

function submitGBVReport(e) {
    e.preventDefault();
    
    // Get form data (in real implementation, this would be encrypted)
    const incidentTypes = Array.from(document.querySelectorAll('input[name="incident-type"]:checked'))
        .map(input => input.value);
    
    if (incidentTypes.length === 0) {
        showNotification('Please select at least one type of incident', 'error');
        return;
    }
    
    // Generate a secure case ID
    const caseId = 'GBV-' + Date.now().toString().slice(-6);
    
    // Show confirmation with safety information
    const modal = createReportConfirmation(caseId);
    document.body.appendChild(modal);
    
    // Close the report modal
    document.getElementById('gbv-report-modal').style.display = 'none';
    
    // Reset form
    document.getElementById('gbv-report-form').reset();
}

// Modal creation functions
function createSafetyIssueModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Report Safety Issue</h2>
            <form id="safety-issue-form">
                <div class="form-group">
                    <label for="issue-type">Type of Safety Issue</label>
                    <select id="issue-type" class="form-control" required>
                        <option value="">Select issue type</option>
                        <option value="lighting">Poor Lighting</option>
                        <option value="sanitation">Sanitation Issue</option>
                        <option value="security">Lack of Security</option>
                        <option value="harassment">Public Harassment</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="issue-location">Location</label>
                    <input type="text" id="issue-location" class="form-control" required placeholder="Sector and block">
                </div>
                <div class="form-group">
                    <label for="issue-description">Description</label>
                    <textarea id="issue-description" class="form-control" required placeholder="Describe the safety concern"></textarea>
                </div>
                <div class="form-group">
                    <label for="issue-urgency">Urgency</label>
                    <select id="issue-urgency" class="form-control" required>
                        <option value="low">Low - Monitor situation</option>
                        <option value="medium">Medium - Address soon</option>
                        <option value="high">High - Immediate attention needed</option>
                    </select>
                </div>
                <div class="privacy-notice">
                    <p><strong>🔒 This report is anonymous</strong></p>
                </div>
                <button type="submit" class="btn btn-primary">Submit Report</button>
            </form>
        </div>
    `;
    
    setupModalClose(modal);
    
    const form = modal.querySelector('#safety-issue-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Safety issue reported successfully. Thank you for helping keep the community safe.', 'success');
        modal.style.display = 'none';
    });
    
    return modal;
}

function createStatusModal(caseId, status) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Case Status</h2>
            <div class="status-info">
                <p><strong>Case ID:</strong> ${caseId}</p>
                <p><strong>Status:</strong> <span class="status-${status.toLowerCase().replace(' ', '-')}">${status}</span></p>
                <div class="status-message">
                    ${getStatusMessage(status)}
                </div>
            </div>
            <div class="next-steps">
                <h4>Next Steps:</h4>
                <ul>
                    <li>Keep this case ID for future reference</li>
                    <li>Check back in 48 hours for updates</li>
                    <li>Contact emergency services if situation worsens</li>
                </ul>
            </div>
            <button class="btn btn-primary close-status">Close</button>
        </div>
    `;
    
    setupModalClose(modal);
    
    const closeBtn = modal.querySelector('.close-status');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    return modal;
}

function createSafeSpacesMap() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 700px;">
            <span class="close-modal">&times;</span>
            <h2>Safe Spaces in Mahama Camp</h2>
            <div class="map-container" style="background: #e9ecef; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <div style="text-align: center; padding: 50px;">
                    <h4>Camp Map</h4>
                    <div style="display: inline-block; position: relative;">
                        <!-- Simple map representation -->
                        <div style="width: 400px; height: 300px; background: #8bc34a; position: relative; border: 2px solid #666;">
                            <div style="position: absolute; top: 50px; left: 50px; width: 30px; height: 30px; background: #007BFF; border-radius: 50%;"></div>
                            <div style="position: absolute; top: 150px; left: 200px; width: 30px; height: 30px; background: #4CAF50; border-radius: 50%;"></div>
                            <div style="position: absolute; top: 200px; left: 100px; width: 30px; height: 30px; background: #FFD93D; border-radius: 50%;"></div>
                        </div>
                        <div style="position: absolute; top: 40px; left: 85px; background: white; padding: 5px; border-radius: 4px;">Women's Center</div>
                        <div style="position: absolute; top: 140px; left: 235px; background: white; padding: 5px; border-radius: 4px;">Safe House</div>
                        <div style="position: absolute; top: 190px; left: 135px; background: white; padding: 5px; border-radius: 4px;">Health Clinic</div>
                    </div>
                </div>
            </div>
            <div class="safe-space-details">
                <h4>Safe Space Details:</h4>
                <div class="space-detail">
                    <strong>🔵 Women's Center - Sector A</strong>
                    <p>Services: Counseling, legal aid, skills training, childcare</p>
                    <p>Hours: 8 AM - 6 PM Daily</p>
                </div>
                <div class="space-detail">
                    <strong>🟢 Safe House - Sector C</strong>
                    <p>Services: 24/7 emergency shelter, protection</p>
                    <p>Access: Contact security personnel</p>
                </div>
                <div class="space-detail">
                    <strong>🟡 Health Clinic - Sector B</strong>
                    <p>Services: Medical care, psychological first aid</p>
                    <p>Hours: 24/7 emergency services</p>
                </div>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    return modal;
}

function createRightsInformation() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close-modal">&times;</span>
            <h2>Know Your Rights</h2>
            <div class="rights-info">
                <div class="right-item">
                    <h4>Right to Safety</h4>
                    <p>Every woman has the right to live free from violence and fear.</p>
                </div>
                <div class="right-item">
                    <h4>Right to Privacy</h4>
                    <p>Your personal information and reports are confidential.</p>
                </div>
                <div class="right-item">
                    <h4>Right to Medical Care</h4>
                    <p>Access to healthcare services, including reproductive health.</p>
                </div>
                <div class="right-item">
                    <h4>Right to Legal Protection</h4>
                    <p>Protection under Rwandan law against gender-based violence.</p>
                </div>
                <div class="right-item">
                    <h4>Right to Education</h4>
                    <p>Equal access to education and learning opportunities.</p>
                </div>
            </div>
            <div class="legal-resources">
                <h4>Legal Resources:</h4>
                <ul>
                    <li>Rwanda National Police - Gender Desk: +250 788 191 919</li>
                    <li>National Public Prosecution Authority</li>
                    <li>Legal Aid Organizations in Camp</li>
                </ul>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    return modal;
}

function createSupportGroupsModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close-modal">&times;</span>
            <h2>Support Groups</h2>
            <div class="support-groups-list">
                <div class="support-group-item">
                    <h4>Survivor Support Group</h4>
                    <p><strong>When:</strong> Tuesdays, 2-4 PM</p>
                    <p><strong>Where:</strong> Women's Center, Sector A</p>
                    <p><strong>Facilitator:</strong> Trained counselor</p>
                    <button class="btn btn-outline join-support-group">Learn More</button>
                </div>
                <div class="support-group-item">
                    <h4>Parenting Support Group</h4>
                    <p><strong>When:</strong> Thursdays, 10 AM-12 PM</p>
                    <p><strong>Where:</strong> Community Tent, Sector B</p>
                    <p><strong>Facilitator:</strong> Child protection officer</p>
                    <button class="btn btn-outline join-support-group">Learn More</button>
                </div>
                <div class="support-group-item">
                    <h4>Skills & Empowerment Group</h4>
                    <p><strong>When:</strong> Saturdays, 9-11 AM</p>
                    <p><strong>Where:</strong> Training Center, Sector C</p>
                    <p><strong>Activities:</strong> Crafts, business skills, networking</p>
                    <button class="btn btn-outline join-support-group">Learn More</button>
                </div>
            </div>
            <div class="confidentiality-notice">
                <p><strong>🔒 All groups are confidential and safe spaces</strong></p>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    
    const joinBtns = modal.querySelectorAll('.join-support-group');
    joinBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showNotification('A counselor will contact you with more information about the support group.', 'success');
        });
    });
    
    return modal;
}

function createSafetyPlanWizard() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Create Your Safety Plan</h2>
            <div class="safety-plan-wizard">
                <div class="wizard-step active" id="step1">
                    <h4>Step 1: Safe Contacts</h4>
                    <p>Identify people you can trust in an emergency:</p>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Contact 1 name and number">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Contact 2 name and number">
                    </div>
                    <button class="btn btn-primary next-step">Next</button>
                </div>
                <div class="wizard-step" id="step2" style="display: none;">
                    <h4>Step 2: Safe Locations</h4>
                    <p>Identify safe places you can go:</p>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Safe location 1">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Safe location 2">
                    </div>
                    <button class="btn btn-outline prev-step">Previous</button>
                    <button class="btn btn-primary next-step">Next</button>
                </div>
                <div class="wizard-step" id="step3" style="display: none;">
                    <h4>Step 3: Emergency Preparedness</h4>
                    <p>Important items to keep ready:</p>
                    <div class="checkbox-group">
                        <label><input type="checkbox"> Important documents</label>
                        <label><input type="checkbox"> Emergency cash</label>
                        <label><input type="checkbox"> Medication</label>
                        <label><input type="checkbox"> Phone charger</label>
                    </div>
                    <button class="btn btn-outline prev-step">Previous</button>
                    <button class="btn btn-primary" id="complete-plan">Complete Safety Plan</button>
                </div>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    
    // Wizard functionality
    const nextBtns = modal.querySelectorAll('.next-step');
    const prevBtns = modal.querySelectorAll('.prev-step');
    const completeBtn = modal.querySelector('#complete-plan');
    
    nextBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const currentStep = this.closest('.wizard-step');
            const nextStep = currentStep.nextElementSibling;
            
            currentStep.classList.remove('active');
            currentStep.style.display = 'none';
            nextStep.classList.add('active');
            nextStep.style.display = 'block';
        });
    });
    
    prevBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const currentStep = this.closest('.wizard-step');
            const prevStep = currentStep.previousElementSibling;
            
            currentStep.classList.remove('active');
            currentStep.style.display = 'none';
            prevStep.classList.add('active');
            prevStep.style.display = 'block';
        });
    });
    
    completeBtn.addEventListener('click', function() {
        showNotification('Your safety plan has been saved. Remember to review it regularly.', 'success');
        modal.style.display = 'none';
    });
    
    return modal;
}

function createReportConfirmation(caseId) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Report Submitted Successfully</h2>
            <div class="confirmation-info">
                <p><strong>Your Case ID:</strong> ${caseId}</p>
                <p>Please save this number to check your report status.</p>
                
                <div class="safety-instructions">
                    <h4>Important Next Steps:</h4>
                    <ul>
                        <li>Your report is anonymous and secure</li>
                        <li>A support worker will review your case within 24 hours</li>
                        <li>Use your Case ID to check status on this page</li>
                        <li>If in immediate danger, call emergency services</li>
                    </ul>
                </div>
                
                <div class="emergency-reminder">
                    <p><strong>🚨 Remember:</strong> For immediate help, call +250 788 555 123</p>
                </div>
            </div>
            <button class="btn btn-primary close-confirmation">Close</button>
        </div>
    `;
    
    setupModalClose(modal);
    
    const closeBtn = modal.querySelector('.close-confirmation');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    return modal;
}

// Helper functions
function getStatusMessage(status) {
    const messages = {
        'Under Review': 'Your report is being reviewed by our team. We will take appropriate action.',
        'Action Taken': 'Necessary actions have been taken based on your report.',
        'Referred to Services': 'Your case has been connected with support services.',
        'Case Closed': 'This case has been resolved and closed.'
    };
    return messages[status] || 'Status update pending.';
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