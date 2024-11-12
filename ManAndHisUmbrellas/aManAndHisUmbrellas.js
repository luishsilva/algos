function minUmbrellas(weather) {
    let umbrellasAtHome = 0;
    let umbrellasAtWork = 0;
    let umbrellasNeeded = 0;

    for (let i = 0; i < weather.length; i++) {
        const isRaining = weather[i] === "rainy" || weather[i] === "thunderstorms";

        if (i % 2 === 0) {
            if (isRaining) {
                if (umbrellasAtHome > 0) {
                    umbrellasAtHome--;
                    umbrellasAtWork++;
                } else {
                    umbrellasNeeded++;
                    umbrellasAtWork++;
                }
            }
        } else {
            if (isRaining) {
                if (umbrellasAtWork > 0) {
                    umbrellasAtWork--;
                    umbrellasAtHome++;
                } else {
                    umbrellasNeeded++;
                    umbrellasAtHome++;
                }
            }
        }
    }

    return umbrellasNeeded;
}

console.log(minUmbrellas(["rainy", "clear", "rainy", "cloudy"]));