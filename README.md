COMMANDS

1. $ git init
2. $ npm init -y
3. $ npm install --save-dev
4. $ npm install -D watchify concurrently
5. add node_modules to .gitignore
6. Edit package.json as follows:
"scripts": {
    "dev": "concurrently \"watchify ./static/js/index.js -o bundle.js\" \"python -m http.server\""
}
7. Edit your index.html to add the following: <script defer src="bundle.js"></script>
8. npm run dev 


