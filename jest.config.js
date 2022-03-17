module.exports = {
    testPathIgnorePatterns: ["/node_modules/", "/.next/", "/.netlify/"],
    setupFilesAfterEnv: [// One array of file that i want to execute before the tests
        "<rootDir>/src/tests/setupTests.js"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(scss|css|sass)": "identity-obj-proxy"// it's necessary the lib identity-bj-proxy installed for this to work
    }
};