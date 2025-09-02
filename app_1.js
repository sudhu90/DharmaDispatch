// DharmaDispatch Application JavaScript

// Application Data
const newsData = {
  "newsItems": [
    {
      "id": 1,
      "headline": "Russia-Ukraine Conflict Enters New Phase with Winter Energy Attacks",
      "summary": "Russia launches largest attack of war with 500+ missiles targeting Ukrainian civilian infrastructure ahead of winter heating season.",
      "category": "International Conflict",
      "source": "Reuters",
      "timestamp": "2025-09-02T14:30:00Z",
      "gitaTeaching": {
        "verse": "Bhagavad Gita 2.47 - कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
        "translation": "You have the right to perform your prescribed duty, but you are not entitled to the fruits of action",
        "application": "In warfare, Krishna teaches Arjuna about dharma yuddha (righteous war). Leaders must fight for dharma without being attached to victory or defeat, focusing on duty rather than outcomes. Ukraine's defense represents dharmic resistance against adharmic aggression.",
        "correlationPercent": 85
      },
      "likes": 234,
      "dislikes": 45,
      "comments": 67
    },
    {
      "id": 2,
      "headline": "Netanyahu Continues Gaza Military Operations Despite Ceasefire Calls",
      "summary": "Israeli PM warns 'this is only the beginning' after strikes that broke Hamas ceasefire, with hundreds reported killed.",
      "category": "Middle East",
      "source": "BBC",
      "timestamp": "2025-09-02T12:15:00Z",
      "gitaTeaching": {
        "verse": "Bhagavad Gita 2.38 - सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ",
        "translation": "Treating pleasure and pain, gain and loss, victory and defeat alike, engage in battle",
        "application": "Krishna advises maintaining equanimity in conflict. True leadership requires balanced judgment beyond personal emotions. The cycle of violence shows the importance of restraint and wisdom in the use of force, as taught in the Gita's principles of righteous action.",
        "correlationPercent": 78
      },
      "likes": 189,
      "dislikes": 98,
      "comments": 156
    },
    {
      "id": 3,
      "headline": "US-China Trade Relations Show Signs of Stabilization with Extended Truce",
      "summary": "Trump extends tariff truce with China by 90 days, preventing escalation to 145% duties during critical holiday season.",
      "category": "Global Economics", 
      "source": "Financial Times",
      "timestamp": "2025-09-01T16:45:00Z",
      "gitaTeaching": {
        "verse": "Bhagavad Gita 5.25 - लब्ध्वा ब्रह्मनिर्वाणं ऋषयः क्षीणकल्मषाः",
        "translation": "Sages who have destroyed their sins and resolved their doubts work for the welfare of all beings",
        "application": "Krishna emphasizes leaders working for universal welfare (Loka Sangraha). Trade relations should benefit all parties and global prosperity. Temporary truces show wisdom in avoiding mutually destructive conflicts, reflecting dharmic leadership principles.",
        "correlationPercent": 82
      },
      "likes": 156,
      "dislikes": 34,
      "comments": 89
    },
    {
      "id": 4,
      "headline": "NATO Expansion Debates Intensify as Putin Calls for Security Guarantees", 
      "summary": "After talks with Xi and Modi, Putin says NATO enlargement must be addressed for sustainable peace in Ukraine.",
      "category": "International Relations",
      "source": "Sky News",
      "timestamp": "2025-09-01T10:20:00Z", 
      "gitaTeaching": {
        "verse": "Bhagavad Gita 12.13-14 - अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च",
        "translation": "One who is not envious but a kind friend to all beings, who is merciful and free from attachment",
        "application": "Krishna teaches about maintaining friendly relations without hatred. International alliances should be based on mutual security rather than containment. True dharmic leadership seeks security through understanding rather than military expansion.",
        "correlationPercent": 75
      },
      "likes": 203,
      "dislikes": 67,
      "comments": 134
    },
    {
      "id": 5,
      "headline": "Global Climate Summit Calls for Urgent Action on Carbon Emissions",
      "summary": "World leaders gather to address accelerating climate change with new commitments for renewable energy transition.",
      "category": "Environment",
      "source": "Guardian",
      "timestamp": "2025-09-01T08:30:00Z",
      "gitaTeaching": {
        "verse": "Bhagavad Gita 3.25 - यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः",
        "translation": "Whatever a great person does, others follow; whatever standards he sets, the world pursues",
        "application": "Krishna emphasizes leadership by example. Climate action requires leaders to model sustainable behavior for their people. The concept of yajna (sacrifice) teaches that human progress should not come at the cost of environmental destruction, maintaining cosmic balance.",
        "correlationPercent": 88
      },
      "likes": 445,
      "dislikes": 23,
      "comments": 201
    },
    {
      "id": 6,
      "headline": "African Economic Forum Addresses Trade Barriers and Development Challenges",
      "summary": "African leaders discuss strategies to overcome economic vulnerabilities highlighted by global trade disruptions.",
      "category": "Economics",
      "source": "Africa News",
      "timestamp": "2025-08-31T14:15:00Z",
      "gitaTeaching": {
        "verse": "Bhagavad Gita 3.20 - कर्मणैव हि संसिद्धिमास्थिता जनकादयः",
        "translation": "Kings like Janaka achieved perfection through action alone",
        "application": "Krishna cites King Janaka as an example of dharmic leadership through selfless action. African leaders working for continental development exemplify karma yoga - action without attachment to personal gain, focusing on collective welfare and economic justice.",
        "correlationPercent": 79
      },
      "likes": 167,
      "dislikes": 28,
      "comments": 93
    },
    {
      "id": 7,
      "headline": "European Union Strengthens Unity Amid Rising Regional Challenges",
      "summary": "EU leaders reaffirm commitment to collective action on migration, energy security, and democratic values.",
      "category": "Regional Politics",
      "source": "Euronews", 
      "timestamp": "2025-08-31T11:40:00Z",
      "gitaTeaching": {
        "verse": "Bhagavad Gita 6.32 - आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन",
        "translation": "One who sees equality everywhere by comparing with oneself, O Arjuna",
        "application": "Krishna teaches seeing unity in diversity. European integration reflects this principle - different nations working together while maintaining distinct identities. True dharmic governance recognizes the interconnectedness of all beings and works for collective harmony.",
        "correlationPercent": 84
      },
      "likes": 198,
      "dislikes": 41,
      "comments": 76
    },
    {
      "id": 8,
      "headline": "Middle East Diplomatic Initiatives Seek Regional Stability", 
      "summary": "Gulf states and regional powers explore new frameworks for cooperation and conflict resolution.",
      "category": "Diplomacy",
      "source": "Al Jazeera",
      "timestamp": "2025-08-30T16:20:00Z",
      "gitaTeaching": {
        "verse": "Bhagavad Gita 4.11 - ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम्",
        "translation": "As people approach me, so I reward them accordingly",
        "application": "Krishna emphasizes reciprocal respect in relationships. Diplomatic solutions require mutual understanding and respect for different perspectives. Peace emerges when parties treat each other with dignity, moving beyond historical grievances toward dharmic solutions.",
        "correlationPercent": 73
      },
      "likes": 134,
      "dislikes": 52,
      "comments": 98
    },
    {
      "id": 9,
      "headline": "Asian Pacific Security Alliance Addresses Regional Tensions",
      "summary": "QUAD nations strengthen cooperation on maritime security and democratic values in Indo-Pacific region.",
      "category": "Security", 
      "source": "Times of India",
      "timestamp": "2025-08-30T09:10:00Z",
      "gitaTeaching": {
        "verse": "Bhagavad Gita 4.8 - परित्राणाय साधूनां विनाशाय च दुष्कृताम्",
        "translation": "For the protection of the virtuous and destruction of the wicked",
        "application": "Krishna explains divine intervention to protect dharma. Democratic alliances like QUAD represent collective dharmic action to protect free societies from authoritarian threats. The duty to protect the righteous is a fundamental principle of dharmic leadership.",
        "correlationPercent": 81
      },
      "likes": 267,
      "dislikes": 39,
      "comments": 145
    },
    {
      "id": 10,
      "headline": "Global Supply Chain Disruptions Challenge International Trade",
      "summary": "Shipping delays and resource shortages highlight interconnected nature of modern global economy.",
      "category": "Trade",
      "source": "Wall Street Journal", 
      "timestamp": "2025-08-29T13:25:00Z",
      "gitaTeaching": {
        "verse": "Bhagavad Gita 3.14 - अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसम्भवः",
        "translation": "All beings are nourished by food grains, which are produced from rains",
        "application": "Krishna describes the interconnected cycle of nature and economy. Global supply chains reflect this universal interdependence. Disruptions teach us about the importance of dharmic cooperation and sustainable resource management for collective welfare.",
        "correlationPercent": 86
      },
      "likes": 178,
      "dislikes": 31,
      "comments": 67
    }
  ],
  "categories": ["International Conflict", "Middle East", "Global Economics", "International Relations", "Environment", "Economics", "Regional Politics", "Diplomacy", "Security", "Trade"],
  "users": [
    {"id": 1, "name": "Arjuna Kumar", "avatar": "AK"},
    {"id": 2, "name": "Krishna Sharma", "avatar": "KS"}, 
    {"id": 3, "name": "Dharma Singh", "avatar": "DS"},
    {"id": 4, "name": "Vidya Devi", "avatar": "VD"},
    {"id": 5, "name": "Ram Prasad", "avatar": "RP"}
  ]
};

