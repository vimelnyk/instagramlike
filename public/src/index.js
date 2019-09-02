fetch("http://localhost:3004/posts")
  .then(function(response) {
    return response.json();
  })
  .then(function(obj) {
    console.log(JSON.stringify(obj));
    console.log(obj);
    for (let j = 0; j < obj.length; j++) {
      console.log(obj[j].image);
    }
  });
