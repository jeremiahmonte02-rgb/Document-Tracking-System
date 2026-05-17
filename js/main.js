// Document Tracking System - Main JavaScript

// Sample Data
const sampleDocuments = [
    {
        id: 'DOC-2024-001',
        title: 'Budget Report Q4 2023',
        type: 'Financial Report',
        sender: 'Finance Department',
        receiver: 'Executive Office',
        status: 'Received',
        dateUploaded: '2026-05-17 09:15:00',
        dateReceived: '2026-05-17 14:30:00',
        uploadedBy: 'John Smith',
        receivedBy: 'Sarah Johnson',
        description: 'Quarterly financial report for Q4 2023 including revenue, expenses, and projections.',
        history: [
            { action: 'Document Uploaded', user: 'John Smith', department: 'Finance', timestamp: '2026-05-17 09:15:00' },
            { action: 'QR Code Generated', user: 'System', department: 'Finance', timestamp: '2026-05-17 09:15:05' },
            { action: 'Document Scanned', user: 'Sarah Johnson', department: 'Executive Office', timestamp: '2026-05-17 14:30:00' },
            { action: 'Status Updated to Received', user: 'Sarah Johnson', department: 'Executive Office', timestamp: '2026-05-17 14:30:15' }
        ]
    },
    {
        id: 'DOC-2024-002',
        title: 'Employee Contract - Michael Brown',
        type: 'HR Document',
        sender: 'HR Department',
        receiver: 'Legal Department',
        status: 'Pending Transfer',
        dateUploaded: '2026-05-17 11:00:00',
        dateReceived: null,
        uploadedBy: 'Emily Davis',
        receivedBy: null,
        description: 'Employment contract for new hire Michael Brown.',
        history: [
            { action: 'Document Uploaded', user: 'Emily Davis', department: 'HR', timestamp: '2026-05-17 11:00:00' },
            { action: 'QR Code Generated', user: 'System', department: 'HR', timestamp: '2026-05-17 11:00:05' }
        ]
    },
    {
        id: 'DOC-2024-003',
        title: 'IT Infrastructure Proposal',
        type: 'Technical Proposal',
        sender: 'IT Department',
        receiver: 'Finance Department',
        status: 'In Transit',
        dateUploaded: '2026-05-17 08:30:00',
        dateReceived: null,
        uploadedBy: 'Robert Wilson',
        receivedBy: null,
        description: 'Proposal for IT infrastructure upgrades in 2024.',
        history: [
            { action: 'Document Uploaded', user: 'Robert Wilson', department: 'IT', timestamp: '2026-05-17 08:30:00' },
            { action: 'QR Code Generated', user: 'System', department: 'IT', timestamp: '2026-05-17 08:30:05' },
            { action: 'Document Scanned', user: 'Mail Room', department: 'Central Services', timestamp: '2026-05-17 15:45:00' }
        ]
    },
    {
        id: 'DOC-2024-004',
        title: 'Marketing Campaign Analysis',
        type: 'Marketing Report',
        sender: 'Marketing Department',
        receiver: 'Executive Office',
        status: 'Received',
        dateUploaded: '2026-05-17 14:20:00',
        dateReceived: '2026-05-17 16:45:00',
        uploadedBy: 'Jennifer Lee',
        receivedBy: 'Sarah Johnson',
        description: 'Analysis of Q4 marketing campaigns and ROI.',
        history: [
            { action: 'Document Uploaded', user: 'Jennifer Lee', department: 'Marketing', timestamp: '2026-05-17 14:20:00' },
            { action: 'QR Code Generated', user: 'System', department: 'Marketing', timestamp: '2026-05-17 14:20:05' },
            { action: 'Document Scanned', user: 'Sarah Johnson', department: 'Executive Office', timestamp: '2026-05-17 16:45:00' },
            { action: 'Status Updated to Received', user: 'Sarah Johnson', department: 'Executive Office', timestamp: '2026-05-17 16:45:10' }
        ]
    },
    {
        id: 'DOC-2024-005',
        title: 'Legal Compliance Review',
        type: 'Legal Document',
        sender: 'Legal Department',
        receiver: 'Operations',
        status: 'Received',
        dateUploaded: '2026-05-17 10:00:00',
        dateReceived: '2026-05-17 13:20:00',
        uploadedBy: 'David Martinez',
        receivedBy: 'Lisa Anderson',
        description: 'Annual compliance review and recommendations.',
        history: [
            { action: 'Document Uploaded', user: 'David Martinez', department: 'Legal', timestamp: '2026-05-17 10:00:00' },
            { action: 'QR Code Generated', user: 'System', department: 'Legal', timestamp: '2026-05-17 10:00:05' },
            { action: 'Document Scanned', user: 'Lisa Anderson', department: 'Operations', timestamp: '2026-05-17 13:20:00' },
            { action: 'Status Updated to Received', user: 'Lisa Anderson', department: 'Operations', timestamp: '2026-05-17 13:20:15' }
        ]
    },
    {
        id: 'DOC-2024-006',
        title: 'Procurement Request Form',
        type: 'Purchase Order',
        sender: 'Operations',
        receiver: 'Finance Department',
        status: 'Pending Transfer',
        dateUploaded: '2026-05-17 09:45:00',
        dateReceived: null,
        uploadedBy: 'Lisa Anderson',
        receivedBy: null,
        description: 'Request for office supplies and equipment.',
        history: [
            { action: 'Document Uploaded', user: 'Lisa Anderson', department: 'Operations', timestamp: '2026-05-17 09:45:00' },
            { action: 'QR Code Generated', user: 'System', department: 'Operations', timestamp: '2026-05-17 09:45:05' }
        ]
    },
    {
        id: 'DOC-2024-007',
        title: 'Security Audit Report',
        type: 'Security Document',
        sender: 'IT Department',
        receiver: 'Executive Office',
        status: 'In Transit',
        dateUploaded: '2026-05-17 07:30:00',
        dateReceived: null,
        uploadedBy: 'Robert Wilson',
        receivedBy: null,
        description: 'Comprehensive security audit findings and recommendations.',
        history: [
            { action: 'Document Uploaded', user: 'Robert Wilson', department: 'IT', timestamp: '2026-05-17 07:30:00' },
            { action: 'QR Code Generated', user: 'System', department: 'IT', timestamp: '2026-05-17 07:30:05' },
            { action: 'Document Scanned', user: 'Mail Room', department: 'Central Services', timestamp: '2026-05-17 08:30:00' }
        ]
    },
    {
        id: 'DOC-2024-008',
        title: 'Training Schedule 2024',
        type: 'HR Document',
        sender: 'HR Department',
        receiver: 'All Departments',
        status: 'Received',
        dateUploaded: '2026-05-17 11:30:00',
        dateReceived: '2026-05-17 14:15:00',
        uploadedBy: 'Emily Davis',
        receivedBy: 'Department Heads',
        description: 'Annual training and development schedule.',
        history: [
            { action: 'Document Uploaded', user: 'Emily Davis', department: 'HR', timestamp: '2026-05-17 11:30:00' },
            { action: 'QR Code Generated', user: 'System', department: 'HR', timestamp: '2026-05-17 11:30:05' },
            { action: 'Document Distributed', user: 'Mail Room', department: 'Central Services', timestamp: '2026-05-17 13:00:00' },
            { action: 'Status Updated to Received', user: 'Department Heads', department: 'Multiple', timestamp: '2026-05-17 14:15:00' }
        ]
    },
    {
        id: 'DOC-2024-009',
        title: 'Vendor Contract Agreement',
        type: 'Legal Document',
        sender: 'Legal Department',
        receiver: 'Finance Department',
        status: 'Pending Transfer',
        dateUploaded: '2026-05-17 14:00:00',
        dateReceived: null,
        uploadedBy: 'David Martinez',
        receivedBy: null,
        description: 'Contract agreement with new vendor for office supplies.',
        history: [
            { action: 'Document Uploaded', user: 'David Martinez', department: 'Legal', timestamp: '2026-05-17 14:00:00' },
            { action: 'QR Code Generated', user: 'System', department: 'Legal', timestamp: '2026-05-17 14:00:05' }
        ]
    },
    {
        id: 'DOC-2024-010',
        title: 'Annual Performance Review Template',
        type: 'HR Document',
        sender: 'HR Department',
        receiver: 'All Managers',
        status: 'Received',
        dateUploaded: '2026-05-17 09:00:00',
        dateReceived: '2026-05-17 11:30:00',
        uploadedBy: 'Emily Davis',
        receivedBy: 'All Managers',
        description: 'Template for conducting annual employee performance reviews.',
        history: [
            { action: 'Document Uploaded', user: 'Emily Davis', department: 'HR', timestamp: '2026-05-17 09:00:00' },
            { action: 'QR Code Generated', user: 'System', department: 'HR', timestamp: '2026-05-17 09:00:05' },
            { action: 'Document Distributed', user: 'Mail Room', department: 'Central Services', timestamp: '2026-05-17 10:15:00' },
            { action: 'Status Updated to Received', user: 'All Managers', department: 'Multiple', timestamp: '2026-05-17 11:30:00' }
        ]
    },
    {
        id: 'DOC-2024-011',
        title: 'Customer Feedback Report',
        type: 'Customer Service Report',
        sender: 'Customer Service',
        receiver: 'Marketing Department',
        status: 'In Transit',
        dateUploaded: '2026-05-17 10:30:00',
        dateReceived: null,
        uploadedBy: 'Amanda White',
        receivedBy: null,
        description: 'Monthly customer feedback analysis and insights.',
        history: [
            { action: 'Document Uploaded', user: 'Amanda White', department: 'Customer Service', timestamp: '2026-05-17 10:30:00' },
            { action: 'QR Code Generated', user: 'System', department: 'Customer Service', timestamp: '2026-05-17 10:30:05' },
            { action: 'Document Scanned', user: 'Mail Room', department: 'Central Services', timestamp: '2026-05-17 14:00:00' }
        ]
    },
    {
        id: 'DOC-2024-012',
        title: 'Project Milestone Report',
        type: 'Project Document',
        sender: 'Operations',
        receiver: 'Executive Office',
        status: 'Received',
        dateUploaded: '2026-05-17 08:45:00',
        dateReceived: '2026-05-17 09:00:00',
        uploadedBy: 'Lisa Anderson',
        receivedBy: 'Sarah Johnson',
        description: 'Q4 2023 project milestone achievements and status.',
        history: [
            { action: 'Document Uploaded', user: 'Lisa Anderson', department: 'Operations', timestamp: '2026-05-17 08:45:00' },
            { action: 'QR Code Generated', user: 'System', department: 'Operations', timestamp: '2026-05-17 08:45:05' },
            { action: 'Document Scanned', user: 'Sarah Johnson', department: 'Executive Office', timestamp: '2026-05-17 09:00:00' },
            { action: 'Status Updated to Received', user: 'Sarah Johnson', department: 'Executive Office', timestamp: '2026-05-17 09:00:15' }
        ]
    },
    {
        id: 'DOC-2024-013',
        title: 'Data Privacy Policy Update',
        type: 'Policy Document',
        sender: 'Legal Department',
        receiver: 'IT Department',
        status: 'Rejected',
        dateUploaded: '2026-05-17 13:00:00',
        dateReceived: '2026-05-17 16:00:00',
        uploadedBy: 'David Martinez',
        receivedBy: 'Robert Wilson',
        description: 'Updated data privacy policy requiring technical review.',
        history: [
            { action: 'Document Uploaded', user: 'David Martinez', department: 'Legal', timestamp: '2026-05-17 13:00:00' },
            { action: 'QR Code Generated', user: 'System', department: 'Legal', timestamp: '2026-05-17 13:00:05' },
            { action: 'Document Scanned', user: 'Robert Wilson', department: 'IT', timestamp: '2026-05-17 16:00:00' },
            { action: 'Status Updated to Rejected', user: 'Robert Wilson', department: 'IT', timestamp: '2026-05-17 16:15:00', note: 'Requires revision - technical specifications unclear' }
        ]
    },
    {
        id: 'DOC-2024-014',
        title: 'Facilities Maintenance Request',
        type: 'Maintenance Request',
        sender: 'Operations',
        receiver: 'Facilities',
        status: 'Pending Transfer',
        dateUploaded: '2026-05-17 08:00:00',
        dateReceived: null,
        uploadedBy: 'Lisa Anderson',
        receivedBy: null,
        description: 'Request for building maintenance and repairs.',
        history: [
            { action: 'Document Uploaded', user: 'Lisa Anderson', department: 'Operations', timestamp: '2026-05-17 08:00:00' },
            { action: 'QR Code Generated', user: 'System', department: 'Operations', timestamp: '2026-05-17 08:00:05' }
        ]
    },
    {
        id: 'DOC-2024-015',
        title: 'Board Meeting Minutes',
        type: 'Meeting Minutes',
        sender: 'Executive Office',
        receiver: 'All Department Heads',
        status: 'Received',
        dateUploaded: '2026-05-17 06:30:00',
        dateReceived: '2026-05-17 08:00:00',
        uploadedBy: 'Sarah Johnson',
        receivedBy: 'All Department Heads',
        description: 'Minutes from the January board meeting.',
        history: [
            { action: 'Document Uploaded', user: 'Sarah Johnson', department: 'Executive Office', timestamp: '2026-05-17 06:30:00' },
            { action: 'QR Code Generated', user: 'System', department: 'Executive Office', timestamp: '2026-05-17 06:30:05' },
            { action: 'Document Distributed', user: 'Mail Room', department: 'Central Services', timestamp: '2026-05-17 07:00:00' },
            { action: 'Status Updated to Received', user: 'All Department Heads', department: 'Multiple', timestamp: '2026-05-17 08:00:00' }
        ]
    }
];

