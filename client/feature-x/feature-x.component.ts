import { Component, OnInit } from '@angular/core';
import { FeatureXService } from "./feature-x.service";

@Component({
    selector: 'feature-x',
    template: `
<h3>I am the feature-x component</h3>
<p>and i am loading data from the feature x service!</p>
<p>{{ dataFromServer }}</p>
`,
    providers: [FeatureXService]
})
export class FeatureXComponent implements OnInit {
    dataFromServer: string;

    constructor(private featureXService: FeatureXService) {
        this.dataFromServer = "Loading...";
    }

    public ngOnInit(): void {
        this.dataFromServer = this.featureXService.getData();
    }
}