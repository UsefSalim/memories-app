import mongoose from 'mongoose';
// ? documentation sur tout les type de donné mongoose
const postsShema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
  
});
const PostMessage = mongoose.model('PostMessage', postsShema);
// ! postMessage utuliser pour le crud deriére
export default PostMessage