// Sample comments data
const commentsData = {
  1: [
    {
      id: 1,
      author: "Arjuna Kumar",
      avatar: "AK",
      content: "This correlation between the Ukraine conflict and dharma yuddha is profound. The Gita's teachings on righteous war are so relevant today.",
      timestamp: "2 hours ago",
      upvotes: 12,
      downvotes: 1
    },
    {
      id: 2,
      author: "Vidya Devi",
      avatar: "VD", 
      content: "Krishna's emphasis on duty without attachment to results is exactly what modern leaders need to learn. Great analysis!",
      timestamp: "1 hour ago",
      upvotes: 8,
      downvotes: 0
    }
  ],
  2: [
    {
      id: 3,
      author: "Dharma Singh",
      avatar: "DS",
      content: "The Gaza situation is complex, but the Gita's teaching on equanimity in conflict offers wisdom for all parties involved.",
      timestamp: "3 hours ago",
      upvotes: 15,
      downvotes: 3
    }
  ]
};

// Application State
let currentNewsItems = [...newsData.newsItems];
let userVotes = {}; // Store user vote preferences
let currentModalNewsId = null;
let isDarkMode = false;

// DOM Elements
let newsGrid, searchInput, categoryFilters, refreshBtn, darkModeToggle;
let commentModal, shareModal, closeModal, closeShareModal;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Get DOM elements
    newsGrid = document.getElementById('newsGrid');
    searchInput = document.getElementById('searchInput');
    categoryFilters = document.querySelectorAll('.filter-btn');
    refreshBtn = document.getElementById('refreshBtn');
    darkModeToggle = document.getElementById('darkModeToggle');
    commentModal = document.getElementById('commentModal');
    shareModal = document.getElementById('shareModal');
    closeModal = document.getElementById('closeModal');
    closeShareModal = document.getElementById('closeShareModal');
    
    renderNewsItems(currentNewsItems);
    setupEventListeners();
    loadUserPreferences();
}

