const prodConfig = {
    apiKey: "AIzaSyALqvNGmVWrD6ryiTJkIiWYT6tDRRLbddU",
    authDomain: "transloyalproduction.firebaseapp.com",
    databaseURL: "https://transloyalproduction.firebaseio.com",
    projectId: "transloyalproduction",
    storageBucket: "transloyalproduction.appspot.com",
    messagingSenderId: "590985789271"
};

const devConfig = {
    apiKey: "AIzaSyC3buosZaroekydPV_UNUoo22RVNtLb2ek",
    authDomain: "transloyaldevelopment.firebaseapp.com",
    databaseURL: "https://transloyaldevelopment.firebaseio.com",
    projectId: "transloyaldevelopment",
    storageBucket: "transloyaldevelopment.appspot.com",
    messagingSenderId: "929634298420"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
