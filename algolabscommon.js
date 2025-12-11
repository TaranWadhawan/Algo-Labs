
document.addEventListener('click', (e) => {
    const bloom = document.createElement('div');
    bloom.classList.add('bloom');
    document.body.appendChild(bloom);
    let x=e.clientX;
    let y=e.clientY;
    bloom.style.left = `${e.clientX - 15}px`;  
    bloom.style.top = `${e.clientY - 15}px`;  
    setTimeout(() => {
        bloom.remove();
    }, 1000); 
    });
    
// First, let's check if our JavaScript is loading
console.log("Search script loaded");

// Define our search terms
const searchTerms = {
    'algorithm': '#algo',
    'algorithms': '#algo',
    'data': '#algo',
    'data structure': '#algo',
    'dsa': '#algo',
    'data structure and algorithm': '#algo',
    'data structure & algorithm': '#algo',
    'search': '#search',
    'binary search': '#search',
    'linear search': '#search',
    'sort': '#sort',
    'quick sort': '#sort',
    'selection sort': '#sort',
    'merge sort': '#sort',
    'cryptography': '#cryptography',
    'hashing': '#cryptography',
    'stacks': '#stacks',
    'stack': '#stacks',
    'tree': '#tree'
};

// Store the original content of the result div
let originalResultText = '';
let resultTextP; // Declare this globally so it can be assigned after DOMContentLoaded

function cleanSearchInput(input) {
    // 1. Convert to lowercase
    let cleaned = input.toLowerCase();

    // 2. Remove unwanted symbols (keep letters, numbers, and spaces)
    //    This regex keeps a-z, 0-9, and spaces. Anything else is removed.
    cleaned = cleaned.replace(/[^a-z0-9\s]/g, '');

    // 3. Normalize whitespace (replace multiple spaces with a single space)
    cleaned = cleaned.replace(/\s+/g, ' ');

    // 4. Trim leading/trailing whitespace
    cleaned = cleaned.trim();

    return cleaned;
}

function handleSearch() {
    const searchBar = document.getElementById('search-bar');
    
    // Ensure elements are available before proceeding
    if (!searchBar || !resultTextP) {
        console.error("Required elements (search-bar or result-text) not found!");
        return;
    }

    const rawInput = searchBar.value;
    const searchInput = cleanSearchInput(rawInput); // Use the new cleaning function
    
    console.log("Raw search input:", rawInput);
    console.log("Cleaned search input:", searchInput);

    // Check if the search term exists
    if (searchInput in searchTerms) {
        console.log("Match found! Redirecting to:", searchTerms[searchInput]);
        resultTextP.textContent = `Redirecting to "${searchInput}"...`;
        
        // Build the URL for the other page
        const baseUrl = "DSA_Algo_Labs.html"; // The page containing the content sections
        const anchor = searchTerms[searchInput];
        const fullUrl = baseUrl + anchor;
        
        // Redirect the user to the specific section on DSA_Algo_Labs.html
        window.location.href = fullUrl;
    } else {
        console.log("No match found for:", searchInput);
        
        // Show popup alert
        alert(`Object not found: "${rawInput}"`); // Show raw input in alert for better user feedback

        // Display "Object not found" in result div
        resultTextP.textContent = `Object not found: "${rawInput}"`; // Show raw input here too
        
        // After 10 seconds, revert to original text
        setTimeout(() => {
            resultTextP.innerHTML = originalResultText; // Use innerHTML to preserve bold tag if present
        }, 10000); // 10 seconds
    }
}

// Wait for the DOM to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded, setting up event listeners");
    
    // Assign resultTextP here once the DOM is ready
    resultTextP = document.getElementById('result-text');
    if (resultTextP) {
        originalResultText = resultTextP.innerHTML; // Store original content
    } else {
        console.error("Result text paragraph not found!");
        return; // Exit if critical element is missing
    }

    // Set up click event on search button
    const searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
        console.log("Click listener added to search button");
    } else {
        console.error("Search button not found!");
    }
    
    // Set up enter key event on search bar
    const searchBar = document.getElementById('search-bar');
    if (searchBar) {
        searchBar.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent default form submission if any
                handleSearch();
            }
        });
        console.log("Enter key listener added to search bar");
    } else {
        console.error("Search bar not found!");
    }
});

// function redirectToPage() {
//     // Get the search input
//     const searchBar = document.getElementById('search-bar');
//     const result = document.getElementById('result');
    
//     if (!searchBar || !result) {
//         console.error("Required elements not found!");
//         return;
//     }

//     const searchInput = searchBar.value.toLowerCase().trim();
//     console.log("Search input:", searchInput);

//     // Check if the search term exists
//     if (searchInput in searchTerms) {
//         console.log("Match found! Redirecting to:", searchTerms[searchInput]);
//         result.textContent = `Redirecting to ${searchInput}...`;
        
//         // Build the URL
//         const baseUrl = "DSA_Algo_Labs.html";
//         const anchor = searchTerms[searchInput];
//         const fullUrl = baseUrl + anchor;
        
//         // Redirect
//         window.location.href = fullUrl;
//     } else {
//         console.log("No match found");
//         result.textContent = 'Data Not Found';
//     }
// }

// // Wait for the DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("DOM loaded, setting up event listeners");
    