const sampleUsers = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.johnson@company.com', department: 'Executive Office', role: 'Administrator', status: 'Active' },
    { id: 2, name: 'John Smith', email: 'john.smith@company.com', department: 'Finance', role: 'Department User', status: 'Active' },
    { id: 3, name: 'Emily Davis', email: 'emily.davis@company.com', department: 'HR', role: 'Department User', status: 'Active' },
    { id: 4, name: 'Robert Wilson', email: 'robert.wilson@company.com', department: 'IT', role: 'Department User', status: 'Active' },
    { id: 5, name: 'David Martinez', email: 'david.martinez@company.com', department: 'Legal', role: 'Auditor', status: 'Active' },
    { id: 6, name: 'Jennifer Lee', email: 'jennifer.lee@company.com', department: 'Marketing', role: 'Department User', status: 'Active' },
    { id: 7, name: 'Lisa Anderson', email: 'lisa.anderson@company.com', department: 'Operations', role: 'Department User', status: 'Active' },
    { id: 8, name: 'Amanda White', email: 'amanda.white@company.com', department: 'Customer Service', role: 'Department User', status: 'Active' },
    { id: 9, name: 'Michael Brown', email: 'michael.brown@company.com', department: 'Finance', role: 'Department User', status: 'Inactive' },
    { id: 10, name: 'Jessica Taylor', email: 'jessica.taylor@company.com', department: 'HR', role: 'Auditor', status: 'Active' }
];

