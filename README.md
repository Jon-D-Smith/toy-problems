As I continue to practice JavaScript, I will update this repository to host my methods for common problems. The problem sets may be "toy problems" from potential interviews, or data structures and algorithms. This is by no means meant to be a comprehensive list of all available "toy problems" or data structures/algorithms.


To run any of these programs locally, you will need to clone them to your device, open your terminal (to the parent folder) and run "node filename.js".

bubbleSort.js:

The bubble sort algorithm can be used to sort through an array. In my version, I am havin the array sort in the order of smallest to greatest. The bubblesort algorithm achieves this by looping through each position in the array, then comparing it to the characters in its position, and the next position, swapping when necessary.

The con to the bubble sort method, is that it will have at least one unnecessary loop, causing it to be effective, but not optimal.

reverse-arr.js:

This method reverses an array's items, without using the ".reverse()" method. It does this by taking each item, from the back, then pushing it into a new array.

The con to the method i used, is that it runs through the array backwards leading to more confusing code.

reverse-str.js:

This method reverses strings (Letters, punctuations, and spaces) without using the built in ".reverse()" method. It does this by looping through a string, then "unshifting" each letter to a new arr variable. Once every letter is set, I join them back into a full string.


*Running this program locally will require node.js to be installed to your machine.