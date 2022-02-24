

class Validations {

  isParamEmpty(param: any): boolean {
    return param === '' || param === undefined || param === null;
  }

  isNotParamEmpty(param: any): boolean {
    return param !== '' && param !== undefined && param !== null;
  }
}

const validations = new Validations();

export { validations }