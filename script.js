
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Right-click is disabled on this website.");
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        return false;
    }
});

document.getElementById('clickBtn').addEventListener('click', function() {
    alert('Button clicked successfully!');
});