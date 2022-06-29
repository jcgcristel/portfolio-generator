var profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr => {
    // regular for loop
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('-----------------')

    // using for each loop
    profileDataArr.forEach((profileItem) => { console.log(profileItem) });
};


printProfileData(profileDataArgs);

