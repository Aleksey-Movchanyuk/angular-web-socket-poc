# Log
```
ng new angular-web-socket-app
cd .\angular-web-socket-app\
npm install --save @angular/material @angular/cdk
npm install --save hammerjs
npm install --save @angular/flex-layout 
npm install --save rxjs-compat
```

# Deploy on the Github Pages
```
cd .\frontend\angular-web-socket-app\clear

ng add angular-cli-ghpages
ng build --prod --base-href "https://aleksey-movchanyuk.github.io/angular-web-socket-poc"
npx angular-cli-ghpages
```