/**
 * Imagine that we're building a social network. Write a SocialGraph class with two methods. 
 * The addFollow method records that user1 follows user2. 
 * The follows method checks for whether user1 follows user2, returning a boolean. 
 * Create an empty Map in the constructor, then update it whenever addFollow is called.
 * 
 * (Note 1: You can use arrays' includes method to check for whether a user is in another user's follow list.)
 * 
 * (Note 2: unlike a map of train connections, these following relationships are uni-directional. 
 * If Amir follows Betty, that doesn't necessarily mean that Betty follows Amir!)
 * 
 * (Note 3: Sometimes follows will be called with a user who follows no one, so they won't have an entry in the map. 
 * You'll need to handle that case and return false.)
*/

class SocialGraph {
  constructor() {
    this.map = new Map();
  }

  addFollow(user1, user2) {
    if (!this.map.has(user1)) {
      this.map.set(user1, []);
    }

    if (!this.map.has(user2)) {
      this.map.set(user2, []);
    }

    const user2Followers = this.map.get(user2);

    if (!user2Followers.includes(user1)) {
      user2Followers.push(user1);
    }
  }

  follows(user1, user2) {
    const user2Followers = this.map.get(user2);

    if (!user2Followers) {
      return false;
    }

    if (user2Followers.includes(user1)) {
      return true;
    }

    return false;
  }
}
const amir = { name: 'Amir' }
const betty = { name: 'Betty' }
const cindy = { name: 'Cindy' }

const socialGraph = new SocialGraph()
socialGraph.addFollow(amir, betty)
socialGraph.addFollow(amir, cindy)
socialGraph.addFollow(betty, cindy);

console.log([
  socialGraph.follows(amir, betty),
  socialGraph.follows(amir, cindy),
  socialGraph.follows(betty, amir),
  socialGraph.follows(betty, cindy),
  socialGraph.follows(cindy, amir),
  socialGraph.follows(cindy, betty),
]);