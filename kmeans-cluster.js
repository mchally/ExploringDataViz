var clusterfck = require("clusterfck");

var specs = [{"encoding":{"y":{"field":"Cylinders","type":"ordinal","primitiveType":"integer","_any":false,"$$hashKey":"object:27"},"x":{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"}},"config":{},"mark":"point","data":{"url":"data/cars.json"},"_info":{"score":0.7524,"features":[{"reason":"x=count_*,Q [ ]","score":1},{"reason":"y=Cylinders,O [ ]","score":0.99},{"reason":"OxQ plot","score":0.8},{"reason":"mark=point","score":0.95}]}},{"encoding":{"y":{"field":"Cylinders","type":"ordinal","primitiveType":"integer","_any":false,"$$hashKey":"object:27"},"x":{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"}},"config":{},"mark":"bar","data":{"url":"data/cars.json"},"_info":{"score":0.76824,"features":[{"reason":"x=count_*,Q [ ]","score":1},{"reason":"y=Cylinders,O [ ]","score":0.99},{"reason":"OxQ plot","score":0.8},{"reason":"mark=bar","score":0.97}]}},{"encoding":{"row":{"field":"Cylinders","type":"ordinal","primitiveType":"integer","_any":false,"$$hashKey":"object:27"},"text":{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"},"color":{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"}},"config":{},"mark":"text","data":{"url":"data/cars.json"},"_info":{"score":0.4,"features":[{"reason":"row=Cylinders,O [ ]","score":1},{"reason":"color=count_*,Q [ ] | text=count_*,Q [ ]","score":0.5},{"reason":"mark=text","score":0.8}]}},{"encoding":{"column":{"field":"Cylinders","type":"ordinal","primitiveType":"integer","_any":false,"$$hashKey":"object:27"},"text":{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"},"color":{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"}},"config":{},"mark":"text","data":{"url":"data/cars.json"},"_info":{"score":0.4,"features":[{"reason":"column=Cylinders,O [ ]","score":1},{"reason":"color=count_*,Q [ ] | text=count_*,Q [ ]","score":0.5},{"reason":"mark=text","score":0.8}]}}];

//clusterfck hcluster = var clusters = [[{"fieldSetKey":"Cylinders,O|count_*,Q","fieldSet":[{"field":"Cylinders","type":"ordinal","primitiveType":"integer","_any":false,"$$hashKey":"object:27"},{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"}],"vlSpec":{"encoding":{"y":{"field":"Cylinders","type":"ordinal","primitiveType":"integer","_any":false,"$$hashKey":"object:27"},"x":{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"}},"config":{},"mark":"bar","data":{"url":"data/cars.json"},"_info":{"score":0.76824,"features":[{"reason":"x=count_*,Q [ ]","score":1},{"reason":"y=Cylinders,O [ ]","score":0.99},{"reason":"OxQ plot","score":0.8},{"reason":"mark=bar","score":0.97}]}},"shorthand":"mark=bar|x=count_*,Q|y=Cylinders,O"},{"fieldSetKey":"Cylinders,O|count_*,Q","fieldSet":[{"field":"Cylinders","type":"ordinal","primitiveType":"integer","_any":false,"$$hashKey":"object:27"},{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"}],"vlSpec":{"encoding":{"y":{"field":"Cylinders","type":"ordinal","primitiveType":"integer","_any":false,"$$hashKey":"object:27"},"x":{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"}},"config":{},"mark":"point","data":{"url":"data/cars.json"},"_info":{"score":0.7524,"features":[{"reason":"x=count_*,Q [ ]","score":1},{"reason":"y=Cylinders,O [ ]","score":0.99},{"reason":"OxQ plot","score":0.8},{"reason":"mark=point","score":0.95}]}},"shorthand":"mark=point|x=count_*,Q|y=Cylinders,O"}],[{"fieldSetKey":"Cylinders,O|count_*,Q","fieldSet":[{"field":"Cylinders","type":"ordinal","primitiveType":"integer","_any":false,"$$hashKey":"object:27"},{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"}],"vlSpec":{"encoding":{"row":{"field":"Cylinders","type":"ordinal","primitiveType":"integer","_any":false,"$$hashKey":"object:27"},"text":{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"},"color":{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"}},"config":{},"mark":"text","data":{"url":"data/cars.json"},"_info":{"score":0.4,"features":[{"reason":"row=Cylinders,O [ ]","score":1},{"reason":"color=count_*,Q [ ] | text=count_*,Q [ ]","score":0.5},{"reason":"mark=text","score":0.8}]}},"shorthand":"mark=text|row=Cylinders,O|color=count_*,Q|text=count_*,Q"},{"fieldSetKey":"Cylinders,O|count_*,Q","fieldSet":[{"field":"Cylinders","type":"ordinal","primitiveType":"integer","_any":false,"$$hashKey":"object:27"},{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"}],"vlSpec":{"encoding":{"column":{"field":"Cylinders","type":"ordinal","primitiveType":"integer","_any":false,"$$hashKey":"object:27"},"text":{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"},"color":{"field":"*","aggregate":"count","type":"quantitative","title":"Number of Records"}},"config":{},"mark":"text","data":{"url":"data/cars.json"},"_info":{"score":0.4,"features":[{"reason":"column=Cylinders,O [ ]","score":1},{"reason":"color=count_*,Q [ ] | text=count_*,Q [ ]","score":0.5},{"reason":"mark=text","score":0.8}]}},"shorthand":"mark=text|column=Cylinders,O|color=count_*,Q|text=count_*,Q"}]]

var colors = [
   [20, 20, 80],
   [22, 22, 90],
   [250, 255, 253],
   [0, 30, 70],
   [200, 0, 23],
   [100, 54, 100],
   [255, 13, 8]
];

//cluster
//default #ofclusters = Math.sqrt(n/2) n is #ofvectors
var clusters = clusterfck.kmeans(colors,3);
console.log(clusters)

// //Classifcation
// var kmeans = new clusterfck.Kmeans();

// //cluster
// var clusters = kmeans.cluster(colors,3);

// //cluster index
// var clusterIndex = kmeans.classify([0,0,225]);

// //Serialization
// var json = kmeans.toJSON();

// //Deserialize centroids from json
// kmeans = kmeans.fromJSON(json);

// //cluster index
// var clusterIndex = kmeans.classify([0,0,255]);

// //Initialize with existing centroids
// var centroids = [[]]; //from somewhere

// //Initialize constructor w/ centroids
// var kmeans = new clusterfck.Kmeans(centroids);

// //cluster index
// var clusterIndex = kmeans.classify([0,0,255]);

// //access
// var clusters = kmeans.cluster(colors,3);
// var centroids = kmeans.centroids;
// var k = centroids.length;



