import { Component, inject } from "@angular/core";
import { StructureTemplateDiService } from "../services/structure-template-di.service";

@Component({
    selector: 'app-structure-template-di',
    template: `
        <p>structure template di</p>
    `,
    standalone: true,
    viewProviders: [StructureTemplateDiService]
})
export class StructureTemplateDiComponent {
    private structureTemplateDiService = inject(StructureTemplateDiService);

    ngOnInit(): void {
        this.structureTemplateDiService.log();
    }
}