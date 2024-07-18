export class UserService {
  sayHi() {
    console.log('Hiiii!');
  }
}

export class ComponentOne {
  constructor(public user: UserService) {}
}

export class Injector {
  private _container = new Map();

  constructor(private _providers: any[] = []) {
    this._providers.forEach(service =>
      this._container.set(service, new service())
    );
  }

  get(service: any) {
    const serviceInstance = this._container.get(service);
    if (!serviceInstance) {
      throw Error('No Provider Found');
    }
    return serviceInstance;
  }
}

// const injector = new Injector([UserService]);
// const component = new ComponentOne(injector.get(UserService));
// component.user.sayHi();
