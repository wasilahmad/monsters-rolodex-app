# monsters-rolodex-app

1. create new repository e.g. monsters-rolodex-app

2. copy generated SSH link 
   e.g. git@github.com:wasilahmad/monsters-rolodex-app.git
   
3. goto terminal and run the command 
   $ git remote add origin git@github.com:wasilahmad/monsters-rolodex-app.git
   
4. install gh-pages package
   $ yarn add gh-pages
   
5. add following things in package.json file
{
  "name": "monsters-rolodex",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://github.com/wasilahmad/monsters-rolodex",
  ...
    "scripts": {
    ...
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
  ...
}
or 
"scripts": {
	...
	"predeploy": "npm run build",
	"deploy": "gh-pages -d build"
}

6. back to the terminal
   $ yarn deploy / npm run deploy
   
  if you are getting following error ...
  
	$ gh-pages -d build
	Cloning into 'node_modules\gh-pages\.cache\git@github.com!wasilahmad!monsters-rolodex-app.git'...
	Host key verification failed.
	fatal: Could not read from remote repository.
	
	Then you need to generate a key by following steps given in below URL)
	https://help.github.com/en/enterprise/2.15/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
	After that you need to check a github connection
	
  https://help.github.com/en/github/authenticating-to-github/testing-your-ssh-connection
    
7. once you get following message then follow step 8
	...
	$ gh-pages -d build
	Published
	Done in 21.45s.
  
8. git add -A 
9. git commit -m "adding files for github pages"
10. git push origin master