const sampleDocumentsWithRoutes = [
    {
        id: 'DOC-2026-001',
        title: 'Payroll',
        type: 'HR Document',
        sender: 'HR Department',
        receiver: 'Legal Department',
        status: 'Pending Transfer',
        dateUploaded: '2026-05-17 11:00:00',
        dateReceived: null,
        uploadedBy: 'Emily Davis',
        receivedBy: null,
        description: 'Payroll for regular Personnel.',
        routes: ['HR', 'Accounting Office', 'Cashier', 'Budget Office'],
        history: [
            { action: 'Document Uploaded', user: 'Emily Davis', department: 'HR', timestamp: '2026-05-17 11:00:00' },
            { action: 'QR Code Generated', user: 'System', department: 'HR', timestamp: '2026-05-17 11:00:05' }
        ]
    }
];

const departments = [
    'Executive Office',
    'Finance Department',
    'HR Department',
    'IT Department',
    'Legal Department',
    'Marketing Department',
    'Operations',
    'Customer Service',
    'Facilities',
    'Central Services'
];

const documentTypes = [
    'Financial Report',
    'HR Document',
    'Legal Document',
    'Technical Proposal',
    'Marketing Report',
    'Purchase Order',
    'Security Document',
    'Policy Document',
    'Meeting Minutes',
    'Project Document',
    'Customer Service Report',
    'Maintenance Request'
];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
    highlightActiveNav();
});

