const fs = require("fs");

const addPerson = (id, fname, lname, age, city) => {
  const allData = loadData();

    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      age,
      city: city,
    });

    saveAllData(allData);

};




/////////////////////////////////////////////////////////////////////////////////






const loadData = () => {
  try {
    const dataJson = fs.readFileSync("data.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};





/////////////////////////////////////////////////////////////////////////////////







const saveAllData = (allData) => {
  const saveAllDataJson = JSON.stringify(allData);
  fs.writeFileSync("data.json", saveAllDataJson);
};




/////////////////////////////////////////////////////////////////////////////////







// Delete :

const deletePerson = (id) => {
  const allData = loadData();

  const datatokeep = allData.filter((obj) => {
    return obj.id !== id;
  });
  saveAllData(datatokeep);
};




/////////////////////////////////////////////////////////////////////////////////






//read data

const readData = (id) => {
  const allData = loadData();

  const itemNeeded = allData.find((obj) => {
    return obj.id == id;
  });
  console.log(itemNeeded);

  if (itemNeeded) {
    console.log(itemNeeded.fname);
  } else {
    console.log("id needed not found");
  }
};





/////////////////////////////////////////////////////////////////////////////////







// list data

const listData = () => {
  const allData = loadData();

  allData.forEach((obj) => {
    console.log(obj.fname, obj.lname);
  });
};

module.exports = {
  addPerson,
  deletePerson,
  readData,
  listData,
};
