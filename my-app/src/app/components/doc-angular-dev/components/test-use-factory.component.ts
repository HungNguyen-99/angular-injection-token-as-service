import { Component, inject, OnInit } from "@angular/core";
import { Logger, TestUseFactoryService, UserService } from "../services/test-use-factory.service";

const heroServiceFactory: any = (logger: Logger, userService: UserService) =>
    new TestUseFactoryService(logger, userService.user.isAuthorized);

const heroServiceProvider = {
    provide: TestUseFactoryService,
    useFactory: heroServiceFactory,
    deps: [Logger, UserService]
  }; 

@Component({
    selector: 'ex-di-use-factory',
    template: ` <p>Example DI Use Factory</p> `,
    standalone: true,
    providers: [Logger, UserService, heroServiceProvider]
})
export class TestUseFactoryComponent implements OnInit {
    private testUseFactoryService = inject(TestUseFactoryService);    

    ngOnInit(): void {
        this.testUseFactoryService.getHeros().forEach((hero: any) => console.log(hero.name));
    }
}
