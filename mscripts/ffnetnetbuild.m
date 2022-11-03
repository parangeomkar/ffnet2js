% data
inputs = -2*pi:0.01:2*pi;
targets = sin(inputs);

% build & train a net
ffnet = feedforwardnet([3,4,2]);
[ffnet,~] = train(ffnet,inputs,targets);

% inferencing
%out1 = ffnet(-10:0.001:10);

% export net to json
fid1=fopen('ffnet.json','w');
encodedJSON = jsonencode(ffnet); 
fprintf(fid1, encodedJSON); 
fclose('all');

