import PostMessage from '../models/posts.model.js'

// * route http://localhost:5000/posts => get All : get methode

export const getPosts = async (req, res) => {
  try {
    //?recuerer toute les info liée a la table post depuit la DB 
    const postMessages = await PostMessage.find();
    // ? revoyer une responce Json avec les info recuperer
    res.status(200).json( postMessages )
  } catch (error) {
    // 
    res.status(404).json({ message: error.message })
  }

}
// * route http://localhost:5000/posts => create : post methode 
export const createPost = async (req, res) => {
  //? recuperer les information envoyer par la requette POST depuit le formulaire
  const post = req.body
  //? passer les information a un nouveau post 
  const newPost = new PostMessage(post)
  try {
    //? Ajouter le nouveau post a la base de donner avec la methode .sage
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({message:error.message})
  }
}