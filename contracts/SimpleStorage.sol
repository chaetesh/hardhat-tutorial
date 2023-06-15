// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6; 

contract SimpleStorage {
    // boolean, uint(unsigned int), int, address(ethereum wallet address), bytes
    address myAddress = 0xB8D8C74117c89108aba1839fB51cD5A0431b0b6e;
    bool hasFavNum = true;
    uint public favNum = 5;
    int favInt = -5;
    string favText = "Five";

    // mapping is key to value pairs
    mapping (string=>uint) public nameToFavoriateNumber;

    // People public person = People({favNum:5,name:"Aetesh"});
    People[] public people; // Dynamic Array

    struct People{
        uint favNum;
        string name;
    }

    // Function
    function store(uint newFavNum) public virtual { // As it is virtual it can be override in childs class
        favNum = newFavNum;
        // Gas cost increases as we are calling inside a transacation
        // retrieve();
    }

    // This is a view function, it dosen't spend gas as we are just reading the data
    // view and pure functions cannot modify the values. Just Read-only
    function retrieve() public view returns(uint){
        return favNum;
    }
    function retrieveName(string memory Name) public view returns(uint){
        return nameToFavoriateNumber[Name];
    }
    
    // Function to add into struct Array
    // calldata, memory, storage are important storage types in Solidity.
    function addPerson(string memory _name,uint _favNum) public{
        // no need to add data location to int, but string is a array we need to add
        people.push(People(_favNum,_name));
        nameToFavoriateNumber[_name] = _favNum;
    }
} 