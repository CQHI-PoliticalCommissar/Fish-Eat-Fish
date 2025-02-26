// 检测设备方向并显示提示信息
function checkOrientation() {
    try {
        const orientationMessage = document.getElementById('rotateMessage');
        if (orientationMessage) {
            const isPortrait = window.innerWidth < window.innerHeight;
            orientationMessage.style.display = isPortrait ? 'block' : 'none';
        }
    } catch (error) {
        console.error('Error in checkOrientation:', error);
    }
}

// 初始化检测
checkOrientation();

// 监听窗口大小变化
window.addEventListener('resize', checkOrientation);
