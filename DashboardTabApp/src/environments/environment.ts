export const environment = {
    production: false,
    apiBaseUrl: "https://ededmartinlin.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "aa81ea33-cf73-444b-b305-006b188a8fb4",
        clientId: "26ecd48e-4fba-4101-a937-d1487b1db6dc",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
