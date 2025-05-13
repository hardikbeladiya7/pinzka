const searchTerms = [
    "Best term life insurance",
    "Whole life insurance vs term life",
    "Affordable life insurance for seniors",
    "Life insurance with no medical exam",
    "Life insurance quotes online",
    "High-coverage life insurance",
    "Life insurance for families",
    "Guaranteed life insurance approval",
    "Term life insurance calculator",
    "Compare life insurance policies",
    "Best life insurance for millennials",
    "Joint life insurance plans",
    "Life insurance for self-employed",
    "Top life insurance providers in 2024",
    "Long-term life insurance benefits",
    "Renewable term life insurance",
    "Tips for choosing life insurance",
    "Life insurance riders explained"
];

const generateRandomURL = () => {
    const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
    const encodedTerm = encodeURIComponent(randomTerm);
    return `/search#gsc.tab=0&gsc.q=${encodedTerm}&gsc.sort=`;
}

export default generateRandomURL

