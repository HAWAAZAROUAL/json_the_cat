const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, description) => {

      // no error expected in this scenario
      assert.equal(error, null);

      const expectedDescription = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDescription, description.trim());

      done();
    });
  });

    it('returns an error when the breed name is invalid', (done) => {
      fetchBreedDescription('invalidBreed', (error, description) => {

        assert.equal(error, "The breed you searched for was not found");
        assert.equal(description, null);

        done();
      });
    });

});