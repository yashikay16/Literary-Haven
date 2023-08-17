const mongoose = require('mongoose');
const url='mongodb+srv://yashikay16:root@cluster0.d1bo90h.mongodb.net/bookstore?retryWrites=true&w=majority'
// asynchronous function-returns a promise(then and catch)
mongoose.connect(url)
// result stores details about the connection,veryyy long and detailed
.then((result) => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
    
});
// console.log('do other stuff');
module.exports=mongoose;