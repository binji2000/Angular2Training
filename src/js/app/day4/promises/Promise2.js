const p1 = new Promise(resolve => setTimeout(() => resolve('a'),2000));
const p2 = new Promise(resolve => setTimeout(() => resolve('b'),4000));
const p3 = new Promise(resolve => setTimeout(() => resolve('b'),6000));
const p4 = new Promise(resolve => setTimeout(() => resolve('d'),8000));

p1.then( () => console.log('a was resolved'));
p2.then( () => console.log('b was resolved'));
p3.then( () => console.log('c was resolved'));
p4.then( () => console.log('d was resolved'));

Promise.all([p1,p2,p3,p4]).then( results => {
	console.log(results);
	console.log('all were resolved');
}).catch( err => {
	console.log("one failed");
	console.log(err);
})

fetch('http://svc.treeloop.com/products')
.then(res => res.json())
.then(results => console.dir(results));
