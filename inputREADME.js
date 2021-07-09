function inputREADME(response){
    const {username , email, project, description, usage, license, install, contributing, tests , badge, } = response; 
     
   return `
   # ${project}

   Hey! My name is ${username} and my email is ${email}. 

   
   ## Description

   ${description}

   ## Usage
   
   ${usage}

   ## License 
   
   ${license}

   ## Installation 

   ${install}

   ## Contributions 

   ${contributing}

   ## Testing 

   ${tests}

   ## Badging 

   ${badge}
   
   ` 
};

module.exports = inputREADME;