function setupEventListeners() {
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Category filters
    categoryFilters.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });
    
    // Refresh button
    if (refreshBtn) {
        refreshBtn.addEventListener('click', handleRefresh);
    }
    
    // Dark mode toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Modal close buttons - Fixed event listeners
    if (closeModal) {
        closeModal.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeCommentModal();
        });
    }
    
    if (closeShareModal) {
        closeShareModal.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeShareModalHandler();
        });
    }
    
    // Close modal on overlay click - Fixed
    if (commentModal) {
        commentModal.addEventListener('click', function(e) {
            if (e.target === commentModal || e.target.classList.contains('modal-overlay')) {
                e.preventDefault();
                e.stopPropagation();
                closeCommentModal();
            }
        });
    }
    
    if (shareModal) {
        shareModal.addEventListener('click', function(e) {
            if (e.target === shareModal || e.target.classList.contains('modal-overlay')) {
                e.preventDefault();
                e.stopPropagation();
                closeShareModalHandler();
            }
        });
    }
    
    // ESC key to close modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (!commentModal.classList.contains('hidden')) {
                closeCommentModal();
            }
            if (!shareModal.classList.contains('hidden')) {
                closeShareModalHandler();
            }
        }
    });
    
    // Copy link functionality
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', copyCurrentLink);
    }
}

