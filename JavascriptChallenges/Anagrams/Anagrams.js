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
let expect = {
    to: {
        equal: function (expected, actual) {
            if(expected.length !== actual.length 
                    || JSON.stringify(expected) !== JSON.stringify(actual)) {
                console.log('\tFAIL\nexpected: ' + expected + '\nactual: ' + actual);
            } else {
                console.log('\tPASS');
            }
        }
    }
}

let it = function (label, callback) {
    console.log(label + ':');
    callback();
}

it('should test an empty query', () => {
    expect.to.equal([], anagramsCounter(['bear', 'bare', 'beets'], []));
});

it('should test an matching query', () => {
    expect.to.equal([2], anagramsCounter(['bear', 'bare', 'beets'], ['brae']));
});

it('should test an non-matching query', () => {
    expect.to.equal([0], anagramsCounter(['bear', 'bare', 'beets'], ['xyz']));
});

it('should test an matching and non-matching query', () => {
    expect.to.equal([2, 0], anagramsCounter(['bear', 'bare', 'beets'], ['brae', 'xyz']));
});

it('should test a bad query', () => {
    expect.to.equal([0], anagramsCounter(['bear', 'bare', 'beets'], [3]));
});

it('should test non-array args, with match', () => {
    expect.to.equal([1], anagramsCounter('bare', 'brae'));
});

it('should test non-array args, without match', () => {
    expect.to.equal([0], anagramsCounter('bare', 'xyz'));
});
