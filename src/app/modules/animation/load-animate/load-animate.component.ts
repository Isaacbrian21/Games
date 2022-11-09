import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AnimateService } from '../service/animate.service';

@Component({
  selector: 'app-load-animate',
  templateUrl: './load-animate.component.html',
  styleUrls: ['./load-animate.component.scss']
})
export class LoadAnimateComponent implements OnInit {

  showSpinner = false;

  constructor(private animateService: AnimateService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.animateService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = (status === 'start');
      this.cdRef.detectChanges();
    });
  }

}
