// Firebase Config
var firebaseConfig = {
    apiKey: "AIzaSyA7421CNSPu3c0npvn9UfuqEd8Ml6sMsJY",
    authDomain: "teamforces-6c0dc.firebaseapp.com",
    projectId: "teamforces-6c0dc",
    storageBucket: "teamforces-6c0dc.appspot.com",
    messagingSenderId: "417823330439",
    appId: "1:417823330439:web:ad8d23df91229d36a32822"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  let postCollection = document.querySelector("#posts-collection");
  
  const db = firebase.firestore();

  function createPost(title, content, time) {
    let div = document.createElement("div");
    div.setAttribute("class", "blog-item-card");
  
    let img = document.createElement("img");
    img.setAttribute("class", "blog-item-image");
    let h2 = document.createElement("p");
    h2.setAttribute("class", "blog-item-name");
    let p = document.createElement("p");
    p.setAttribute("class", "blog-desc");
    let small = document.createElement("p");
    small.setAttribute("class", "blog-date");
  
    img.src = img;
    h2.textContent = title;
    p.textContent = content;
    small.textContent = time;
  
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(small);
  
    postCollection.appendChild(div);
  }
  
  // Get Posts
  function getPosts() {
    db.collection("posts")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(docs => {
          createPost(
            docs.data().postImage,
            docs.data().postName,
            docs.data().postContent,
            docs.data().createdAt
          );
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  getPosts();
  