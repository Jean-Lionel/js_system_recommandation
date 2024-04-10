
const sallyRomComProfile = {
    action: 0,
    romcom: 5,
    thriller: 2,
    horror: 3,
    brainy: 1,
    kids: 1,
    fantasy: 3
};

const johnActionProfile = {
    action: 5,
    romcom: 1,
    thriller: 2,
    horror: 0,
    brainy: 0,
    kids: 0,
    fantasy: 2
};

const makeRecommendationProfile = (movie, profile) => {
    let score  = 0;
    for(const key of Object.keys(profile)){
        if(movie.types.hasOwnProperty(key)){
            score += movie.types[key] * profile[key];
        }
    }
    const total = Object.values(profile).reduce((a, b) => a + b, 0);
    return (score / total) ;
}
const movie = {
    name: 'Film Imaginaire',
    types: {
        action: 1,
        romcom: 1,
        horror: 5,
    }
}

const resultat1 = makeRecommendationProfile(movie, johnActionProfile)
console.log(resultat1)
const resultat2 = makeRecommendationProfile(movie, sallyRomComProfile)
console.log(resultat2)
