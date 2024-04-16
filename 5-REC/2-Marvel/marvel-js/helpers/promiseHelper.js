import { Character } from "../classes/Character";

export const parserToCharacterClass = (literalObjectCharacter) => { //hacer una promesa que devuelva la clase
    return new Promise((resolve, reject) => {
        if (literalObjectCharacter !== null && literalObjectCharacter !== undefined) {
            let character = new Character(
                literalObjectCharacter.id,
                literalObjectCharacter.name,
                literalObjectCharacter.thumbnail.extension,
                literalObjectCharacter.thumbnail.path
            )
            character.description = literalObjectCharacter.description 
            resolve(character);    
        }else{
            reject("Character Not Found")
        }
    });
}