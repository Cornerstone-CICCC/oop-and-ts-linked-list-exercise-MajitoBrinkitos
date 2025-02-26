// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
  // your code here
  if(list === null || value <= 0){
    return list;
  }

  let current = list;
  let prev = null;
  let count = 0;

  //Traverse the linked list
  while(current != null){
    count++;

    //remove node if count multiple of value
    if(count % value === 0){
      //ignore current node
      if(prev !== null){
        prev.next = current.next;
      }
      else {
        //in case the head node is removed
        list = current.next;
      }
    }
    else {
      //updating the list, in case a a node wasn't removed
      prev = current;
    }
    current = current.next;
  }
  return list;
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);


deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5