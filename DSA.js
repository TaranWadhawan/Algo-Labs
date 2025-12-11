function openTab(event, tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    const buttons = document.querySelectorAll('.tab-buttons button');
    buttons.forEach(button => button.classList.remove('active'));    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

