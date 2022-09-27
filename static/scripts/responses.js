function getBotResponse(input) {
    //rock paper scissors
    if (input == "$help") {
        return "1.$apps:all apps menu 2.$about ;about LightOS 3. $system:";
    } else if (input == "$about") {
        window.location.href ='about.html'
    } else if (input == "$apps") {
        window.location.href ="launch.html"
    }

    // Simple responses
    if (input == "$system") {
        return "about.html";
    } else if (input == "$close prompt") {
        window.location.href='main.html'
    }
 else if (input == "$endSession") {
    window.location.href='step3.html'
}
     else  {
        return "The term you typed is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name";
    }
    
}