let models = [
    {
      name: "Vélo Sportif X",
      description: "Un vélo sportif pour des performances de haut niveau.",
      price: 1200,
      status: "En stock",
      image: "images/download-1.jpg"
    },
    {
      name: "Vélo de Ville Y",
      description: "Idéal pour la ville, léger et confortable.",
      price: 850,
      status: "Rupture de stock",
      image: "images/download.jpg"
    },
    // Ajouter d'autres modèles ici...
  ];
  
  function displayModels() {
    const modelesContainer = document.getElementById("modeles-container");
    modelesContainer.innerHTML = ""; // Réinitialiser la section des modèles
    models.forEach((model) => {
      const modelElement = document.createElement("div");
      modelElement.classList.add("modele");
      modelElement.innerHTML = `
        <img src="${model.image}" alt="${model.name}">
        <div class="modele-info">
          <h3>${model.name}</h3>
          <p class="modele-description">${model.description}</p>
          <p class="modele-prix">Prix: ${model.price}€</p>
          <p class="modele-availability">Disponibilité: <span class="${model.status === 'En stock' ? 'available' : 'out-of-stock'}">${model.status}</span></p>
        </div>
      `;
      modelesContainer.appendChild(modelElement);
    });
  }
  
  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Vérification simple de l'admin (vous pouvez améliorer cette partie avec un vrai backend)
    if (username === "admin" && password === "admin123") {
      document.getElementById("admin-tools").style.display = "block"; // Afficher les outils de l'admin
      displayModels(); // Afficher les modèles
      document.getElementById("add-model-form").style.display = "block"; // Afficher le formulaire d'ajout
    } else {
      alert("Identifiants incorrects");
    }
  }
  
  function addModele() {
    const name = document.getElementById("model-name").value;
    const description = document.getElementById("model-description").value;
    const price = parseFloat(document.getElementById("model-price").value);
    const image = document.getElementById("model-image").files[0];
    const status = document.getElementById("model-status").value;
  
    if (name && description && price && image) {
      const newModel = {
        name,
        description,
        price,
        status,
        image: URL.createObjectURL(image)
      };
  
      models.push(newModel);
      displayModels();
      cancelAddModel(); // Réinitialiser le formulaire d'ajout
    } else {
      alert("Veuillez remplir tous les champs");
    }
  }
  
  function cancelAddModel() {
    document.getElementById("add-model-form").style.display = "none"; // Masquer le formulaire d'ajout
  }
  
  displayModels(); // Afficher les modèles au chargement de la page
  
