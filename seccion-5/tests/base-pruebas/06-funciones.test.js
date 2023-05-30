import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("06 funciones", () => {
  test("Debe retornar un objeto", () => {
    const clave = "Super-Heroe", edad = 30;

    const objectTest = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const fnUsContext = usContext({ clave, edad });

    expect(objectTest).toEqual(fnUsContext);






    // const obj = {
    //     nombre: 'Esteban',
    //     rango: 'Capitán',
    //     calve:'Capitan America',
    //     edad:39
    // }

    // const character = usContext(obj)

    // const {clave, nombre, edad, rango} = obj

    // expect(character).toEqual({
    //     nombre,
    //     grado: rango,
    //     nombreClave: clave,
    //     anios: edad,
    //     latlng: {
    //         lat: 14.1232,
    //         lng: -12.3232
    //     }
    // })
  });
});
