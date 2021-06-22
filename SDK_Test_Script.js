// {Name: SDK_Test_Script}
// {Description: Companion script for SDK Test Tools}
// {Visibility: alan.app, synqq.com}
////
intent(`what is visual state`, p => {
    let visualState = p.visual.visualState;
    if (visualState) {
        p.play(`Visual state is: ${visualState}`);
    }
    else {
        p.play(`No visual state is set`);
    }
})

projectAPI.checkVisual = (p, param, callback) => {
    console.log("Check visual was called");
    let visualState = p.visual.visualState;
    if (visualState) {
        p.play(`Visual state is: ${visualState}`);
    }
    else {
        p.play(`No visual state is set`);
    }
};

projectAPI.customScript = (p, param, callback) => {
    console.log("Custom script was called");
    let textParam = param.text;
    if (textParam) {
        p.play(`Custom script is called with parameter: ${textParam}`);
    }
    else {
        p.play(`Custom script is called with no parameter`);
    }
};

projectAPI.sendCommand = (p, param, callback) => {
    console.log("Send command was called");
    p.play({command: "showAlert", text: param.text});
    p.play(`Show alert command was sent`);
};
