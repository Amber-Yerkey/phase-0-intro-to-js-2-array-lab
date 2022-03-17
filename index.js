const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}


function destructivelyRemoveFirstCat(){
    cats.shift()
}


function appendCat(name){
    const copyCats = [...cats, name]
    return copyCats
}

function prependCat(name){
    const copyCats = [name, ...cats]
    return copyCats
}

function removeLastCat(){
    const copyCats = cats.slice(0,-1)
    return copyCats
}

function removeFirstCat(){
    const copyCats = cats.slice(1,4)
    return copyCats
}



describe('appendCat(name)', function () {
    it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
      expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('prependCat(name)', function () {
    it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
      expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('removeLastCat()', function () {
    it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
      expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);

      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });