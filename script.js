//your JS code here. If required.
const student = {
  name: 'John Smith'
};

// Add getKeys() method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Test getKeys() method
console.log(student.getKeys()); // Output: ['name']