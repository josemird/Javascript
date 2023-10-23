import * as desctructure from "./destructuring";

describe("Arryas Destructuring", () => {
  it("should gets all tecnologies", () => {
    expect(desctructure.getAllTechnologies()[0]).toBe("HTML");
    expect(desctructure.getAllTechnologies()[1]).toBe("CSS");
    expect(desctructure.getAllTechnologies()[2]).toBe("JS");
    expect(desctructure.getAllTechnologies()[3]).toBe("React");
  });
  it("should gets all values", () => {
    expect(desctructure.getAllValues()[0]).toBe(98);
    expect(desctructure.getAllValues()[1]).toBe(85);
    expect(desctructure.getAllValues()[2]).toBe(90);
    expect(desctructure.getAllValues()[3]).toBe(95);
  });
  it("should gets only React", () => {
    expect(desctructure.getReact()).toBe("React");
  });
  it("should gets only HTML and 85", () => {
    expect(desctructure.getCSSAnd85()[0]).toBe("CSS");
    expect(desctructure.getCSSAnd85()[1]).toBe(85);
  });
});

describe("Objects Destructuring", () => {
  it("should gets the title of first books", () => {
    expect(desctructure.getTitleFirstBook()).toBe(
      "La vida del lazarillo de Tormes"
    );
  });
  it("should gets the published of second books", () => {
    expect(desctructure.getPublishedSecondBook()).toBe("1984");
  });
  it("should gets the title and author of last books", () => {
    expect(desctructure.getAuthorsAndTitleLastBook()[0]).toBe("Beowulf");
    expect(desctructure.getAuthorsAndTitleLastBook()[1]).toBe("Anonymous");
  });
});
