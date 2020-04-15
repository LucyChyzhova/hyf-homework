//3. Create a button in html.

    const btn = document.getElementById('5secDelay')

    const delayedText = function () {
        setTimeout(() => { console.log("Task 3: Called after 5 seconds") }, 5000)
    }

    btn.addEventListener('click', delayedText)
