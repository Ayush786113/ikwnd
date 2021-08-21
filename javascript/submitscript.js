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
let refstorage = firebase.storage().ref("Experiences");
if(namestr!="" && emailstr!="" && expstr!="" &&countrystr!="")
  {
     try {
      refdatabase.push({
        Name: namestr,
        Email: emailstr,
        Experience: expstr,
        Country: countrystr
      });
      alert('Data Uploaded'+'\n Return to the previous page and view all the experiences.');
    } catch (error) {
      alert('Try again or contact the Developer');
    }
  }
  else
    alert('Please fill all the feilds to upload data')
}