(adsbygoogle = window.adsbygoogle || []).push({});

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Assuming you have the iframe element in your DOM
    var adIframe = document.getElementById('aswift_1');

    // Check if the iframe exists
    if (adIframe) {
        // Check if the iframe's body is blank
        var iframeDocument = adIframe.contentDocument || adIframe.contentWindow.document;
        var iframeBody = iframeDocument.body;

        if (iframeBody && iframeBody.innerHTML.trim() === '') {
            // If the iframe body is blank, hide or remove the parent container
            var adContainer = document.getElementById('ad-container');
            if (adContainer) {
                adContainer.style.display = 'none'; // or adContainer.remove();
            }
        }
    }
});