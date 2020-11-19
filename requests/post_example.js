var settings = {
  "url": "https://zq2ov74bee.execute-api.us-east-1.amazonaws.com/test/schools",
  "method": "POST",
  "Access-Control-Allow-Origin":"*",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({"type":"cat","price":44.11}),
};

$.ajax(settings).done(function (response) {
  console.log(response.data[0].type);
});




echo "# project-sub-three.github.io" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/project-sub-three/project-sub-three.github.io.git
git push -u origin main



git config --global user.name project-sub-three

git config --global user.email project.sub.three@gmail.com
