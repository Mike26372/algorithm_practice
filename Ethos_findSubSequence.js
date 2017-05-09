function findSubsequence(sequence, subSequence, sequenceIndex = 0, subSequenceIndex = 0) {
  let currentSequenceLetter = sequence[sequenceIndex];
  let currentSubSequenceLetter = subSequence[subSequenceIndex];

  if (subSequenceIndex === subSequence.length) {
    return true;
  }

  if (sequenceIndex === sequence.length) {
    return false;
  }

  if (currentSequenceLetter === currentSubSequenceLetter) {
    return findSubsequence(sequence, subSequence, sequenceIndex + 1, subSequenceIndex + 1);
  }

  if (currentSequenceLetter !== currentSubSequenceLetter) {
    return findSubsequence(sequence, subSequence, sequenceIndex + 1, subSequenceIndex);
  }
}

var tests = [
  ['programming', 'pin'],
  ['least', 'steal'],
];

tests.forEach(test => {
  console.log(findSubsequence.apply(this, test));
});