function renderNewsItems(items) {
    if (!newsGrid) return;
    
    newsGrid.innerHTML = '';
    
    items.forEach((item, index) => {
        const newsCard = createNewsCard(item, index);
        newsGrid.appendChild(newsCard);
    });
    
    // Add fade-in animation
    newsGrid.classList.add('fade-in');
    setTimeout(() => newsGrid.classList.remove('fade-in'), 300);
}

function createNewsCard(item, index) {
    const card = document.createElement('div');
    card.className = 'news-card fade-in';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const userVote = userVotes[item.id];
    const likeClass = userVote === 'like' ? 'vote-btn--liked' : '';
    const dislikeClass = userVote === 'dislike' ? 'vote-btn--disliked' : '';
    
    card.innerHTML = `
        <div class="correlation-badge">${item.gitaTeaching.correlationPercent}% Match</div>
        
        <div class="news-card__header">
            <div class="news-card__category">${item.category}</div>
            <h2 class="news-card__headline">${item.headline}</h2>
            <p class="news-card__summary">${item.summary}</p>
            <div class="news-card__meta">
                <span>${item.source}</span>
                <span>${formatTimestamp(item.timestamp)}</span>
            </div>
        </div>
        
        <div class="gita-teaching">
            <div class="gita-teaching__verse">${item.gitaTeaching.verse}</div>
            <div class="gita-teaching__translation">"${item.gitaTeaching.translation}"</div>
            <div class="gita-teaching__application">${item.gitaTeaching.application}</div>
        </div>
        
        <div class="news-card__actions">
            <div class="vote-actions">
                <button class="vote-btn ${likeClass}" data-action="like" data-id="${item.id}">
                    👍 <span>${item.likes}</span>
                </button>
                <button class="vote-btn ${dislikeClass}" data-action="dislike" data-id="${item.id}">
                    👎 <span>${item.dislikes}</span>
                </button>
            </div>
            
            <div class="interaction-actions">
                <button class="action-btn" data-action="comment" data-id="${item.id}">
                    💬 ${item.comments}
                </button>
                <button class="action-btn" data-action="share" data-id="${item.id}">
                    📤 Share
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners for buttons
    const likeBtn = card.querySelector(`[data-action="like"][data-id="${item.id}"]`);
    const dislikeBtn = card.querySelector(`[data-action="dislike"][data-id="${item.id}"]`);
    const commentBtn = card.querySelector(`[data-action="comment"][data-id="${item.id}"]`);
    const shareBtn = card.querySelector(`[data-action="share"][data-id="${item.id}"]`);
    
    if (likeBtn) likeBtn.addEventListener('click', () => handleVote(item.id, 'like'));
    if (dislikeBtn) dislikeBtn.addEventListener('click', () => handleVote(item.id, 'dislike'));
    if (commentBtn) commentBtn.addEventListener('click', () => openCommentModal(item.id));
    if (shareBtn) shareBtn.addEventListener('click', () => openShareModal(item.id));
    
    return card;
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours} hours ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays} days ago`;
    
    return date.toLocaleDateString();
}