// Initialize page-specific functionality
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    switch(currentPage) {
        case 'index.html':
        case '':
            loadDashboard();
            break;
        case 'inbox.html':
            loadInbox();
            break;
        case 'outbox.html':
            loadOutbox();
            break;
        case 'users.html':
            loadUsers();
            break;
        case 'document-details.html':
            loadDocumentDetails();
            break;
        case 'upload.html':
            setupUploadForm();
            break;
        case 'scan.html':
            setupScanPage();
            break;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Mobile sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Filter functionality
    const filterInputs = document.querySelectorAll('[data-filter]');
    filterInputs.forEach(input => {
        input.addEventListener('change', handleFilter);
    });
}

// Toggle sidebar on mobile
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('show');
    }
}

// Highlight active navigation item
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Dashboard functionality
function loadDashboard() {
    // Update statistics
    updateDashboardStats();

    // Load recent activity
    loadRecentActivity();

    // Load chart if Chart.js is available
    if (typeof Chart !== 'undefined') {
        loadDashboardCharts();
    }
}

function updateDashboardStats() {
    const totalDocs = sampleDocuments.length;
    const pendingDocs = sampleDocuments.filter(doc => doc.status === 'Pending Transfer').length;
    const receivedToday = sampleDocuments.filter(doc => {
        if (!doc.dateReceived) return false;
        const now = new Date();
        const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
        return doc.dateReceived.startsWith(today);
    }).length;

    // Update stat cards if they exist
    const totalEl = document.getElementById('totalDocuments');
    const pendingEl = document.getElementById('pendingDocuments');
    const receivedEl = document.getElementById('receivedToday');

    if (totalEl) totalEl.textContent = totalDocs;
    if (pendingEl) pendingEl.textContent = pendingDocs;
    if (receivedEl) receivedEl.textContent = receivedToday;
}

