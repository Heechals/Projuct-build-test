function testAnimalFaceTest() {
    const testContainer = document.getElementById('test-container');

    // Test: Check if the h2 title is "Animal Face Test"
    const h2 = testContainer.querySelector('h2');
    if (h2 && h2.textContent === 'Animal Face Test') {
        console.log('Test passed: h2 title is correct.');
    } else {
        console.error('Test failed: h2 title is incorrect.');
    }

    // Test: Check if the upload button is disabled initially
    const startTestBtn = document.getElementById('start-test-btn');
    if (startTestBtn && startTestBtn.disabled) {
        console.log('Test passed: Upload button is disabled initially.');
    } else {
        console.error('Test failed: Upload button is not disabled initially.');
    }

    // Test: Check if the animals object is defined
    if (typeof animals !== 'undefined') {
        console.log('Test passed: The animals object is defined.');
    } else {
        console.error('Test failed: The animals object is not defined.');
    }
}

// Run the test
testAnimalFaceTest();