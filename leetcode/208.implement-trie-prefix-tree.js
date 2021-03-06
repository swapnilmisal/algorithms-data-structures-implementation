/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.map = new Map();
  this.end = false;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let itr = this;
  for (let i = 0; i < word.length; i++) {
    if (!itr.map.has(word[i])) itr.map.set(word[i], new Trie());
    itr = itr.map.get(word[i]);
  }
  itr.end = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let itr = this;
  for (let i = 0; i < word.length; i++) {
    if (!itr.map.has(word[i])) return false;
    itr = itr.map.get(word[i]);
  }
  return itr.end;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let itr = this;
  for (let i = 0; i < prefix.length; i++)
    if (!itr.map.has(prefix[i])) return false;
    else itr = itr.map.get(prefix[i]);
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
