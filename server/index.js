//* use dependencies
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
// * inport all routes posts
import postsRoute from './routes/posts.route.js';
// * init express
const app = express();
// ! ---------------------Midelwers -------------------------- !! //
app.use('/posts', postsRoute);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// ? ----------------------------DB Connect ----------------------??//
const CONNEXION_URL = 'mongodb+srv://admin:WCPtmjPuHennI9Bo@cluster0.aii3j.mongodb.net/memory-app?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNEXION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listning in PORT ${PORT}`)
    })
  })
  .catch((error) => console.log(error.messag));
mongoose.set("useFindAndModify", false);