//     // Set up click event on search button
//     const searchButton = document.getElementById('search-button');
//     if (searchButton) {
//         searchButton.addEventListener('click', redirectToPage);
//         console.log("Click listener added to search button");
//     } else {
//         console.error("Search button not found!");
//     }
    
//     // Set up enter key event on search bar
//     const searchBar = document.getElementById('search-bar');
//     if (searchBar) {
//         searchBar.addEventListener('keydown', (event) => {
//             if (event.key === 'Enter') {
//                 redirectToPage();
//             }
//         });
//         console.log("Enter key listener added to search bar");
//     } else {
//         console.error("Search bar not found!");
//     }
// });


// // Define categories and their keywords
// const searchCategories = {
//     algo: ['algorithms', 'algorithm', 'data', 'data structure', 'dsa', 'data structure and algorithm'],
//     search: ['search', 'binary search', 'linear search'],
//     sort: ['sort', 'quick sort', 'selection sort', 'merge sort'],
//     cryptography: ['cryptography', 'hashing'],
//     stacks: ['stacks', 'stack'],
//     tree: ['tree']
// };

// // Combined keywords for initial check
// const allKeywords = Object.values(searchCategories).flat();

// // Function to handle the search and redirection
// function handleSearch() {
//     const searchInput = document.getElementById('search-bar').value.toLowerCase().trim();
//     const result = document.getElementById('result');
    
//     console.log("Search Input:", searchInput);
    
//     // Check if the search term exists in any category
//     if (allKeywords.includes(searchInput)) {
//         // Find the matching category
//         for (const [category, keywords] of Object.entries(searchCategories)) {
//             if (keywords.includes(searchInput)) {
//                 result.textContent = `Redirecting to ${category.charAt(0).toUpperCase() + category.slice(1)}`;
//                 // Add a small delay to show the redirect message
//                 setTimeout(() => {
//                     window.location.href = `DSA_Algo_Labs.html#${category}`;
//                 }, 500);
//                 return;
//             }
//         }
        
//         // If no specific category is found but term exists in allKeywords
//         result.textContent = 'Redirecting to DSA';
//         setTimeout(() => {
//             window.location.href = "DSA_Algo_Labs.html";
//         }, 500);
//     } else {
//         result.textContent = 'Data Not Found';
//         console.log("Data not found for:", searchInput);
//     }
// }

// // Initialize event listeners when the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//     const searchBar = document.getElementById('search-bar');
//     const searchButton = document.getElementById('search-button');
    
//     // Add Enter key event listener
//     searchBar.addEventListener('keydown', function(event) {
//         if (event.key === 'Enter') {
//             handleSearch();
//         }
//     });
    
//     // Add click event listener to search button
//     searchButton.addEventListener('click', handleSearch);
// });




// let dsaKeywords = ['algorithms', 'algorithm', 'data', 'data structure', 'dsa','data structure and algorithm','data structure and algorithm', 'search', 'sort', 'binary search', 'linear search', 'quick sort', 'selection sort', 'merge sort', 'cryptography', 'hashing', 'stacks', 'tree','stack'];
// let algo = ['algorithms', 'algorithm', 'data', 'data structure', 'dsa','data structure and algorithm'];
// let searchKeywords = ['search', 'binary search', 'linear search'];
// let sortKeywords = ['sort', 'quick sort', 'selection sort', 'merge sort'];
// let cryptographyKeywords = ['cryptography', 'hashing'];
// let stackKeywords = ['stacks', 'stack'];
// let treekeywords = ['tree'];

// function redirectToPage(){
//     const searchInput = document.getElementById('search-bar').value.toLowerCase().trim();
//     const result = document.getElementById('result');
//     // const searchButton = document.getElementById('search-button');


//     console.log("Search Input:",searchInput);
//     if(dsaKeywords.includes(searchInput)){
//         if(algo.includes(searchInput)){
//             result.textContent='Redirecting to DSA';
//             window.location.href="DSA_Algo_Labs.html#algo";
//         }else if(searchKeywords.includes(searchInput)){
//             result.textContent='Redirecting to Search';
//             window.location.href="DSA_Algo_Labs.html#search";
//         }else if(sortKeywords.includes(searchInput)){
//             result.textContent='Redirecting to Sort';
//             window.location.href="DSA_Algo_Labs.html#sort";
//         }else if(cryptographyKeywords.includes(searchInput)){
//             result.textContent='Redirecting to Cryptography';
//             window.location.href="DSA_Algo_Labs.html#cryptography";
//         }else if(stackKeywords.includes(searchInput)){
//             result.textContent='Redirecting to Stacks';
//             window.location.href="DSA_Algo_Labs.html#stacks";
//         }else if(treekeywords.includes(searchInput)){
//             result.textContent='Redirecting to Tree';
//             window.location.href="DSA_Algo_Labs.html#tree";
//         }else {
//             result.textContent='Redirecting to dsa.html';
//             window.location.href="DSA_Algo_Labs.html";
//         }
//     }else{
//         result.textContent = 'Data Not Found';
//         console.log("Data not found for:", searchTerm);
//     }
// }
// document.getElementById("search-bar").addEventListener("keydown",function(event){
//     if(event.key==="Enter"){
//         redirectToPage();
//     }
// });