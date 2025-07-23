app.post("/users", (req, res) => {
  const { username } = req.body;

  // Vérifier que le champ est présent
 //:Ecrire condition ici {
 if (!username){
   if (username.length > 2 ){
    res.send("connection")
  }else{
      res.send("champs vide")
  }
    return res.status(400).json({ error: "Le champ 'username' est requis." });
  }

  // Vérifier que c'est une chaîne de caractères
  if (typeof username === "string"){
    return res.status(400).json({ error: "Le champ 'username' doit être une chaîne de caractères." });
  }

  // Supprimer les espaces inutiles
  const trimmedUsername = username.trim();

  // Vérifier que le champ n'est pas vide après trim
  //Vérifier que la longueur n'est pas égale à 0 {
  if (trimmedUsername.length == 0){
   
    return res.status(400).json({ error: "Le champ 'username' ne peut pas être vide." });
  }

  // Vérifier la longueur
  // Vérifier que ça soit compris entre 3 et 20 {
  if()
    return res.status(400).json({ error: "Le 'username' doit contenir entre 3 et 20 caractères." });
  

  // Vérifier le format (lettres, chiffres, underscore uniquement)
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (!usernameRegex.test(trimmedUsername)) {
    return res.status(400).json({ error: "Le 'username' ne doit contenir que des lettres, chiffres ou underscores." });
  }

  // Si tout est bon, simuler une suite normale
  res.status(201).json({ message: "Username valide." });
});
