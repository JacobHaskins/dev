/*************
 * Anagrams.js
 * by Jacob L. Haskins
 * July 7, 2020
 * Copyright (c) 2020.  All Rights Reserved.
**************/

console.log('Hello! The Anagram Counter counts how many anagrams for each string in the query are in the dictionary.');

function sortChars(word) {
    if(typeof word !== 'string') {
        return '';
    }
    return word.split('').sort().join('');
}

function anagramsCounter(dictionary, query) {
    dictionary = dictionary || [];
    query = query || [];

    let dictionaryCounts = {};
    dictionary.forEach(entry => {
        let sortedEntry = sortChars(entry); 
        if(!dictionaryCounts[sortedEntry]) {
            dictionaryCounts[sortedEntry] = 0;
        }
        dictionaryCounts[sortedEntry]++;
    });

    let results = [];
    query.forEach(q => {
        if(dictionaryCounts[sortChars(q)]) {
            results.push(dictionaryCounts[sortChars(q)]);
        } else {
            results.push(0);
        }
    });

    return results;
}

//test cases
function expectToEqual(testName, expected, actual) {
    if(expected.length !== actual.length 
            || JSON.stringify(expected) !== JSON.stringify(actual)) {
        console.log(testName + ': FAIL\nexpected: ' + expected + '\nactual: ' + actual);
    } else {
        console.log(testName + ': PASS');
    }
}

expectToEqual('T - empty query', [], anagramsCounter(['bear', 'bare', 'beets'], []));
expectToEqual('T - matching query', [2], anagramsCounter(['bear', 'bare', 'beets'], ['brae']));
expectToEqual('T - non-matching query', [0], anagramsCounter(['bear', 'bare', 'beets'], ['xyz']));
expectToEqual('T - matching and non-matching query', [2, 0], anagramsCounter(['bear', 'bare', 'beets'], ['brae', 'xyz']));
expectToEqual('T - bad query', [0], anagramsCounter(['bear', 'bare', 'beets'], [3]));