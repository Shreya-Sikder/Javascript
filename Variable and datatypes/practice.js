const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270
};
console.log(product);

const profile = {
    username: "@shraddha khapra",
    isFollowed: true,
    followers: 569000,
    following: 4,

};
console.log(typeof profile);//object
console.log(typeof profile["followers"]);//number
console.log(typeof profile["username"]);//string