function handleVote(newsId, voteType) {
    const newsItem = currentNewsItems.find(item => item.id === newsId);
    if (!newsItem) return;
    
    const currentVote = userVotes[newsId];
    
    // Remove previous vote
    if (currentVote === 'like') {
        newsItem.likes--;
    } else if (currentVote === 'dislike') {
        newsItem.dislikes--;
    }
    
    // Add new vote if different from current
    if (currentVote !== voteType) {
        if (voteType === 'like') {
            newsItem.likes++;
        } else {
            newsItem.dislikes++;
        }
        userVotes[newsId] = voteType;
    } else {
        // Remove vote if clicking same button
        delete userVotes[newsId];
    }
    
    // Re-render to update counts and styling
    renderNewsItems(currentNewsItems);
    saveUserPreferences();
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (!query) {
        currentNewsItems = [...newsData.newsItems];
    } else {
        currentNewsItems = newsData.newsItems.filter(item => {
            return (
                item.headline.toLowerCase().includes(query) ||
                item.summary.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query) ||
                item.gitaTeaching.verse.toLowerCase().includes(query) ||
                item.gitaTeaching.application.toLowerCase().includes(query)
            );
        });
    }
    
    renderNewsItems(currentNewsItems);
}

function handleCategoryFilter(e) {
    // Remove active class from all buttons
    categoryFilters.forEach(btn => btn.classList.remove('filter-btn--active'));
    
    // Add active class to clicked button
    e.target.classList.add('filter-btn--active');
    
    const category = e.target.dataset.category;
    
    if (category === 'all') {
        currentNewsItems = [...newsData.newsItems];
    } else {
        currentNewsItems = newsData.newsItems.filter(item => item.category === category);
    }
    
    renderNewsItems(currentNewsItems);
}

function handleRefresh() {
    if (!refreshBtn) return;
    
    refreshBtn.classList.add('loading');
    
    // Simulate refresh delay
    setTimeout(() => {
        // Shuffle the news items to simulate new content
        currentNewsItems = [...newsData.newsItems].sort(() => Math.random() - 0.5);
        renderNewsItems(currentNewsItems);
        refreshBtn.classList.remove('loading');
    }, 1000);
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.documentElement.setAttribute('data-color-scheme', 'dark');
        darkModeToggle.textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-color-scheme', 'light');
        darkModeToggle.textContent = '🌙';
    }
    
    saveUserPreferences();
}

function openCommentModal(newsId) {
    if (!commentModal) return;
    
    currentModalNewsId = newsId;
    const newsItem = newsData.newsItems.find(item => item.id === newsId);
    
    const modalTitle = commentModal.querySelector('.modal-title');
    if (modalTitle && newsItem) {
        modalTitle.textContent = `Discussion: ${newsItem.headline.substring(0, 50)}...`;
    }
    
    renderComments(newsId);
    commentModal.classList.remove('hidden');
    
    // Setup comment submission
    const commentSubmitBtn = commentModal.querySelector('.comment-submit');
    if (commentSubmitBtn) {
        // Remove existing listeners
        const newBtn = commentSubmitBtn.cloneNode(true);
        commentSubmitBtn.parentNode.replaceChild(newBtn, commentSubmitBtn);
        
        // Add new listener
        newBtn.addEventListener('click', function() {
            submitComment(newsId);
        });
    }
}

function closeCommentModal() {
    if (commentModal) {
        commentModal.classList.add('hidden');
    }
    currentModalNewsId = null;
}

function renderComments(newsId) {
    const commentsList = document.getElementById('commentsList');
    if (!commentsList) return;
    
    const comments = commentsData[newsId] || [];
    
    if (comments.length === 0) {
        commentsList.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: var(--space-20);">Be the first to share your thoughts on this correlation!</p>';
        return;
    }
    
    commentsList.innerHTML = comments.map(comment => `
        <div class="comment">
            <div class="comment__header">
                <div class="comment__author">
                    <div class="comment__avatar">${comment.avatar}</div>
                    <span class="comment__name">${comment.author}</span>
                </div>
                <span class="comment__time">${comment.timestamp}</span>
            </div>
            <div class="comment__content">${comment.content}</div>
            <div class="comment__actions">
                <button class="comment-action-btn">👍 ${comment.upvotes}</button>
                <button class="comment-action-btn">👎 ${comment.downvotes}</button>
                <button class="comment-action-btn">Reply</button>
            </div>
        </div>
    `).join('');
}

