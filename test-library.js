function testResult(method, expected, methodName="it") {
  if (method !== expected) {
    console.warn("X Result: " + method + " Expected: " + expected);
  } else {
    console.info("√ " + methodName + " = " + expected);
  }
}

function testExists(obj, objName="it") {
  if (obj) {
    console.info("√ " + objName + " Exists");
  } else {
    console.warn("X " + objName + " Does not exist");
  }
}

function testTypeOfObject(obj, type, objName="it") {
  if (type == 'array') {
    if (Array.isArray(obj)) {
      console.info("√ " + objName + " is array");
    } else {
      console.warn("X " + objName + " is not array");
    }
  } else if (type == 'string') {
    if (typeof obj === 'string') {
      console.info("√ " + objName + " is string");
    } else {
      console.warn("X " + objName + " is not string");
    }
  }
}

function testArrayLength(obj, expected, objName="it") {
  if (obj.length == expected) {
    console.info("√ " + objName + " is length " + expected);
  } else {
    console.warn("X " + objName + " is not length " + expected);
  }
}
