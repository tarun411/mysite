const express = require("express");
const app = express();
const port = 8888
//Requst processing

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Hospital Management System</h1>"+
                   "<hr/>"+
                   "<ol>"+
                    "<li> Home</li>"+
                    "<li> About</li>"+
                    "<li> Contact</li>"+
                    "<li> Book Appointment</li>"
                    );
});

app.get("/about", (req, res) => {
    res.send("<h1>HMS Pvt. ltd. h</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<p>Contact Number:9881735801</p>"
            +"<p>Email:1605.sainya@gmail.com</p>" );
});

app.get("/book_Appointment",(req, res)=>{
    var details=[
    {"id":12,"patient name":"tarun","doctor name":"sainya","age":25,"disease":"viral fever"},
    {"id":13,"patient name":"saket","doctor name":"akash","age":35,"disease":"corona"},
    {"id":14,"patient name":"krushabh","doctor name":"roshani","age":45,"disease":"typhoid"},
    {"id":15,"patient name":"pranil","doctor name":"apeksha","age":54,"disease":"typhoid"},
 
    ];
    res.send(details);

})
app.listen(8888, () => {
    console.log("Listen on the port 8888...");
});