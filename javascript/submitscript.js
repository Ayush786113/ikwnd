function initializeDatabase(){
    let firebaseConfig = {
        apiKey: "AIzaSyAh3M1W5skHdCBh0DnPCxetCHGSwdZtkT8",
        authDomain: "i-know-what-none-does.firebaseapp.com",
        databaseURL: "https://i-know-what-none-does.firebaseio.com",
        projectId: "i-know-what-none-does",
        storageBucket: "i-know-what-none-does.appspot.com",
        messagingSenderId: "902300985165",
        appId: "1:902300985165:web:628bf5bb82971d0f997904",
        measurementId: "G-GDTMMK483D"
      };
      try {
        firebase.initializeApp(firebaseConfig); 
        firebase.analytics();
      } catch (error) {
        alert('Try again or contact the Developer');
      }
}
initializeDatabase();
let namestr, emailstr, expstr, countrystr;
let button = document.getElementById("inputbutton");
button.onclick = function click(){
let name = document.getElementById("namevalue");
let email = document.getElementById("emailvalue");
let exp = document.getElementById("expvalue");
let country = document.getElementById("countryvalue");
namestr = name.value;
emailstr = email.value;
expstr = exp.value;
countrystr = country.value;
let refdatabase = firebase.database().ref("Experiences");
let uniqueUser = firebase.database().ref("Users");
let date = new Date().toISOString().slice(0, 10);
if(namestr!="" && emailstr!="" && expstr!="" &&countrystr!="")
  {
     try {
      refdatabase.push({
        name: namestr.trim(),
        email: emailstr.trim(),
        experience: expstr.trim(),
        country: countrystr.trim(),
        date: date.trim(),
      });
      alert('Data Uploaded'+'\n Return to the previous page and view all the experiences.');
    } catch (error) {
      alert('Try again or contact the Developer');
    }
      // .#$[]@
    let userID = namestr.replace(' ', '').trim()+countrystr.replace(' ', '').trim()+emailstr.trim();
    userID = userID.replace(' ', '');
    userID = userID.replace('.', '');
    userID = userID.replace('#', '');
    userID = userID.replace('$', '');
    userID = userID.replace('[', '');
    userID = userID.replace(']', '');
    userID = userID.replace('@', '');
    try{
      uniqueUser.child(userID).set({
        name: namestr,
        country: countrystr,
        email: emailstr,
      })
    }
    catch(error){
      console.log(error);
    }
  }
  else
    alert('Please fill all the feilds to upload data')
}