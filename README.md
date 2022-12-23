# Matlab trained neural network for web
ffnet2js converts Matlab feed-forward neural network into a JavaScript equivalent to be deployed on web.

## Run Locally

#### Clone the project
```bash
  git clone https://github.com/parangeomkar/ffnet2js.git
```

#### Go to the project directory

```bash
  cd ffnet2js
```

#### Train MATLAB ffnet
```bash
x = -2*pi:0.01:2*pi;
targets = sin(x);

ffnet = feedforwardnet([3,4,2]);
[ffnet,~] = train(ffnet,inputs,targets);
```

#### Export MATLAB ffnet to JSON
```bash
outFile = fopen('ffnet.json','w');
encodedJSON = jsonencode(ffnet); 
fprintf(outFile, encodedJSON); 
fclose('all');
```

#### Import ffnet2js and json
```bash
const ff2js = require("ffnet2js");
const ffnetData = require("ffnet.json");
```


#### Create an ANN instance and run prediction
```bash
let ann = new ff2js(ffnetData);
let x = Math.PI/4;
const output = ann.predict(x);
```


#### Run 
```bash
  npm run start
```
