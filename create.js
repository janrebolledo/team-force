function uploadImage() {
  const ref = firebase.storage().ref();
  const file = document.querySelector("#postImage").files[0];
  const name = +new Date() + "-" + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      console.log(url);
      document.querySelector("#postImage").src = url;
    })
    .catch(console.error);
}

document.querySelector("#submitBtn").addEventListener("click", function() {
    let postAuthor = document.querySelector("#author").value;
    let postTitle = document.querySelector("#postTitle").value;
    let postContent = document.querySelector("#postContent").value;
    let postDate = document.querySelector("#postDate").value;
    let postImage = document.querySelector("#postImage").src;
  
    if (
      postAuthor === "" ||
      postTitle === "" ||
      postContent === "" ||
      postDate === "" ||
      postImage === ""
    ) {
      alert("Fields Empty");
    } else {
      db.collection("posts")
        .doc()
        .set({
          author: postAuthor,
          createdAt: postDate,
          postName: postTitle,
          postContent: postContent,
          postImage: postImage
        });
    }
  });