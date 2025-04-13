// Función para crear corazones flotantes con diferentes emojis
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    const emojis = ['❤️', '💖', '💝', '💕', '💗'];
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.fontSize = (Math.random() * 0.5 + 1.2) + 'rem';
    document.getElementById('hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Función para crear efecto de brillo en el texto
function addSparkleEffect() {
    const title = document.querySelector('h1');
    const sparkleIntensity = Math.random() * 15 + 5;
    title.style.textShadow = `0 0 ${sparkleIntensity}px rgba(233, 69, 96, 0.8)`;
}

// Función para animar las estrofas
function animateVerses() {
    const verses = document.querySelectorAll('.verse');
    verses.forEach((verse, index) => {
        setTimeout(() => {
            verse.style.opacity = '1';
            verse.style.transform = 'translateY(0)';
        }, index * 600);
    });
}

// Función para animar las imágenes
function animateImages() {
    const images = document.querySelectorAll('.image-container');
    images.forEach((image, index) => {
        setTimeout(() => {
            image.style.opacity = '1';
            image.style.transform = `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})`;
        }, index * 200);
    });
}

// Función para animar los videos
function animateVideos() {
    const videos = document.querySelectorAll('.video-section');
    videos.forEach((video, index) => {
        setTimeout(() => {
            video.style.opacity = '1';
            video.style.transform = 'scale(1)';
        }, index * 300);
    });
}

// Función para crear efecto de partículas
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.querySelector('.card').appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 5000);
}

// Efecto de entrada suave
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const verses = document.querySelectorAll('.verse');
    const images = document.querySelectorAll('.image-container');
    const videos = document.querySelectorAll('.video-section');
    
    // Inicializar estrofas
    verses.forEach(verse => {
        verse.style.opacity = '0';
        verse.style.transform = 'translateY(20px)';
        verse.style.transition = 'all 0.8s ease';
    });
    
    // Inicializar imágenes
    images.forEach(image => {
        image.style.opacity = '0';
        image.style.transform = 'scale(0.8)';
        image.style.transition = 'all 0.5s ease';
    });
    
    // Inicializar videos
    videos.forEach(video => {
        video.style.opacity = '0';
        video.style.transform = 'scale(0.9)';
        video.style.transition = 'all 0.7s ease';
    });

    // Animar tarjeta
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.transition = 'all 1s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        
        // Animar videos después de la tarjeta
        setTimeout(animateVideos, 200);
        
        // Animar imágenes después de los videos
        setTimeout(animateImages, 500);
        
        // Animar estrofas después de las imágenes
        setTimeout(animateVerses, 1000);
    }, 100);
});

// Iniciar animaciones
setInterval(createHeart, 400);
setInterval(addSparkleEffect, 1000);
setInterval(createParticle, 200);

// Efecto de hover en las estrofas
document.querySelectorAll('.verse').forEach(verse => {
    verse.addEventListener('mouseenter', () => {
        verse.style.transform = 'scale(1.03)';
        verse.style.background = 'rgba(255, 255, 255, 0.1)';
        verse.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        verse.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    
    verse.addEventListener('mouseleave', () => {
        verse.style.transform = 'scale(1)';
        verse.style.background = 'rgba(255, 255, 255, 0.05)';
        verse.style.border = '1px solid rgba(255, 255, 255, 0.05)';
        verse.style.boxShadow = 'none';
    });
});

// Efecto de hover en las imágenes
document.querySelectorAll('.image-container').forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1) rotate(0deg)';
        image.style.boxShadow = '0 10px 25px rgba(233, 69, 96, 0.4)';
        image.style.zIndex = '2';
    });
    
    image.addEventListener('mouseleave', () => {
        const index = Array.from(image.parentNode.children).indexOf(image);
        const rotation = index % 2 === 0 ? '-3deg' : '3deg';
        image.style.transform = `rotate(${rotation})`;
        image.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        image.style.zIndex = '1';
    });
});

// Efecto de hover en los videos
document.querySelectorAll('.video-section').forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.style.transform = 'scale(1.03)';
        video.style.boxShadow = '0 15px 35px rgba(233, 69, 96, 0.4)';
        video.style.border = '2px solid rgba(233, 69, 96, 0.5)';
    });
    
    video.addEventListener('mouseleave', () => {
        video.style.transform = 'scale(1)';
        video.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
        video.style.border = '2px solid rgba(233, 69, 96, 0.3)';
    });
}); 