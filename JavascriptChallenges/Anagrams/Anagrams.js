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

    if(!Array.isArray(dictionary)) {
        dictionary = [dictionary];
    }

    if(!Array.isArray(query)) {
        query = [query];
    }

    let dictionaryCounts = dictionary.reduce((hashmap, entry) => ({
        ...hashmap,
        [sortChars(entry)]: (hashmap[sortChars(entry)] || 0) + 1
    }), {});

    return query.map(q => dictionaryCounts[sortChars(q)] || 0);
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
expectToEqual('T - non-array args, with match', [1], anagramsCounter('bare', 'brae'));
expectToEqual('T - non-array args, without match', [0], anagramsCounter('bare', 'xyz'));