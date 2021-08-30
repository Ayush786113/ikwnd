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
function getData(){
    let ref = firebase.database().ref("Experiences");
    let list = document.getElementById("viewlist");
    ref.once('value', function(snapshot){
      snapshot.forEach(function(childsnapshot){
        let dataReceived = childsnapshot.val();
        let li = document.createElement('li');
        let date = null;
        if (dataReceived.date == null) { date = "Before Time" }
        else{ date = dataReceived.date }
        let data = "Name: "+dataReceived.name+"\t \t"+"Country: "+dataReceived.country+"\t \t"+"Date: "+date+"\n \n"+dataReceived.experience;
        li.innerText = data;
        list.append(li);
      });
    });
  }
  getData();