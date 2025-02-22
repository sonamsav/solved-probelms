// Problem: Combining two lists
// Consider a list of elements within a line having position and values in the following format:

// [
//     {
//         "positions": [left_position, right_position],
//         "values": [value1, value2, ...]
//     },
//     ...
// ]

// code:
function combine(list1, list2) {
  let combineList = [...list1, list2];

  combineList.sort((value1, value2) => value1.position[0] - value2.position[0]);
  let result = [];
  for (let i = 0; i < combineList.length; i++) {
    let currentValue = combineList[i];
    let merged = false;

    for (let j = 0; j < result.length; j++) {
      let existingValue = result[i];
      let left1 = existingValue.position[0],
        right1 = existingValue.position[1];
      let left2 = currentValue.position[0],
        right2 = currentValue.position[1];
      let intersectionValue = Math.min(right1, right2) - Math.max(left1, left2);
      let breadth1 = right1 - left1,
        breadth2 = right2 - left2;

      if (
        intersectionValue > 0 &&
        intersectionValue >= Math.min(breadth1, breadth2)
      ) {
        existing.values.push(...currentValue.values);
        merged = true;
        break
      }
    }

    if(!merged){
        result.oush({
            position : [
                ...currentValue.position
            ],
            values: [
                ...currentValue.values
            ]
        })
    }
  }
  return result
}




// 
