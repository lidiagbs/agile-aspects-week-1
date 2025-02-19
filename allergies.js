//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    this.allergyScoring = {
      eggs: 1,
      peanuts: 2,
      shellfish: 4,
      strawberries: 8,
      tomatoes: 16,
      chocolate: 32,
      pollen: 64,
      cats: 128,
    };

    this.score = score;
  }

  list() {
    return Object.keys(this.allergyScoring).filter(allergy => this.allergicTo(allergy));
  }

  allergicTo(item) {
    const allergyScore = this.allergyScoring[item];
    return (allergyScore !== undefined) && ((this.score & allergyScore) !== 0);
 }
}