function submitComment(newsId) {
    const textarea = commentModal.querySelector('.comment-textarea');
    if (!textarea) return;
    
    const content = textarea.value.trim();
    if (!content) return;
    
    // Create new comment
    const newComment = {
        id: Date.now(),
        author: "Anonymous User",
        avatar: "AU",
        content: content,
        timestamp: "Just now",
        upvotes: 0,
        downvotes: 0
    };
    
    // Add to comments data
    if (!commentsData[newsId]) {
        commentsData[newsId] = [];
    }
    commentsData[newsId].unshift(newComment);
    
    // Update news item comment count
    const newsItem = currentNewsItems.find(item => item.id === newsId);
    if (newsItem) {
        newsItem.comments++;
    }
    
    // Clear textarea
    textarea.value = '';
    
    // Re-render comments and news
    renderComments(newsId);
    renderNewsItems(currentNewsItems);
}

function openShareModal(newsId) {
    if (!shareModal) return;
    
    currentModalNewsId = newsId;
    const newsItem = newsData.newsItems.find(item => item.id === newsId);
    
    const modalTitle = shareModal.querySelector('.modal-title');
    if (modalTitle) {
        modalTitle.textContent = 'Share This Story';
    }
    
    shareModal.classList.remove('hidden');
    
    // Setup share button listeners
    const shareButtons = shareModal.querySelectorAll('.share-btn[data-platform]');
    shareButtons.forEach(btn => {
        // Remove existing listeners
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        // Add new listener
        newBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleShareClick(e);
        });
    });
}

function closeShareModalHandler() {
    if (shareModal) {
        shareModal.classList.add('hidden');
    }
    currentModalNewsId = null;
}

function handleShareClick(e) {
    if (!currentModalNewsId) return;
    
    const button = e.target.closest('.share-btn');
    if (!button) return;
    
    const platform = button.dataset.platform;
    const newsItem = newsData.newsItems.find(item => item.id === currentModalNewsId);
    
    if (!newsItem) return;
    
    const shareText = `${newsItem.headline}\n\n"${newsItem.gitaTeaching.translation}"\n\nRead more on DharmaDispatch`;
    const shareUrl = `${window.location.href}#news-${newsItem.id}`;
    
    switch (platform) {
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
            break;
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
            break;
        case 'instagram':
            // Instagram doesn't support direct web sharing, show message
            alert('Please copy the link and share manually on Instagram!');
            break;
        case 'whatsapp':
            window.open(`https://wa.me/?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`, '_blank');
            break;
    }
    
    closeShareModalHandler();
}

function copyCurrentLink() {
    if (!currentModalNewsId) return;
    
    const newsItem = newsData.newsItems.find(item => item.id === currentModalNewsId);
    if (!newsItem) return;
    
    const shareUrl = `${window.location.href}#news-${newsItem.id}`;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(() => {
            const btn = document.getElementById('copyLinkBtn');
            if (btn) {
                const originalText = btn.innerHTML;
                btn.innerHTML = '<span class="share-icon">✅</span> Copied!';
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                }, 2000);
            }
        }).catch(() => {
            fallbackCopyToClipboard(shareUrl);
        });
    } else {
        fallbackCopyToClipboard(shareUrl);
    }
}

function fallbackCopyToClipboard(text) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert('Link copied to clipboard!');
    } catch (err) {
        alert('Unable to copy link. Please copy manually: ' + text);
    }
    
    document.body.removeChild(textArea);
}

function saveUserPreferences() {
    const preferences = {
        userVotes: userVotes,
        isDarkMode: isDarkMode
    };
    
    // Since we can't use localStorage in this environment, we'll just keep it in memory
    // In a real application, this would save to localStorage or a backend
}

function loadUserPreferences() {
    // Since we can't use localStorage, we'll start with default preferences
    // In a real application, this would load from localStorage or a backend
    
    // Set initial dark mode based on system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleDarkMode();
    }
}