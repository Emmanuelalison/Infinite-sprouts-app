document.addEventListener('DOMContentLoaded', function() {
    // Go Live functionality
    const goLiveBtn = document.getElementById('goLiveBtn');
    const goLivePopup = document.getElementById('goLivePopup');
    const audioLiveBtn = document.getElementById('audioLiveBtn');
    const videoLiveBtn = document.getElementById('videoLiveBtn');
    const proceedLiveBtn = document.getElementById('proceedLive');
    const cancelLiveBtn = document.getElementById('cancelLive');
    
    let selectedLiveOption = null;

    if (goLiveBtn) {
        goLiveBtn.addEventListener('click', function() {
            goLivePopup.style.display = 'block';
            const btnRect = goLiveBtn.getBoundingClientRect();
            goLivePopup.style.position = 'absolute';
            goLivePopup.style.top = `${btnRect.top}px`;
            goLivePopup.style.right = `${window.innerWidth - btnRect.right + 10}px`;
        });
    }

    if (audioLiveBtn) {
        audioLiveBtn.addEventListener('click', function() {
            selectedLiveOption = 'audio';
            audioLiveBtn.classList.add('selected');
            videoLiveBtn.classList.remove('selected');
        });
    }

    if (videoLiveBtn) {
        videoLiveBtn.addEventListener('click', function() {
            selectedLiveOption = 'video';
            videoLiveBtn.classList.add('selected');
            audioLiveBtn.classList.remove('selected');
        });
    }

    if (proceedLiveBtn) {
        proceedLiveBtn.addEventListener('click', function() {
            if (selectedLiveOption) {
                alert(`Starting ${selectedLiveOption} stream...`);
                goLivePopup.style.display = 'none';
                selectedLiveOption = null;
                audioLiveBtn.classList.remove('selected');
                videoLiveBtn.classList.remove('selected');
            } else {
                alert('Please select a streaming option first');
            }
        });
    }

    if (cancelLiveBtn) {
        cancelLiveBtn.addEventListener('click', function() {
            goLivePopup.style.display = 'none';
            selectedLiveOption = null;
            audioLiveBtn.classList.remove('selected');
            videoLiveBtn.classList.remove('selected');
        });
    }

    // Status Updates functionality
    const statusUpdatesSessions = document.getElementById('statusUpdatesSessions');
    const addStatusBtn = statusUpdatesSessions.querySelector('.plus-btn');

    if (addStatusBtn) {
        addStatusBtn.addEventListener('click', function() {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*,video/*';
            fileInput.style.display = 'none';
            document.body.appendChild(fileInput);

            fileInput.click();

            fileInput.addEventListener('change', function() {
                if (this.files && this.files[0]) {
                    const file = this.files[0];
                    const statusCard = document.createElement('div');
                    statusCard.className = 'status-session-card';

                    if (file.type.startsWith('image/')) {
                        const img = document.createElement('img');
                        img.src = URL.createObjectURL(file);
                        img.alt = 'Status Preview';
                        statusCard.appendChild(img);
                    } else if (file.type.startsWith('video/')) {
                        const video = document.createElement('video');
                        video.src = URL.createObjectURL(file);
                        video.controls = true;
                        statusCard.appendChild(video);
                    }

                    const username = document.createElement('p');
                    username.textContent = '@CurrentUser'; // Replace with actual username
                    statusCard.appendChild(username);

                    addStatusBtn.parentNode.insertBefore(statusCard, addStatusBtn.nextSibling);
                }
                document.body.removeChild(fileInput);
            });
        });
    }

    // Close popup when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === goLivePopup) {
            goLivePopup.style.display = 'none';
            selectedLiveOption = null;
            audioLiveBtn.classList.remove('selected');
            videoLiveBtn.classList.remove('selected');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const feedsBtn = document.getElementById('feedsBtn');
    const messagesBtn = document.getElementById('messagesBtn');
    const sproutsHubBtn = document.getElementById('sproutsHubSection');

    const feedsSection = document.getElementById('feedsSection');
    const emcHubSection = document.getElementById('emcHubSection');
    const sproutsHubSection = document.getElementById('sproutsHubSectionContent');

    function switchSection(sectionToShow) {
        feedsSection.style.display = 'none';
        emcHubSection.style.display = 'none';
        sproutsHubSection.style.display = 'none';

        feedsBtn.classList.remove('active');
        messagesBtn.classList.remove('active');
        sproutsHubBtn.classList.remove('active');

        sectionToShow.style.display = 'block';

        if (sectionToShow === feedsSection) {
            feedsBtn.classList.add('active');
        } else if (sectionToShow === emcHubSection) {
            messagesBtn.classList.add('active');
        } else if (sectionToShow === sproutsHubSection) {
            sproutsHubBtn.classList.add('active');
        }
    }

    feedsBtn.classList.add('active');
    feedsSection.style.display = 'block';

    feedsBtn.addEventListener('click', function () {
        switchSection(feedsSection);
    });

    messagesBtn.addEventListener('click', function () {
        switchSection(emcHubSection);
    });

    sproutsHubBtn.addEventListener('click', function () {
        switchSection(sproutsHubSection);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const allPostsBtn = document.getElementById('allPostsBtn');
    const agriculturePostsBtn = document.getElementById('agriculturePostsBtn');
    const cryptoPostsBtn = document.getElementById('cryptoPostsBtn');
    const politicsPostsBtn = document.getElementById('politicsPostsBtn');

    function filterPosts(category) {
        const posts = document.querySelectorAll('.post-item');
        posts.forEach(post => {
            if (category === 'all' || post.classList.contains(category)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });

        allPostsBtn.classList.remove('active');
        agriculturePostsBtn.classList.remove('active');
        cryptoPostsBtn.classList.remove('active');
        politicsPostsBtn.classList.remove('active');

        document.getElementById(category + 'PostsBtn').classList.add('active');
    }

    filterPosts('all');

    allPostsBtn.addEventListener('click', function () {
        filterPosts('all');
    });

    agriculturePostsBtn.addEventListener('click', function () {
        filterPosts('agriculture');
    });

    cryptoPostsBtn.addEventListener('click', function () {
        filterPosts('crypto');
    });

    politicsPostsBtn.addEventListener('click', function () {
        filterPosts('politics');
    });
});
