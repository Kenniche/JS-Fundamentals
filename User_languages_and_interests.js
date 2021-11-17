// USERS-OBJECT TRAVERSING 
users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
    ]
    
    function userLanguage(users){
        users.forEach(function(user){
        var language = "";
        var user_interest = "";
    
        for(var i =0; i< user.languages.length -1; i++){
        language += user.languages[i] + ", ";
        }
        language += "and " + user.languages[user.languages.length-1];
        console.log(user.fname + " " + user.lname + " knows " + language);
    
    for(var key in user.interests){
        var interest_arr = user.interests[key];
        for(var i = 0; i< interest_arr.length -1; i++){
            user_interest += interest_arr[i] + ", ";}
    }
        user_interest += "and " + interest_arr[interest_arr.length -1];
        console.log(user.fname + " " + user.lname + " is also interested in " + user_interest);
    })
}

userLanguage(users);