import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { NaPipe } from '../../na.pipe';
import { AlertComponent } from '../reusable-component/alert/alert.component';


@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,CurrencyPipe,DecimalPipe,PercentPipe,JsonPipe,AsyncPipe,NaPipe,AlertComponent],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
firstname:string = "aditya shinde as a developer";
currentDate:Date = new Date();
price: number = 2500.5;
value: number = 45.6789;
profit: number = 0.4567;
student:any = {
  name:'Aaditya',
  city:'Mumbai',
  state:'',
  empid:8900};
  currentTime!: Observable<Date>;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(platformId)) {
      this.currentTime = interval(1000).pipe(
        map(() => new Date())
      );
    }
  }
}