function loadRecentActivity() {
    const activityFeed = document.getElementById('activityFeed');
    if (!activityFeed) return;

    // Get recent activities from all documents
    const recentActivities = [];
    sampleDocuments.forEach(doc => {
        doc.history.forEach(historyItem => {
            recentActivities.push({
                ...historyItem,
                docId: doc.id,
                docTitle: doc.title
            });
        });
    });

    // Sort by timestamp (most recent first)
    recentActivities.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    // Display top 10 activities
    const html = recentActivities.slice(0, 10).map(activity => `
        <div class="activity-item d-flex align-items-start">
            <div class="activity-icon bg-primary text-white me-3">
                <i class="bi bi-file-earmark-text"></i>
            </div>
            <div class="flex-grow-1">
                <div class="d-flex justify-content-between">
                    <strong>${activity.action}</strong>
                    <small class="text-muted">${formatTimeAgo(activity.timestamp)}</small>
                </div>
                <small class="text-muted">
                    ${activity.docTitle} (${activity.docId})<br>
                    By ${activity.user} - ${activity.department}
                </small>
            </div>
        </div>
    `).join('');

    activityFeed.innerHTML = html;
}

function loadDashboardCharts() {
    // Status distribution chart
    const statusCtx = document.getElementById('statusChart');
    if (statusCtx) {
        const statusCounts = {
            'Received': sampleDocuments.filter(d => d.status === 'Received').length,
            'Pending Transfer': sampleDocuments.filter(d => d.status === 'Pending Transfer').length,
            'In Transit': sampleDocuments.filter(d => d.status === 'In Transit').length,
            'Rejected': sampleDocuments.filter(d => d.status === 'Rejected').length
        };

        new Chart(statusCtx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(statusCounts),
                datasets: [{
                    data: Object.values(statusCounts),
                    backgroundColor: ['#198754', '#ffc107', '#0dcaf0', '#dc3545']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Department distribution chart
    const deptCtx = document.getElementById('departmentChart');
    if (deptCtx) {
        const deptCounts = {};
        sampleDocuments.forEach(doc => {
            deptCounts[doc.sender] = (deptCounts[doc.sender] || 0) + 1;
        });

        new Chart(deptCtx, {
            type: 'bar',
            data: {
                labels: Object.keys(deptCounts),
                datasets: [{
                    label: 'Documents by Department',
                    data: Object.values(deptCounts),
                    backgroundColor: '#0d6efd'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// Inbox functionality
function loadInbox() {
    const inboxTable = document.getElementById('inboxTable');
    if (!inboxTable) return;

    // Filter documents received by current department (simulated as Executive Office)
    const currentDepartment = 'Executive Office';
    const inboxDocs = sampleDocuments.filter(doc =>
        doc.receiver === currentDepartment || doc.receiver.includes('All')
    );

    renderDocumentTable(inboxTable, inboxDocs);
}

// Outbox functionality
function loadOutbox() {
    const outboxTable = document.getElementById('outboxTable');
    if (!outboxTable) return;

    // Filter documents sent by current department (simulated as Executive Office)
    const currentDepartment = 'Executive Office';
    const outboxDocs = sampleDocuments.filter(doc => doc.sender === currentDepartment);

    renderDocumentTable(outboxTable, outboxDocs);
}

// Render document table
function renderDocumentTable(tableBody, documents) {
    const html = documents.map(doc => `
        <tr onclick="viewDocument('${doc.id}')" class="cursor-pointer">
            <td>${doc.id}</td>
            <td>${doc.title}</td>
            <td>${doc.type}</td>
            <td>${doc.sender}</td>
            <td>${doc.receiver}</td>
            <td>${formatDateTime(doc.dateUploaded)}</td>
            <td><span class="badge ${getStatusBadgeClass(doc.status)}">${doc.status}</span></td>
        </tr>
    `).join('');

    tableBody.innerHTML = html;
}

// Get status badge class
function getStatusBadgeClass(status) {
    switch(status) {
        case 'Received':
            return 'badge-received';
        case 'Pending Transfer':
            return 'badge-pending';
        case 'In Transit':
            return 'badge-in-transit';
        case 'Rejected':
            return 'badge-rejected';
        default:
            return 'bg-secondary';
    }
}

// View document details
function viewDocument(docId) {
    // Store document ID in sessionStorage and navigate to details page
    sessionStorage.setItem('currentDocId', docId);
    window.location.href = 'document-details.html';
}

// Load document details
function loadDocumentDetails() {
    const docId = sessionStorage.getItem('currentDocId') || 'DOC-2024-001';
    const doc = sampleDocuments.find(d => d.id === docId) ||
        sampleDocumentsWithRoutes.find(d => d.id === docId);

    if (!doc) {
        showToast('Document not found', 'error');
        return;
    }

    // Update document info
    document.getElementById('docId').textContent = doc.id;
    document.getElementById('docTitle').textContent = doc.title;
    document.getElementById('docType').textContent = doc.type;
    document.getElementById('docSender').textContent = doc.sender;
    document.getElementById('docReceiver').textContent = doc.receiver;
    document.getElementById('docStatus').innerHTML = `<span class="badge ${getStatusBadgeClass(doc.status)}">${doc.status}</span>`;
    document.getElementById('docUploadDate').textContent = formatDateTime(doc.dateUploaded);
    document.getElementById('docUploadedBy').textContent = doc.uploadedBy;
    document.getElementById('docDescription').textContent = doc.description;

    if (doc.dateReceived) {
        document.getElementById('docReceivedDate').textContent = formatDateTime(doc.dateReceived);
        document.getElementById('docReceivedBy').textContent = doc.receivedBy;
    } else {
        document.getElementById('docReceivedDate').textContent = 'Not received yet';
        document.getElementById('docReceivedBy').textContent = '-';
    }

    // Generate QR code
    generateQRCode(doc.id);

    // Load audit trail
    loadAuditTrail(doc.history);
}

// Generate QR code
function generateQRCode(docId) {
    const qrCodeElement = document.getElementById('qrCode');
    if (qrCodeElement && typeof QRCode !== 'undefined') {
        qrCodeElement.innerHTML = '';
        new QRCode(qrCodeElement, {
            text: docId,
            width: 200,
            height: 200,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}

// Load audit trail
function loadAuditTrail(history) {
    const timeline = document.getElementById('auditTrail');
    if (!timeline) return;

    const html = history.map(item => `
        <div class="timeline-item">
            <div class="timeline-icon">
                <i class="bi bi-check"></i>
            </div>
            <div class="timeline-content">
                <strong>${item.action}</strong>
                <p class="mb-1 text-muted">
                    <small>
                        <i class="bi bi-person"></i> ${item.user} |
                        <i class="bi bi-building"></i> ${item.department} |
                        <i class="bi bi-clock"></i> ${formatDateTime(item.timestamp)}
                    </small>
                </p>
                ${item.note ? `<p class="mb-0"><small><strong>Note:</strong> ${item.note}</small></p>` : ''}
            </div>
        </div>
    `).join('');

    timeline.innerHTML = html;
}

// Users functionality
function loadUsers() {
    const usersTable = document.getElementById('usersTable');
    if (!usersTable) return;

    const html = sampleUsers.map(user => `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.department}</td>
            <td><span class="badge bg-info">${user.role}</span></td>
            <td><span class="badge ${user.status === 'Active' ? 'bg-success' : 'bg-secondary'}">${user.status}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="editUser(${user.id})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteUser(${user.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');

    usersTable.innerHTML = html;
}

// Edit user
function editUser(userId) {
    const user = sampleUsers.find(u => u.id === userId);
    if (user) {
        showToast(`Edit user: ${user.name}`, 'info');
        // In a real application, open a modal with edit form
    }
}

// Delete user
function deleteUser(userId) {
    const user = sampleUsers.find(u => u.id === userId);
    if (user && confirm(`Are you sure you want to delete ${user.name}?`)) {
        showToast(`User ${user.name} deleted`, 'success');
        // In a real application, actually delete the user
    }
}

// Upload form setup
function setupUploadForm() {
    const uploadForm = document.getElementById('uploadForm');
    if (!uploadForm) return;

    // Populate department dropdown
    const deptSelect = document.getElementById('department');
    if (deptSelect) {
        departments.forEach(dept => {
            const option = document.createElement('option');
            option.value = dept;
            option.textContent = dept;
            deptSelect.appendChild(option);
        });
    }

    // Populate document type dropdown
    const typeSelect = document.getElementById('documentType');
    if (typeSelect) {
        documentTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            typeSelect.appendChild(option);
        });
    }

    // Handle form submission
    uploadForm.addEventListener('submit', handleUploadSubmit);
}

// Handle upload form submission
function handleUploadSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const docData = {
        id: `DOC-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`,
        title: formData.get('title'),
        type: formData.get('documentType'),
        department: formData.get('department'),
        description: formData.get('description')
    };

    // Show loading
    showSpinner();

    // Simulate upload delay
    setTimeout(() => {
        hideSpinner();

        // Generate QR code and show modal
        const qrModal = new bootstrap.Modal(document.getElementById('qrCodeModal'));
        document.getElementById('generatedDocId').textContent = docData.id;

        const modalQrCode = document.getElementById('modalQrCode');
        if (modalQrCode && typeof QRCode !== 'undefined') {
            modalQrCode.innerHTML = '';
            new QRCode(modalQrCode, {
                text: docData.id,
                width: 250,
                height: 250,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            });
        }

        qrModal.show();

        // Reset form
        event.target.reset();

        showToast('Document uploaded successfully!', 'success');
    }, 1500);
}

// Scan page setup
function setupScanPage() {
    const scanBtn = document.getElementById('scanBtn');
    const manualBtn = document.getElementById('manualScanBtn');

    if (scanBtn) {
        scanBtn.addEventListener('click', simulateScan);
    }

    if (manualBtn) {
        manualBtn.addEventListener('click', handleManualScan);
    }
}

// Simulate QR code scan
function simulateScan() {
    showSpinner();

    // Simulate scanning delay
    setTimeout(() => {
        hideSpinner();

        // Combine all documents for random selection
        const allDocuments = [...sampleDocuments, ...sampleDocumentsWithRoutes];
        const randomDoc = allDocuments[Math.floor(Math.random() * allDocuments.length)];
        displayScanResult(randomDoc);
    }, 2000);
}

// Handle manual scan
function handleManualScan() {
    const docId = document.getElementById('manualDocId').value.trim();

    if (!docId) {
        showToast('Please enter a document ID', 'warning');
        return;
    }

    let doc = sampleDocuments.find(d => d.id === docId);

    // If not found in sampleDocuments, check sampleDocumentsWithRoutes
    if (!doc) {
        doc = sampleDocumentsWithRoutes.find(d => d.id === docId);
    }

    if (!doc) {
        showToast('Document not found', 'error');
        return;
    }

    displayScanResult(doc);
}

// Display scan result
function displayScanResult(doc) {
    const resultDiv = document.getElementById('scanResult');
    if (!resultDiv) return;

    const alreadyReceived = doc.status === 'Received';
    const isRoutedDocument = sampleDocumentsWithRoutes.some(d => d.id === doc.id);

    let html = `
        <div class="card ${alreadyReceived ? 'border-warning' : 'border-success'}">
            <div class="card-header ${alreadyReceived ? 'bg-warning' : 'bg-success'} text-white">
                <h5 class="mb-0">
                    <i class="bi bi-${alreadyReceived ? 'exclamation-triangle' : 'check-circle'}"></i>
                    ${alreadyReceived ? 'Document Already Received' : 'Document Found'}
                </h5>
            </div>
            <div class="card-body">
                <h6><strong>Document ID:</strong> ${doc.id}</h6>
                <p class="mb-2"><strong>Title:</strong> ${doc.title}</p>
                <p class="mb-2"><strong>Type:</strong> ${doc.type}</p>
                <p class="mb-2"><strong>Sender:</strong> ${doc.sender}</p>
                <p class="mb-2"><strong>Current Status:</strong> <span class="badge ${getStatusBadgeClass(doc.status)}">${doc.status}</span></p>
                <p class="mb-3"><strong>Description:</strong> ${doc.description}</p>

                ${alreadyReceived ? `
                    <div class="alert alert-warning">
                        <i class="bi bi-exclamation-triangle"></i>
                        This document was already received by ${doc.receivedBy} on ${formatDateTime(doc.dateReceived)}
                    </div>
                ` : isRoutedDocument ? `
                    <div class="alert alert-info">
                        <i class="bi bi-info-circle"></i>
                        This document requires routing approval. Your department may not be authorized to receive it directly.
                    </div>
                    <button class="btn btn-warning" onclick="confirmReceipt('${doc.id}')">
                        <i class="bi bi-shield-x"></i> Attempt Receipt
                    </button>
                ` : `
                    <button class="btn btn-success" onclick="confirmReceipt('${doc.id}')">
                        <i class="bi bi-check-circle"></i> Confirm Receipt
                    </button>
                `}

                <button class="btn btn-outline-primary" onclick="viewDocument('${doc.id}')">
                    <i class="bi bi-eye"></i> View Full Details
                </button>
            </div>
        </div>
    `;

    resultDiv.innerHTML = html;
    resultDiv.style.display = 'block';
}

// Confirm receipt
function confirmReceipt(docId) {
    // Check if document is from sampleDocumentsWithRoutes
    const isRoutedDocument = sampleDocumentsWithRoutes.some(d => d.id === docId);

    if (isRoutedDocument) {
        // Show error dialog for routed documents
        showRoutedDocumentError();
        return;
    }

    if (confirm('Confirm receipt of this document?')) {
        showSpinner();

        setTimeout(() => {
            hideSpinner();
            showToast('Document receipt confirmed successfully!', 'success');

            // Clear scan result
            const resultDiv = document.getElementById('scanResult');
            if (resultDiv) {
                resultDiv.style.display = 'none';
            }

            // Clear manual input
            const manualInput = document.getElementById('manualDocId');
            if (manualInput) {
                manualInput.value = '';
            }
        }, 1000);
    }
}

// Show error dialog for routed documents
function showRoutedDocumentError() {
    const modal = new bootstrap.Modal(document.getElementById('routedDocumentErrorModal'));
    modal.show();
}

// Search functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const tableRows = document.querySelectorAll('tbody tr');

    tableRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
}

// Filter functionality
function handleFilter() {
    const filters = {};
    document.querySelectorAll('[data-filter]').forEach(input => {
        const filterType = input.dataset.filter;
        const value = input.value;
        if (value) {
            filters[filterType] = value.toLowerCase();
        }
    });

    const tableRows = document.querySelectorAll('tbody tr');

    tableRows.forEach(row => {
        let show = true;

        Object.keys(filters).forEach(filterType => {
            const filterValue = filters[filterType];
            const cellIndex = parseInt(row.querySelector(`td[data-${filterType}]`)?.dataset.index || -1);

            if (cellIndex >= 0) {
                const cellText = row.cells[cellIndex].textContent.toLowerCase();
                if (!cellText.includes(filterValue)) {
                    show = false;
                }
            }
        });

        row.style.display = show ? '' : 'none';
    });
}

// Print QR code
function printQRCode() {
    window.print();
}

// Show toast notification
function showToast(message, type = 'info') {
    // Create toast element if it doesn't exist
    let toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';
        toastContainer.className = 'position-fixed bottom-0 end-0 p-3';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }

    const toastId = 'toast-' + Date.now();
    const bgClass = type === 'success' ? 'bg-success' :
                    type === 'error' ? 'bg-danger' :
                    type === 'warning' ? 'bg-warning' : 'bg-info';

    const toastHtml = `
        <div id="${toastId}" class="toast ${bgClass} text-white" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-body">
                ${message}
            </div>
        </div>
    `;

    toastContainer.insertAdjacentHTML('beforeend', toastHtml);

    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement, { delay: 3000 });
    toast.show();

    toastElement.addEventListener('hidden.bs.toast', () => {
        toastElement.remove();
    });
}

// Show loading spinner
function showSpinner() {
    let spinner = document.getElementById('spinnerOverlay');
    if (!spinner) {
        spinner = document.createElement('div');
        spinner.id = 'spinnerOverlay';
        spinner.className = 'spinner-overlay';
        spinner.innerHTML = `
            <div class="spinner-border text-light" style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        `;
        document.body.appendChild(spinner);
    }
    spinner.style.display = 'flex';
}

// Hide loading spinner
function hideSpinner() {
    const spinner = document.getElementById('spinnerOverlay');
    if (spinner) {
        spinner.style.display = 'none';
    }
}

// Utility functions
function formatDateTime(dateTimeString) {
    if (!dateTimeString) return '-';
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatTimeAgo(dateTimeString) {
    const date = new Date(dateTimeString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;

    return formatDateTime(dateTimeString);
}

// Export for global access
window.viewDocument = viewDocument;
window.editUser = editUser;
window.deleteUser = deleteUser;
window.confirmReceipt = confirmReceipt;
window.printQRCode = printQRCode;
