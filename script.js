document.addEventListener("DOMContentLoaded", function () {
    const signupLink = document.getElementById("signupLink");
    const signupSection = document.getElementById("signupSection");

    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    signupLink.addEventListener("click", function (event) {
        event.preventDefault();
        toggleSignupSection();
    });

    const toggleSignupSection = () => {
        signupSection.style.display = (signupSection.style.display === "none") ? "block" : "none";
    };

    // Replace the following array with your actual image URLs
    const imageLinks = [
        './images/image1.jpg',
        './images/image2.jpg',
        './images/image3.jpg',
        // Add more image paths as needed
    ];
    
    const imageGrid = document.getElementById("imageGrid");

    imageLinks.forEach((imageLink) => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        const image = document.createElement("img");
        image.src = imageLink;

        const saveButton = document.createElement("button");
        saveButton.innerText = "Save";
        saveButton.classList.add("save-button");

        // Add event listener to the save button
        saveButton.addEventListener("click", function () {
            // Create a temporary anchor element
            const tempLink = document.createElement("a");
            tempLink.href = imageLink;
            tempLink.setAttribute("download", "image.jpg"); // Set the desired filename

            // Trigger a click event on the anchor element
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
        });

        imageContainer.appendChild(image);
        imageContainer.appendChild(saveButton);
        imageGrid.appendChild(imageContainer);
    });

    // Function to show the specified page and hide others
    window.showPage = function (pageId) {
        if (pageId === 'page1') {
            page1.style.display = 'block';
            page2.style.display = 'none';
        } else if (pageId === 'page2') {
            page1.style.display = 'none';
            page2.style.display = 'block';
        }
        // Add more conditions for additional pages as needed
    };
});
